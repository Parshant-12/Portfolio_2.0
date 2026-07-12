import React from 'react';
import { Mail, MapPin, Phone, Send, User, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

function Contact() {
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
      id="Contacts" 
      className='min-h-screen container mx-auto px-4 md:px-8 py-24 flex flex-col justify-center text-slate-900 dark:text-white'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >

      {/* Header */}
      <motion.div variants={itemVariants} className='w-full text-center lg:text-left mb-16'>
        <h2 className='text-4xl font-extrabold tracking-tight'>
          Get In <span className="text-[#9670df] dark:text-[#b28ff1]">Touch</span>
        </h2>
        <div className="w-24 h-1 mt-4 bg-gradient-to-r from-[#9670df] to-transparent mx-auto lg:mx-0 rounded-full"></div>
        <p className='mt-6 text-lg text-slate-600 dark:text-slate-400 font-light max-w-2xl'>
          I'm always open to discussing new projects, software development opportunities, or tech collaborations.
        </p>
      </motion.div>

      <div className='flex flex-col lg:flex-row gap-12 lg:gap-20'>

        {/* Left Column: Contact Info */}
        <div className='lg:w-1/3 flex flex-col gap-8'>
          <motion.div variants={itemVariants} className='flex items-start gap-4 group'>
            <div className='p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-[#9670df] dark:text-[#b28ff1] group-hover:bg-[#9670df]/10 dark:group-hover:bg-[#b28ff1]/10 transition-colors'>
              <Mail size={24} />
            </div>
            <div>
              <h4 className='text-lg font-bold text-slate-900 dark:text-white'>Email</h4>
              <p className='text-slate-600 dark:text-slate-400 mt-1'>parshant129045@gmail.com</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className='flex items-start gap-4 group'>
            <div className='p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-[#9670df] dark:text-[#b28ff1] group-hover:bg-[#9670df]/10 dark:group-hover:bg-[#b28ff1]/10 transition-colors'>
              <Phone size={24} />
            </div>
            <div>
              <h4 className='text-lg font-bold text-slate-900 dark:text-white'>Phone</h4>
              <p className='text-slate-600 dark:text-slate-400 mt-1'>+91 9518832917</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className='flex items-start gap-4 group'>
            <div className='p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-[#9670df] dark:text-[#b28ff1] group-hover:bg-[#9670df]/10 dark:group-hover:bg-[#b28ff1]/10 transition-colors'>
              <MapPin size={24} />
            </div>
            <div>
              <h4 className='text-lg font-bold text-slate-900 dark:text-white'>Location</h4>
              <p className='text-slate-600 dark:text-slate-400 mt-1'>Chandigarh, India</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Web3Forms Integration */}
        <motion.div variants={itemVariants} className='lg:w-2/3'>
          <div className='p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-xl'>
            <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col gap-6'>
              
              {/* Web3Forms Config */}
              <input type="hidden" name="access_key" value="db1f61d3-aa9a-41f1-be40-542d0ac61e2e"/>
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }}/>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Name Input */}
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400'>
                    <User size={20} />
                  </div>
                  <input 
                    name="name" 
                    type="text" 
                    placeholder='Your Name' 
                    required
                    className='w-full bg-slate-50 text-base dark:bg-[#111827] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-[#9670df] dark:focus:border-[#b28ff1] focus:ring-1 focus:ring-[#9670df] dark:focus:ring-[#b28ff1] transition-all' 
                  />
                </div>

                {/* Email Input */}
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400'>
                    <Mail size={20} />
                  </div>
                  <input 
                    name="email" 
                    type="email" 
                    placeholder='Your Email' 
                    required
                    className='w-full bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-[#9670df] dark:focus:border-[#b28ff1] focus:ring-1 focus:ring-[#9670df] dark:focus:ring-[#b28ff1] transition-all' 
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className='relative'>
                <div className='absolute top-3 left-0 pl-4 pointer-events-none text-slate-400'>
                  <MessageSquare size={20} />
                </div>
                <textarea 
                  name="message" 
                  placeholder='Write your message here...' 
                  required
                  className='w-full h-[150px] bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-[#9670df] dark:focus:border-[#b28ff1] focus:ring-1 focus:ring-[#9670df] dark:focus:ring-[#b28ff1] transition-all resize-none' 
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className='flex items-center justify-center gap-2 w-full md:w-auto md:self-end bg-[#9670df] hover:bg-[#8563c9] dark:bg-[#b28ff1] dark:hover:bg-[#9e7be0] text-white dark:text-slate-900 font-bold rounded-xl py-3 px-8 transition-transform transform hover:-translate-y-1 shadow-lg hover:shadow-[#9670df]/20 dark:hover:shadow-[#b28ff1]/20'
              >
                <Send size={18} />
                Send Message
              </button>

            </form>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default Contact;