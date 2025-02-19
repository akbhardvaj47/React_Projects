// import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // const [color, setColor] = useState("yellow");

  return (
  <div>
    <Navbar />
    <Home />
    <About />
    <Service />
    <Project />
    <Contact/>
    <Footer />
  </div>
  );
}

export default App;
