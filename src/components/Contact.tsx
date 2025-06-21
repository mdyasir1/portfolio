import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ContactFormData } from "../types/types";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:mdyasir4145@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="w-full min-h-screen bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold inline text-[#38bdf8] border-b-4 border-[#38bdf8]">
            Contact
          </h2>
          <p className="py-4 sm:py-6 text-sm sm:text-base md:text-lg text-[#94a3b8]">
            Get in touch with me
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
          {/* Contact Form */}
          <div className="flex-1 w-full max-w-full lg:max-w-[600px] xl:max-w-[700px] px-0 mx-auto lg:mx-0">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:gap-4 w-full"
            >
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-md bg-[#1e293b] text-white border-2 border-[#38bdf8] focus:outline-none"
                required
              />
              <textarea
                rows={8}
                placeholder="Your message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full min-h-[100px] sm:min-h-[120px] md:min-h-[150px] px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-md bg-[#1e293b] text-white border-2 border-[#38bdf8] focus:outline-none resize-none"
                required
              />
              <motion.button
                type="submit"
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-md hover:opacity-80 duration-300 font-semibold w-full lg:w-auto bg-[#38bdf8] text-[#0f172a]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Email
              </motion.button>
            </form>
          </div>

          {/* Social Links */}
          <div className="w-full lg:w-auto lg:flex-1 px-0 lg:px-4 xl:px-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">
              Connect With Me
            </h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              <motion.a
                href="https://github.com/mdyasir1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg text-white hover:text-[#38bdf8]"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <FaGithub className="text-xl sm:text-2xl" />
                GitHub
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/mdyasirarafath"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg text-white hover:text-[#38bdf8]"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <FaLinkedin className="text-xl sm:text-2xl" />
                LinkedIn
              </motion.a>
              <motion.a
                href="mailto:mdyasir4145@gmail.com"
                className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg text-white hover:text-[#38bdf8]"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xl sm:text-2xl">✉️</span>
                <span className="break-all">mdyasir4145@gmail.com</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
