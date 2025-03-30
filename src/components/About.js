import React from "react";

function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        fontFamily: "monospace",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div>
        <p>Hello Muoi 🙎‍♀️</p>
        <p>Welcome to my page!</p>
        <p> I just started working on this a few hours ago, but what do you think? </p>
      </div>
    </section>
  );
}

export default About;
