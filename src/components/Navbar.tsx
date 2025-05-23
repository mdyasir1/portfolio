import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaTools, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(null);
  const location = useLocation();

  const navItems = [
    { title: 'Home', path: '/', icon: <FaHome /> },
    { title: 'About', path: '/about', icon: <FaUser /> },
    { title: 'Projects', path: '/projects', icon: <FaCode /> },
    { title: 'Skills', path: '/skills', icon: <FaTools /> },
    { title: 'Contact', path: '/contact', icon: <FaEnvelope /> },
  ];

  return (
    <nav 
      style={{ 
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(56, 189, 248, 0.2)'
      }} 
      className="fixed w-full top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <motion.h1 
              className="text-2xl font-bold"
              style={{ color: '#38bdf8' }}
              whileHover={{ scale: 1.1 }}
            >
              YM
            </motion.h1>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <Link 
                key={item.path} 
                to={item.path}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                className="relative group"
              >
                <motion.div
                  className="flex items-center gap-2 py-2"
                  style={{ 
                    color: location.pathname === item.path ? '#38bdf8' : '#ffffff'
                  }}
                  whileHover={{ y: -2 }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.title}</span>
                  {isHovered === index && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5"
                      style={{ backgroundColor: '#38bdf8' }}
                      layoutId="underline"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className="px-3"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  style={{ 
                    color: location.pathname === item.path ? '#38bdf8' : '#ffffff'
                  }}
                >
                  {item.icon}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;