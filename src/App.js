// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Vietnam from "./components/Vietnam";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/vietnam" element={<Vietnam />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
