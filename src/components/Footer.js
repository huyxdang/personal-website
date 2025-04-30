import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      width: "100%",
      padding: "2rem 0",
      backgroundColor: "#f9f6f1",
      borderTop: "1px solid rgba(59, 47, 47, 0.1)",
      fontFamily: "'Lexend Deca', sans-serif",
      color: "#3b2f2f",
      marginTop: "auto",
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}>
        {/* Social Media Links */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          marginBottom: "1.5rem",
        }}>
          <a href="https://linkedin.com/in/yourusername" 
             target="_blank" 
             rel="noopener noreferrer"
             style={{
               color: "#3b2f2f",
               fontSize: "1.25rem",
               transition: "opacity 0.2s ease",
             }}
             onMouseOver={e => e.target.style.opacity = 0.7}
             onMouseOut={e => e.target.style.opacity = 1}
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/yourusername" 
             target="_blank" 
             rel="noopener noreferrer"
             style={{
               color: "#3b2f2f",
               fontSize: "1.25rem",
               transition: "opacity 0.2s ease",
             }}
             onMouseOver={e => e.target.style.opacity = 0.7}
             onMouseOut={e => e.target.style.opacity = 1}
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://twitter.com/yourusername" 
             target="_blank" 
             rel="noopener noreferrer"
             style={{
               color: "#3b2f2f",
               fontSize: "1.25rem",
               transition: "opacity 0.2s ease",
             }}
             onMouseOver={e => e.target.style.opacity = 0.7}
             onMouseOut={e => e.target.style.opacity = 1}
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="mailto:your.email@example.com"
             style={{
               color: "#3b2f2f",
               fontSize: "1.25rem",
               transition: "opacity 0.2s ease",
             }}
             onMouseOver={e => e.target.style.opacity = 0.7}
             onMouseOut={e => e.target.style.opacity = 1}
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        
        {/* Copyright */}
        <p style={{
          fontSize: "0.9rem",
          opacity: 0.7,
          margin: 0,
        }}>
          © {currentYear} Huy Dang. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;