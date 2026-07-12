import React from 'react';
import { ArrowUp } from 'lucide-react'; // Kept only for the back-to-top button

function Footer() {
  const currentYear = new Date().getFullYear();

  // Smooth scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-[#050505] border-t border-slate-200 dark:border-slate-800 py-10 mt-10 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright */}
        <div className="text-slate-600 dark:text-slate-400 text-base font-medium text-center md:text-left">
          &copy; {currentYear} Parshant Kumar | All rights reserved
        </div>

        {/* Social Links using your original SVGs */}
        <div className="flex items-center justify-center gap-6">
          <div className='hover:scale-125 transition-transform duration-200 invert dark:*:invert'>
            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/parshantkumar1290/">
              <img src="src/svg/linkedin.svg" alt="LinkedIn" className="w-8 h-8 object-contain" />
            </a>
          </div>
          
          <div className='hover:scale-125 transition-transform duration-200 invert dark:*:invert'>
            <a target='_blank' rel="noreferrer" href="https://github.com/Parshant-12">
              <img src="src/svg/github.svg" alt="GitHub" className="w-8 h-8 object-contain" />
            </a>
          </div>
          
          <div className='hover:scale-125 transition-transform duration-200 invert dark:*:invert'>
            <a target='_blank' rel="noreferrer" href="https://discord.gg/3KPT9RhA">
              <img src="src/svg/discord.svg" alt="Discord" className="w-8 h-8 object-contain" />
            </a>
          </div>
          
          <div className='hover:scale-125 transition-transform duration-200 invert dark:*:invert'>
            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/parshant_1290?igsh=MTd0Zmk0bDE4MXN5Zg==">
              <img src="src/svg/insta.svg" alt="Instagram" className="w-8 h-8 object-contain" />
            </a>
          </div>
          
          <div className='hover:scale-125 transition-transform duration-200 invert dark:*:invert'>
            <a target='_blank' rel="noreferrer" href="https://x.com/Parshant1290">
              <img src="src/svg/x.svg" alt="X" className="w-8 h-8 object-contain" />
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <button 
          onClick={scrollToTop}
          className="p-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-[#9670df] hover:text-white dark:hover:bg-[#b28ff1] dark:hover:text-slate-900 transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>

      </div>
    </footer>
  );
}

export default Footer;