function Layout({ children }) {
    return (
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          margin: "0 auto",
          padding: "0 2rem",
          boxSizing: "border-box",
        }}
      >
        {children}
      </div>
    );
  }
  
  export default Layout;
  