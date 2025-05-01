// Blog.js 

import Container from "./Container";


function Blog(){
    return (
      <section
      id = "blog"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "3rem 2rem",
        fontFamily: "'Lexend Deca', sans-serif",
        color: "#3b2f2f",
      }}
    >
    <Container>
      <div 
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          outline: "1px solid red" // RED OUTLINE 
        }}>
        <h1>Blog coming soon!</h1>
      </div>
    </Container>
    
    </section>
    
    )

}
export default Blog;