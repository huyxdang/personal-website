import React from "react";

function GreenLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="green-link"
    >
      {children}

      <style>{`
        .green-link {
          position: relative;
          color: #7CFC7C;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.2s ease;
        }

        .green-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0%;
          height: 1px;
          background-color: #7CFC7C;
          transition: width 0.3s ease-in-out;
        }

        .green-link:hover {
          color: #a0ffb3;
        }

        .green-link:hover::after {
          width: 100%;
        }
      `}</style>
    </a>
  );
}

export default GreenLink;
