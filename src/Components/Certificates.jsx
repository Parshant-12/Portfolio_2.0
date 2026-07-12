import React from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

function Certifications() {
  // Pre-filled with your actual achievements for immediate use
  const certifications = [
    {
      id: 1,
      title: "Python for Data Science",
      issuer: "NPTEL",
      date: "2026",
      details: "Elite Gold Certified (Top 1%, Score: 91%)",
      link: "https://drive.google.com/file/d/1ztopS2HgS2fCEuVv3PVhDeNDzuFHfMQo/view?usp=sharing" // Paste your Google Drive link here
    },
    {
      id: 2,
      title: "DSA using Python",
      issuer: "NPTEL",
      date: "2025",
      details: "Elite Certified",
      link: "https://drive.google.com/file/d/1qn6O9xXYFt2-kCteCGtBnUE4HGWgenHy/view?usp=sharing" 
    },
    {
      id: 3,
      title: "Introduction to AI",
      issuer: "Infosys",
      date: "2025",
      details: "Completed AI Foundations Program",
      link: "https://drive.google.com/file/d/1-OqP1d9zmJj8t2yr_x3JBgKRFlF_B-qU/view?usp=sharing" 
    },
    {
      id: 4,
      title: "Competitive Programming",
      issuer: "TLE Eliminators",
      date: "2024",
      details: "Level 2 Excellence",
      link: "https://drive.google.com/file/d/1F4LmWlx8IMW4e-PFbDgy0lFQ1g_Lj1wD/view?usp=sharing" 
    },
    {
      id: 5,
      title: "1st Position: National Science Day",
      issuer: "CGC Landran",
      date: "2024",
      details: "Project Exhibition Winner",
      link: "https://drive.google.com/file/d/1AkTq44MeyhPXoFJtIJvXLEbhKKlb8-uB/view?usp=sharing" 
    },
    {
      id: 6,
      title: "1st Position: Eminence",
      issuer: "CEC Landran",
      date: "2024",
      details: "Technical Event Winner",
      link: "https://drive.google.com/file/d/1XVIyIm5G4l6xLzAbydmPBfNdldw8kIPh/view?usp=sharing" 
    },
    {
      id: 7,
      title: "3rd Position: Technical Treasure Hunt",
      issuer: "CGC Landran",
      date: "2023",
      details: "Analytical Problem Solving",
      link: "https://drive.google.com/file/d/1AEXL-41vR7Duh_Y3VK6b4e4pUOj7wwD1/view?usp=sharing" 
    },
    {
      id: 8,
      title: "Smart India Hackathon (Internal)",
      issuer: "CGC Landran",
      date: "2025",
      details: "Project Participant (Backend & Hardware)",
      link: "https://drive.google.com/file/d/1sfxWiOJe2DD3Mvr-DTFdoi5LIPefUfKU/view?usp=sharing" 
    }
  ];

  // We duplicate the array to create a seamless infinite scrolling loop
  const scrollItems = [...certifications, ...certifications];

  return (
    <div id="Certifications" className='container mx-auto px-3 md:px-8 py-24 flex flex-col justify-center text-slate-900 dark:text-white overflow-hidden'>
      
      {/* Embedded CSS for the infinite scroll animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 1rem)); } /* Shifts exactly half the duplicated width */
          }
          .animate-infinite-scroll {
            display: flex;
            width: max-content;
            animation: scroll 40s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Header */}
      <div className='w-full text-center lg:text-left mb-16'>
        <h2 className='text-4xl font-extrabold tracking-tight'>
          Certifications
        </h2>
        <div className="w-24 h-1 mt-4 bg-gradient-to-r from-[#9670df] to-transparent mx-auto lg:mx-0 rounded-full"></div>
        <p className='mt-6 text-lg text-slate-600 dark:text-slate-400 font-light max-w-2xl'>
          Continuous learning and verified achievements in competitive programming, core engineering, and data science.
        </p>
      </div>

      {/* Auto-Scrolling Container */}
      <div className="relative w-full overflow-hidden flex">
        
        {/* Left/Right Fade Gradients (for a premium look) */}
        <div className="absolute left-0 top-0 bottom-0 w-6 md:w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-6 md:w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>

        <div className="animate-infinite-scroll gap-6 py-4 px-4">
          {scrollItems.map((cert, index) => (
            <div 
              key={`${cert.id}-${index}`} 
              className='group relative w-[300px] md:w-[350px] h-[200px] flex flex-col justify-between p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 overflow-hidden'
            >
              
              {/* Card Content */}
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 bg-[#9670df]/10 dark:bg-[#b28ff1]/10 rounded-lg text-[#9670df] dark:text-[#b28ff1]">
                    <Award size={24} />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full">
                    {cert.date}
                  </span>
                </div>
                
                <h3 className='text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2'>
                  {cert.title}
                </h3>
                
                <p className='text-sm text-slate-500 dark:text-slate-400'>
                  {cert.issuer}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                <ShieldCheck size={16} />
                {cert.details}
              </div>

              {/* Hover Overlay with View Button */}
              <div className="absolute inset-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#9670df] hover:bg-[#8563c9] dark:bg-[#b28ff1] dark:hover:bg-[#9e7be0] text-white dark:text-slate-900 font-bold rounded-lg transition-transform transform scale-95 group-hover:scale-100 duration-300"
                >
                  <ExternalLink size={18} />
                  View Credential
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Certifications;