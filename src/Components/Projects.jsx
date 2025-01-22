import React from 'react'

function Projects() {
    return (
        <div className='text-white h-auto container m-auto flex flex-col items-center justify-center py-32'>
            <h1 className='text-4xl animate-infinite-glow'>PROJECTS</h1>
            <div className="w-44 h-0.5 mx-auto mt-1 bg-[#886fb8]"></div>
            <div className='flex justify-center items-center gap-20 pb-10 pt-16 flex-wrap'>
                <div className='bg-[#1f192b] border-2 border-[#886fb8] sm:w-[420px] w-[300px] rounded-2xl flex flex-col items-center text-center min-h-[580px] transition-all duration-500 hover:shadow-[0_0_30px_#886fb8] hover:scale-105'>
                    <div className='p-4 overflow-hidden '>
                        <img className='rounded-lg object-cover' src="src/img/safekey.png" alt="SafeKEY Logo" />
                    </div>
                    <h1 className='text-3xl font-semibold pt-3 text-[#886fb8]'>&lt;SafeKEY/&gt;</h1>
                    <p className='text-lg text-gray-500 px-6'>
                        SafeKEY is a secure and intuitive password manager designed to keep your credentials safe.
                        Store, manage, and access all your passwords effortlessly, with advanced encryption ensuring your data is always protected.
                    </p>
                    <p className='py-4'>Html &nbsp;|&nbsp; Css |&nbsp; Javascript |&nbsp; React.js</p>
                    <a href="https://github.com/Parshant-12/SafeKEY---Password-Manager" target='_blank'><button className='mt-auto mb-6 px-6 py-2 bg-[#886fb8] text-white rounded-lg text-sm hover:bg-[#72579d] transition-colors duration-200'>
                        Learn More
                    </button></a>
                </div>
                <div className='bg-[#1f192b] border-2 border-[#886fb8] sm:w-[420px] w-[300px] rounded-2xl flex flex-col items-center text-center min-h-[580px] transition-all duration-500 hover:shadow-[0_0_30px_#886fb8] hover:scale-105'>
                    <div className='p-4 overflow-hidden '>
                        <img className='rounded-lg object-cover' src="src/img/musicspace.png" alt="SafeKEY Logo" />
                    </div>
                    <h1 className='text-3xl font-semibold pt-3 text-[#886fb8]'>MusicSpace</h1>
                    <p className='text-lg text-gray-500 px-6'>
                        MusicSpace is a user-friendly music player website. It features seamless playback, intuitive controls, and dynamic album updates, ensuring a smooth and engaging music experience across all devices.
                    </p>
                    <p className='py-4'>Html &nbsp;|&nbsp; Css |&nbsp; Javascript</p>
                    <div className='flex justify-center items-center gap-8'>
                        <a href="https://www.musicspace.freewebhostmost.com/#" target='_blank'><button className='mt-auto mb-6 px-6 py-2 bg-[#886fb8] text-white rounded-lg text-sm hover:bg-[#72579d] transition-colors duration-200'>
                            <span>LIVE &#8599;</span>
                        </button></a>
                        <a href="https://github.com/Parshant-12/MusicSpace" target='_blank'><button className='mt-auto mb-6 px-6 py-2 bg-[#886fb8] text-white rounded-lg text-sm hover:bg-[#72579d] transition-colors duration-200'>
                            Learn More
                        </button></a>
                    </div>
                </div>
                <div className='bg-[#1f192b] border-2 border-[#886fb8] sm:w-[420px] w-[300px] rounded-2xl flex flex-col items-center text-center min-h-[580px] transition-all duration-500 hover:shadow-[0_0_30px_#886fb8] hover:scale-105'>
                    <div className='p-4 overflow-hidden '>
                        <img className='rounded-lg object-cover' src="src/img/clientsportfolio.png" alt="SafeKEY Logo" />
                    </div>
                    <h1 className='text-3xl font-semibold pt-3 text-[#886fb8]'>Client's Portfolio</h1>
                    <p className='text-lg text-gray-500 px-6'>
                        It is a modern, responsive animated portfolio website designed to showcase the client's projects, skills, and achievements, creating a strong personal brand.
                    </p>
                    <p className='py-4'>Html &nbsp;|&nbsp; Css |&nbsp; Javascript</p>
                    <div className='flex justify-center items-center gap-8'>
                        <a href="https://parshant-12.github.io/Deepak.gfx/" target='_blank'><button className='mt-auto mb-6 px-6 py-2 bg-[#886fb8] text-white rounded-lg text-sm hover:bg-[#72579d] transition-colors duration-200'>
                            <span>LIVE &#8599;</span>
                        </button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
