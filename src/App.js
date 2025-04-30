import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{ backgroundColor: "#f9f6f1", minHeight: "100vh" }}
      className="Main"
    >
      <div className="main">
        <Main />
      </div>

      <div className="navBar">
        <NavBar />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
