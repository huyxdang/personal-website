import React, { useRef, useState, useEffect } from "react";
import Link from "./Link";

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
        minHeight: "100vh",
        backgroundColor: "#f9f6f1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 2rem",
        boxSizing: "border-box",
        fontFamily: "'Lexend Deca', sans-serif",
        color: "#3b2f2f",
      }}
    >
      {/* Top Part: Image and Text */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // 👈 Responsive direction
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "1200px",
          width: "100%",
          gap: isMobile ? "2rem" : "0rem", // spacing between image and text
          textAlign: isMobile ? "center" : "left", // center-align text on mobile
        }}
      >
        {/* Left: Image */}
        <div style={{ flex: 1 }}>
          <img
            src={`${process.env.PUBLIC_URL}/headshot.png`}
            alt="Huy Dang"
            style={{
              width: "80%",
              maxWidth: "350px",
              borderRadius: "15px",
              objectFit: "cover",
              margin: isMobile ? "0 auto" : "0 0 0 3rem", // center image on mobile
            }}
          />
        </div>

        {/* Right: Text */}
        <div style={{ flex: 1, paddingLeft: isMobile ? "0" : "2rem" }}>
          <h3 style={{ fontSize: isMobile? "1.75rem" : "2.5rem", marginBottom: "1rem", fontWeight: 600 }}>
            Hey, I'm Huy{" "}
            <span style={{ fontWeight: 100, fontSize: isMobile? "1.75rem" : "2.5rem", color: "#999999" }}>
              //hwee
            </span>
          </h3>
          <h5 style={{ fontSize: "1.25rem", lineHeight: "1.5", fontWeight: 300 }}>
            I enjoy bridging{" "}
            <span style={{ textDecoration: "underline" }}>technology</span>{" "}
            and{" "}
            <span style={{ textDecoration: "underline" }}>social impacts</span>.
          </h5>

          <h5 style={{ fontSize: "1rem", lineHeight: "1", fontWeight: 300}}>
            Interests: <Link href="https://www.anthropic.com/research/mapping-mind-language-model">AI Safety</Link>,
            LLMs, {" "}
            <Link href="https://deepmind.google/discover/blog/genie-2-a-large-scale-foundation-world-model/">World Models</Link>, and Tech Innovation in Vietnam.
          </h5>
        </div>
      </div>

      {/* Bottom Part: Music Section */}
      <div style={{ marginTop: "4rem", textAlign: "center" }}>
        <p style={{ fontSize: isMobile? "1.1rem":"1.2rem", fontWeight: 500, marginBottom: "1rem" }}>
          Enjoy some jazz while you're here :)
        </p>

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
            fontSize: "1.2rem",
            padding: "0.75rem 1.5rem",
            borderRadius: "999px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={e => e.target.style.backgroundColor = "#f0ece6"}
          onMouseOut={e => e.target.style.backgroundColor = "#f9f6f1"}
        >
          {isPlaying ? "⏸ Pause" : "▶ Play Music"}
        </button>
      </div>

      <div style={{ marginTop: "4rem", textAlign: "center" }}> 
        <h4 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: 400, color: "#999999" }}> 
            --(Work in progress !)--
        </h4> 
      </div>

      
    </section>
  );
}

export default About;