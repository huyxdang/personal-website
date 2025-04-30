import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const menuRef = useRef();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // 🔁 Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "About", to: "/" },
    { name: "Blog", to: "/blog" },
    { name: "10,000", to: "/10000" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        width: "100%",
        padding: scrolled ? "0.5rem 2rem" : "1.5rem 2rem",
        backgroundColor: scrolled ? "rgba(249, 246, 241, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.3s ease",
        boxShadow: scrolled ? "0 2px 10px rgba(0, 0, 0, 0.05)" : "none",
        fontFamily: "'Lexend Deca', sans-serif",
        borderBottom: "1px solid rgba(59, 47, 47, 0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "flex-end",

          width: "100%",
        }}
      >

        {/* 👉 Nav Links */}
        {!isMobile && (
          <div style={{display: "flex", gap: "3rem" }}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                style={{
                  color: "#3b2f2f",
                  fontWeight: 400,
                  fontSize: "1.25rem",
                  textDecoration: "none",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = 0.7;
                  e.target.style.backgroundColor = "#B9FBC0";
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = 1;
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}

        {/* 🍔 Mobile Toggle */}
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
            aria-label="Toggle navigation"
          >
            <div
              style={{
                width: "25px",
                height: "2px",
                backgroundColor: "#3b2f2f",
                transform: menuOpen
                  ? "rotate(45deg) translate(5px, 6px)"
                  : "none",
                transition: "transform 0.3s",
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
                transform: menuOpen
                  ? "rotate(-45deg) translate(5px, -6px)"
                  : "none",
                transition: "transform 0.3s",
              }}
            ></div>
          </button>
        )}
      </div>

      {/* 📱 Mobile Menu */}
      {isMobile && menuOpen && (
        <div
          ref={menuRef}
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
            zIndex: 999,
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={toggleMenu}
              style={{
                color: "#3b2f2f",
                fontWeight: 500,
                fontSize: "1.5rem",
                textDecoration: "none",
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
