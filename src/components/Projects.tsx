'use client';

import { useState } from 'react';
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
      'A recruitment platform I helped build at SmartEdge Solutions. It automates the hiring pipeline — job postings, candidate screening, AI interviews, and onboarding — while keeping senior staff in the loop. I worked mainly on the frontend: dashboards, interview interfaces, and connecting everything to the API.',
    image: '/areeva.jpg',
    gradient: 'from-[#6366f1] to-[#8b5cf6]',
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'API Integration', 'Dashboard UI'],
    private: true,
    type: 'company',
  },
  {
    title: 'Multi-Modal Travel Booking System – Hotel Booking',
    description:
      'I built the hotel search results page for a multi-modal travel platform (trains, flights, buses, hotels). The tricky part was handling complex filter combinations — price, ratings, availability — while keeping the page fast. I used React Query to manage API calls and made sure every layout worked on mobile.',
    image: '/project-1.jpeg',
    type: 'company',
  },
  {
    title: 'Truck Management System – Fleet Operations Platform',
    description:
      'A fleet operations dashboard I built for SwiftLogistics. I created a mobile-first interface so drivers and dispatchers could track trucks in real time. The biggest challenge was making the map and tracking data feel instant even on slow connections.',
    image: '/project-2.jpg',
    type: 'company',
  },
  {
    title: 'Brobrooke – Social Fitness Platform',
    description:
      'Brobrooke is a social fitness app where people log workouts and cheer each other on. I built the workout tracker, the community feed, and the auth flow. The fun part was figuring out how to make the activity feed feel alive without overwhelming the user.',
    image: '/fitness.jpg',
    type: 'company',
  },
  {
    title: 'TheWayFinder – Consultancy Web Application',
    description:
      'A consultancy site I built with Next.js — mostly a brochure with a contact form. I spent extra time on SEO since that was their main way of getting leads, and set up dynamic routes so they could add new service pages without touching code.',
    image: '/wayfinder.jpg',
    type: 'company',
  },
];

const personalProjects: Project[] = [
  {
    title: 'TrackKit',
    description:
      'A simple inventory app I built for small shop owners who were still using spreadsheets. It lets them add products, record sales, and see stock levels on a dashboard. I used Prisma for the database and NextAuth for login. The goal was to make something as simple as a notebook but more powerful.',
    image: '/trackkit.jpg',
    readme: 'https://github.com/mdyasir1/TrackkIt',
    type: 'personal',
  },
  {
    title: 'Zyora',
    description:
      'An e-commerce storefront I&apos;m building as a side project. It has product browsing, search and filter, and a cart that persists across page reloads. I used Framer Motion for transitions. The backend and auth are still in progress.',
    image: '/zyora.jpg',
    type: 'personal',
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderProjectCard = (project: Project, idx: number) => {
    const key = `${project.title}-${idx}`;
    const isExpanded = expanded[key];

    return (
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: (idx % 6) * 0.08 }}
        className="group relative rounded-2xl border border-[rgba(99,102,241,0.1)] bg-[rgba(16,22,38,0.6)] overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-[rgba(99,102,241,0.25)] hover:shadow-xl hover:shadow-[rgba(99,102,241,0.06)] hover:-translate-y-1"
      >
        {/* Thumbnail */}
        <div className="relative h-44 overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div
              className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
            >
              <span
                className="text-4xl font-bold text-white/30"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                {project.title.charAt(0)}
              </span>
            </div>
          )}

          {/* Badge */}
          <div className="absolute top-3 left-3 flex gap-2">
            <span
              className="px-2.5 py-1 text-[10px] tracking-[0.1em] rounded-full bg-[rgba(8,12,20,0.7)] backdrop-blur-sm text-[var(--accent3)] uppercase border border-[rgba(99,102,241,0.15)]"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              {project.type === 'company' ? '🏢 Company' : '👤 Personal'}
            </span>
            {project.private && (
              <span
                className="px-2.5 py-1 text-[10px] tracking-[0.1em] rounded-full bg-[rgba(139,92,246,0.15)] backdrop-blur-sm text-[var(--accent2)] uppercase border border-[rgba(139,92,246,0.2)]"
                style={{ fontFamily: 'var(--font-jetbrains)' }}
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
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            {project.title}
          </h3>

          {project.tags && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] tracking-[0.05em] rounded-full border border-[rgba(99,102,241,0.1)] bg-[rgba(99,102,241,0.04)] text-[var(--muted)]"
                  style={{ fontFamily: 'var(--font-jetbrains)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-3 items-center">
            <button
              onClick={() => toggleExpand(key)}
              className="px-4 py-2 text-xs font-semibold rounded-full border border-[rgba(99,102,241,0.2)] text-[var(--accent3)] transition-all duration-300 hover:bg-[rgba(99,102,241,0.1)]"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              {isExpanded ? '▲ Hide' : '▼ Details'}
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
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] whitespace-pre-line">
                  {project.description}
                </p>
                {project.readme && (
                  <a
                    href={project.readme}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs text-[var(--accent3)] hover:underline"
                    style={{ fontFamily: 'var(--font-jetbrains)' }}
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
  };

  return (
    <section id="projects" className="relative overflow-hidden border-t border-[rgba(99,102,241,0.08)] bg-[var(--bg2)] py-24 px-6">
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.06),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
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
            Portfolio
          </p>
          <h2
            className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl"
            style={{ fontFamily: 'var(--font-syne)' }}
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
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            <span>🏢</span> Real Time Projects
          </motion.h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {companyProjects.map((project, i) => renderProjectCard(project, i))}

            {/* And more company */}
            <div className="group relative rounded-2xl border border-dashed border-[rgba(99,102,241,0.15)] bg-[rgba(16,22,38,0.4)] overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-[rgba(99,102,241,0.25)] hover:bg-[rgba(99,102,241,0.06)] hover:shadow-xl hover:shadow-[rgba(99,102,241,0.08)] hover:-translate-y-1 flex items-center justify-center min-h-[200px]">
              <div className="text-center p-6">
                <span className="text-3xl sm:text-4xl block mb-3 opacity-60 group-hover:opacity-100 transition-opacity">...</span>
                <p
                  className="text-sm font-semibold text-[var(--muted)] group-hover:text-[var(--text)] transition-colors"
                  style={{ fontFamily: 'var(--font-jetbrains)' }}
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
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            <span>👤</span> Personal Projects
          </motion.h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {personalProjects.map((project, i) => renderProjectCard(project, i + 10))}

            {/* And more card */}
            <a
              href="https://github.com/mdyasir1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl border border-dashed border-[rgba(99,102,241,0.15)] bg-[rgba(16,22,38,0.4)] overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-[var(--accent)] hover:bg-[rgba(99,102,241,0.06)] hover:shadow-xl hover:shadow-[rgba(99,102,241,0.08)] hover:-translate-y-1 flex items-center justify-center min-h-[200px]"
            >
              <div className="text-center p-6">
                <span className="text-3xl sm:text-4xl block mb-3 opacity-60 group-hover:opacity-100 transition-opacity">...</span>
                <p
                  className="text-sm font-semibold text-[var(--muted)] group-hover:text-[var(--text)] transition-colors"
                  style={{ fontFamily: 'var(--font-jetbrains)' }}
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
