import React, { useRef, useState, useEffect } from "react";
import Container from "./Container";

function About() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(error => {
        console.error("Audio playback error:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle audio end event
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const handleAudioEnd = () => setIsPlaying(false);
    audio.addEventListener('ended', handleAudioEnd);
    
    return () => {
      audio.removeEventListener('ended', handleAudioEnd);
    };
  }, []);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Lexend Deca', sans-serif",
        color: "#3b2f2f",
        paddingTop: "6rem",
        paddingBottom: "3rem",
      }}
    >
      <Container>
        {/* Top Part: Image and Text */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "flex-start",
            justifyContent: "center",
            width: "100%",
            gap: isMobile ? "2rem" : "3rem",
            textAlign: isMobile ? "center" : "left",
            // outline: "1px solid red", // RED OUTLINE for debugging
          }}
        >
          {/* Left: Image */}
          <div 
            style={{ 
              flex: isMobile ? "unset" : "0.8",
              width: isMobile ? "100%" : "auto",
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-start"
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/headshot.png`}
              alt="Huy Dang"
              style={{
                width: isMobile ? (windowWidth < 480 ? "80%" : "60%") : "73%",
                borderRadius: "50px",
                objectFit: "cover",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            />
          </div>

          {/* Right: Text */}
          <div 
            style={{ 
              flex: isMobile ? "unset" : "1.2",
              width: isMobile ? "100%" : "auto"
            }}
          >
            <h1 
              style={{ 
                fontSize: windowWidth < 480 ? "1.5rem" : (isMobile ? "1.75rem" : "2.5rem"), 
                marginBottom: "0.75rem", 
                fontWeight: 600 
              }}
            >
              hey, i'm Huy {" "}
              <span 
                style={{ 
                  fontWeight: 100, 
                  fontSize: windowWidth < 480 ? "1.5rem" : (isMobile ? "1.75rem" : "2.5rem"), 
                  color: "#999999" 
                }}
              >
                #hwee
              </span>
            </h1>
            
            <h3 
              style={{ 
                fontSize: windowWidth < 480 ? "1.1rem" : "1.3rem", 
                lineHeight: "1.5", 
                fontWeight: 300, 
                marginBottom: "1rem" 
              }}
            >
              bridging <span style={{textDecoration: "underline"}}>technology</span> and <span style={{textDecoration: "underline"}}>social impacts</span>.
            </h3>

            <h4 
              style={{ 
                fontSize: windowWidth < 480 ? "0.95rem" : "1rem", 
                lineHeight: "1.6", 
                fontWeight: 300, 
                marginBottom: "1.5rem", 
                color: "#333" 
              }}
            >
              I'm passionate about connecting cutting-edge technology with real-world social impact. 
              My interests span AI Safety, Large Language Models, and World Models, with a particular focus on how these tools can drive innovation and improve lives in Vietnam. I believe in building technology not just because it's possible—but because it's meaningful.
            </h4>
            
            {/* Music Section */}
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              marginTop: "0.5rem",
              flexDirection: isMobile ? "column" : "row",
              gap: "0.75rem",
              width: "100%",
              justifyContent: isMobile ? "center" : "flex-start"
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
                  fontSize: windowWidth < 480 ? "0.85rem" : "0.9rem",
                  padding: windowWidth < 480 ? "0.4rem 1rem" : "0.5rem 1.25rem",
                  borderRadius: "999px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  whiteSpace: "nowrap",
                  width: isMobile ? (windowWidth < 480 ? "80%" : "60%") : "auto",
                  maxWidth: "200px",
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
      </Container>
    </section>
  );
}

export default About;