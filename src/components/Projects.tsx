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
    {
      title: "Brobrooke – Social Fitness Platform",
      description:
        "Brobrooke is a fitness-focused social networking platform where users can connect, track workouts, and share progress.\n\n" +
        "● Built responsive UI with Next.js, TypeScript, and Tailwind CSS.\n" +
        "● Developed features like workout logging, exercise history, and community posts.\n" +
        "● Integrated authentication and profile management.\n" +
        "● Designed reusable components using Shadcn UI.\n" +
        "● Enhanced user engagement with social interaction and fitness tracking.",
      image: "/fitness.jpg",
    },
    {
      title: "TheWayFinder – Consultancy Web Application",
      description:
        "TheWayFinder is a consultancy-focused platform designed to showcase services and capture client inquiries.\n\n" +
        "● Built responsive, SEO-friendly UI using Next.Js, TypeScript, and Tailwind CSS.\n" +
        "● Developed a dynamic routing structure for smooth navigation.\n" +
        "● Implemented contact form with API integration.\n" +
        "● Ensured performance optimization.\n" +
        "● Delivered a clean, professional design for consultancy branding.",
      image: "/wayfinder.jpg",
    },
  ];

  const personalProjects: Project[] = [
    {
      title: "TrackKit",
      description:
        "TrackKit is a lightweight inventory and sales management application designed to help small businesses seamlessly manage their products, track sales, and get a clear overview of their performance.\n\n" +
        "● Built an easy-to-use app to help small shops keep track of their products and sales.\n" +
        "● Designed a clean and simple website using modern tools like Next.js and Tailwind CSS so it works well on any device.\n" +
        "● Connected the app to a database using Prisma, allowing shop owners to safely save and manage their information.\n" +
        "● Added a secure login and registration system with NextAuth.js so each user's data is kept private.\n" +
        "● Included key features like adding new products, recording sales, and a dashboard that shows important info like stock levels and total revenue.",
      image: "/trackkit.jpg",
      readme: "https://github.com/mdyasir1/TrackkIt",
      live: "https://trackkit.vercel.app",
    },
    {
      title: "Zyora",
      description:
        "Zyora is a modern e-commerce platform delivering a smooth and responsive shopping experience.\n\n" +
        "● Built with React 19, TypeScript, and Tailwind CSS.\n" +
        "● Features product browsing, search & filter, and a shopping cart with persistent storage.\n" +
        "● Integrated Framer Motion for sleek animations.\n" +
        "● Fully responsive and structured for scalability.\n" +
        "● Backend and secure authentication are in progress for live deployment.",

      image: "/zyora.jpg",
      live: "https://zyora.vercel.app/",
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
          {isPersonal && (
            <span className="absolute top-2 left-2 bg-violet-500 text-white text-xs px-2 py-1 rounded z-2">
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

                {/* --- THIS IS THE FIX --- */}
                {/* It checks for the `readme` property and renders a clickable link */}
                {project.readme && (
                  <p className="text-slate-400 text-xs sm:text-sm md:text-base mt-2">
                    ● For more technical details, please see the{" "}
                    <a
                      href={project.readme}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 underline hover:text-sky-300 transition-colors"
                    >
                      README.md
                    </a>
                  </p>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      );
    });

  return (
    <div style={{ backgroundColor: "#0f172a" }} className="w-full min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#38bdf8] border-b-4 border-[#38bdf8] inline-block mb-8">
          Real Time Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start mb-16">
          {renderProjects(companyProjects)}
        </div>

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
