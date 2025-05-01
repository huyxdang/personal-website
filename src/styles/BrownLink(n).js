import React from "react";

function WhiteLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="brown-link"
    >
      {children}

      {/* Inline styles for fallback, optional */}
      <style>{`
        .brown-link {
          position: relative;
          color: #3b2f2f;
          text-decoration: none;
          font-weight: inherit;
        }

        .brown-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0%;
          height: 1px;
          background-color: #3b2f2f;
          transition: width 0.3s ease-in-out;
        }

        .brown-link:hover::after {
          width: 100%;
        }
      `}</style>
    </a>
  );
}

export default WhiteLink;
