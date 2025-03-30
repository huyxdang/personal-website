import React from "react";

function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        fontFamily: "monospace",
        textAlign: "center",
        padding: "2rem",
        marginBottom: 0, // Ensures no extra margin
      }}
    >
      <div>
        <p>Hello 👋</p>
        <p>Welcome to my page!</p>
        <p> I just started working on this a few hours ago, but what do you think? </p>

<footer
      style={{
        backgroundColor: "#111",
        color: "white",
        padding: "2rem",
        textAlign: "center",
        fontFamily: "monospace",
        fontSize: "0.9rem",
        borderTop: "1px solid #333",
        marginTop: "5rem"
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <a
          href="https://github.com/huyxdang"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#ccc",
            marginRight: "1rem",
            fontSize: "1.5rem",
            textDecoration: "none"
          }}
        >
        </a>
      </div>

      <p>
        <a 
        href="https://github.com/huyxdang" 
        target="_blank"
        rel="noopener noreferrer"
        style={{
            color: "inherit",             // ✅ inherit text color (no purple/blue)
            textDecoration: "none",       // ✅ remove underline
            fontWeight: "bold",
            fontsize: "4rem",
          }}
        > Built with ❤️ by Huy Dang  </a>
      </p>
    </footer>
      </div>
    </section>
  );
}

export default About;
