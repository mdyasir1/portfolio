'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProfilePhotoVisual from './ProfilePhotoVisual';

gsap.registerPlugin(ScrollTrigger);

function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: 2, suffix: '+', label: 'Years of Experience' },
  { value: 10, suffix: '+', label: 'Projects Delivered' },
  { value: 2, suffix: '', label: 'Companies Worked' },
  { value: 50, suffix: 'K+', label: 'Lines of Code' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setIsMobile(window.innerWidth < 768);
    });
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      );

      const paragraphs = bioRef.current?.querySelectorAll('p');
      if (paragraphs) {
        gsap.fromTo(paragraphs,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: bioRef.current, start: 'top 80%', toggleActions: 'play none none none' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden py-20 sm:py-24 px-6"
      style={{ borderTop: '1px solid rgba(212, 175, 55, 0.08)' }}
    >
      <div
        className="absolute inset-x-0 top-0 h-48 pointer-events-none"
        style={{ background: 'radial-gradient(circle at top, rgba(212, 175, 55, 0.04), transparent 40%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.35em] uppercase mb-6"
          style={{ fontFamily: 'var(--font-jetbrains)', color: 'var(--accent)' }}
        >
          About Me
        </motion.p>

        <div className="grid lg:grid-cols-[1fr_0.6fr] gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h2
              ref={headingRef}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.04em] text-white"
              style={{ fontFamily: 'var(--font-heading)', opacity: 0 }}
            >
              The Developer Behind
              <span className="name-gradient"> the Code</span>
            </h2>

            <div ref={bioRef} className="space-y-5 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              <p>
                I&apos;m <span className="font-medium" style={{ color: 'var(--text)' }}>M Yasir Arafath</span>, a software developer
                based in Hyderabad, India. I studied{' '}
                <span style={{ color: 'var(--accent)' }}>Electrical &amp; Electronics Engineering</span>{' '}
                at RGUKT Nuzvid (2024). I still remember inspecting my first webpage and
                realising I could make something appear on screen just by typing — that
                curiosity pulled me into development, and I haven&apos;t stopped since.
              </p>
              <p>
                I started my career at{' '}
                <span style={{ color: 'var(--text)' }}>Trangla Innovations</span> as a Junior Frontend
                Developer, working across dashboards, e-commerce platforms, and landing
                pages. That role gave me a solid foundation in React, TypeScript, and
                the kind of CSS that actually behaves on every screen size.
              </p>
              <p>
                Today, I&apos;m at{' '}
                <span style={{ color: 'var(--text)' }}>SmartEdge Solutions</span>, working on{' '}
                <span style={{ color: 'var(--accent)' }}>Areeva AI</span> — a recruitment
                platform that uses AI to streamline interviews and candidate screening.
                I build the dashboard interfaces, integrate with backend APIs, and
                try to make the whole experience feel seamless.
              </p>
              <p>
                Outside of work, I&apos;m usually experimenting with a side project or
                going down a rabbit hole I didn&apos;t plan on. I care about writing
                code that&apos;s easy to maintain and interfaces that don&apos;t
                make people think twice.
              </p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl p-4 sm:p-5 text-center card-hover"
                  style={{
                    border: '1px solid rgba(212, 175, 55, 0.1)',
                    background: 'rgba(17, 17, 17, 0.6)',
                  }}
                >
                  <p
                    className="text-2xl sm:text-3xl font-bold name-gradient"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p
                    className="mt-1.5 text-[10px] sm:text-xs tracking-[0.12em] uppercase"
                    style={{ color: 'var(--muted)' }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Profile Photo */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="hidden lg:flex items-center justify-center h-[360px]"
            >
              <ProfilePhotoVisual />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
