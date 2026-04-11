import React from "react";
import { Link } from "react-router-dom";
import Container from "../styles/Container";

function Vietnam() {
  return (
    <section className="page-shell">
      <Container>
        <div className="hero-copy">
          <h1 className="hero-title">Vietnam</h1>

          <p className="hero-text">
            Despite growing up in Vietnam, it was only recently that I had the
            chance to really understand more about the country: different cities,
            cuisines, and people. The more I explore, the luckier I feel
            to call this place home.
          </p>

          <p className="hero-text">
            Here's a list of my favorite places: of the best cuisines, with the best people. 
          </p>

          <section className="writings" style={{ marginTop: "3rem" }}>
            <h2 className="writings-title">Places</h2>

            <p className="hero-text">
              <a
                href="https://share.google/dms1oNa6qEhVJvSOb"
                target="_blank"
                rel="noopener noreferrer"
                className="writing-link"
              >
                Hợp Cafe Corner
              </a>
              . The best cà phê muối (salt coffee) I've ever tried. Crafted by Trương, who simply understands coffee.
            </p>
          </section>

          <p className="hero-text" style={{ marginTop: "2.5rem" }}>
            <Link to="/" className="accent-link" style={{ fontSize: "1rem" }}>
              ← back
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Vietnam;
