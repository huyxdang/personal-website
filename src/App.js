import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Blog from "./components/Blog";
import Hours from "./components/Hours";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#f9f6f1", minHeight: "100vh" }}>
          <NavBar /> 
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Main />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/10000"
            element={
              <Layout>
                <Hours />
              </Layout>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
