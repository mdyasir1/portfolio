'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    period: 'Dec 2025 – Present',
    company: 'SmartEdge Solutions',
    location: 'Hyderabad (WFH)',
    role: 'Frontend Developer',
    description:
      'I led the frontend development of Areeva AI, a recruitment platform that uses AI to interview and screen candidates. I built the dashboard UIs, the interview interface, and wired everything to the backend APIs. The system automates job postings, applications, screening, and onboarding while keeping human senior officials in the loop.',
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'API Integration', 'Dashboard UI'],
    accent: 'var(--accent)',
  },
  {
    period: 'Oct 2023 – Nov 2025',
    company: 'Trangla Innovations',
    location: 'Hyderabad',
    role: 'Junior Frontend Developer',
    description:
      'At Trangla, I worked on a mix of projects — dashboards, e-commerce sites, and landing pages. I wrote a lot of React, wired up REST APIs, managed state with Redux, and learned how to ship features on a team timeline.',
    tags: ['React.js', 'JavaScript', 'CSS/SCSS', 'REST APIs', 'Redux', 'Git'],
    accent: 'var(--accent2)',
  },
  {
    period: '2020 – 2024',
    company: 'RGUKT Nuzvid',
    location: 'Nuzvid',
    role: 'B.Tech in Electrical & Electronics Engineering',
    description:
      'I studied Electrical & Electronics Engineering at RGUKT Nuzvid, but I spent most of my free time teaching myself to code. By graduation, I knew I wanted to build software for a living.',
    tags: ['Engineering', 'Problem Solving', 'Self-Learning'],
    accent: 'var(--accent3)',
  },
];

export default function Experience() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    itemsRef.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const scale = Math.min(1, 0.93 + (entry.intersectionRatio || 0) * 0.07);
            el.style.transform = `scale(${scale})`;
            el.style.opacity = `${Math.min(1, 0.6 + (entry.intersectionRatio || 0) * 0.4)}`;
          }
        },
        { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="experience" className="relative overflow-hidden border-t border-[rgba(99,102,241,0.08)] bg-[var(--bg)] py-24 px-6">
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.06),transparent_40%)]" />

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p
            className="text-xs tracking-[0.35em] text-[var(--accent3)] uppercase mb-4"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            Career
          </p>
          <h2
            className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[31px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--accent)] via-[var(--accent2)] to-[var(--accent3)]" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div
                  ref={(el) => { itemsRef.current[index] = el; }}
                  className="relative flex items-start gap-6 transition-all duration-300"
                  style={{ transform: 'scale(0.93)', opacity: 0.6, transformOrigin: 'left center' }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 mt-1.5 flex-shrink-0">
                    <div
                      className="w-4 h-4 rounded-full border-[3px] shadow-lg"
                      style={{
                        borderColor: exp.accent,
                        backgroundColor: 'var(--bg)',
                        boxShadow: `0 0 12px ${exp.accent}44`,
                      }}
                    />
                  </div>

                  {/* Content card */}
                  <div
                    className="flex-1 rounded-2xl border border-[rgba(99,102,241,0.1)] bg-[rgba(16,22,38,0.6)] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(99,102,241,0.25)] hover:shadow-lg"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <span
                        className="text-xs tracking-[0.15em] text-[var(--muted)] uppercase"
                        style={{ fontFamily: 'var(--font-jetbrains)' }}
                      >
                        {exp.period}
                      </span>
                      <span
                        className="text-xs tracking-[0.1em] text-[var(--accent3)]"
                        style={{ fontFamily: 'var(--font-jetbrains)' }}
                      >
                        {exp.location}
                      </span>
                    </div>

                    <h3
                      className="text-xl font-semibold text-white"
                      style={{ fontFamily: 'var(--font-syne)' }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="text-sm tracking-[0.1em] text-[var(--accent3)] mb-3"
                      style={{ fontFamily: 'var(--font-jetbrains)' }}
                    >
                      {exp.company}
                    </p>

                    <p className="text-sm leading-relaxed text-[var(--muted)] mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] tracking-[0.08em] rounded-full border border-[rgba(99,102,241,0.12)] bg-[rgba(99,102,241,0.04)] text-[var(--muted)] uppercase"
                          style={{ fontFamily: 'var(--font-jetbrains)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
