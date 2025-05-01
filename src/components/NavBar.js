// NavBar.js
import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Container from "../styles/Container";
import { FiMusic, FiPlay, FiPause } from "react-icons/fi";

function Navbar({ isPlaying, togglePlay }) {
  // State for mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);
  // State for scroll effect
  const [scrolled, setScrolled] = useState(false);
  // State for responsive layout
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef();
  const location = useLocation();

  // Toggle menu open/close
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu when navigating to another route
  useEffect(() => setMenuOpen(false), [location.pathname]);

  // Update isMobile state on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update scroll state to trigger styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 1);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
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
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Define navigation items
  const navItems = [
    { name: "Home", to: "/" },
    // { name: "Blog", to: "/blog" },
    { name: "10K-AI", to: "/10000" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        width: "100%",
        backgroundColor: "rgba(249, 246, 241, 0.95)",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.3s ease",
        boxShadow: scrolled ? "0 2px 10px rgba(0, 0, 0, 0.05)" : "none",
        fontFamily: "'Lexend Deca', sans-serif",
        borderBottom: "1px solid rgba(59, 47, 47, 0.1)",
        zIndex: 1000,
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: isMobile ? "0.2rem 0" : scrolled ? "0.2rem 0" : "1rem 0",
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontSize: isMobile ? "1.25rem" : "1.5rem",
              fontWeight: 600,
            }}
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

          {/* Desktop nav links + music toggle */}
          {!isMobile && (
            <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  style={{
                    color: "#3b2f2f",
                    fontWeight: 400,
                    fontSize: "1.25rem",
                    textDecoration: "none",
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

              {/* 🎷 Play Button */}
              <button
                onClick={togglePlay}
                style={{
                  backgroundColor: "#f9f6f1",
                  border: "2px solid #3b2f2f",
                  color: "#3b2f2f",
                  fontFamily: "'Lexend Deca', sans-serif",
                  fontSize: "0.9rem",
                  padding: "0.4rem 1rem",
                  borderRadius: "999px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#f0ece6";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#f9f6f1";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                  {isPlaying ? "⏸ Pause" : "▶ Play"}
              </button>
            </div>
          )}

          {/* Mobile menu icon */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                zIndex: 1001,
              }}
              aria-label="Toggle navigation"
            >
              {menuOpen ? (
                <FiX size={24} color="#3b2f2f" />
              ) : (
                <FiMenu size={24} color="#3b2f2f" />
              )}
            </button>
          )}
        </div>
      </Container>

      {/* Mobile nav overlay */}
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
