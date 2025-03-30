import React from "react";

function WhiteLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="white-link"
    >
      {children}

      {/* Inline styles for fallback, optional */}
      <style>{`
        .white-link {
          position: relative;
          color: white;
          text-decoration: none;
          font-weight: inherit;
        }

        .white-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0%;
          height: 1px;
          background-color: white;
          transition: width 0.3s ease-in-out;
        }

        .white-link:hover::after {
          width: 100%;
        }
      `}</style>
    </a>
  );
}

export default WhiteLink;
