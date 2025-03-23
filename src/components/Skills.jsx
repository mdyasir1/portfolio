import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMysql } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
    { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38B2AC]" /> },
    { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
  ];

  return (
    <div style={{ backgroundColor: '#0f172a' }} className="w-full min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="pb-8">
          <h2 style={{ color: '#38bdf8', borderBottom: '4px solid #38bdf8' }} className="text-4xl font-bold inline">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20 
              }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              style={{ 
                backgroundColor: '#1e293b',
                border: '2px solid #38bdf8',
                borderRadius: '50%',
                width: '150px',
                height: '150px',
                margin: '0 auto'
              }}
              className="flex flex-col items-center justify-center gap-3 cursor-pointer shadow-lg hover:shadow-xl"
            >
              <motion.div 
                className="text-5xl"
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {skill.icon}
              </motion.div>
              <h3 
                style={{ color: '#ffffff' }} 
                className="text-sm font-bold text-center"
              >
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;