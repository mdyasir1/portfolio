import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div style={{ backgroundColor: '#0f172a' }} className="w-full min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="pb-8">
          <h2 style={{ color: '#38bdf8', borderBottom: '4px solid #38bdf8' }} className="text-4xl font-bold inline">
            About
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <motion.p 
              style={{ color: '#94a3b8' }}
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              I am a passionate Frontend Developer with a strong foundation in modern web technologies. 
              My journey in web development started with a curiosity about creating interactive user experiences,
              and has evolved into a professional pursuit of crafting efficient, scalable, and beautiful web applications.
            </motion.p>
            <motion.p 
              style={{ color: '#94a3b8' }}
              className="text-lg leading-relaxed mt-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I specialize in React.js and modern JavaScript, with experience in building responsive and 
              user-friendly interfaces. I'm constantly learning new technologies and best practices to 
              deliver the best possible solutions.
            </motion.p>
          </div>
          <motion.div 
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/your-image.jpg" 
              alt="Profile" 
              className="rounded-lg w-2/3 md:w-full max-w-md"
              style={{ border: '2px solid #38bdf8' }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;