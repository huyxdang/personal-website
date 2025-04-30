import React, { useEffect, useState } from "react";
import ScrollButton from "./ScrollButton";

const greetings = ["xin chào", "hey", "你好", "bonjour", "hola"];

function Hero() {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [initialLoad, setInitialLoad] = useState(false); // ✅ NEW STATE

  useEffect(() => {
    // ✅ Trigger fade-in on mount
    setInitialLoad(true);

    const interval = setInterval(() => {
      setFadeClass("fade-out");

      setTimeout(() => {
        setCurrentGreeting((prev) => (prev + 1) % greetings.length);
        setFadeClass("fade-in");
      }, 500);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    const target = document.getElementById("about");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        position: "relative",
        backgroundImage: `url(${process.env.PUBLIC_URL}/hero.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginBottom: 0,
        paddingBottom: 0, // typo fixed from 'paddingButtom'
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>

      {/* Centered Text */}
      <div
        className={`greeting-wrapper ${initialLoad ? "initial-fade-in" : ""}`} // ✅ Apply class on load
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          opacity: 0,
          animation: initialLoad ? "fadeInHero 1s ease-out forwards" : "none", // ✅ Fade once on page load
        }}
      >
        <h1 className={`greeting ${fadeClass}`}>
          {greetings[currentGreeting]}
        </h1>
      </div>

      {/* Scroll Button */}
      <ScrollButton scrollToContent={scrollToContent} />

      {/* Embedded Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

        .greeting {
          font-family: 'Pacifico', cursive;
          font-size: 4rem;
          color: white;
          opacity: 1;
          transition: opacity 0.5s ease-in-out;
          transform: scaleX(1.15);
          text-shadow: 3px 3px 0 rgba(255, 80, 80, 0.9);
        }

        .fade-in {
          opacity: 1;
        }

        .fade-out {
          opacity: 0;
        }

        /* ✅ Initial wrapper fade-in */
        @keyframes fadeInHero {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;
