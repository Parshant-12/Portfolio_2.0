import React from 'react';
import { Briefcase, Calendar, ExternalLink, Sparkles, Layout, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

function Experience() {
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
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const experiences = [
    {
      id: 1,
      role: "Freelance Web Developer",
      company: "Independent Client (Professional Editor)",
      date: "Jan 2024 - Present",
      description: "Designed and engineered a high-performance, interactive portfolio website for a professional video editor to showcase their creative assets.",
      highlights: [
        {
          icon: <Sparkles size={16} className="text-amber-500" />,
          text: "Implemented custom CSS3 animations and transitions to create a highly engaging, seamless user experience."
        },
        {
          icon: <Layout size={16} className="text-blue-500" />,
          text: "Architected a responsive, mobile-first DOM structure ensuring intuitive navigation across all devices."
        },
        {
          icon: <Zap size={16} className="text-emerald-500" />,
          text: "Optimized media loading and rendering performance using semantic HTML5 and vanilla JavaScript."
        }
      ],
      tech: ["HTML5", "CSS3", "JavaScript"],
      link: "https://parshant-12.github.io/Deepak.gfx/"
    }
    // You can add your future summer internships here!
  ];

  return (
    <motion.div 
      id="Experience" 
      className='container mx-auto px-2 md:px-8 py-24 text-slate-900 dark:text-white'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once:false, amount: 0.15 }}
    >
      
      {/* Header */}
      <motion.div variants={itemVariants} className='w-full text-center lg:text-left mb-16'>
        <h2 className='text-4xl font-extrabold tracking-tight'>
          Professional <span className="text-[#9670df] dark:text-[#b28ff1]">Experience</span>
        </h2>
        <div className="w-24 h-1 mt-4 bg-gradient-to-r from-[#9670df] to-transparent mx-auto lg:mx-0 rounded-full"></div>
        <p className='mt-6 text-lg text-slate-600 dark:text-slate-400 font-light max-w-2xl'>
          Real-world project delivery, freelance development, and professional roles.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto lg:mx-0">
        
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

        <div className="flex flex-col gap-12">
          {experiences.map((exp) => (
            <motion.div key={exp.id} variants={itemVariants} className="relative pl-12 md:pl-20 group">
              
              {/* Timeline Dot */}
              <div className="absolute left-[11px] md:left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-slate-900 border-2 border-[#9670df] dark:border-[#b28ff1] group-hover:bg-[#9670df] dark:group-hover:bg-[#b28ff1] transition-colors shadow-[0_0_10px_rgba(150,112,223,0.3)]"></div>

              {/* Content Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-[#b28ff1] dark:hover:border-[#b28ff1] transition-all duration-300 shadow-sm hover:shadow-md">
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Briefcase size={22} className="text-[#9670df] dark:text-[#b28ff1]" />
                      {exp.role}
                    </h3>
                    <div className="text-lg font-medium text-slate-700 dark:text-slate-300 mt-1">
                      {exp.company}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm font-semibold px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full w-fit">
                    <Calendar size={16} />
                    {exp.date}
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Highlights */}
                <div className="flex flex-col gap-3 mb-8">
                  {exp.highlights.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 bg-white dark:bg-slate-800 p-1.5 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm">
                        {item.icon}
                      </div>
                      <span className="text-slate-700 dark:text-slate-300">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer: Tech Stack & Link */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-semibold text-[#9670df] dark:text-[#b28ff1] bg-[#9670df]/10 dark:bg-[#b28ff1]/10 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {exp.link !== "#" && (
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-[#9670df] dark:hover:text-[#b28ff1] transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Live Site
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </motion.div>
  );
}

export default Experience;