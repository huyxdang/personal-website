import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "Blog", to: "blog" },
    { name: "Promises", to: "promises" },

  ];

  return (
    <nav
      style={{
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 1000,
        padding: scrolled ? "0.5rem 2rem" : "1rem 2rem",
        backgroundColor: scrolled ? "rgba(249, 246, 241, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.3s ease",
        boxShadow: scrolled ? "0 2px 10px rgba(0, 0, 0, 0.05)" : "none",
        fontFamily: "'Lexend Deca', sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
      {/* 
      <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "#3b2f2f" }}>
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          HD.
        </ScrollLink>
      </div> 
      */}

        {/* Desktop Menu */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
            }}
          >
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{
                  cursor: "pointer",
                  color: "#3b2f2f",
                  fontWeight: 500,
                  fontSize: "1.25rem",
                  position: "relative",
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = 0.7)}
                onMouseLeave={(e) => (e.target.style.opacity = 1)}
                activeClass="active"
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "20px",
              zIndex: 1001,
            }}
          >
            <div
              style={{
                width: "25px",
                height: "2px",
                backgroundColor: "#3b2f2f",
                transition: "transform 0.3s, opacity 0.3s",
                transform: menuOpen
                  ? "rotate(45deg) translate(5px, 6px)"
                  : "none",
              }}
            ></div>
            <div
              style={{
                width: "25px",
                height: "2px",
                backgroundColor: "#3b2f2f",
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 0.3s",
              }}
            ></div>
            <div
              style={{
                width: "25px",
                height: "2px",
                backgroundColor: "#3b2f2f",
                transition: "transform 0.3s",
                transform: menuOpen
                  ? "rotate(-45deg) translate(5px, -6px)"
                  : "none",
              }}
            ></div>
          </button>
        )}

        {/* Mobile Menu */}
        {isMobile && menuOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              backgroundColor: "rgba(249, 246, 241, 0.98)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              zIndex: 1000,
            }}
          >
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
                style={{
                  cursor: "pointer",
                  color: "#3b2f2f",
                  fontWeight: 500,
                  fontSize: "1.5rem",
                }}
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;