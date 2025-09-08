// Main.js (About)
import React, { useState, useEffect } from "react";
import Container from "../styles/Container";
import BrownLink from "../styles/BrownLink";

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="about"
      style={{
        minHeight: "70vh",
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
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "flex-start",
            justifyContent: "center",
            width: "100%",
            gap: isMobile ? "2rem" : "3rem",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          {/* Left: Image */}
          <div
            style={{
              flex: isMobile ? "unset" : "0.72",
              width: isMobile ? "100%" : "auto",
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/headshot.png`}
              alt="Huy Dang"
              style={{
                width: isMobile ? (windowWidth < 480 ? "80%" : "60%") : "73%",
                borderRadius: "30px",
                objectFit: "cover",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            />
          </div>

          {/* Right: Text */}
          <div
            style={{
              flex: isMobile ? "unset" : "1.2",
              width: isMobile ? "100%" : "auto",
            }}
          >
            <h1
              style={{
                fontSize:
                  windowWidth < 480
                    ? "1.5rem"
                    : isMobile
                    ? "1.75rem"
                    : "2.5rem",
                marginBottom: "0.75rem",
                fontWeight: 600,
              }}
            >
              Hey, i'm Huy{" "}
              <span
                style={{
                  fontWeight: 100,
                  fontSize:
                    windowWidth < 480
                      ? "1.5rem"
                      : isMobile
                      ? "1.75rem"
                      : "2.5rem",
                  color: "#999999",
                }}
              >
                {" "}
                #hwee
              </span>
            </h1>

            <h3
              style={{
                fontSize: windowWidth < 480 ? "1.1rem" : "1.3rem",
                lineHeight: "1.5",
                fontWeight: 300,
                marginBottom: "1rem",
              }}
            >
              Bridging{" "}
              <span style={{ textDecoration: "underline" }}>technology</span>{" "}
              and{" "}
              <span style={{ textDecoration: "underline" }}>
                social impacts
              </span>
              .
            </h3>

            <h4
              style={{
                fontSize: windowWidth < 480 ? "0.95rem" : "1rem",
                lineHeight: "1.6",
                fontWeight: 300,
                marginBottom: "1.5rem",
                color: "#333",
              }}
            >
              Math ∪ Stats ∪ Econ at the{" "}
              <a
                href="https://en.wikipedia.org/wiki/University_of_Toronto"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
                style={{ fontWeight: "bold" }}
              >
                University of Toronto.
              </a>{" "}
              I'm interested in world models, continual learning, and reinforcement learning. 
              I also enjoy learning about game theory and playing jazz music.
              I spend a lot of time thinking about
              how tech can improve lives in Vietnam.
            </h4>
          </div>
        </div>
        {/* Resume-Like Experience Section Below Everything */}
        <div
          style={{
            marginTop: "4rem",
            width: "100%",
            borderTop: "1px solid #ddd",
            paddingTop: "2rem",
          }}
        >

          <h2> Currently...</h2>
          {/* New Turing Institute */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ margin: 0, fontWeight: 600 }}>AI Research</h3>
            <p
              style={{
                margin: "0.2rem 0",
                fontStyle: "italic",
                fontSize: "0.95rem",
              }}
            >
              Gstar Bootcamp · New Turing Institute 
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.95rem" }}>
              <li>
              Research program by Deepmind's Dr. Thang Luong and Dr. Yi Tay and mentors from top labs (Stanford, OpenAI, etc.).
              </li>
              <li>
              Accepted (w/ full scholarship) as one of 48 participants, including PhDs and research residents.
              </li>
              <li>
              Research focuses on improving foundation models on long-horizon tasks.
              </li>
            </ul>
          </div>
              

          <div
          style={{
            marginTop: "4rem",
            width: "100%",
            borderTop: "1px solid #ddd",
            paddingTop: "2rem",
          }}
        >
          <h2>Previously...</h2>

          {/* AI Product Lead */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ margin: 0, fontWeight: 600 }}>AI Product Lead</h3>
            <p
              style={{
                margin: "0.2rem 0",
                fontStyle: "italic",
                fontSize: "0.95rem",
              }}
            >
              Global Challenge Lab · Imperial College London · Jul–Aug 2024
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.95rem" }}>
              <li>
                Built an 
                {" "}
              <a
                href="https://www.youtube.com/watch?v=dKt-yfZ82qw"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
                style={{ fontWeight: "bold" }}
              >
                assistive mobile app
              </a>{" "}
                 for the visually impaired to navigate the street.
              </li>
              <li>
                Secured $18K funding & Nominated for the SDG Paris
                Olympiad '24' @ Paris, France.
              </li>
              <li>
                Won the Social Significance Award @ Tsinghua Open Hack, China. 
              </li>
            </ul>
          </div>

          {/* Machine Learning Engineer */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ margin: 0, fontWeight: 600 }}>
              Machine Learning Engineer
            </h3>
            <p
              style={{
                margin: "0.2rem 0",
                fontStyle: "italic",
                fontSize: "0.95rem",
              }}
            >
              Institute for Catastrophic Loss Reduction · Aug–Sep 2024
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.95rem" }}>
              <li>
                Created a real-time hailstorm tracker using Twitter API + R
                dashboard for emergency response.
              </li>
              <li>
                Presented data-driven strategies to the board for policy
                implementation.
              </li>
            </ul>
          </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
