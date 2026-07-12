import React from 'react';
import { Code2, Layout, Database, BrainCircuit, Wrench, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import dsa from '../svg/dsa.svg';
import oop from '../svg/oop.svg';
import render from '../svg/render.svg';
import prompt from '../svg/prompt.svg';
import aiagent from '../svg/aiagent.svg';

function Skills() {
  // Animation Configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Helper function to render the 3-level proficiency bars
  const renderProficiency = (level) => {
    return (
      <div className="flex gap-1 mt-1.5">
        {[1, 2, 3].map((bar) => (
          <div 
            key={bar} 
            className={`h-1 w-3 rounded-full transition-colors duration-300 ${
              bar <= level 
                ? 'bg-[#9670df] dark:bg-[#b28ff1]' 
                : 'bg-slate-200 dark:bg-slate-700'
            }`}
          ></div>
        ))}
      </div>
    );
  };

  const skillCategories = [
    {
      title: "Core Languages",
      icon: <Code2 size={24} />,
      description: "Foundational programming languages for DSA and core logic.",
      skills: [
        { name: "C++", level: 3, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", boxGlow: "hover:border-[#00599C] hover:shadow-[0_0_15px_rgba(0,89,156,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(0,89,156,0.8)]" },
        { name: "Python", level: 3, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", boxGlow: "hover:border-[#3776AB] hover:shadow-[0_0_15px_rgba(55,118,171,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(55,118,171,0.8)]" },
        { name: "SQL", level: 2, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", boxGlow: "hover:border-[#007FFF] hover:shadow-[0_0_15px_rgba(0,127,255,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(0,127,255,0.8)]" },
        { name: "JavaScript", level: 2, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", boxGlow: "hover:border-[#F7DF1E] hover:shadow-[0_0_15px_rgba(247,223,30,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(247,223,30,0.8)]" }
      ]
    },
    {
      title: "Core CS Subjects",
      icon: <BookOpen size={24} />,
      description: "Fundamental computer science concepts for optimized engineering.",
      skills: [
        { name: "DSA", level: 3, img: dsa, boxGlow: "hover:border-[#ED8B00] hover:shadow-[0_0_15px_rgba(237,139,0,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_#3b82f6]" },
        { name: "OOP", level: 3, img: oop, boxGlow: "hover:border-[#ED8B00] hover:shadow-[0_0_15px_rgba(237,139,0,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(237,139,0,0.8)]" },
        { name: "OS", level: 3, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", boxGlow: "hover:border-[#FCC624] hover:shadow-[0_0_15px_rgba(252,198,36,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(252,198,36,0.8)]" },
        { name: "DBMS", level: 3, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", boxGlow: "hover:border-[#007FFF] hover:shadow-[0_0_15px_rgba(0,127,255,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(0,127,255,0.8)]" },
        { name: "Computer Networks", level: 1, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/networkx/networkx-original.svg", boxGlow: "hover:border-[#00599C] hover:shadow-[0_0_15px_rgba(0,89,156,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(0,89,156,0.8)]" }
      ]
    },
    {
      title: "Backend & Databases",
      icon: <Database size={24} />,
      description: "Architecting scalable APIs and managing data storage.",
      skills: [
        { name: "Node.js", level: 2, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", boxGlow: "hover:border-[#339933] hover:shadow-[0_0_15px_rgba(51,153,51,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(51,153,51,0.8)]" },
        { name: "Express.js", level: 2, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", boxGlow: "hover:border-[#886fb8] hover:shadow-[0_0_15px_rgba(136,111,184,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(136,111,184,0.8)] dark:bg-white dark:rounded-full" },
        { name: "MongoDB", level: 2, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", boxGlow: "hover:border-[#47A248] hover:shadow-[0_0_15px_rgba(71,162,72,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(71,162,72,0.8)]" },
        { name: "MySQL", level: 2, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", boxGlow: "hover:border-[#4479A1] hover:shadow-[0_0_15px_rgba(68,121,161,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(68,121,161,0.8)]" }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Layout size={24} />,
      description: "Building responsive and interactive user interfaces.",
      skills: [
        { name: "React.js", level: 2, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", boxGlow: "hover:border-[#61DAFB] hover:shadow-[0_0_15px_rgba(97,218,251,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(97,218,251,0.8)]" },
        { name: "Tailwind", level: 3, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", boxGlow: "hover:border-[#06B6D4] hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" },
        { name: "HTML5", level: 3, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", boxGlow: "hover:border-[#E34F26] hover:shadow-[0_0_15px_rgba(227,79,38,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(227,79,38,0.8)]" }
      ]
    },
    {
      title: "AI & Data Science",
      icon: <BrainCircuit size={24} />,
      description: "Leveraging data for predictive modeling and analytics.",
      skills: [
        { name: "Pandas", level: 2, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg", boxGlow: "hover:border-[#150458] hover:shadow-[0_0_15px_rgba(21,4,88,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(21,4,88,0.8)]" },
        { name: "NumPy", level: 2, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg", boxGlow: "hover:border-[#4D77CF] hover:shadow-[0_0_15px_rgba(77,119,207,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(77,119,207,0.8)]" },
        { name: "AI Agents", level: 2, img: aiagent, boxGlow: "hover:border-[#FF6F00] hover:shadow-[0_0_15px_rgba(255,111,0,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(255,111,0,0.8)]" },
        { name: "Prompt Eng.", level: 2, img: prompt , boxGlow: "hover:border-[#4EAA25] hover:shadow-[0_0_15px_rgba(78,170,37,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_#a600a6]" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={24} />,
      description: "Development tools that streamline the engineering workflow.",
      skills: [
        { name: "Git/GitHub", level: 3, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", boxGlow: "hover:border-[#886fb8] hover:shadow-[0_0_15px_rgba(136,111,184,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(136,111,184,0.8)] dark:bg-white dark:rounded-full" },
        { name: "VS Code", level: 3, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", boxGlow: "hover:border-[#007ACC] hover:shadow-[0_0_15px_rgba(0,122,204,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(0,122,204,0.8)]" },
        { name: "Vercel", level: 2, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", boxGlow: "hover:border-[#000000] dark:hover:border-[#FFFFFF] hover:shadow-[0_0_15px_rgba(150,150,150,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(150,150,150,0.8)] dark:bg-white dark:rounded-full" },
        { name: "Render", level: 2, img: render, boxGlow: "hover:border-[#46E3B7] hover:shadow-[0_0_15px_rgba(70,227,183,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(150,150,150,0.8)]" },
        { name: "Postman", level: 2, img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", boxGlow: "hover:border-[#FF6C37] hover:shadow-[0_0_15px_rgba(255,108,55,0.15)]", imgGlow: "group-hover:drop-shadow-[0_0_10px_rgba(255,108,55,0.8)]" }
      ]
    }
  ];

  return (
    <motion.div 
      id="Skills" 
      className='min-h-screen container mx-auto px-4 md:px-8 py-24 flex flex-col justify-center text-slate-900 dark:text-white'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      
      <motion.div variants={itemVariants} className='w-full text-center lg:text-left mb-16'>
        <h2 className='text-4xl font-extrabold tracking-tight'>
          My <span className="text-[#9670df] dark:text-[#b28ff1]">Skills</span>
        </h2>
        <div className="w-24 h-1 mt-4 bg-gradient-to-r from-[#9670df] to-transparent mx-auto lg:mx-0 rounded-full"></div>
        <p className='mt-6 text-lg text-slate-600 dark:text-slate-400 font-light max-w-2xl'>
          Technologies and tools I work with to build high-performance applications and solve complex algorithmic problems.
        </p>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className='p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-[#b28ff1] dark:hover:border-[#b28ff1] transition-colors duration-300 shadow-sm hover:shadow-md'
          >
            <div className="flex items-center gap-4 mb-6 text-[#9670df] dark:text-[#b28ff1]">
              <div className="p-3 bg-[#9670df]/10 dark:bg-[#b28ff1]/10 rounded-xl">
                {category.icon}
              </div>
              <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                {category.title}
              </h3>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex}
                  className={`group flex flex-col items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 cursor-pointer min-h-[100px] ${skill.boxGlow}`}
                >
                  <div className="flex flex-col items-center flex-grow justify-center">
                    <img 
                      src={skill.img} 
                      alt={skill.name} 
                      className={`w-10 h-10 object-contain mb-2 transition-all duration-300 dark:drop-shadow-sm ${skill.imgGlow}`}
                      onError={(e) => {
                        e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg";
                      }}
                    />
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                  
                  {renderProficiency(skill.level)}
                  
                </div>
              ))}
            </div>
            
          </motion.div>
        ))}

      </div>
    </motion.div>
  );
}

export default Skills;