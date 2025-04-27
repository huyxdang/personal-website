import Main from "./components/Main";
import NavBar from "./components/NavBar"

function App() {
  return (
    <div
      style={{ backgroundColor: "#fefefa", minHeight: "100vh" }}
      className="Main"
    >
      {/* Sections with names for react-scroll */}

    <div className="main">
        <Main />
    </div>

    </div>
  );
}

export default App;
