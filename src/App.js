import {Element } from 'react-scroll';
import Hero from './components/Hero';
//import About from './components/About';

function App() {
  return (
    <div className="App">
      {/* Sections with names for react-scroll */}
      <Element name="hero">
        <Hero/>
      </Element>
    </div>
  );
}


export default App;
