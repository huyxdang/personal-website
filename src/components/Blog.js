import React from "react";
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
    <section id="blog" className="page-section">
      <Container>
        {/* Intro Section */}
        <div className="intro-block">
          <h1>Blog</h1>
          <h3>
            Long-form writing & explorations. Filtered thoughts.
          </h3>
          <p>
          I used to struggle with writing, but I've come to realize 
          how crucial it is for expressing ideas clearly. This 
          is where I share reflections and explorations on topics that 
          fascinate me; and document my journey toward becoming a better writer.
          </p>
        </div>

        {/* Blog Posts Section */}
        <div>
          <h2>Posts</h2>
          <ul>
            {posts.map((post, index) => (
              <li key={index}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-style"
                >
                  [{post.date}] {post.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Blog;