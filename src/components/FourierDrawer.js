// FourierDrawer.js
import React, { useRef, useState, useEffect } from "react";

function FourierDrawer() {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  // Record mouse movement while drawing
  const handleMouseDown = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setDrawing([{ x, y }]);
    setIsDrawing(true);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setDrawing((prev) => [...prev, { x, y }]);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    // TODO: Trigger Fourier transform here
  };

  // Draw user's stroke
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (drawing.length > 1) {
      ctx.beginPath();
      ctx.moveTo(drawing[0].x, drawing[0].y);
      for (let i = 1; i < drawing.length; i++) {
        ctx.lineTo(drawing[i].x, drawing[i].y);
      }
      ctx.strokeStyle = "lime";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }, [drawing]);

  return (
    <section
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "2rem",
        fontFamily: "monospace",
        textAlign: "center",
      }}
    >
      <h2>Draw something (one continuous line)</h2>
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        style={{
          backgroundColor: "#111",
          border: "1px solid #333",
          display: "block",
          margin: "1rem auto",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
      <p style={{ color: "#ccc" }}>
        This will soon animate your drawing using Fourier series magic ✨
      </p>
    </section>
  );
}

export default FourierDrawer;
