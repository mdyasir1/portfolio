import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:mdyasir4145@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div style={{ backgroundColor: "#0f172a" }} className="w-full min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          as={motion.div}
        >
          <h2
            style={{ color: "#38bdf8", borderBottom: " 4px solid #38bdf8" }}
            className="text-4xl font-bold inline"
          >
            Contact
          </h2>
          <p style={{ color: "#94a3b8" }} className="py-6">
            Get in touch with me
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Contact Form */}
          <div className="flex-1 w-full max-w-2xl mx-auto md:mx-0">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full"
            >
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                style={{
                  backgroundColor: "#1e293b",
                  color: "#ffffff",
                  border: "2px solid #38bdf8",
                }}
                className="p-4 rounded-md focus:outline-none w-full text-base md:text-lg"
                required
              />
              <textarea
                rows="10"
                placeholder="Your message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                style={{
                  backgroundColor: "#1e293b",
                  color: "#ffffff",
                  border: "2px solid #38bdf8",
                }}
                className="p-4 rounded-md focus:outline-none w-full text-base md:text-lg resize-none"
                required
              ></textarea>

              <motion.button
                type="submit"
                style={{
                  backgroundColor: "#38bdf8",
                  color: "#0f172a",
                }}
                className="px-6 py-3 rounded-md hover:opacity-80 duration-300 font-semibold w-full md:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Email
              </motion.button>
            </form>
          </div>

          {/* Social Links */}
          <div className="md:w-1/3">
            <h3
              style={{ color: "#ffffff" }}
              className="text-2xl font-bold mb-6"
            >
              Connect With Me
            </h3>
            <div className="flex flex-col gap-4">
              <motion.a
                href="https://github.com/mdyasir1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg"
                style={{ color: "#ffffff" }}
                whileHover={{ x: 10, color: "#38bdf8" }}
                transition={{ duration: 0.2 }}
              >
                <FaGithub className="text-2xl" />
                GitHub
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/mdyasirarafath"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg"
                style={{ color: "#ffffff" }}
                whileHover={{ x: 10, color: "#38bdf8" }}
                transition={{ duration: 0.2 }}
              >
                <FaLinkedin className="text-2xl" />
                LinkedIn
              </motion.a>
              <motion.a
                href="mailto:mdyasir4145@gmail.com"
                className="flex items-center gap-3 text-lg"
                style={{ color: "#ffffff" }}
                whileHover={{ x: 10, color: "#38bdf8" }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-2xl">✉️</span>
                mdyasir4145@gmail.com
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
