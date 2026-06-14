'use client';

import { motion } from 'framer-motion';

const techStack = [
  'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS',
  'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Git', 'Figma',
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--bg)] pt-20">
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 w-full">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 rounded-full border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.06)] px-4 py-2 text-xs tracking-[0.35em] text-[var(--accent3)] shadow-sm backdrop-blur-sm"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              Frontend Developer · UI Engineer
            </motion.div>

            <div className="space-y-4">
              <h1
                className="leading-[1.05]"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="block text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] text-white"
                  style={{
                    textShadow: '0 0 60px rgba(99,102,241,0.15), 0 0 120px rgba(99,102,241,0.05)',
                  }}
                >
                  M Yasir
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="block text-5xl sm:text-6xl lg:text-8xl font-black tracking-[-0.06em] mt-1 relative"
                >
                  <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent3)] bg-clip-text text-transparent"> Arafath</span>
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl sm:text-2xl font-medium text-[var(--muted)]"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                I build interfaces that people love.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-base leading-relaxed text-[var(--muted)] max-w-xl"
              >
                Right now I&apos;m leading the frontend at{' '}
                <span className="text-[var(--accent3)]">SmartEdge Solutions</span>,
                building Areeva AI — an AI hiring platform. I&apos;ve spent 2+ years
                working with startups and agencies, and I care most about building
                software that works well for the people using it.
              </motion.p>

            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-[rgba(99,102,241,0.25)] transition-all duration-300 hover:shadow-[rgba(99,102,241,0.4)] hover:scale-105"
              >
                View My Work
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(99,102,241,0.3)] bg-[rgba(99,102,241,0.05)] px-8 py-3.5 text-base font-semibold text-[var(--text)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[rgba(99,102,241,0.1)] hover:scale-105"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex items-center gap-2 text-sm text-[var(--muted)]"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for new opportunities
            </motion.div>
          </motion.div>

          {/* Right: 3D Cube */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-md flex items-center justify-center"
            style={{ minHeight: 320 }}
          >
            <div className="absolute w-72 h-72 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="cube-scene">
              <div className="cube">
                <div className="cube-face cube-face-front">
                  <span className="text-lg font-bold text-[var(--accent)]" style={{ fontFamily: 'var(--font-jetbrains)' }}>{"{ }"}</span>
                  <span className="text-xs tracking-[0.1em] text-[var(--muted)] uppercase mt-1" style={{ fontFamily: 'var(--font-jetbrains)' }}>React</span>
                </div>
                <div className="cube-face cube-face-back">
                  <span className="text-lg font-bold text-[var(--accent2)]" style={{ fontFamily: 'var(--font-jetbrains)' }}>N</span>
                  <span className="text-xs tracking-[0.1em] text-[var(--muted)] uppercase mt-1" style={{ fontFamily: 'var(--font-jetbrains)' }}>Next.js</span>
                </div>
                <div className="cube-face cube-face-right">
                  <span className="text-lg font-bold text-[#3178c6]" style={{ fontFamily: 'var(--font-jetbrains)' }}>TS</span>
                  <span className="text-xs tracking-[0.1em] text-[var(--muted)] uppercase mt-1" style={{ fontFamily: 'var(--font-jetbrains)' }}>TypeScript</span>
                </div>
                <div className="cube-face cube-face-left">
                  <span className="text-lg font-bold text-[#06b6d4]" style={{ fontFamily: 'var(--font-jetbrains)' }}>#</span>
                  <span className="text-xs tracking-[0.1em] text-[var(--muted)] uppercase mt-1" style={{ fontFamily: 'var(--font-jetbrains)' }}>Tailwind</span>
                </div>
                <div className="cube-face cube-face-top">
                  <span className="text-lg font-bold text-[#339933]" style={{ fontFamily: 'var(--font-jetbrains)' }}>{"<>"}</span>
                  <span className="text-xs tracking-[0.1em] text-[var(--muted)] uppercase mt-1" style={{ fontFamily: 'var(--font-jetbrains)' }}>Node.js</span>
                </div>
                <div className="cube-face cube-face-bottom">
                  <span className="text-lg font-bold text-[#f24e1e]" style={{ fontFamily: 'var(--font-jetbrains)' }}>F</span>
                  <span className="text-xs tracking-[0.1em] text-[var(--muted)] uppercase mt-1" style={{ fontFamily: 'var(--font-jetbrains)' }}>Figma</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech Stack Marquee */}
      <div className="relative z-10 mt-8 border-t border-[rgba(99,102,241,0.08)] py-6 overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-16 items-center">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm tracking-[0.15em] text-[var(--muted)] whitespace-nowrap uppercase"
                  style={{ fontFamily: 'var(--font-jetbrains)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.2em] text-[var(--muted)] uppercase" style={{ fontFamily: 'var(--font-jetbrains)' }}>
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-[rgba(99,102,241,0.3)] flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-[var(--accent)]" style={{ animation: 'scrollDot 1.8s ease-in-out infinite' }} />
        </div>
      </motion.div>
    </section>
  );
}
