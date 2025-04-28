import React, { useRef, useEffect, useState } from "react";
import GreenLink from "./GreenLink";
import WhiteLink from "./Link";

function Projects() {
    const projRef = useRef(null);
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setVisible(entry.isIntersecting),
        { threshold: 0.2 }
      );
      if (projRef.current) observer.observe(projRef.current);
      return () => observer.disconnect();
    }, []);
  
    return (
      <section
        id="projects"
        ref={projRef}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          minHeight: "80vh",
          backgroundColor: "#111",
          color: "#ccc",
          fontFamily: "monospace",
          padding: "3rem",
          margin: 0,
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ color: "#eaeaea", fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
            <span style={{ color: "#7CFC7C" }}>.</span>projects()
          </h2>
          <hr style={{ height: "1px", backgroundColor: "#333", border: "none", marginBottom: "2rem" }} />
  
          <h1>
            I hosted a big event in highschool and met <GreenLink href="https://www.youtube.com/watch?v=95ahbau-rJk">Amee</GreenLink> 😍
          </h1>
          <h1>
            Also, here's <GreenLink href="https://youtu.be/fvOy-T3SGfs">me at 13 y/o</GreenLink> unboxing a new mouse pad with my <WhiteLink href="https://www.instagram.com/d.hnyuqs_/">sister</WhiteLink> 👧🏻
          </h1>
          <h2> 
            In my free time, I like to wander around philosophical questions, eat bussing food, and sleep for less than 6 hours a day!
          </h2>
        </div>
      </section>
    );
  }
  
  export default Projects;