import React, { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "../types/types";

const Projects: React.FC = () => {
  const [expandedCompany, setExpandedCompany] = useState<number[]>([]);
  const [expandedPersonal, setExpandedPersonal] = useState<number[]>([]);

  const handleToggle = (index: number, isPersonal: boolean = false) => {
    if (isPersonal) {
      setExpandedPersonal((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setExpandedCompany((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    }
  };

  const companyProjects: Project[] = [
    {
      title: "Multi-Modal Travel Booking System – Hotel Booking",
      description:
        "The Hotel Booking module is a part of a unified travel platform that enables users to search and book trains, flights, buses, and hotels.\n\n" +
        "● Developed Hotel Search Results Page (SRP) using React, TypeScript, and Tailwind CSS.\n" +
        "● Integrated hotel APIs (price, rating, filters).\n" +
        "● Used React Query for data fetching.\n" +
        "● Created clean, reusable UI components.\n" +
        "● Ensured responsive design using `useMediaQuery`.",
      image: "/project-1.jpeg",
    },
    {
      title: "Truck Management System – Fleet Operations Platform",
      description:
        "Built for SwiftLogistics to manage trucking operations with driver tracking and dispatch management.\n\n" +
        "● Developed mobile-first UI using ReactJS.\n" +
        "● Created reusable UI components (HTML, CSS, JS).\n" +
        "● Integrated APIs for real-time truck tracking.\n" +
        "● Focused on user experience for logistics teams.",
      image: "/project-2.jpg",
    },
  ];

  const personalProjects: Project[] = [
    {
      title: "YasirNest",
      description:
        "YasirNest is a fully responsive eCommerce platform built to simulate a real-world online shopping experience using dummy product data.\n\n" +
        "● Developed using React, TypeScript, Tailwind CSS, and Framer Motion.\n" +
        "● Integrated DummyJSON API with TanStack Query (`useQuery`) for data fetching.\n" +
        "● Implemented client-side routing using `react-router-dom`.\n" +
        "● Managed state with React Context API and Hooks (`useState`, `useEffect`, `useContext`).\n" +
        "● Designed modern, animated UI for improved user interaction.\n" +
        "● Backend integration for features like authentication, account management, and wishlist is currently in progress.",
      image: "/yasirnest.jpg",
      live: "https://yasirnest.vercel.app",
    },
    {
      title: "TrackKit",
      description:
        "TrackKit is a lightweight inventory and sales management tool designed for small shop vendors to manage products and stock effectively.\n\n" +
        "● Built with Next.js, TypeScript, and Tailwind CSS.\n" +
        "● Features two core modules: Add to Inventory and Sell Items.\n" +
        "● Implemented custom GET, POST, and PUT APIs to manage product stock levels.\n" +
        "● Displays real-time stock status and tracks revenue updates.\n" +
        "● Focused on usability and clarity for non-technical users.\n" +
        "● Backend enhancements and data persistence features are currently being developed.",
      image: "/trackkit.jpg",
      live: "https://trackkit.vercel.app",
    },
  ];

  const renderProjects = (projects: Project[], isPersonal = false) =>
    projects.map((project, index) => {
      const isExpanded = isPersonal
        ? expandedPersonal.includes(index)
        : expandedCompany.includes(index);

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          style={{
            backgroundColor: "#1e293b",
            border: "1px solid #38bdf8",
          }}
          className="relative rounded-lg overflow-hidden shadow-lg"
        >
          {/* Tag only for Personal */}
          {isPersonal && (
            <span className="absolute top-2 left-2 bg-violet-500 text-white text-xs px-2 py-1 rounded">
              Personal
            </span>
          )}

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

            <div className="flex gap-3 items-center mb-2">
              <button
                onClick={() => handleToggle(index, isPersonal)}
                style={{ color: "#38bdf8", border: "1px solid #38bdf8" }}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded font-semibold hover:opacity-80 transition-opacity cursor-pointer"
              >
                {isExpanded ? "Hide Details" : "View Details"}
              </button>

              {isPersonal && project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded font-semibold border border-green-400 text-green-400 hover:opacity-80 transition-opacity"
                >
                  Live
                </a>
              )}
            </div>

            {isExpanded && (
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
      );
    });

  return (
    <div style={{ backgroundColor: "#0f172a" }} className="w-full min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Real-Time Projects Section */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#38bdf8] border-b-4 border-[#38bdf8] inline-block mb-8">
          Real Time Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start mb-16">
          {renderProjects(companyProjects)}
        </div>

        {/* Personal Projects Section */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#38bdf8] border-b-4 border-[#38bdf8] inline-block mb-8">
          Personal Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {renderProjects(personalProjects, true)}
        </div>
      </div>
    </div>
  );
};

export default Projects;
