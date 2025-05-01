import React from "react";

/**
 * Reusable Container component for consistent layout
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to render inside container
 * @param {boolean} [props.fullHeight=false] - Whether container should take full viewport height
 * @param {Object} [props.style] - Additional styles to apply to the container
 * @param {string} [props.className] - Additional classes to apply to the container
 * @param {string} [props.id] - Optional ID for the container
 */
function Container({ 
  children,
  fullHeight = false,
  style = {},
  className = "",
  id
}) {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id={id}
      className={className}
      style={{
        width: "100%",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: isMobile ? "0 1rem" : "0 2rem",
        boxSizing: "border-box",
        minHeight: fullHeight ? "100vh" : "auto",
        ...style
      }}
    >
      {children}
    </div>
  );
}

export default Container;