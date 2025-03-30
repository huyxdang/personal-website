import React, { useRef, useEffect, useState } from "react";
import GreenLink from "./GreenLink";

function Contact() {
  const contactRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (contactRef.current) observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={contactRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        minHeight: "80vh",
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
      <div style={{ maxWidth: "600px", textAlign: "center" }}>
        <h2
          style={{
            color: "#eaeaea",
            fontSize: "2.5rem",
            fontWeight: "bold",
            fontFamily: "monospace",
            marginBottom: "1rem",
          }}
        >
          <span style={{ color: "#7CFC7C" }}>.</span>contact()
        </h2>

        <hr
          style={{
            margin: "1rem auto 2rem",
            width: "60%",
            height: "1px",
            border: "none",
            backgroundColor: "#333",
          }}
        />

        <p style={{ fontSize: "1rem", color: "#ccc", marginBottom: "1rem" }}>
          Don't like my website? Don't like my work?
        </p>

        <p style={{ fontSize: "1rem", color: "#ccc", marginBottom: "1rem", fontWeight: "bold" }}>
          Don't even like me as a person?
        </p>

        <h2 style={{marginTop:"3rem"}}> <GreenLink href="https://www.instagram.com/huy.dng_/">Reach out to me :)</GreenLink></h2>
        <h4 style={{marginTop:"0.5rem", marginBottom:"3rem"}}> (I'm always open to constructive feedback!)</h4>
      </div>
    </section>
  );
}

export default Contact;
