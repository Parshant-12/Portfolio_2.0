import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Leetcode from './Components/Leetcode';
import Certifications from './Components/Certificates';
import Contacts from './Components/Contact';
import Footer from './Components/Footer';
import Experience from './Components/Experience';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Background Container */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        
        {/* Animated Ambient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#9670df]/20 dark:bg-[#b28ff1]/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[45%] h-[45%] rounded-full bg-emerald-400/20 dark:bg-emerald-500/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000"></div>

        {/* Your Existing Grid Pattern Layered on Top */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Minimalist Floating Shapes & Lines */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Hollow Square 1 */}
          <div className="absolute left-[15%] animate-float-up w-10 h-10 border-2 border-slate-400/30 dark:border-slate-500/20 rounded-md" style={{ animationDuration: '28s', animationDelay: '0s' }}></div>
          
          {/* Minimal Cross (+) 1 */}
          <div className="absolute left-[35%] animate-float-up text-slate-400/30 dark:text-slate-500/20 text-3xl font-light" style={{ animationDuration: '22s', animationDelay: '5s' }}>+</div>
          
          {/* Hollow Circle */}
          <div className="absolute left-[65%] animate-float-up w-12 h-12 border border-slate-400/30 dark:border-slate-500/20 rounded-full" style={{ animationDuration: '32s', animationDelay: '2s' }}></div>
          
          {/* Minimal Cross (+) 2 */}
          <div className="absolute left-[85%] animate-float-up text-slate-400/30 dark:text-slate-500/20 text-2xl font-light" style={{ animationDuration: '25s', animationDelay: '10s' }}>+</div>
          
          {/* Hollow Square 2 */}
          <div className="absolute left-[45%] animate-float-up w-6 h-6 border border-slate-400/30 dark:border-slate-500/20 rounded-sm" style={{ animationDuration: '20s', animationDelay: '14s' }}></div>
        </div>
      </div>

      <Navbar
        scrollToSection={scrollToSection}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <main className="px-2 md:px-8 text-black dark:text-white">
        <section id="Home" className="h-screen"><Home /></section>
        <section id="About"><About /></section>
        <section id="Skills"><Skills /></section>
        <section id="Projects"><Projects /></section>
        <section id="Experience"><Experience /></section>
        <section id="Leetcode"><Leetcode /></section>
        <section id="Certifications"><Certifications /></section>
        <section id="Contacts"><Contacts /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;