// Navbar.jsx - Enhanced Mobile Responsiveness
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // start with false
  const menuRef = useRef();
  const location = useLocation();

  // Toggle menu function
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
  
    handleResize(); // <-- run once on mount
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest("button")
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const navItems = [
    { name: "About", to: "/" },
    { name: "Blog", to: "/blog" },
    { name: "hey", to: "/10000" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        width: "100%",
        padding: isMobile
          ? scrolled
            ? "0.5rem 1rem"
            : "1rem 1rem"
          : scrolled
          ? "0.5rem 2rem"
          : "1.5rem 2rem",
        backgroundColor: scrolled ? "rgba(249, 246, 241, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.3s ease",
        boxShadow: scrolled ? "0 2px 10px rgba(0, 0, 0, 0.05)" : "none",
        fontFamily: "'Lexend Deca', sans-serif",
        borderBottom: "1px solid rgba(59, 47, 47, 0.1)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1000px",
          padding: "0 1rem",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* Logo or Brand Name could go here */}
        <div
          style={{ fontSize: isMobile ? "1.25rem" : "1.5rem", fontWeight: 600 }}
        >
          <Link
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
            onMouseEnter={(e) => {
              e.target.style.opacity = 0.7;
              e.target.style.backgroundColor = "#B9FBC0";
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = 1;
              e.target.style.backgroundColor = "transparent";
            }}
          >
            Huy Dang
          </Link>
        </div>

        {/* Desktop Nav Links */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "3rem" }}>
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
                  transition: "all 0.2s ease",
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

        {/* Mobile Menu Toggle */}
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
              justifyContent: "space-between",
              height: "20px",
              zIndex: 1001,
            }}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <div
              style={{
                width: "25px",
                height: "2px",
                backgroundColor: "#3b2f2f",
                transform: menuOpen
                  ? "rotate(45deg) translate(5px, 6px)"
                  : "none",
                transition: "transform 0.3s ease",
                marginBottom: menuOpen ? "0" : "6px",
              }}
            ></div>
            <div
              style={{
                width: "25px",
                height: "2px",
                backgroundColor: "#3b2f2f",
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 0.3s ease",
                marginBottom: menuOpen ? "0" : "6px",
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
                transition: "transform 0.3s ease",
              }}
            ></div>
          </button>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: menuOpen ? "100%" : "0%",
            height: "100vh",
            backgroundColor: "rgba(249, 246, 241, 0.98)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            zIndex: 999,
            transition: "width 0.3s ease",
            overflow: "hidden",
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
                opacity: menuOpen ? 1 : 0,
                transition: "opacity 0.3s ease",
                transitionDelay: menuOpen ? "0.2s" : "0s",
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
