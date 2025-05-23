import React from "react";
import { motion } from "framer-motion";
import { Project } from "../types/types";

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Project 1",
      description: "A React-based web application with modern UI/UX",
      image: "/project1.jpg",
      demo: "https://demo1.com",
      code: "https://github.com/yourusername/project1",
    },
    {
      title: "Project 2",
      description: "Interactive dashboard with real-time data visualization",
      image: "/project2.jpg",
      demo: "https://demo2.com",
      code: "https://github.com/yourusername/project2",
    },
    // Add more projects as needed
  ];

  return (
    <div style={{ backgroundColor: "#0f172a" }} className="w-full min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="pb-8">
          <h2
            style={{ color: "#38bdf8", borderBottom: "4px solid #38bdf8" }}
            className="text-4xl font-bold inline"
          >
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
              className="rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3
                  style={{ color: "#ffffff" }}
                  className="text-2xl font-bold mb-2"
                >
                  {project.title}
                </h3>
                <p style={{ color: "#94a3b8" }} className="mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: "#38bdf8", color: "#0f172a" }}
                    className="px-4 py-2 rounded font-semibold hover:opacity-80 transition-opacity"
                  >
                    Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#38bdf8", border: "1px solid #38bdf8" }}
                    className="px-4 py-2 rounded font-semibold hover:opacity-80 transition-opacity"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
