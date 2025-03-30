import {Element } from 'react-scroll';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import About from './components/About';
//import Projects from './components/Projects';
//import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <Element name="nav-bar">
        <NavBar/>
      </Element>

      {/* Sections with names for react-scroll */}
      <Element name="hero">
        <Hero/>
      </Element>

      <Element name="about">
        <About/>
      </Element>
    </div>
  );
}


export default App;
