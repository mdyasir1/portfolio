'use client';

import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image?: string;
  gradient?: string;
  readme?: string;
  tags?: string[];
  private?: boolean;
  type: 'company' | 'personal';
}

const companyProjects: Project[] = [
  {
    title: 'Areeva AI',
    description:
      'A recruitment platform built at SmartEdge Solutions. It streamlines the hiring pipeline \u2014 job postings, candidate screening, AI interviews, and onboarding \u2014 while keeping human oversight in the loop. My work focused on the frontend: dashboards, interview interfaces, and API integration.',
    image: '/areeva.jpg',
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'API Integration', 'Dashboard UI'],
    private: true,
    type: 'company',
  },
  {
    title: 'Multi-Modal Travel Booking System \u2013 Hotel Booking',
    description:
      'A hotel search results page for a multi-modal travel platform covering trains, flights, buses, and hotels. The challenge was handling complex filter combinations \u2014 price, ratings, availability \u2014 without slowing the page down. I used React Query for API management and ensured every layout held up on mobile.',
    image: '/project-1.jpeg',
    type: 'company',
  },
  {
    title: 'Truck Management System \u2013 Fleet Operations Platform',
    description:
      'A fleet operations dashboard for SwiftLogistics. I built a mobile-first interface so drivers and dispatchers could track trucks in real time. The main challenge was making the map and tracking data feel instant, even on slower connections.',
    image: '/project-2.jpg',
    type: 'company',
  },
  {
    title: 'Brobrooke \u2013 Social Fitness Platform',
    description:
      'A social fitness app where people log workouts and encourage each other. I built the workout tracker, community feed, and auth flow. The interesting part was designing an activity feed that felt engaging without being overwhelming.',
    image: '/fitness.jpg',
    type: 'company',
  },
  {
    title: 'TheWayFinder \u2013 Consultancy Web Application',
    description:
      'A consultancy website built with Next.js \u2014 mostly a brochure with a contact form. I focused on SEO since that was their primary lead channel, and set up dynamic routes so they could add new service pages without touching code.',
    image: '/wayfinder.jpg',
    type: 'company',
  },
];

const personalProjects: Project[] = [
  {
    title: 'TrackKit',
    description:
      'A lightweight inventory tool for small shop owners who were still relying on spreadsheets. It lets users add products, record sales, and monitor stock levels from a simple dashboard. Built with Prisma and NextAuth, the idea was to make it as straightforward as a notebook \u2014 but more useful.',
    image: '/trackkit.jpg',
    readme: 'https://github.com/mdyasir1/TrackkIt',
    type: 'personal',
  },
  {
    title: 'Zyora',
    description:
      'An e-commerce storefront I&apos;m working on as a side project. It includes product browsing, search and filter, and a persistent cart. I used Framer Motion for transitions. The backend and auth are still in progress.',
    image: '/zyora.jpg',
    type: 'personal',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -5;
    const rotateY = (x - centerX) / centerX * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;

    if (imageRef.current) {
      const imgX = (x / rect.width - 0.5) * 10;
      const imgY = (y / rect.height - 0.5) * 10;
      imageRef.current.style.transform = `scale(1.1) translate(${imgX}px, ${imgY}px)`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    const img = imageRef.current;
    if (card) card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    if (img) img.style.transform = 'scale(1) translate(0px, 0px)';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300"
      style={{
        border: '1px solid rgba(212, 175, 55, 0.1)',
        background: 'rgba(17, 17, 17, 0.6)',
        willChange: 'transform',
      }}
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden" ref={imageRef}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(184, 134, 11, 0.1))' }}
          >
            <span
              className="text-4xl font-bold name-gradient"
              style={{ fontFamily: 'var(--font-heading)', opacity: 0.3 }}
            >
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Badge */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className="px-2.5 py-1 text-[10px] tracking-[0.1em] rounded-full backdrop-blur-sm uppercase"
            style={{
              fontFamily: 'var(--font-jetbrains)',
              background: 'rgba(10, 10, 10, 0.7)',
              color: 'var(--accent)',
              border: '1px solid rgba(212, 175, 55, 0.15)',
            }}
          >
            {project.type === 'company' ? '🏢 Company' : '👤 Personal'}
          </span>
          {project.private && (
            <span
              className="px-2.5 py-1 text-[10px] tracking-[0.1em] rounded-full backdrop-blur-sm uppercase"
              style={{
                fontFamily: 'var(--font-jetbrains)',
                background: 'rgba(212, 175, 55, 0.1)',
                color: 'var(--accent)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
              }}
            >
              🔒 Private
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-lg font-semibold text-white mb-2"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {project.title}
        </h3>

        {project.tags && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] tracking-[0.05em] rounded-full"
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  border: '1px solid rgba(212, 175, 55, 0.08)',
                  background: 'rgba(212, 175, 55, 0.03)',
                  color: 'var(--muted)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3 items-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300"
            style={{
              fontFamily: 'var(--font-jetbrains)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              color: 'var(--accent)',
            }}
          >
            {isExpanded ? '\u25B2 Hide' : '\u25BC Details'}
          </button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--muted)' }}>
                {project.description}
              </p>
              {project.readme && (
                <a
                  href={project.readme}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs hover:underline"
                  style={{ fontFamily: 'var(--font-jetbrains)', color: 'var(--accent)' }}
                >
                  📖 View README →
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-20 sm:py-24 px-6"
      style={{ borderTop: '1px solid rgba(212, 175, 55, 0.08)', background: 'var(--bg2)' }}
    >
      <div
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
        style={{ background: 'radial-gradient(circle at bottom, rgba(212, 175, 55, 0.03), transparent 40%)' }}
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
            Portfolio
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.04em] text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Featured Projects
          </h2>
        </motion.div>

        {/* Company Projects */}
        <div className="mb-14">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span>🏢</span> Real Time Projects
          </motion.h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {companyProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}

            {/* And more company */}
            <div
              className="group relative rounded-2xl border-dashed overflow-hidden flex items-center justify-center min-h-[200px] transition-all duration-500"
              style={{
                border: '1px dashed rgba(212, 175, 55, 0.15)',
                background: 'rgba(17, 17, 17, 0.4)',
              }}
            >
              <div className="text-center p-6">
                <span className="text-3xl sm:text-4xl block mb-3 opacity-60 group-hover:opacity-100 transition-opacity">...</span>
                <p
                  className="text-sm font-semibold transition-colors"
                  style={{ fontFamily: 'var(--font-jetbrains)', color: 'var(--muted)' }}
                >
                  And more
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span>👤</span> Personal Projects
          </motion.h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {personalProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i + 10} />
            ))}

            {/* And more card */}
            <a
              href="https://github.com/mdyasir1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl border-dashed overflow-hidden flex items-center justify-center min-h-[200px] transition-all duration-500"
              style={{
                border: '1px dashed rgba(212, 175, 55, 0.15)',
                background: 'rgba(17, 17, 17, 0.4)',
              }}
            >
              <div className="text-center p-6">
                <span className="text-3xl sm:text-4xl block mb-3 opacity-60 group-hover:opacity-100 transition-opacity">...</span>
                <p
                  className="text-sm font-semibold transition-colors"
                  style={{ fontFamily: 'var(--font-jetbrains)', color: 'var(--muted)' }}
                >
                  View more on GitHub →
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
