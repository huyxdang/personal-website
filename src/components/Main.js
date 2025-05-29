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
              flex: isMobile ? "unset" : "0.8",
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
              (Math ∪ Stats ∪ Econ) at the{" "}
              <a
                href="https://www.utoronto.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
                style={{ fontWeight: "bold" }}
              >
                University of Toronto
              </a>{" "}
              . I'm interested in low-resource language data, LLMs, and robots.
              I also enjoy reading about human behaviors and game theory. I
              spend lots of time thinking about how tech can improve lives in
              Vietnam.
            </h4>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
