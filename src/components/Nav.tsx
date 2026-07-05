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
            ? 'backdrop-blur-xl'
            : 'bg-transparent'
        }`}
        style={{
          borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.08)' : 'none',
          background: isScrolled ? 'rgba(10, 10, 10, 0.85)' : 'transparent',
        }}
      >
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2"
          >
            <img
              src="/yasir.png"
              alt="M Yasir Arafath"
              className="w-10 h-10 rounded-full object-cover"
              style={{ border: '1px solid rgba(212, 175, 55, 0.2)' }}
            />
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm tracking-[0.12em] uppercase transition-colors duration-300"
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  color: 'var(--muted)',
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold rounded-full text-black transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: 'var(--font-jetbrains)',
                background: 'linear-gradient(135deg, var(--accent), var(--accent3))',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.15)',
              }}
            >
              Let&apos;s Talk
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
              className="block w-6 h-[2px]"
              style={{ background: 'var(--text)' }}
            />
            <motion.span
              animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[2px]"
              style={{ background: 'var(--text)' }}
            />
            <motion.span
              animate={isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px]"
              style={{ background: 'var(--text)' }}
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
            className="fixed inset-0 z-40 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
            style={{ background: 'rgba(10, 10, 10, 0.97)' }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollTo(link.href)}
                className="text-2xl tracking-[0.15em] uppercase transition-colors"
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  color: 'var(--muted)',
                }}
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
              className="px-8 py-3 text-lg font-semibold rounded-full text-black"
              style={{
                background: 'linear-gradient(135deg, var(--accent), var(--accent3))',
              }}
            >
              Let&apos;s Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
