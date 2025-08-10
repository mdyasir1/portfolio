import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 sm:space-y-6"
        >
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-[#38bdf8]"
            whileHover={{ scale: 1.05 }}
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white"
            whileHover={{ scale: 1.02 }}
          >
            Yasir
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#38bdf8]"
            whileHover={{ scale: 1.02 }}
          >
            Frontend Engineer
          </motion.h2>
          <motion.p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#94a3b8] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl leading-relaxed">
            I'm a frontend engineer specializing in building exceptional digital
            experiences. With 1.3 years of experience in React development, I
            focus on creating responsive and user-friendly web applications that
            leave a lasting impression.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/projects">
              <motion.button
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-[#38bdf8] text-[#0f172a] font-semibold hover:opacity-80 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg border-2 border-[#38bdf8] text-[#38bdf8] hover:opacity-80 transition duration-300"
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
