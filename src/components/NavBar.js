import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
<nav
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // 👈 new background
    backdropFilter: "blur(0px)",              // 👈 optional blur effect
    fontFamily: "monospace",
    color: "white",
    zIndex: 10,
  }}
>
  {/* Centered container */}
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1.5rem 2rem",
    }}
  >
    {/* Logo */}
    <div style={{ fontFamily: "sans-serif", fontSize: "1.5rem", fontWeight: "bold" }}>
      &lt; hd /&gt;
    </div>

    {/* Hamburger */}
    <div
      onClick={handleToggle}
      className="hamburger"
      style={{
        fontSize: "1.5rem",
        cursor: "pointer",
        display: "none",
      }}
    >
      ☰
    </div>

    {/* Nav links */}
    <div className={`nav-links ${isOpen ? "open" : ""}`}>
      {[".about", ".skills", ".projects", ".contact"].map((section) => (
        <Link
          key={section}
          to={section}
          smooth={true}
          duration={500}
          onClick={handleClose}
          style={linkStyle}
        >
          {section} ()
        </Link>
      ))}
    </div>
  </div>

      {/* Inline styles */}
      <style>{`
        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .hamburger {
          display: none;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 70px;
            right: 2rem;
            background-color: rgba(0, 0, 0, 0.85);
            flex-direction: column;
            gap: 1rem;
            padding: 1rem 2rem;
            border-radius: 8px;
            display: none;
          }

          .nav-links.open {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  cursor: "pointer",
};

export default Navbar;
