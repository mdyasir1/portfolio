'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[rgba(8,12,20,0.85)] shadow-lg shadow-[rgba(99,102,241,0.05)] backdrop-blur-xl border-b border-[rgba(99,102,241,0.12)]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2"
          >
            <img
              src="/yasir.png"
              alt="M Yasir Arafath"
              className="w-10 h-10 rounded-full object-cover border border-[rgba(99,102,241,0.2)]"
            />
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm tracking-[0.12em] text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-300 uppercase"
                style={{ fontFamily: 'var(--font-jetbrains)' }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] text-white hover:shadow-lg hover:shadow-[rgba(99,102,241,0.3)] transition-all duration-300"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-[var(--text)]"
            />
            <motion.span
              animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[2px] bg-[var(--text)]"
            />
            <motion.span
              animate={isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-[var(--text)]"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[rgba(8,12,20,0.97)] backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollTo(link.href)}
                className="text-2xl tracking-[0.15em] text-[var(--muted)] hover:text-[var(--text)] transition-colors uppercase"
                style={{ fontFamily: 'var(--font-jetbrains)' }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => setIsMobileOpen(false)}
              className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] text-white"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
