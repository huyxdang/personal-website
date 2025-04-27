import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f9f6f1",
        color: "#3b2f2f",
        padding: "2rem",
        textAlign: "center",
        fontFamily: "'Lexend Deca', sans-serif",
        fontSize: "0.9rem",
        borderTop: "1px solid #3b2f2f",
        marginTop: "5rem"
      }}
    >

      <p>
        <a 
          href="https://github.com/huyxdang"
          target="_blank"
          rel="noopener noreferrer"
          style={{          
          color: "#3b2f2f",
          position: "relative",
          textDecoration: "none",
          fontWeight: "inherit",}}> Built with 🔥 by Huy Dang  </a>
      </p>

    </footer>
  );
}

export default Footer;
