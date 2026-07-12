import React from 'react';
import { ReactTyped } from "react-typed";
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import Photo from '../img/51.png';
function Home() {
    const onButtonClick = () => {
        const pdfUrl = "https://drive.google.com/file/d/1SXmDjmH9x5Ju3LiuQ6ZYipRMnL_SyxOZ/view?usp=sharing";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Resume_Parshant.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Animation Configurations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Delay between each element appearing
                delayChildren: 0.2,    // Initial delay before the sequence starts
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 }, // Starts invisible and slightly pushed down
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <motion.div 
            id="Home" 
            className='min-h-screen pt-20 pb-32 lg:pb-16 flex flex-col-reverse lg:flex-row lg:justify-between container mx-auto px-4 md:px-8 items-center text-slate-900 dark:text-white'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >

            {/* Left Content Column */}
            <div className='lg:w-1/2 w-full flex flex-col text-center lg:text-left mt-12 lg:mt-0'>

                {/* Open to Opportunities Badge */}
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 mb-6 w-fit mx-auto lg:mx-0 shadow-sm transition-all hover:scale-105 cursor-default">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                        Open to opportunities
                    </span>
                </motion.div>

                <motion.div variants={itemVariants} className='sm:text-3xl text-2xl pb-3 font-light text-gray-500 dark:text-gray-400'>
                    Hello, Welcome
                </motion.div>
                
                <motion.div variants={itemVariants} className='sm:text-6xl text-5xl py-2 font-extrabold tracking-tight text-slate-900 dark:text-white'>
                    I'm <span className="text-[#9670df] dark:text-[#b28ff1]">Parshant Kumar</span>
                </motion.div>

                <motion.div variants={itemVariants} className='sm:text-2xl text-xl mt-4 mb-8 h-[80px]'>
                    Passionate <span className='text-[#9670df] dark:text-[#b28ff1] font-bold'>Software Developer</span> building efficient solutions using: <br />
                    <span className="font-mono font-medium text-slate-700 dark:text-gray-300">
                        <ReactTyped
                            strings={[
                                "Data Structures and Algorithms",
                                "Full-Stack Web Development",
                                "Competitive Programming",
                                "Scalable System Design"
                            ]}
                            typeSpeed={50}
                            backSpeed={30}
                            backDelay={1500}
                            loop
                        />
                    </span>
                </motion.div>

                <motion.div variants={itemVariants} className='flex gap-4 py-4 items-center justify-center lg:items-start lg:justify-start'>
                    <button
                        onClick={onButtonClick}
                        className='flex gap-2 items-center justify-center border-2 border-[#b28ff1] bg-transparent text-[#9670df] hover:text-white rounded-lg h-[50px] px-6 text-lg font-medium hover:bg-[#9670df] transition-colors duration-300'
                    >
                        <Download size={20} />
                        Resume
                    </button>

                    <button
                        onClick={() => window.open('https://github.com/Parshant-12', '_blank')}
                        className='flex gap-2 items-center justify-center border-2 border-[#b28ff1] bg-transparent text-[#9670df] rounded-lg h-[50px] px-6 text-lg font-medium hover:bg-[#b28ff1] hover:text-white dark:hover:text-slate-900 transition-colors duration-300'
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        GitHub
                    </button>
                </motion.div>
            </div>

            {/* Right Content Column (Updated alignment here) */}
            <motion.div variants={itemVariants} className='lg:w-1/2 w-full flex justify-center lg:justify-end items-center mt-10 lg:mt-0 lg:pr-12 xl:pr-24'>
                <div className="relative w-[200px] md:w-[350px] lg:w-[400px]">
                    <div className="absolute inset-0 rounded-full border-4 border-[#b28ff1] dark:border-white/80 shadow-2xl dark:shadow-[#b28ff1]/40 scale-105 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-950"></div>

                    <img
                        className='relative z-10 w-full object-cover rounded-full'
                        src={Photo}
                        alt="Parshant Kumar"
                    />
                </div>
            </motion.div>

        </motion.div>
    );
}

export default Home;