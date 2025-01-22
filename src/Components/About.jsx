import React from 'react'

function About() {
  return (
    <div className='container m-auto h-auto flex flex-col justify-center items-center py-32'>
      <div className=' text-white  text-center'>
        <h1 className='text-4xl animate-infinite-glow'>ABOUT</h1>
        <div className="w-36 h-0.5 mx-auto mt-1 bg-[#886fb8]"></div>
        <p className='text-lg py-4'>I am a passionate and consistent competitive programmer, also specializing in web development and creating responsive and user-friendly websites. I am always eager to expand my skills and knowledge. I have experience with many languages given below and I continuously seek opportunities to grow and explore new technologies.</p>
      </div>
      <div className='pt-12 flex justify-center items-center gap-6 flex-wrap'>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src="src/svg/html.svg" alt="html" /><p className='text-white text-center pt-1 '>HTML</p>
        </div>
        <div className='border-2 border-[#886fb8] pb-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src="src/svg/css.svg" alt="html" /><p className='text-white text-center '>CSS</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src="src/svg/tailwind.svg" alt="html" /><p className='text-white text-center pt-1 '>Tailwind</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src="src/svg/javascript.svg" alt="html" /><p className='text-white text-center pt-1 '>Javascript</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src="src/svg/nodejs.svg" alt="html" /><p className='text-white text-center pt-1 '>Node.js</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src="src/svg/expressjs.svg" alt="html" /><p className='text-white text-center pt-1 '>Express.js</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src="src/svg/reactjs.svg" alt="html" /><p className='text-white text-center pt-1 '>React.js</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src="src/svg/nextjs.svg" alt="html" /><p className='text-white text-center pt-1 '>Next.js</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src="src/svg/cpp.svg" alt="html" /><p className='text-white text-center pt-1 '>C++</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src="src/svg/python.svg" alt="html" /><p className='text-white text-center pt-1 '>Python</p>
        </div>
      </div>
    </div>
  )
}

export default About
