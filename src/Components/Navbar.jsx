import React from 'react'
import { useRef, useState } from 'react';

function Navbar({ scrollToSection }) {
  const ref = useRef();
  const menuref = useRef();

  const [isMenuOpen, setisMenuOpen] = useState(false);
  function handleMenu() {
    if (isMenuOpen) {
      ref.current.src = "src/svg/Menu.svg"
      menuref.current.style.right = "-110%";
    }
    else {
      ref.current.src = "src/svg/Cross.svg"
      menuref.current.style.right = 0;
    }
    setisMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className='w-full pt-3 fixed border-[#886fb8] md:flex flex-col items-center hidden z-30'>
        <ul className='flex rounded-lg px-8 py-2 items-center justify-center gap-14 text-2xl font-light text-white backdrop-blur-lg w-fit '>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={() => scrollToSection('Home')}><a href="#Home">Home</a></li>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={() => scrollToSection('About')}><a href="#About">About</a></li>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={() => scrollToSection('Services')}><a href="#Services">Services</a></li>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={() => scrollToSection('Projects')}><a href="#Projects">Projects</a></li>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={() => scrollToSection('Contacts')}><a href="#Contacts">Contacts</a></li>
        </ul>
        <div className="w-[640px] h-0.5 mx-auto bg-[#886fb8]"></div>
      </nav>
      <div className='fixed h-14 w-full border-b-2 md:hidden backdrop-blur-lg z-20'>
        <h1 className='text-white text-xl py-3 px-4'>Portfolio</h1>
      </div>
      <div onClick={handleMenu} className='md:hidden fixed right-0 py-3 px-6 cursor-pointer z-30'><img ref={ref} src="src/svg/Menu.svg" alt="menu" /></div>
      <div className='fixed w-[250px] h-screen right-[-110%] bg-black z-20 border-l border-white transition-all duration-500 ease-in-out' ref={menuref}>
        <ul className='flex flex-col items-center justify-center gap-10 pt-20 text-2xl text-white'>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={()=>{scrollToSection('Home')}}><a href="#Home">Home</a></li>
          {/* <div className="h-[1px] mx-auto bg-white"></div> */}
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={()=>{scrollToSection('About')}}><a href="#About">About</a></li>
          {/* <div className="h-[1px] mx-auto bg-white"></div> */}
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={()=>{scrollToSection('Services')}}><a href="#Services">Services</a></li>
          {/* <div className="h-[1px] mx-auto bg-white"></div> */}
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={()=>{scrollToSection('Projects')}}><a href="#Project">Projects</a></li>
          {/* <div className="h-[1px] mx-auto bg-white"></div> */}
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={()=>{scrollToSection('Contacts')}}><a href="#Contacts">Contacts</a></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar