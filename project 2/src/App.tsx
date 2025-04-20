import React from 'react';
import './index.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Teachers from './components/Teachers';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Add custom styles for smooth scrolling and 3D effects
const AppStyles = `
  html {
    scroll-behavior: smooth;
  }
  
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
  
  .backface-hidden {
    backface-visibility: hidden;
  }
  
  .preserve-3d {
    transform-style: preserve-3d;
  }
  
  .perspective-1000 {
    perspective: 1000px;
  }
`;

function App() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Add custom styles */}
      <style>{AppStyles}</style>
      
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Teachers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;