import React from "react";
import Container from "../styles/Container";
import MiniNav from "./MiniNav";

function Blog() {
  return (
    <section className="page-shell">
      <Container>
        <MiniNav />

        <section className="blog-page">
          <p className="hero-text">
            <a
              href="https://www.notion.so/Magistral-2fda3e4ac74f804da8eff7ba9f525ff2?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="content-link"
            >
              Magistral: Reasoning without Traces
            </a>
          </p>

          <p className="hero-text">
            <a
              href="https://huydang684106.substack.com/p/i-made-a-lot-of-mistakes-what-i-learned"
              target="_blank"
              rel="noopener noreferrer"
              className="content-link"
            >
              A Lot of Mistakes: What I Learned in 2025
            </a>
          </p>

          <p className="hero-text">
            <a
              href="https://www.notion.so/Thought-Action-Obsersavation-TAO-Cycle-1e9a3e4ac74f806282a3eb3e127ee380?pvs=4"
              target="_blank"
              rel="noopener noreferrer"
              className="content-link"
            >
              The Thought - Action - Observation Cycle
            </a>
          </p>

          <p className="hero-text">
            <a
              href="https://www.notion.so/Tools-in-LLMs-How-and-Why-1e9a3e4ac74f8010aa76ca86fa04a3cf?pvs=4"
              target="_blank"
              rel="noopener noreferrer"
              className="content-link"
            >
              Tools in LLMs - What, How, Why?
            </a>
          </p>

          <p className="hero-text">
            <a
              href="https://www.notion.so/LLMs-Under-the-Hood-Messages-Special-Tokens-and-Chat-Templates-1e7a3e4ac74f80fa94cdd393393b2a5d?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="content-link"
            >
              LLMs Under the Hood
            </a>
          </p>
        </section>
      </Container>
    </section>
  );
}

export default Blog;
