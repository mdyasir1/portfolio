import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaChartBar,
  FaDatabase,
  FaAws,
  FaDocker,
  FaPython,
  FaFigma,
  FaBootstrap,

} from "react-icons/fa";
import {
  SiTailwindcss,
  SiEslint,
  SiTypescript,
  SiRedux,
  SiPrettier,
  SiMysql,
  SiExpress,
  SiPrisma,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { Skill } from "../types/types";

const frontendSkills: Skill[] = [
  { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
  { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },

  { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Typescript", icon: <SiTypescript className="text-[#4479A1]" /> },
  { name: "Redux", icon: <SiRedux className="text-[#4479A1]" /> },

  { name: "Next Js", icon: <RiNextjsLine className="text-[#4479A1]" /> },
  { name: "Figma", icon: <FaFigma className="text-[#4479A1]" /> },
  { name: "React Query", icon: <FaDatabase className="text-[#e535ab]" /> },
  { name: "Recharts", icon: <FaChartBar className="text-[#38bdf8]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-[#4479A1]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "EsLint", icon: <SiEslint className="text-[#4479A1]" /> },
  { name: "Prettier", icon: <SiPrettier className="text-[#4479A1]" /> },
    { name: "SQL", icon: <SiMysql className="text-[#4479A1]" /> },
    
];

const upcomingSkills: Skill[] = [
  { name: "Python", icon: <FaPython className="text-[#38bdf8]" /> },
  { name: "Express.js", icon: <SiExpress className="text-[#4479A1]" /> },
  { name: "Prisma ORM", icon: <SiPrisma className="text-[#38bdf8]" /> },
  { name: "AWS", icon: <FaAws className="text-[#38bdf8]" /> },
  { name: "Docker", icon: <FaDocker className="text-[#38bdf8]" /> }
];

const rotatingSkills = [
  "React",
  "Tailwind CSS",
  "EsLint",
  "Redux",
  "React Query",
  "MySQL",
  "Prisma ORM",
  "Python"
];

const Skills: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#0f172a" }} className="w-full min-h-screen">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="pb-4 sm:pb-6 md:pb-8 flex justify-between items-center gap-4 sm:gap-6 md:gap-8">
          <h2
            style={{ color: "#38bdf8", borderBottom: "4px solid #38bdf8" }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold inline"
          >
            Skills
          </h2>
        </div>

        {/* Frontend Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-8">
          {frontendSkills.map((skill, index) => {
            const shouldRotate = rotatingSkills.includes(skill.name);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                style={{
                  backgroundColor: "#1e293b",
                  border: "2px solid #38bdf8",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  margin: "0 auto",
                }}
                className="sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] flex flex-col items-center justify-center gap-2 sm:gap-3 cursor-pointer shadow-lg hover:shadow-xl"
              >
                <motion.div
                  className="text-2xl sm:text-3xl md:text-4xl"
                  animate={shouldRotate ? { rotate: [0, 360] } : {}}
                  transition={
                    shouldRotate
                      ? {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }
                      : {}
                  }
                >
                  {skill.icon}
                </motion.div>
                <h3
                  style={{ color: "#ffffff" }}
                  className="text-xs sm:text-sm md:text-xs font-semibold text-center"
                >
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </div>

        {/* Upcoming Skills */}
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#38bdf8]">
          Learning
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {upcomingSkills.map((skill, index) => {
            const shouldRotate = rotatingSkills.includes(skill.name);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                style={{
                  backgroundColor: "#1e293b",
                  border: "2px solid #38bdf8",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  margin: "0 auto",
                }}
                className="sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] flex flex-col items-center justify-center gap-2 sm:gap-3 cursor-pointer shadow-lg hover:shadow-xl"
              >
                <motion.div
                  className="text-2xl sm:text-3xl md:text-4xl"
                  animate={shouldRotate ? { rotate: [0, 360] } : {}}
                  transition={
                    shouldRotate
                      ? {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }
                      : {}
                  }
                >
                  {skill.icon}
                </motion.div>
                <h3
                  style={{ color: "#ffffff" }}
                  className="text-xs sm:text-sm md:text-xs font-semibold text-center"
                >
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
