// Main.js (About)
import React from "react";
import Container from "../styles/Container";

function About() {
  return (
    <section className="page-shell">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="hero-title">Huy X. Dang</h1>
            <p className="hero-text">
              I’m interested in building AI applications 
            </p>
            <p className="hero-text">
              I believe models are very capable, but their power hasn’t been *fully*
              translated into user value yet.
            </p>
            <p className="hero-text">
              I studied Statistics & Math at the{" "}
              <a
                href="https://www.utoronto.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link"
              >
                University of Toronto
              </a>
              . I did AI research at the{" "}
              <a
                href="https://newturing.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link"
              >
                New Turing Institute
              </a>{" "}
              (1 of 48) and ML at{" "}
              <a
                href="https://www.iclr.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link"
              >
                ICLR
              </a>
              .
            </p>
            <p className="hero-text">
              I built{" "}
              <a
                href="https://neurips-2025.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link"
              >
                NeurIPS ’25
              </a>{" "}
              to explore research papers, won $15k+ in hackathons, and
              pitched in front of hundreds of people.
            </p>
            <p className="hero-text">
              If you’re reading this, I’d love to connect - {" "}
              <a
                href="https://x.com/xhuydang"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link"
              >
                X
              </a>
              ,{" "}
              <a
                href="https://www.linkedin.com/in/huy-x-dang/"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link"
              >
                Linkedin
              </a>
              ,{" "}
              <a
                href="mailto:xhuydng@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link"
              >
                Email
              </a>
            </p>
          </div>

          <div className="hero-photo">
            <img
              src={`${process.env.PUBLIC_URL}/headshot.png`}
              alt="Huy Dang"
            />
          </div>
        </div>

        <section className="section-block">
          <h2 className="section-title">Writings</h2>
          <p className="hero-text">
          </p>
          <p className="hero-text">
            <a
              href="https://huydang684106.substack.com/p/i-made-a-lot-of-mistakes-what-i-learned"
              target="_blank"
              rel="noopener noreferrer"
              className="writing-link"
            >
              A Lot of Mistakes: Lesson from 2025
            </a>
          </p>
          <p className="hero-text">
            <a
              href="https://www.notion.so/Thought-Action-Obsersavation-TAO-Cycle-1e9a3e4ac74f806282a3eb3e127ee380?pvs=4"
              target="_blank"
              rel="noopener noreferrer"
              className="writing-link"
            >
              The Thought-Action-Observation Cycle
            </a>{" "}

          </p>
          <p className="hero-text">
            <a
              href="https://www.notion.so/Tools-in-LLMs-How-and-Why-1e9a3e4ac74f8010aa76ca86fa04a3cf?pvs=4"
              target="_blank"
              rel="noopener noreferrer"
              className="writing-link"
            >
              Tools in LLMs - What, How, Why? 
            </a>{" "}
          </p>
          <p className="hero-text">
            <a
              href="https://www.notion.so/LLMs-Under-the-Hood-Messages-Special-Tokens-and-Chat-Templates-1e7a3e4ac74f80fa94cdd393393b2a5d?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="writing-link"
            >
              LLMs Under the Hood
            </a>{" "}
          </p>
        </section>
      </Container>
    </section>
  );
}

export default About;
