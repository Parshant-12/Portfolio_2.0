import React from 'react'
import { ReactTyped } from "react-typed";
function Home() {
    const onButtonClick = () => {
        const pdfUrl = "Sample.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "src/Documents/Resume_0.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (

        <div className='min-h-screen pt-20 pb-32 lg:pb-16 text-white flex flex-col-reverse lg:flex-row lg:justify-between container m-auto items-center'>
            <div className='lg:w-1/2 w-full text-center lg:text-left'>
                <div className='sm:text-3xl text-2xl py-3'>Hello, Welcome</div>
                <div className='sm:text-5xl text-4xl py-4'>I'm Parshant Kumar</div>
                <p className='sm:text-2xl text-lg'>Skilled <span className='text-[#b28ff1]'>web developer</span> experienced in creating responsive and user-friendly websites using:&nbsp;
                <ReactTyped
                    strings={[
                        "HTML",
                        "Tailwind CSS",
                        "Javascript",
                        "Node.js",
                        "Express.js",
                        "React.js",
                    ]}
                    typeSpeed={50}
                    backSpeed={50}
                    loop
                ></ReactTyped></p>
                <div className='flex gap-4 py-4 items-center justify-center lg:items-start lg:justify-start'>
                    <button className='flex border-2 border-[#b28ff1] rounded-lg h-[46px] w-[126px] justify-center items-center bg-transparent text-[#b28ff1] text-2xl font-medium hover:bg-[#b28ff1] hover:text-[#0b0427] transition-all duration-200 ease-in-out hover:scale-105' onClick={onButtonClick}>Resume</button>
                    <button className='flex border-2 border-[#b28ff1] rounded-lg h-[46px] w-[126px] justify-center items-center bg-transparent text-[#b28ff1] text-2xl font-medium hover:bg-[#b28ff1] hover:text-[#0b0427] transition-all duration-200 ease-in-out hover:scale-105'>GitHub</button>
                </div>
            </div>
            <div>
                <img className='w-[450px]' src="src/img/photo.png" alt="Photo" />
                {/* <img className='w-[350px] outline outline-4 outline-white rounded-full' src="src/img/51.png" alt="Photo" /> */}
            </div>
        </div>

    )
}

export default Home
