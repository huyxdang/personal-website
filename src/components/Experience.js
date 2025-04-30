import React from "react";

function Experiences() {
  return (
    <section
      style={{
        padding: "3rem 2rem",
        fontFamily: "'Lexend Deca', sans-serif",
        color: "#3b2f2f",
        backgroundColor: "#f9f6f1",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem", fontWeight: 600 }}>
        Technical Experience
      </h2>

      {/* Machine Learning Engineer */}
      <div style={{ marginBottom: "2rem" }}>
        <h3 style={{ margin: 0 }}>Machine Learning Engineer</h3>
        <em>Institute for Catastrophic Loss Reduction — Toronto, ON</em><br />
        <em>Aug. 2024 – Sep. 2024</em>
        <ul>
          <li>Built a Twitter API pipeline for real-time hailstorm tracking</li>
          <li>Visualized spatial storm patterns in R (intensity, timestamp, metadata)</li>
          <li>Stored/query real-time data using SQL + Python</li>
          <li>Presented prototype & policy strategy to board for emergency response use</li>
        </ul>
      </div>

      {/* AI Product Lead */}
      <div style={{ marginBottom: "2rem" }}>
        <h3 style={{ margin: 0 }}>AI Product Lead</h3>
        <em>Global Challenge Lab (Imperial College London) — London, UK</em><br />
        <em>July 2024 – Aug. 2024</em>
        <ul>
          <li>Prototyped mobile app using TensorFlow Lite + OpenCV for object detection/audio</li>
          <li>Led interdisciplinary assistive tech research (visually impaired users)</li>
          <li>Secured $18,000 from Imperial & Tsinghua</li>
          <li>Nominated for <strong>2024 SDG Paris Olympiad</strong> (SDG 4 & 10)</li>
        </ul>
      </div>

      <h2 style={{ fontSize: "2rem", marginBottom: "2rem", fontWeight: 600 }}>
        Research Experience
      </h2>

      {/* Research */}
      <div>
        <h3 style={{ margin: 0 }}>
          Optimizing N-grams and Embeddings for Spam Detection
        </h3>
        <em>Python, Scikit-learn, Latex, Git</em>
        <ul>
          <li>Cleaned/analyzed 1500+ YouTube comments to detect spam patterns</li>
          <li>Trained classifiers (Random Forest, SVM, XGBoost) – 95% accuracy</li>
          <li>Ran ablation studies on tokenization strategies (n-grams, embeddings)</li>
          <li>
            First-authored paper received <strong>100%</strong> in STA314; described as
            “<em>unique and well-presented… a rare strength even among graduate students</em>”
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experiences;
