import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const About = () => {
  return (
    <div style={{ backgroundColor: "#0f172a" }} className="w-full min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="pb-8">
          <h2
            style={{ color: "#38bdf8", borderBottom: "4px solid #38bdf8" }}
            className="text-4xl font-bold inline"
          >
            About Me
          </h2>
        </div>

        <div className="grid gap-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1e293b] p-6 rounded-lg border-2 border-[#38bdf8]"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#38bdf8]">
              Professional Summary
            </h3>
            <p className="text-lg leading-relaxed">
              Hello! I'm Mohammed Yasir Arafath, a recent graduate with a
              Bachelor's degree in Electrical and Electronics Engineering
              (2024). I'm passionate about web development and have cultivated a
              strong foundation in modern web technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1e293b] p-6 rounded-lg border-2 border-[#38bdf8]"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#38bdf8]">
              Technical Expertise
            </h3>
            <p className="text-lg leading-relaxed">
              My core competencies include HTML5, CSS3, JavaScript, and React.js
              for frontend development. I'm proficient with Node.js for backend
              development and utilize Git for version control. I have experience
              working with MySQL databases and implementing responsive designs
              using Tailwind CSS.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#1e293b] p-6 rounded-lg border-2 border-[#38bdf8]"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#38bdf8]">
              Professional Goals
            </h3>
            <p className="text-lg leading-relaxed">
              I aim to leverage my engineering background and web development
              skills to create innovative, user-centric applications. I'm
              particularly interested in full-stack development and continuously
              expanding my knowledge in emerging technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-[#1e293b] p-6 rounded-lg border-2 border-[#38bdf8]"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#38bdf8]">
              What I Bring to the Table
            </h3>
            <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
              <li>
                Strong problem-solving abilities from engineering background
              </li>
              <li>Keen eye for detail and clean code practices</li>
              <li>
                Experience in building responsive and interactive web
                applications
              </li>
              <li>
                Ability to quickly adapt to new technologies and frameworks
              </li>
              <li>
                Passion for creating efficient and user-friendly solutions
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
