import Container from "../styles/Container";

function Blog() {
  const posts = [
    {
      title: "Linguistically Ghosted: The Low-Priority Language Crisis in AI",
      url: "https://substack.com/home/post/p-165079078t",
      date: "June 3, 2025",
    },
    // Add more posts here
  ];

  return (
    <section
      id="blog"
      className="page-section"
      style={{
        padding: "3rem 1rem", // reduced padding
      }}
    >
      <Container>
        {/* Title + Intro Block */}
        <div
          className="intro-block"
          style={{
            marginBottom: "2rem", // tighten spacing below intro
          }}
        >
          <h1 style={{ marginBottom: "0.5rem" }}>Blog</h1>
          <h3 style={{ marginTop: 0 }}>
            long-form writing & exploration. filtered thoughts.
          </h3>
        </div>

        {/* Blog Post List */}
        <div
          style={{
            maxWidth: "700px",
            marginLeft: 0,
          }}
        >
          {posts.map((post, index) => (
            <div
              key={index}
              style={{
                marginBottom: "1.5rem", // slightly reduced gap between posts
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "0.9rem",
                  color: "#777",
                }}
              >
                {post.date}
              </p>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
                style={{
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  color: "#3366cc",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#254ba8")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#3366cc")
                }
              >
                {post.title}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Blog;
