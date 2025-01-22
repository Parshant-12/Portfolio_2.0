import React from 'react'

function Footer() {
    return (
        <div className='h-auto bg-gray-900 text-white flex flex-col lg:flex-row justify-between items-center px-12 py-8'>
            <div className='text-center pb-3 text-lg'>&copy; 2025 Parshant Kumar | All rights reserved</div>
            <div className='flex items-center justify-center gap-6'>
                <div className='hover:scale-110 transition-all duration-200'>
                    <a target='_blank' href="https://www.linkedin.com/in/parshantkumar1290/"><img src="src/svg/linkedin.svg" alt="linkedin" /></a>
                </div>
                <div className='hover:scale-110 transition-all duration-200'>
                    <a target='_blank' href="https://github.com/Parshant-12"><img src="src/svg/github.svg" alt="Github" /></a>
                </div>
                <div className='hover:scale-110 transition-all duration-200'>
                    <a target='_blank' href="https://discord.gg/3KPT9RhA"><img src="src/svg/discord.svg" alt="Discord" /></a>
                </div>
                <div className='hover:scale-110 transition-all duration-200'>
                    <a target='_blank' href="https://www.instagram.com/parshant_1290?igsh=MTd0Zmk0bDE4MXN5Zg=="><img src="src/svg/insta.svg" alt="Insta" /></a>
                </div>
                <div className='hover:scale-110 transition-all duration-200'>
                    <a target='_blank' href="https://x.com/Parshant1290"><img src="src/svg/x.svg" alt="X" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
