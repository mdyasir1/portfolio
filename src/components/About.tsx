import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#0f172a" }} className="w-full min-h-screen">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="pb-4 sm:pb-6 md:pb-8 flex justify-between items-center gap-4 sm:gap-6 md:gap-8">
          <h2
            style={{ color: "#38bdf8", borderBottom: "4px solid #38bdf8" }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold inline"
          >
            About Me
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1e293b] p-4 sm:p-5 md:p-6 rounded-lg border-2 border-[#38bdf8]"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-[#38bdf8]">
              Professional Summary
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Hi! I'm Mohammed Yasir Arafath, a Frontend Developer at Trangla
              Innovations with 1.3 years of experience in building modern,
              user-friendly web applications. I hold a Bachelor's degree in
              Electrical & Electronics Engineering (2024). My journey into tech
              started with curiosity and grew through hands-on projects and
              continuous learning. I enjoy turning ideas into clean, functional,
              and user-focused digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1e293b] p-4 sm:p-5 md:p-6 rounded-lg border-2 border-[#38bdf8]"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-[#38bdf8]">
              Technical Expertise
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-200">
              I build modern user interfaces using{" "}
              <span style={{ color: "#38bdf8" }}>HTML5</span>,{" "}
              <span style={{ color: "#38bdf8" }}>CSS3</span>, and{" "}
              <span style={{ color: "#38bdf8" }}>JavaScript</span>. I work with
              popular tools like{" "}
              <span style={{ color: "#38bdf8" }}>React.js</span>,{" "}
              <span style={{ color: "#38bdf8" }}>TypeScript</span>, and{" "}
              <span style={{ color: "#38bdf8" }}>Tailwind CSS</span> to create
              fast and responsive web apps. I use UI libraries such as{" "}
              <span style={{ color: "#38bdf8" }}>Material UI</span>,{" "}
              <span style={{ color: "#38bdf8" }}>shadcn</span> etc.. to design
              clean and consistent layouts. I’m also comfortable with{" "}
              <span style={{ color: "#38bdf8" }}>Next.js</span> for server-side
              rendering, <span style={{ color: "#38bdf8" }}>Redux</span> for
              managing state, and{" "}
              <span style={{ color: "#38bdf8" }}>Recharts</span> for simple data
              visualizations. To keep my code clean and consistent, I use{" "}
              <span style={{ color: "#38bdf8" }}>Git</span>,{" "}
              <span style={{ color: "#38bdf8" }}>Prettier</span>,{" "}
              <span style={{ color: "#38bdf8" }}>ESLint</span>, and{" "}
              <span style={{ color: "#38bdf8" }}>Husky</span> in my workflow. I
              am also learning backend development with{" "}
              <span style={{ color: "#38bdf8" }}>Express.js</span>,{" "}
              <span style={{ color: "#38bdf8" }}>MySQL</span>, and{" "}
              <span style={{ color: "#38bdf8" }}>Prisma</span> by working on
              personal full-stack projects.
            </p>
          </motion.div>

          {/* Keeping the rest of your sections unchanged */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#1e293b] p-4 sm:p-5 md:p-6 rounded-lg border-2 border-[#38bdf8]"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-[#38bdf8]">
              Professional Goals
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
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
            className="bg-[#1e293b] p-4 sm:p-5 md:p-6 rounded-lg border-2 border-[#38bdf8]"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-[#38bdf8]">
              What I Bring to the Table
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg leading-relaxed space-y-1 sm:space-y-2">
              <li>Strong problem-solving skills with a practical approach</li>
              <li>Focus on writing clean, readable, and maintainable code</li>
              <li>Hands-on experience building responsive, modern web apps</li>
              <li>
                Quick learner with the ability to adapt to new tools and
                frameworks
              </li>
              <li>
                Driven to create smooth, fast, and user-friendly experiences
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
