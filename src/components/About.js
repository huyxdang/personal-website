import React, { useRef, useEffect, useState } from "react";
import GreenLink from "./GreenLink";
import WhiteLink from "./WhiteLink";

function About() {
  const bulletItemStyle = {
    position: "relative",
    paddingLeft: "1.5rem",
    marginBottom: "1rem",
    fontSize: "0.9rem",
    lineHeight: "1.6",
  };

  const aboutRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "#ccc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
        padding: "3rem",
        margin: 0,
      }}
    >
      {/* Text on the left */}
      <div style={{ flex: 1, paddingRight: "2rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <h2
            style={{
              color: "#eaeaea",
              fontSize: "2.5rem",
              fontWeight: "bold",
              fontFamily: "monospace",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "#7CFC7C" }}>.</span>about()
          </h2>

          <hr
            style={{
              flexGrow: 1,
              height: "1px",
              border: "none",
              backgroundColor: "#333",
            }}
          />
        </div>

        <h3 style={{ fontSize: "1.5rem", color: "white" }}>Hey, I'm Huy 👋</h3>
        <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
          I'm a student at the{" "}
          <GreenLink href="https://www.utoronto.ca/">
            University of Toronto
          </GreenLink>{" "}
          studying Statistics, Math, and Economics.
        </p>

        <h4 style={{ marginTop: "2rem", fontSize: "1.2rem", color: "white" }}>
          A bit about me:
        </h4>
        <ul style={{ listStyle: "none", paddingLeft: 0, marginTop: "1rem" }}>
          <li style={bulletItemStyle}>
            ▹ I was a ML Engineer at{" "}
            <GreenLink href="https://www.iclr.org/">ICLR</GreenLink>, working on
            predicting and visualizing hailstorms ❄️
          </li>
          <li style={bulletItemStyle}>
            ▹ I won <GreenLink href="https://www.linkedin.com/feed/update/urn:li:activity:7219378993496477696/">~USD 13k for NaviBuddy</GreenLink>, a tech startup using Computer Vision to aid the visually-impaired 🤖
          </li>
          <li style={bulletItemStyle}>
            ▹ I'm interested in topics like LLMs (Large Language Models), <WhiteLink href="https://www.anthropic.com/news/tracing-thoughts-language-model">AI Interpretability</WhiteLink>, and Education 📚
          </li>
          <li style={bulletItemStyle}>
            ▹ I enjoy Mexican, Italian, and Japanese food - and love <WhiteLink href="https://amthucbactrungnam.wixsite.com/blog/single-post/cach-lam-banh-mi-pate-thap-cam"> Banh My</WhiteLink>'s 🥖
          </li>
        </ul>
      </div>

      {/* Image on the right */}
      <div style={{ flex: 1, textAlign: "center" }}>
        <a
          href="https://www.linkedin.com/in/huy-x-dang-9b61671bb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/headshot.png`}
            alt="Muoi"
            style={{
              width: "85%",
              borderRadius: "8px",
              cursor: "pointer",
              filter: "grayscale(100%)",
              transform: "scale(1)",
              transition: "filter 0.5s ease, transform 0.3s ease",
              boxShadow: "0 0 10px rgba(0,0,0,0.4)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.filter = "none";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.filter = "grayscale(100%)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        </a>
      </div>
    </section>
  );
}

export default About;
