import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: scrolled
          ? "rgba(0, 0, 0, 0.85)"
          : "rgba(0, 0, 0, 0.4)",
        backdropFilter: scrolled ? "blur(5px)" : "none",
        fontFamily: "monospace",
        color: "white",
        zIndex: 10,
        transition: "background-color 0.3s ease",
      }}
    >
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
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "1.5rem",
            fontWeight: "600",
            color: scrolled ? "#7CFC7C" : "white", // dynamic logo color
            transition: "color 0.3s ease",
          }}
        >
          &lt; hd /&gt;
        </div>

        {/* Hamburger */}
        <div
          onClick={handleToggle}
          className="hamburger"
          style={{
            fontSize: "1.8rem",
            cursor: "pointer",
            color: "white",  // so it's visible on dark background
          }}
        >
          ☰
        </div>

        {/* Nav links */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          {["about", "experiences", "projects", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              onClick={handleClose}
              spy={true}
              offset={-80}
              style={{
                ...linkStyle,
                color: "white",
                transition: "color 0.3s ease",
              }}
            >
              <span style={{ color: scrolled ? "#7CFC7C" : "white" }}>.</span>
              {section} ()
            </Link>
          ))}
        </div>
      </div>

      {/* Embedded styles */}
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
