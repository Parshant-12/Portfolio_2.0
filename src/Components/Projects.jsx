import React, { useState, useEffect } from 'react';
import { ExternalLink, X, Zap, Lightbulb, Target, CheckCircle2, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ExpressIcon from '../svg/expressjs.svg';
import Spentio_2 from '../img/Spentio_2.png';
import Smartplant_1 from '../img/Smartplant_1.png';
import Safekey_1 from '../img/Safekey_1.png';
import Spotify_1 from '../img/Spotify_1.png';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const projects = [
    {
      id: 1,
      title: "Smart Plant Care System",
      coverImage: Smartplant_1,
      shortDesc: "IoT-based smart irrigation system with a real-time MERN stack dashboard.",
      fullDesc: "An IoT-based smart irrigation system designed to automate water routing based on real-time soil analytics. It utilizes an ESP8266 microcontroller and C++ for hardware logic, seamlessly integrating with a full-stack MERN dashboard via REST APIs. MongoDB Atlas is leveraged for efficient time-series logging of environmental data.",
      takeaways: [
        "Hardware-to-Web Integration via Websockets",
        "Time-series data logging with MongoDB Atlas",
        "Automated decision-making logic in C++"
      ],
      challenge: "Manual plant care often leads to over-watering or under-watering. Existing automated systems lacked accessible, real-time web dashboards for remote monitoring and historical data analysis.",
      solution: "Developed a hardware-software bridge using an ESP8266 microcontroller to read soil data, processing it in real-time, and rendering actionable analytics on a custom MERN stack dashboard.",
      features: [
        "Real-time soil moisture and temperature analytics",
        "Automated water routing based on sensor thresholds",
        "Full-stack MERN dashboard for remote monitoring",
        "Time-series data visualization",
        "Websockets integration for hardware-software communication",
        "Cloud database management via MongoDB Atlas"
      ],
      tech: [
        { name: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
        { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Express", img: ExpressIcon },
        { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Arduino IDE", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" }
      ],
      github: "https://github.com/Parshant-12/SmartPlantCareSystem",
      live: ""
    },
    {
      id: 2,
      title: "Spentio",
      coverImage: Spentio_2,
      shortDesc: "Full-stack financial tracking application with interactive analytics.",
      fullDesc: "A comprehensive full-stack financial tracking application utilizing the MERN stack. It features secure JWT user authentication, encrypted session management, and highly optimized database aggregation pipelines to handle complex financial queries and generate real-time reports.",
      takeaways: [
        "Complex MongoDB Aggregation Pipelines",
        "Secure JWT Authentication implementation",
        "Building Automated Email Parsing (In Progress)"
      ],
      challenge: "Users often struggle with fragmented financial data, leading to inaccurate personal accounting, poor visibility into cash flow, and budget overruns.",
      solution: "Architected a centralized system that allows users to seamlessly log transactions and visualize their financial health through an interactive, real-time dashboard powered by robust backend aggregation.",
      features: [
        "Secure JWT user authentication & encrypted sessions",
        "Complex MongoDB aggregation for financial reports",
        "Interactive analytics and expense visualization",
        "Comprehensive transaction categorization",
        "Responsive MERN stack architecture"
      ],
      tech: [
        { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Express", img: ExpressIcon },
        { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
      ],
      github: "https://github.com/Parshant-12/Spentio",
      live: "https://spentio.vercel.app/"
    },
    {
      id: 3,
      title: "Safekey",
      coverImage: Safekey_1,
      shortDesc: "A responsive password manager UI built to master React fundamentals.",
      fullDesc: "SafeKey is a front-end digital vault application developed as my first major dive into the React ecosystem. Built entirely for educational purposes, the project focuses heavily on mastering foundational web development concepts like component-based architecture, React state management, and utility-first styling.",
      takeaways: [
        "Mastering React state and prop drilling",
        "Component-based UI architecture",
        "Responsive design with Tailwind CSS"
      ],
      challenge: "Transitioning from basic HTML/JavaScript to a modern, component-driven architecture while learning how to effectively manage dynamic UI states.",
      solution: "Developed a fully interactive, responsive password vault interface to practice state management, dynamic list rendering, and modern front-end styling techniques without the complexity of a backend.",
      features: [
        "Interactive password vault interface",
        "Local state management for UI elements",
        "Responsive, mobile-first design",
        "Dynamic list rendering",
        "Clean, utility-first styling with Tailwind CSS"
      ],
      tech: [
        { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
      ],
      github: "https://github.com/Parshant-12/SafeKEY",
      live: "https://safe-key-three.vercel.app/"
    },
    {
      id: 4,
      title: "Music Space",
      coverImage: Spotify_1,
      shortDesc: "A frontend web player cloning the core UI and playback functionality of Spotify.",
      fullDesc: "Music Space is a frontend web application built entirely with vanilla JavaScript, HTML5, and CSS3 that replicates the core user interface and audio playback features of Spotify. It demonstrates a strong understanding of DOM manipulation, the native HTML5 Audio API, and responsive UI design without relying on heavy frameworks.",
      takeaways: [
        "DOM manipulation using Vanilla JS",
        "Native HTML5 Audio API integration",
        "Responsive CSS flexbox/grid layouts"
      ],
      challenge: "Building a complex, interactive media player interface and managing audio states (play, pause, seek, volume) purely through native browser APIs.",
      solution: "Utilized the HTML5 Audio API paired with custom JavaScript event listeners to synchronize custom UI controls with audio playback, creating a seamless user experience.",
      features: [
        "Custom audio player controls",
        "Dynamic song list rendering",
        "Progress bar tracking and seeking",
        "Responsive layout mimicking Spotify"
      ],
      tech: [
        { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" }
      ],
      github: "https://github.com/Parshant-12/MusicSpace",
      live: ""
    },
    {
      id: 5,
      title: "Online Code Compiler",
      coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      shortDesc: "A browser-based code editor interface built with core web technologies.",
      fullDesc: "A lightweight, browser-based code editor interface built strictly using HTML, CSS, and Vanilla JavaScript. This project focuses on creating a clean, developer-friendly interface for writing and formatting code, serving as a foundational exploration into how web-based IDEs structure their DOM and handle raw user input.",
      takeaways: [
        "Advanced DOM state management",
        "Handling raw user text input efficiently",
        "CSS architecture for IDE-style layouts"
      ],
      challenge: "Designing a code editor interface that handles raw text formatting and maintains a rigid layout similar to professional IDEs using only vanilla web technologies.",
      solution: "Leveraged CSS Grid and Flexbox to create a resizable, multi-pane layout, and used JavaScript to manage the state of the text area and simulate basic editor functionalities.",
      features: [
        "Developer-friendly UI/UX",
        "Multi-pane layout (Editor & Output simulation)",
        "Vanilla JS text state management",
        "Responsive CSS architecture"
      ],
      tech: [
        { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" }
      ],
      github: "https://github.com/Parshant-12/Online-Code-Compiler",
      live: ""
    },
    {
      id: 6,
      title: "Smart Farm IoT Ecosystem",
      coverImage: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=800&auto=format&fit=crop",
      shortDesc: "Real-time agricultural automation system (SIH 2025 Internal Participant).",
      fullDesc: "A collaborative, full-scale smart agriculture platform built for the Smart India Hackathon 2025 (Internal). Serving as the Backend and Hardware Engineer, I constructed the physical IoT architecture using an ESP microcontroller interfaced with a suite of sensors (soil moisture, DHT11, ultrasonic, rain) and relay-controlled water pumps. I architected the Node.js backend to bridge hardware telemetry with the frontend via REST APIs and WebSockets, while other team members focused on UI/UX, AI agents, farmer's marketplace, community discussion page and all.",
      takeaways: [
        "Smart India Hackathon 2025 (Internal) Participant",
        "Hardware-to-Cloud architecture with WebSockets",
        "Cross-functional team collaboration (Backend Lead)"
      ],
      challenge: "Traditional farming relies heavily on reactive, manual watering, leading to resource waste. The challenge was building an automated system that not only monitors live field conditions but coordinates seamlessly between physical hardware, a backend server, and a frontend dashboard.",
      solution: "Engineered a robust IoT backend using Node.js and MongoDB that ingests real-time sensor data via WebSockets. I wrote custom C++ algorithms for the ESP microcontroller to operate water pumps autonomously, factoring in both local hardware sensors and third-party Weather APIs for predictive watering.",
      features: [
        "Real-time bi-directional telemetry using WebSockets",
        "Predictive watering engine utilizing external Weather APIs",
        "Custom C++ hardware algorithms for sensor data processing",
        "Comprehensive sensor suite integration (DHT11, Soil, Rain, Ultrasonic)",
        "RESTful API architecture bridging the IoT hardware and React frontend",
        "Real-time database syncing with MongoDB"
      ],
      tech: [
        { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
        { name: "Arduino", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" },
        { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
      ],
      github: "https://github.com/Parshant-12/SmartFarm", 
      live: "https://krishiguru.vercel.app/" 
    }
  ];

  return (
    <motion.div 
      id="Projects" 
      className='container mx-auto px-4 md:px-8 py-24 text-slate-900 dark:text-white'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >

      {/* Header */}
      <motion.div variants={itemVariants} className='w-full text-center lg:text-left mb-16'>
        <h2 className='text-4xl font-extrabold tracking-tight'>
          Featured <span className="text-[#9670df] dark:text-[#b28ff1]">Projects</span>
        </h2>
        <div className="w-24 h-1 mt-4 bg-gradient-to-r from-[#9670df] to-transparent mx-auto lg:mx-0 rounded-full"></div>
        <p className='mt-6 text-lg text-slate-600 dark:text-slate-400 font-light max-w-2xl'>
          A showcase of my technical projects, ranging from IoT integrations to full-stack web applications.
        </p>
      </motion.div>

      {/* Project Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className='group flex flex-col justify-between rounded-2xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-[#b28ff1] dark:hover:border-[#b28ff1] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden flex-grow'
          >
            {/* Card Cover Image */}
            <div className="w-full h-48 overflow-hidden relative bg-slate-200 dark:bg-slate-800">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t dark:from-[#111827] to-transparent opacity-90"></div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-3">
                <h3 className='text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#9670df] dark:group-hover:text-[#b28ff1] transition-colors'>
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#9670df] dark:hover:text-[#b28ff1] transition-colors">
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
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#9670df] dark:hover:text-[#b28ff1] transition-colors"><ExternalLink size={18} /></a>
                  )}
                </div>
              </div>

              <p className='text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-3'>
                {project.shortDesc}
              </p>

              {/* Tech Stack Mini Icons */}
              <div className='flex gap-2.5 mb-6 mt-auto'>
                {project.tech.map((t, i) => (
                  <div key={i} className="p-1.5 rounded-full bg-slate-200 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50">
                    <img src={t.img} alt={t.name} title={t.name} className="w-4 h-4 object-contain opacity-80 group-hover:opacity-100" />
                  </div>
                ))}
              </div>

              {/* View Case Study Button */}
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full py-3 flex items-center justify-center gap-2 bg-[#9670df] hover:bg-[#8563c9] dark:bg-[#5a4392] dark:hover:bg-[#b28ff1] text-white rounded-xl font-semibold transition-all duration-300"
              >
                <BookOpen size={18} />
                View Case Study
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal (Popup) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-slate-50 dark:bg-[#0a0f1a] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-y-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button (Sticky) */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors backdrop-blur-sm"
              >
                <X size={24} />
              </button>

              {/* Modal Header / Cover Image */}
              <div className="relative w-full h-48 sm:h-64 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <img src={selectedProject.coverImage} alt={selectedProject.title} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-500 dark:from-[#0a0f1a] to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white drop-shadow-md mb-4">{selectedProject.title}</h2>

                  <div className="flex flex-wrap gap-4">
                    {selectedProject.github && (
                      <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-slate-900/10 dark:bg-white/10 hover:bg-slate-900/20 dark:hover:bg-white/20 border border-slate-900/20 dark:border-white/20 text-slate-900 dark:text-white rounded-lg font-medium transition-colors backdrop-blur-sm">
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
                        GitHub Repo
                      </a>
                    )}
                    {selectedProject.live && (
                      <a href={selectedProject.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-[#9670df] hover:bg-[#8563c9] dark:bg-[#5a4392] dark:hover:bg-[#b28ff1] text-white rounded-lg font-medium transition-colors shadow-lg">
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-10 space-y-10">

                {/* Section 1: Recruiter Key Takeaways */}
                <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 mb-6">
                    <Zap className="text-amber-500" size={24} />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Recruiter Key Takeaways</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedProject.takeaways.map((takeaway, index) => (
                      <div key={index} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/50">
                        <div className="text-xs font-bold text-[#9670df] dark:text-[#b28ff1] mb-2 uppercase tracking-wider">Core Impact {index + 1}</div>
                        <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">{takeaway}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 2: Overview */}
                <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Overview</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    {selectedProject.fullDesc}
                  </p>
                </div>

                {/* Section 3: Challenge & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30">
                    <div className="flex items-center gap-2 mb-4 text-rose-600 dark:text-rose-400">
                      <Target size={24} />
                      <h3 className="text-xl font-bold">The Challenge</h3>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30">
                    <div className="flex items-center gap-2 mb-4 text-emerald-600 dark:text-emerald-400">
                      <Lightbulb size={24} />
                      <h3 className="text-xl font-bold">The Solution</h3>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Section 4: Key Features */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Features & Technical Implementations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800">
                        <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="border-slate-200 dark:border-slate-800" />

                {/* Section 5: Technologies Deployed */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Technologies Deployed</h3>
                  <div className='flex flex-wrap gap-3'>
                    {selectedProject.tech.map((t, i) => (
                      <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-[#9670df] transition-colors cursor-default">
                        <img src={t.img} alt={t.name} className="w-5 h-5 object-contain" />
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}

export default Projects;