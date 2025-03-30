import { Element } from "react-scroll";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Container from "./components/Container";
import Experiences from "./components/Experiences";
//import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div
      style={{ backgroundColor: "#111", minHeight: "100vh" }}
      className="App"
    >
      {/* Navigation Bar */}
      <Element name="nav-bar">
        <NavBar />
      </Element>

      {/* Sections with names for react-scroll */}
      <Element name="hero">
        <Hero />
      </Element>

      <Container name="about">
        <About />
      </Container>

      <Container name="experiences">
        <Experiences />
      </Container>

      <Container name="projects">
        <Projects />
      </Container>

      <Container name="contact">
        <Contact />
      </Container>
    </div>
  );
}

export default App;
