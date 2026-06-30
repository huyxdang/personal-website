import React from "react";
import { NavLink } from "react-router-dom";

function MiniNav() {
  return (
    <nav className="mini-nav" aria-label="Primary">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? "mini-nav-link active" : "mini-nav-link"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive ? "mini-nav-link active" : "mini-nav-link"
        }
      >
        Blog
      </NavLink>
    </nav>
  );
}

export default MiniNav;