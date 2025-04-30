// App.jsx
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Blog from "./components/Blog";
import Hours from "./components/Hours";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <div style={{ 
        backgroundColor: "#f9f6f1", 
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}>
        <NavBar /> 
        <main style={{ 
          flex: 1,
          width: "100%",
          marginTop: "0" // The padding in Layout component will handle spacing
        }}>
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
                  <Blog />
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;