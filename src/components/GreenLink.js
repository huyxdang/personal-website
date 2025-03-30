import React from "react";

function GreenLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#7CFC7C",         // light green
        textDecoration: "none",  // lemove underline
        fontWeight: "bold",     
        transition: "color 0.2s ease",
      }}
      onMouseOver={(e) => (e.target.style.color = "#a0ffb3")}
      onMouseOut={(e) => (e.target.style.color = "#7CFC7C")}
    >
      {children}
    </a>
  );
}

export default GreenLink;
