// App.jsx
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";
import Main from "./components/Main";
import Blog from "./components/Blog";
import Hours from "./components/Challenge10k";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => console.error("Audio playback error:", error));
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <Router>
      <audio ref={audioRef} loop>
        <source
          src={`${process.env.PUBLIC_URL}/music/all_quiet.mp3`}
          type="audio/mpeg"
        />
      </audio>
      <div
        style={{
          // backgroundColor: "#f9f6f1",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavBar isPlaying={isPlaying} togglePlay={togglePlay} />
        <main
          style={{
            flex: 1,
            width: "100%",
            marginTop: "0",
          }}
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/10000" element={<Hours />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;