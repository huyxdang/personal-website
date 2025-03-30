function Container({ children }) {
    return (
        // Adjust margins
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem", backgroundColor:"#111" }}>
        {children}
      </div>
    );
  }
  export default Container;