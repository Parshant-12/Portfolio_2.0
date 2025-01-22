import React from 'react'

function Services() {
  return (
    <div className='container h-auto flex flex-col items-center justify-center m-auto text-white py-32 '>
      <h1 className='text-4xl animate-infinite-glow'>SERVICES</h1>
      <div className="w-44 h-0.5 mx-auto mt-1 bg-[#886fb8]"></div>
      <p className='text-gray-400 text-lg py-2'>What i will do for you</p>
      <div className='flex justify-center items-center gap-20 py-10 flex-wrap'>
        <div className='border-2 border-[#886fb8] w-[290px] rounded-2xl flex flex-col items-center px-6 py-6 text-center min-h-[470px] transition-all duration-300 hover:shadow-[0_0_20px_#886fb8] hover:scale-105 bg-[#1f192b]'>
          <img className='w-52' src="src/img/web-development.png" alt="frontend" />
          <h1 className='text-3xl py-3 text-[#886fb8]'>Frontend Dev</h1>
          <p className='text-lg text-gray-400'>I design responsive and user-friendly websites using modern technologies. My work ensures seamless experiences across all devices.</p>
        </div>
        <div className='border-2 border-[#886fb8] w-[290px] rounded-2xl flex flex-col items-center px-6 py-6 text-center min-h-[470px] transition-all duration-300 hover:shadow-[0_0_20px_#886fb8] hover:scale-105 bg-[#1f192b]'>
          <img className='w-44' src="src/img/backend-dev-Photoroom.png" alt="backend" />
          <h1 className='text-3xl py-3 text-[#886fb8]'>Backend Dev</h1>
          <p className='text-lg text-gray-400'>I build backend systems using Node and Express.js with efficient database management through MongoDB, I ensure your applications are fast and reliable.</p>
        </div>
        <div className='border-2 border-[#886fb8] w-[290px] rounded-2xl flex flex-col items-center px-6 py-6 text-center min-h-[470px] transition-all duration-300 hover:shadow-[0_0_20px_#886fb8] hover:scale-105 bg-[#1f192b]'>
          <img className='w-32' src="src/img/portfolio.png" alt="portfolio" />
          <h1 className='text-3xl py-3 text-[#886fb8]'>Portfolio Websites</h1>
          <p className='text-lg text-gray-400'>Looking for a personal portfolio or business website? I create fast, efficient, and modern single-page or multi-page websites customized to your needs at an affordable cost.</p>
        </div>
      </div>
      <div className='border-l text-lg mt-8'>&nbsp; Have a project in mind? Let's bring your ideas to life! Contact me today.</div>
    </div>
  )
}

export default Services
