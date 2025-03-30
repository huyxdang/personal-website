import { Link, Element } from 'react-scroll';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <nav>
        <ul>
          <li>
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <Element name="hero">
        <Hero />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>
    </div>
  );
}

export default App;
