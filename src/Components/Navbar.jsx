import React, { useState } from 'react';
import { Sun, Moon, Menu, FolderGit2, X, Home, User, Briefcase, Code, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import Leetcode from '../svg/leetcode.svg';

function Navbar({ scrollToSection, isDarkMode, setIsDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Home', icon: <Home size={18} />, id: 'Home' },
    { name: 'About', icon: <User size={18} />, id: 'About' },
    { name: 'Skills', icon: <Code size={18} />, id: 'Skills' },
    { name: 'Projects', icon: <FolderGit2 size={18} />, id: 'Projects' },
    { name: 'Experience', icon: <Briefcase size={18} />, id: 'Experience' },
    { name: 'Leetcode', icon: <img src={Leetcode} alt="Leetcode" className="w-[16px] h-[16px]" />, id: 'Leetcode' },
    { name: 'Certifications', icon: <FileText size={18} />, id: 'Certifications' },
    { name: 'Contacts', icon: <Mail size={18} />, id: 'Contacts' },
  ];

  return (
    <>
      {/* Animated Desktop Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeout" }}
        className='w-full pt-4 fixed top-0 md:flex flex-col items-center hidden z-30'
      >
        <div className='flex rounded-full px-8 py-3 items-center justify-center gap-10 text-lg font-light text-black dark:text-white bg-white/30 dark:bg-black/30 backdrop-blur-md border border-gray-300 dark:border-[#886fb8] shadow-lg'>

          <ul className='flex items-center gap-8'>
            {navItems.map((item) => (
              <li
                key={item.id}
                className='flex items-center gap-2 cursor-pointer hover:text-[#886fb8] transition-all'
                onClick={() => scrollToSection(item.id)}
              >
                {item.icon}
                <a href={`#${item.id}`}>{item.name}</a>
              </li>
            ))}
          </ul>

          <div className="w-[1px] h-6 bg-gray-400 dark:bg-gray-600"></div>

          <div className='flex items-center gap-4'>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-700" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Animated Mobile Header */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className='fixed top-0 h-16 w-full border-b dark:border-gray-800 bg-white/70 dark:bg-black/70 md:hidden backdrop-blur-lg z-50 flex justify-between items-center px-4'
      >
        <h1 className='text-black dark:text-white text-xl font-semibold'>Portfolio</h1>
        <div className='flex items-center gap-4 pr-3'>
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-gray-700" />}
          </button>
          <div onClick={handleMenu} className='cursor-pointer z-50 text-black dark:text-white'>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </motion.div>

      {/* Mobile Drawer (Kept with CSS transitions for simplicity) */}
      <div className={`fixed top-0 w-[250px] h-screen bg-gray-50 dark:bg-[#0a0a0a] z-20 border-l border-gray-300 dark:border-gray-800 transition-all duration-500 ease-in-out ${isMenuOpen ? 'right-0' : 'right-[-110%]'}`}>
        <ul className='flex flex-col items-start gap-8 pt-24 px-8 text-xl text-black dark:text-white'>
          {navItems.map((item) => (
            <li key={item.id} className='flex items-center gap-4 cursor-pointer hover:text-[#886fb8]' onClick={() => { scrollToSection(item.id); setIsMenuOpen(false); }}>
              {item.icon}
              <a href={`#${item.id}`}>{item.name}</a>
            </li>
          ))}
          <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-800 my-2"></div>
          <li>
            <a href="https://drive.google.com/file/d/1SXmDjmH9x5Ju3LiuQ6ZYipRMnL_SyxOZ/view?usp=sharing" className='flex items-center gap-3 text-[#886fb8] font-medium'>
              <FileText size={20} /> Resume
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;