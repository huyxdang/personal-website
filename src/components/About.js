// About.js
import React from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Container from "../styles/Container";
import MiniNav from "./MiniNav";

function About() {
  return (
    <section className="page-shell">
      <Container>
        <MiniNav />

        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="hero-title">
              <span className="hero-highlight" tabIndex="0" aria-label="Huy, pronounced hwee">
                Huy
                <span className="hero-pronunciation-popover">/hwee/</span>
              </span>{" "}
              X. Dang
            </h1>
            <p className="hero-text">
              Applied AI researcher & software engineer.
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
              {" "}and did research at the New Turing Institute{" "}
              under{" "}
              <a
                href="https://research.google/people/105176/?&type=google"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link"
              >
                Dr. Thang Luong
              </a>
              {" "}.
              {" "}I created{" "}
              <a
                href="https://huyxdang.github.io/Emoji-Bench-Page/"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link"
              >
                Emoji-Bench
              </a>
              {" "}to measure self-correction ability in LLMs,
              which was presented at the{" "}
              <a
                href="https://summit.newturing.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link"
              >
                GStar AI Summit
              </a>
              .
            </p>
            <p className="hero-text">
              I also enjoy building. I've built{" "}
              <a
                href="https://neurips-2025.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link"
              >
                NeurIPS Map
              </a>
              {" "}to explore research papers; and{" "}
              <a
                href="https://www.youtube.com/watch?v=dKt-yfZ82qw&t=63s"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link"
              >
                NaviBuddy
              </a>
              , AI for the visually-disabled, which received $15k+ and
              nominated for the Paris SDG Olympiad.
            </p>

            <p className="interests">
              I'm Vietnamese: I enjoy exploring the world on my motorbike!
            </p>
          </div>

          <div className="social-links" aria-label="Social links">
            <a
              href="https://www.linkedin.com/in/huy-x-dang/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>
            <a
              href="https://github.com/huyxdang"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub aria-hidden="true" />
            </a>
            <a
              href="https://x.com/xhuydang"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="X"
              title="X"
            >
              <FaXTwitter aria-hidden="true" />
            </a>
          </div>

          <div className="hero-photo">
            <a
              href="https://www.linkedin.com/in/huy-x-dang/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-photo-link"
              aria-label="Open Huy X. Dang on LinkedIn"
            >
              <img
                src={`${process.env.PUBLIC_URL}/headshot.jpg`}
                alt="Huy Dang"
              />
            </a>
          </div>
          <p className="hero-photo-caption">Ta Xua, Viet Nam</p>
        </div>
      </Container>
    </section>
  );
}

export default About;
