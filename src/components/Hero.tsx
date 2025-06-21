import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#0f172a' }} className="w-full h-screen">
      <div className="max-w-6xl mx-auto px-4 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <motion.p 
            style={{ color: '#38bdf8' }}
            className="text-lg"
            whileHover={{ scale: 1.05 }}
          >
            Hi, my name is
          </motion.p>
          <motion.h1 
            style={{ color: '#ffffff' }}
            className="text-4xl sm:text-7xl font-bold"
            whileHover={{ scale: 1.02 }}
          >
            Yasir
          </motion.h1>
          <motion.h2 
            style={{ color: '#38bdf8' }}
            className="text-3xl sm:text-6xl font-bold"
            whileHover={{ scale: 1.02 }}
          >
            Frontend Engineer
          </motion.h2>
          <motion.p 
            style={{ color: '#94a3b8' }}
            className="text-lg max-w-[700px] leading-relaxed"
          >
            I'm a frontend engineer specializing in building exceptional digital experiences.
            With 1.2 years of experience in React development, I focus on creating responsive
            and user-friendly web applications that leave a lasting impression.
          </motion.p>
          <div className="flex gap-4">
            <Link to="/projects">
              <motion.button 
                style={{ 
                  backgroundColor: '#38bdf8',
                  color: '#0f172a'
                }}
                className="px-6 py-3 rounded-lg flex items-center hover:opacity-80 transition-all duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button 
                style={{ 
                  color: '#38bdf8',
                  border: '2px solid #38bdf8'
                }}
                className="px-6 py-3 rounded-lg flex items-center hover:opacity-80 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;