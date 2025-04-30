import React, { useRef, useState, useEffect } from "react";

function About() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="about"
      style={{
        width: "100%",
        minHeight: "80vh",
        backgroundColor: "#f9f6f1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        fontFamily: "'Lexend Deca', sans-serif",
        color: "#3b2f2f",
      }}
    >
      {/* Main Content Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Top Part: Image and Text */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "flex-start",
            justifyContent: "center",
            width: "100%",
            gap: isMobile ? "1.5rem" : "2rem", // Reduced gap for better connection
            textAlign: isMobile ? "center" : "left",
          }}
        >
          {/* Left: Image */}
          <div style={{ flex: isMobile ? "unset" : "0.8" }}>
            <img
              src={`${process.env.PUBLIC_URL}/headshot.png`}
              alt="Huy Dang"
              style={{
                width: isMobile ? "60%" : "73%", // Increased image size on desktop
                borderRadius: "50px",
                objectFit: "cover",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)", // Subtle shadow for depth
              }}
            />
          </div>

          {/* Right: Text */}
          <div style={{ flex: isMobile ? "unset" : "1.2"}}>
            <h1 style={{ fontSize: isMobile ? "1.75rem" : "2.5rem", marginBottom: "0.75rem", fontWeight: 600 }}>
              Huy X. Dang{" "}
              <span style={{ fontWeight: 100, fontSize: isMobile ? "1.75rem" : "2.5rem", color: "#999999" }}>
                #hwee
              </span>
            </h1>
            <h3 style={{ fontSize: "1.2rem", lineHeight: "1.5", fontWeight: 300, marginBottom: "1rem" }}>
              Bridging <span style={{textDecoration: "underline"}}>technology</span> and <span style={{textDecoration: "underline"}}>social impacts</span>.
            </h3>

            <h4 style={{ fontSize: "1rem", lineHeight: "1.4", fontWeight: 300, marginBottom: "1.5rem", color: "#333" }}>
            I’m passionate about connecting cutting-edge technology with real-world social impact. 
            My interests span AI Safety, Large Language Models, and World Models, with a particular focus on how these tools can drive innovation and improve lives in Vietnam. I believe in building technology not just because it’s possible—but because it’s meaningful.
            </h4>
            
            {/* Music Section */}
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              marginTop: "0.5rem",
              flexDirection: isMobile ? "column" : "row",
              gap: "0.5rem"
            }}>

              {/* Hidden native audio player */}
              <audio ref={audioRef}>
                <source src={`${process.env.PUBLIC_URL}/music/all_quiet.mp3`} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>

              {/* Custom play button */}
              <button 
                onClick={togglePlay}
                style={{
                  backgroundColor: "#f9f6f1",
                  border: "2px solid #3b2f2f",
                  color: "#3b2f2f",
                  fontFamily: "'Lexend Deca', sans-serif",
                  fontSize: "0.9rem",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "999px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  whiteSpace: "nowrap",
                }}
                onMouseOver={e => {
                  e.target.style.backgroundColor = "#f0ece6";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseOut={e => {
                  e.target.style.backgroundColor = "#f9f6f1";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                {isPlaying ? "⏸ Pause" : "▶ Play Jazz"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;