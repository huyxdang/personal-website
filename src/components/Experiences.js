import React, { useRef, useEffect, useState } from "react";
import GreenLink from "./GreenLink";

function Experiences() {
    const expRef = useRef(null);
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setVisible(entry.isIntersecting),
        { threshold: 0.2 }
      );
      if (expRef.current) observer.observe(expRef.current);
      return () => observer.disconnect();
    }, []);
  
    return (
      <section
        id="experiences"
        ref={expRef}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          minHeight: "80vh",
          backgroundColor: "#111",
          color: "#ccc",
          fontFamily: "monospace",
          padding: "3rem",
          margin: 0,
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ color: "#eaeaea", fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
            <span style={{ color: "#7CFC7C" }}>.</span>experiences()
          </h2>
          <hr style={{ height: "1px", backgroundColor: "#333", border: "none", marginBottom: "2rem" }} />
  
          <h2>ML AI software math research blah blah</h2>
        </div>
      </section>
    );
  }

  export default Experiences;