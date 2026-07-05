'use client';

import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    emoji: '⚛️',
    title: 'Frontend Frameworks',
    skills: ['React.js', 'Next.js', 'Redux Toolkit', 'React Query', 'React Router'],
  },
  {
    emoji: '🎨',
    title: 'Styling & UI',
    skills: ['Tailwind CSS', 'CSS3/SCSS', 'Material UI', 'Framer Motion', 'Shadcn/UI'],
  },
  {
    emoji: '💻',
    title: 'Languages & Core',
    skills: ['JavaScript ES6+', 'TypeScript', 'HTML5', 'REST APIs'],
  },
  {
    emoji: '🛠️',
    title: 'Tools & DevOps',
    skills: ['Git/GitHub', 'Vite', 'Webpack', 'Vercel', 'Postman'],
  },
  {
    emoji: '🗄️',
    title: 'Backend Basics',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Firebase'],
  },
  {
    emoji: '🎯',
    title: 'Design & Other',
    skills: ['Figma', 'Responsive Design', 'SEO', 'Agile/Scrum'],
  },
];

function TiltCard({ group, index }: { group: typeof skillGroups[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if ('ontouchstart' in window) return;
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card || !glare) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -8;
    const rotateY = (x - centerX) / centerX * 8;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    glare.style.opacity = '1';
    glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(212, 175, 55, 0.08), transparent 60%)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card || !glare) return;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    glare.style.opacity = '0';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl p-6 backdrop-blur-sm transition-all duration-300"
      style={{
        border: '1px solid rgba(212, 175, 55, 0.1)',
        background: 'rgba(17, 17, 17, 0.6)',
        willChange: 'transform',
      }}
    >
      {/* Glare overlay */}
      <div
        ref={glareRef}
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300"
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: '0 0 30px rgba(212, 175, 55, 0.06), inset 0 0 30px rgba(212, 175, 55, 0.02)',
        }}
      />

      <div className="relative z-10">
        <span className="text-2xl mb-3 block">{group.emoji}</span>
        <h3
          className="text-lg font-semibold text-white mb-3"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {group.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-xs rounded-full tracking-[0.05em] transition-all duration-300"
              style={{
                fontFamily: 'var(--font-jetbrains)',
                border: '1px solid rgba(212, 175, 55, 0.12)',
                background: 'rgba(212, 175, 55, 0.04)',
                color: 'var(--muted)',
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 px-6"
      style={{ borderTop: '1px solid rgba(212, 175, 55, 0.08)', background: 'var(--bg2)' }}
    >
      <div
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
        style={{ background: 'radial-gradient(circle at bottom, rgba(212, 175, 55, 0.04), transparent 40%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-14 text-center"
        >
          <p
            className="text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-jetbrains)', color: 'var(--accent)' }}
          >
            Skills &amp; Expertise
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.04em] text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            My Toolkit
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <TiltCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
