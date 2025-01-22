import { useRef } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  // Create refs for all sections
  const sectionRefs = {
    Home: useRef(),
    About: useRef(),
    Services: useRef(),
    Projects: useRef(),
    Contacts: useRef(),
  };

  // Function to handle smooth scrolling
  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="absolute top-0 z-[-2] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] select-none">
        {/* Pass scrollToSection to Navbar */}
        <Navbar scrollToSection={scrollToSection} />
        <div className="px-8">
          <div ref={sectionRefs.Home}>
            <Home />
          </div>
          <div ref={sectionRefs.About}>
            <About />
          </div>
          <div ref={sectionRefs.Services}>
            <Services />
          </div>
          <div ref={sectionRefs.Projects}>
            <Projects />
          </div>
          <div ref={sectionRefs.Contacts}>
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
