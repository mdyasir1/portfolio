'use client';

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

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-t border-[rgba(99,102,241,0.08)] bg-[var(--bg2)] py-24 px-6">
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.08),transparent_40%)]" />

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
            Skills &amp; Expertise
          </p>
          <h2
            className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            My Toolkit
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-2xl border border-[rgba(99,102,241,0.1)] bg-[rgba(16,22,38,0.6)] p-6 backdrop-blur-sm transition-all duration-500 hover:border-[rgba(99,102,241,0.3)] hover:shadow-xl hover:shadow-[rgba(99,102,241,0.06)] hover:-translate-y-1"
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99,102,241,0.06), transparent 40%)',
                }}
              />

              <div className="relative z-10">
                <span className="text-2xl mb-3 block">{group.emoji}</span>
                <h3
                  className="text-lg font-semibold text-white mb-3"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs rounded-full border border-[rgba(99,102,241,0.15)] bg-[rgba(99,102,241,0.05)] text-[var(--muted)] tracking-[0.05em] transition-all duration-300 group-hover:border-[rgba(99,102,241,0.25)] group-hover:text-[var(--text)]"
                      style={{ fontFamily: 'var(--font-jetbrains)' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
