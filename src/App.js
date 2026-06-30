// App.jsx
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/writing" element={<Blog />} />
          </Routes>
        </main>
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;
