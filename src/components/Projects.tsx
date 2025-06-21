import React, { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "../types/types";

const Projects: React.FC = () => {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (expandedIndexes.includes(index)) {
      // Remove index to close
      setExpandedIndexes(expandedIndexes.filter((i) => i !== index));
    } else {
      // Add index to open
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  const projects: Project[] = [
    {
      title: "Multi-Modal Travel Booking System – Hotel Booking",
      description:
        "The Hotel Booking module is a part of a unified travel platform that enables users to search and book trains, flights, buses, and hotels. This module focuses on providing a seamless hotel search and discovery experience, with intuitive UI and dynamic filtering.\n" +"\n"+
        "● Developed and implemented the Hotel Search Results Page (SRP) using React, TypeScript, and Tailwind CSS.\n" +
        "● Integrated RESTful APIs for hotel data (pricing, ratings, etc).\n" +
        "● Used React Query for API state management.\n" +
        "● Followed SRP for clean, reusable React components.\n" +
        "● Responsive design via useMediaQuery hook.",
      image: "/project-1.jpeg",
    },
    {
      title: "Truck Management System – Fleet Operations Platform",
      description:
        "Truck Management System is a fleet platform built for SwiftLogistics to streamline trucking workflows. This system is designed to manage and optimize truck operations, including driver assignments, route planning, and real-time tracking. The system is built with ReactJS and follows a mobile-first design approach to ensure a seamless user experience across all devices.\n" + "\n" +
        "● Built the front-end with ReactJS.\n" +
        "● Created reusable components (HTML, CSS, JavaScript).\n" +
        "● Integrated real-time tracking features.\n" +
        "● Worked with backend APIs for smooth integration.\n" +
        "● Improved user experience for dispatch/logistics staff.",
      image: "/project-2.jpg",
    },
  ];

  return (
    <div style={{ backgroundColor: "#0f172a" }} className="w-full min-h-screen">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="pb-4 sm:pb-6 md:pb-8 flex justify-between items-center gap-4 sm:gap-6 md:gap-8">
          <h2
            style={{ color: "#38bdf8", borderBottom: "4px solid #38bdf8" }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold inline"
          >
            Real Time Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-6 md:gap-8 items-start">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{
                backgroundColor: "#1e293b",
                border: "1px solid #38bdf8",
              }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <div className="overflow-hidden w-full h-42 sm:h-40 md:h-48 lg:h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover scale-130 hover:scale-135 transition-transform duration-300"
                />
              </div>
              <div className="p-3 sm:p-4 md:p-5">
                <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
                  {project.title}
                </h3>

                <button
                  onClick={() => handleToggle(index)}
                  style={{ color: "#38bdf8", border: "1px solid #38bdf8" }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded font-semibold hover:opacity-80 transition-opacity cursor-pointer"
                >
                  {expandedIndexes.includes(index) ? "Hide Details" : "View Details"}
                </button>

                {expandedIndexes.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-2 sm:mt-3"
                  >
                    <p className="text-slate-400 text-xs sm:text-sm md:text-base whitespace-pre-line">
                      {project.description}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
