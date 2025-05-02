import React from "react";

function StaticUnderlineLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="static-underline-link"
    >
      {children}

      <style>{`
        .static-underline-link {
          position: relative;
          color: #3b2f2f;
          text-decoration: none;
          font-weight: inherit;
        }

        .static-underline-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px; /* spacing between text and underline */
          width: 100%;
          height: 1px;
          background-color: #3b2f2f;
        }
      `}</style>
    </a>
  );
}

export default StaticUnderlineLink;
