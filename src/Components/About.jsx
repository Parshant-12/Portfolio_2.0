import React from 'react';
import { Code, Trophy, GraduationCap, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

function About() {
  // Animation Configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each element fading up
        delayChildren: 0.1,    // Initial delay when the section comes into view
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      id="About" 
      className='min-h-screen container mx-auto px-4 md:px-8 py-24 flex flex-col justify-center text-slate-900 dark:text-white'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      
      {/* Section Header */}
      <motion.div variants={itemVariants} className='w-full text-center lg:text-left mb-16'>
        <h2 className='text-4xl font-extrabold tracking-tight'>
          About <span className="text-[#9670df] dark:text-[#b28ff1]">Me</span>
        </h2>
        <div className="w-24 h-1 mt-4 bg-gradient-to-r from-[#9670df] to-transparent mx-auto lg:mx-0 rounded-full"></div>
      </motion.div>

      {/* Main Content Layout */}
      <div className='flex flex-col lg:flex-row gap-16 items-center lg:items-start'>
        
        {/* Left Column: Narrative */}
        <div className='lg:w-1/2 w-full space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-light'>
          <motion.p variants={itemVariants}>
            I am an undergraduate student pursuing a Bachelor of Technology in Artificial Intelligence and Data Science at Chandigarh Engineering College (CEC), Landran. I currently hold a CGPA of 8.18, graduating in 7th semester.
          </motion.p>
          <motion.p variants={itemVariants}>
            My primary focus is on core software engineering fundamentals, full-stack development, and complex algorithmic problem-solving. I am highly active in competitive programming, dedicating my time to mastering Data Structures and Algorithms to build highly efficient and scalable technical solutions.
          </motion.p>
          <motion.p variants={itemVariants}>
            I am currently seeking challenging roles in software development that will allow me to leverage my analytical problem-solving skills in a fast-paced engineering environment. 
          </motion.p>
        </div>

        {/* Right Column: Key Metrics / Highlight Cards */}
        <div className='lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-6'>
          
          {/* Card 1: LeetCode */}
          <motion.div variants={itemVariants} className='p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#b28ff1] dark:hover:border-[#b28ff1] transition-colors duration-300 shadow-sm'>
            <div className="text-[#9670df] dark:text-[#b28ff1] mb-4">
              <Code size={32} />
            </div>
            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-2'>1766 Max Rating</h3>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Achieved top 10% global ranking on LeetCode.
            </p>
          </motion.div>

          {/* Card 2: Codeforces */}
          <motion.div variants={itemVariants} className='p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#b28ff1] dark:hover:border-[#b28ff1] transition-colors duration-300 shadow-sm'>
            <div className="text-[#9670df] dark:text-[#b28ff1] mb-4">
              <Terminal size={32} />
            </div>
            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-2'>500+ Problems</h3>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Solved across algorithmic concepts on Codeforces.
            </p>
          </motion.div>

          {/* Card 3: Hackathon */}
          <motion.div variants={itemVariants} className='p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#b28ff1] dark:hover:border-[#b28ff1] transition-colors duration-300 shadow-sm'>
            <div className="text-[#9670df] dark:text-[#b28ff1] mb-4">
              <Trophy size={32} />
            </div>
            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-2'>1st Position</h3>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Won National Science Day 2024 at CGC Landran.
            </p>
          </motion.div>

          {/* Card 4: Academics */}
          <motion.div variants={itemVariants} className='p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#b28ff1] dark:hover:border-[#b28ff1] transition-colors duration-300 shadow-sm'>
            <div className="text-[#9670df] dark:text-[#b28ff1] mb-4">
              <GraduationCap size={32} />
            </div>
            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-2'>8.5 CGPA</h3>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              B.Tech Artificial Intelligence and Data Science.
            </p>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}

export default About;
