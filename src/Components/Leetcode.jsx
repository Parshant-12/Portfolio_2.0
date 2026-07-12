import React from 'react';
import { Target, TrendingUp, Flame, Calendar, Trophy, GitCommit, ExternalLink, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

function LeetCode() {
  // Hardcoded stats based on your updated values
  const stats = {
    totalSolved: 372,
    easy: { solved: 148, total: 953, color: "bg-emerald-400" },
    medium: { solved: 188, total: 2081, color: "bg-amber-400" },
    hard: { solved: 36, total: 951, color: "bg-rose-500" },
    rating: 1773, 
    globalRank: "79,683 / 875,443",
    topPercentage: "9.3%",
    contestsAttended: 10,
    activeDays: 152,
    maxStreak: 75,
    badges: 6,
    submissions: 644
  };

  const circlePercentage = (stats.totalSolved / (stats.easy.total + stats.medium.total + stats.hard.total)) * 100;
  // Updated radius to 60 as requested
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circlePercentage / 100) * circumference;

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

  return (
    <motion.div 
      id="Leetcode" 
      className='container mx-auto px-4 md:px-8 py-24 flex flex-col justify-center text-slate-900 dark:text-white font-sans'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      
      {/* Header */}
      <motion.div variants={itemVariants} className='w-full text-center mb-12'>
        <h2 className='text-4xl font-extrabold tracking-tight mb-3'>
          Leetcode<span className="text-[#9670df] dark:text-[#b28ff1]"> Progress</span>
        </h2>
        <div className="w-[360px] h-1 mt-1 mb-4 bg-gradient-to-r from-[#9670df] to-transparent mx-auto rounded-full"></div>
        <p className='text-slate-600 dark:text-slate-400 text-lg'>
          DSA isn't just practice — it's how I sharpen problem-solving daily.
        </p>
      </motion.div>

      {/* 3-Card Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full'>
        
        {/* Card 1: Solved Statistics */}
        <motion.div variants={itemVariants} className='p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col h-full hover:border-[#b28ff1] dark:hover:border-[#b28ff1] transition-colors'>
          <div className="flex justify-between items-center mb-8">
            <h3 className='text-lg font-bold'>Solved Statistics</h3>
            <Target size={20} className="text-amber-500" />
          </div>
          
          <div className="flex justify-center mb-8 relative">
            <svg className="transform -rotate-90 w-32 h-32">
              <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-slate-200 dark:text-slate-700" />
              <circle 
                cx="64" 
                cy="64" 
                r="60" 
                stroke="currentColor" 
                strokeWidth="6" 
                fill="transparent" 
                strokeDasharray={circumference} 
                strokeDashoffset={strokeDashoffset} 
                className="text-amber-500 transition-all duration-1000 ease-in-out" 
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">{stats.totalSolved}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">SOLVED</span>
            </div>
          </div>

          <div className="space-y-4 mt-auto">
            {['easy', 'medium', 'hard'].map((difficulty) => {
              const data = stats[difficulty];
              const percent = (data.solved / data.total) * 100;
              return (
                <div key={difficulty} className="w-full">
                  <div className="flex justify-between text-sm mb-1">
                    <span className={`capitalize font-medium ${data.color.replace('bg-', 'text-')}`}>
                      {difficulty}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      <span className="text-slate-900 dark:text-white font-medium">{data.solved}</span>/{data.total}
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                    <div className={`${data.color} h-1.5 rounded-full`} style={{ width: `${percent}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Card 2: Contest Stats */}
        <motion.div variants={itemVariants} className='p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col h-full hover:border-[#b28ff1] dark:hover:border-[#b28ff1] transition-colors'>
          <div className="flex justify-between items-center mb-8">
            <h3 className='text-lg font-bold'>Contest Stats</h3>
            <TrendingUp size={20} className="text-blue-500" />
          </div>
          
          <div className="text-center mb-10">
            <div className="text-6xl font-extrabold text-[#9670df] dark:text-[#b28ff1] tracking-tight mb-2">
              {stats.rating}
            </div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wider">
              CONTEST RATING
            </div>
          </div>

          <div className="space-y-4 mt-auto">
            <div className="flex justify-between items-center py-3 border-b border-slate-100 dark:border-slate-800">
              <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <TrendingUp size={16} /> Global Rank
              </span>
              <span className="text-sm font-medium">{stats.globalRank}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-100 dark:border-slate-800">
              <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Trophy size={16} /> Top Percentage
              </span>
              <span className="text-sm font-medium">{stats.topPercentage}</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Target size={16} /> Contests Attended
              </span>
              <span className="text-sm font-medium">{stats.contestsAttended}</span>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Consistency */}
        <motion.div variants={itemVariants} className='p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col h-full hover:border-[#b28ff1] dark:hover:border-[#b28ff1] transition-colors'>
          <div className="flex justify-between items-center mb-6">
            <h3 className='text-lg font-bold'>Consistency</h3>
            <Flame size={20} className="text-rose-500" />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-50 dark:bg-[#1F2937] rounded-xl p-4 border border-slate-100 dark:border-slate-700/50">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">
                <Calendar size={14} className="text-blue-500 dark:text-blue-400" /> ACTIVE DAYS
              </div>
              <div className="text-2xl font-bold">{stats.activeDays}</div>
            </div>
            
            <div className="bg-slate-50 dark:bg-[#1F2937] rounded-xl p-4 border border-slate-100 dark:border-slate-700/50">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">
                <Flame size={14} className="text-orange-500" /> MAX STREAK
              </div>
              <div className="text-2xl font-bold">{stats.maxStreak} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">days</span></div>
            </div>

            <div className="bg-slate-50 dark:bg-[#1F2937] rounded-xl p-4 border border-slate-100 dark:border-slate-700/50">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">
                <Trophy size={14} className="text-amber-500 dark:text-amber-400" /> BADGES
              </div>
              <div className="text-2xl font-bold">{stats.badges}</div>
            </div>

            <div className="bg-slate-50 dark:bg-[#1F2937] rounded-xl p-4 border border-slate-100 dark:border-slate-700/50">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">
                <GitCommit size={14} className="text-emerald-500 dark:text-emerald-400" /> SUBMISSIONS
              </div>
              <div className="text-2xl font-bold">{stats.submissions}</div>
            </div>
          </div>

          <a 
            href="https://leetcode.com/parshant1290" 
            target="_blank" 
            rel="noreferrer"
            className="mt-auto w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 rounded-lg transition-colors duration-300"
          >
            <ExternalLink size={18} />
            View LeetCode Profile
          </a>
        </motion.div>
      </div>

      {/* Submission Heatmap Section */}
      <motion.div variants={itemVariants} className="mt-8 max-w-6xl mx-auto w-full p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xl hover:border-[#b28ff1] dark:hover:border-[#b28ff1] transition-colors">
        <div className="flex justify-between items-center mb-6">
          <h3 className='text-lg font-bold'>Submission Heatmap</h3>
          <Activity size={20} className="text-emerald-500" />
        </div>
        
        {/* Container handling the CSS crop */}
        <div className="w-full overflow-hidden flex justify-center items-center rounded-xl bg-transparent">
          <img 
            src="https://leetcard.jacoblin.cool/parshant1290?theme=dark&font=Inter&ext=heatmap" 
            alt="LeetCode Submission Heatmap" 
            /* object-cover and object-bottom paired with a fixed height chops off the top of the image */
            className="w-full max-w-[800px] h-[56px] sm:h-[180px] md:h-[193px] object-cover object-bottom opacity-90 hover:opacity-100 transition-opacity"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = `<div class="p-8 text-center text-slate-500">Live submission graph temporarily unavailable. Please view directly on LeetCode.</div>`;
            }}
          />
        </div>
      </motion.div>

    </motion.div>
  );
}

export default LeetCode;