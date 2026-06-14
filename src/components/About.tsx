'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '2+', label: 'Years of Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '2', label: 'Companies Worked' },
  { value: '∞', label: 'Lines of Code' },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-[rgba(99,102,241,0.08)] bg-[var(--bg)] py-24 px-6">
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.1),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <p
            className="text-xs tracking-[0.35em] text-[var(--accent3)] uppercase"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            About Me
          </p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              The Developer Behind
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent3)] bg-clip-text text-transparent"> the Code</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 text-base leading-relaxed text-[var(--muted)]"
            >
              <p>
                I&apos;m <span className="text-[var(--text)] font-medium">M Yasir Arafath</span>, a Frontend Developer
                based in Hyderabad, India. I studied{' '}
                <span className="text-[var(--accent3)]">Electrical &amp; Electronics Engineering</span>{' '}
                at RGUKT Nuzvid (2024). I still remember inspecting my first webpage and
                realizing I could make something appear on screen just by typing — that
                moment pulled me into development, and I&apos;ve been building ever since.
              </p>
              <p>
                I began my professional journey at{' '}
                <span className="text-[var(--text)]">Trangla Innovations</span> as a Junior Frontend
                Developer, where I worked across multiple projects — dashboards, e-commerce platforms,
                and landing pages — honing my skills in React, TypeScript, and modern CSS.
              </p>
              <p>
                Currently, I&apos;m at{' '}
                <span className="text-[var(--text)]">SmartEdge Solutions</span>, leading the frontend
                for <span className="text-[var(--accent3)]">Areeva AI</span> — a recruitment platform
                that uses AI to handle interviews and candidate screening. I built the dashboard UIs,
                interview interfaces, and wired everything to the backend APIs.
              </p>
              <p>
                I try to write code that&apos;s easy to change and interfaces that don&apos;t
                make people think twice. Outside of work, I&apos;m usually tinkering with a
                side project or digging into something I don&apos;t understand yet.
              </p>
            </motion.div>

            {/* Stat Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[rgba(99,102,241,0.12)] bg-[rgba(16,22,38,0.6)] p-5 text-center backdrop-blur-sm hover:border-[rgba(99,102,241,0.3)] transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(99,102,241,0.05)]"
                >
                  <p
                    className="text-3xl font-bold bg-gradient-to-r from-[var(--accent)] to-[var(--accent3)] bg-clip-text text-transparent"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-xs tracking-[0.15em] text-[var(--muted)] uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Orbital Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]">
              {/* Orbital rings */}
              <div
                className="absolute inset-0 rounded-full border border-[rgba(99,102,241,0.15)]"
                style={{ animation: 'rotateSlow 8s linear infinite' }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--accent)]"
                  style={{ boxShadow: '0 0 20px rgba(99,102,241,0.5)' }}
                />
              </div>
              <div
                className="absolute inset-[15px] rounded-full border border-[rgba(6,182,212,0.12)]"
                style={{ animation: 'rotateSlow 12s linear infinite reverse' }}
              >
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-[var(--accent3)]"
                  style={{ boxShadow: '0 0 15px rgba(6,182,212,0.4)' }}
                />
              </div>
              <div
                className="absolute inset-[30px] rounded-full border border-[rgba(139,92,246,0.1)]"
                style={{ animation: 'rotateSlow 15s linear infinite' }}
              >
                <div
                  className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[var(--accent2)]"
                  style={{ boxShadow: '0 0 15px rgba(139,92,246,0.4)' }}
                />
              </div>

              {/* Center: Profile Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full border-2 border-[rgba(99,102,241,0.3)] overflow-hidden"
                  style={{
                    boxShadow: '0 0 30px rgba(99,102,241,0.15), inset 0 0 30px rgba(99,102,241,0.05)',
                  }}
                >
                  <img
                    src="/yasir.png"
                    alt="M Yasir Arafath"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
