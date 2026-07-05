'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    period: 'Dec 2025 \u2013 Present',
    company: 'SmartEdge Solutions',
    location: 'Hyderabad (WFH)',
    role: 'Frontend Developer',
    description:
      'At SmartEdge, I work on Areeva AI \u2014 a recruitment platform that uses AI to interview and screen candidates. My focus is on the frontend: building dashboard UIs, the interview interface, and connecting everything to the backend APIs. The system handles job postings, applications, screening, and onboarding, with human oversight at every stage.',
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'API Integration', 'Dashboard UI'],
  },
  {
    period: 'Oct 2023 \u2013 Nov 2025',
    company: 'Trangla Innovations',
    location: 'Hyderabad',
    role: 'Junior Frontend Developer',
    description:
      'At Trangla, I worked across a range of products \u2014 dashboards, e-commerce sites, and landing pages. I spent a lot of time with React, wired up REST APIs, managed state with Redux, and learned what it takes to ship features on a real team timeline.',
    tags: ['React.js', 'JavaScript', 'CSS/SCSS', 'REST APIs', 'Redux', 'Git'],
  },
  {
    period: '2020 \u2013 2024',
    company: 'RGUKT Nuzvid',
    location: 'Nuzvid',
    role: 'B.Tech in Electrical & Electronics Engineering',
    description:
      'I studied Electrical & Electronics Engineering at RGUKT Nuzvid, but I spent most of my free time teaching myself to code. By graduation, I knew I wanted to build software for a living.',
    tags: ['Engineering', 'Problem Solving', 'Self-Learning'],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        }
      );

      // Animate the timeline line
      gsap.fromTo(
        timelineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          transformOrigin: 'top center',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 80%' },
        }
      );

      // Animate each card
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, x: -30, scale: 0.95 },
          {
            opacity: 1, x: 0, scale: 1, duration: 0.7, delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%' },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden py-20 sm:py-24 px-6"
      style={{ borderTop: '1px solid rgba(212, 175, 55, 0.08)' }}
    >
      <div
        className="absolute inset-x-0 top-0 h-48 pointer-events-none"
        style={{ background: 'radial-gradient(circle at top, rgba(212, 175, 55, 0.03), transparent 40%)' }}
      />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
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
            Career
          </p>
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.04em] text-white"
            style={{ fontFamily: 'var(--font-heading)', opacity: 0 }}
          >
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            ref={timelineRef}
            className="absolute left-[31px] top-0 bottom-0 w-[2px]"
            style={{
              background: 'linear-gradient(to bottom, var(--accent), var(--accent3), rgba(212, 175, 55, 0.1))',
              transformOrigin: 'top center',
            }}
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="relative flex items-start gap-4 sm:gap-6"
                style={{ opacity: 0 }}
              >
                {/* Timeline dot */}
                <div className="relative z-10 mt-1.5 flex-shrink-0">
                  <div
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-[3px]"
                    style={{
                      borderColor: 'var(--accent)',
                      background: 'var(--bg)',
                      boxShadow: '0 0 12px rgba(212, 175, 55, 0.3)',
                    }}
                  />
                </div>

                {/* Content card */}
                  <div
                    className="flex-1 rounded-2xl p-4 sm:p-6 backdrop-blur-sm transition-all duration-300 card-hover"
                  style={{
                    border: '1px solid rgba(212, 175, 55, 0.1)',
                    background: 'rgba(17, 17, 17, 0.6)',
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <span
                      className="text-xs tracking-[0.15em] uppercase"
                      style={{ fontFamily: 'var(--font-jetbrains)', color: 'var(--muted)' }}
                    >
                      {exp.period}
                    </span>
                    <span
                      className="text-xs tracking-[0.1em]"
                      style={{ fontFamily: 'var(--font-jetbrains)', color: 'var(--accent)' }}
                    >
                      {exp.location}
                    </span>
                  </div>

                  <h3
                    className="text-xl font-semibold text-white"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    className="text-sm tracking-[0.1em] mb-3"
                    style={{ fontFamily: 'var(--font-jetbrains)', color: 'var(--accent)' }}
                  >
                    {exp.company}
                  </p>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] tracking-[0.08em] rounded-full uppercase"
                        style={{
                          fontFamily: 'var(--font-jetbrains)',
                          border: '1px solid rgba(212, 175, 55, 0.1)',
                          background: 'rgba(212, 175, 55, 0.03)',
                          color: 'var(--muted)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
