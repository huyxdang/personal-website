import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "#ccc",
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
          style={{          
          position: "relative",
          color: "white",
          textDecoration: "none",
          fontWeight: "inherit",}}> Built with ❤️ by Huy Dang  </a>
      </p>
    </footer>
  );
}

export default Footer;
