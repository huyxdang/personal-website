import React from "react";
import Container from "./Container";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      backgroundColor: "#f9f6f1",
      borderTop: "1px solid rgba(59, 47, 47, 0.1)",
      fontFamily: "'Lexend Deca', sans-serif",
      color: "#3b2f2f",
      marginTop: "auto",
      padding: "1.2rem 0",
    }}>
      <Container>
      <div style={{
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        // outline: "1px solid red",
      }}>
        {/* Social Media Links */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          marginBottom: "1.5rem",
        }}>
          <a href="https://www.linkedin.com/in/huy-x-dang-9b61671bb/" 
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
          <a href="https://github.com/huyxdang" 
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
          <a href="https://x.com/xhuydng" 
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
          <a href="mailto:xhuydng@gmail.com"
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
      </Container>
    </footer>
    
  );
  
}

export default Footer;