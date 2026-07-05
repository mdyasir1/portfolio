'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import dynamic from 'next/dynamic';

const GoldMesh3D = dynamic(() => import('./GoldMesh3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="w-24 h-24 rounded-full border opacity-20"
        style={{
          borderColor: 'var(--accent)',
          animation: 'rotateSlow 8s linear infinite',
        }}
      />
    </div>
  ),
});

const techStack = [
  'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS',
  'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Git', 'Figma',
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const hiRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setIsMobile(window.innerWidth < 768);
    });
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', handler);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.9 });

      tl.fromTo(badgeRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
      )
      .fromTo(hiRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power4.out' },
        '-=0.18'
      )
      .fromTo(nameRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power4.out' },
        '-=0.18'
      )
      .fromTo(taglineRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' },
        '-=0.18'
      )
      .fromTo(descRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' },
        '-=0.18'
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' },
        '-=0.18'
      )
      .fromTo(statusRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 },
        '-=0.12'
      )
      .fromTo(marqueeRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.45 },
        '-=0.18'
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[100dvh] sm:min-h-screen flex flex-col justify-center overflow-hidden bg-transparent pt-16 sm:pt-20"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-8 sm:py-16 w-full">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-5 sm:space-y-8">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.05)] px-3 sm:px-4 py-2 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] shadow-sm backdrop-blur-sm"
              style={{ fontFamily: 'var(--font-jetbrains)', opacity: 0, color: 'var(--accent)' }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--accent)' }} />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: 'var(--accent)' }} />
              </span>
              Software Developer
            </div>

            <div className="space-y-3">
              <h1
                className="leading-[1.1]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span
                  ref={hiRef}
                  className="block text-lg sm:text-xl lg:text-2xl font-medium tracking-[-0.01em]"
                  style={{ color: 'var(--muted)' }}
                >
                  Hi I&apos;m
                </span>
                <span
                  ref={nameRef}
                  className="block text-4xl sm:text-5xl lg:text-7xl font-black tracking-[-0.05em] mt-1 name-gradient"
                >
                  Yasir
                </span>
              </h1>

              <p
                ref={taglineRef}
                className="text-base sm:text-xl font-medium"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--muted)' }}
              >
                Crafting interfaces that feel effortless.
              </p>

              <p
                ref={descRef}
                className="text-sm sm:text-base leading-relaxed max-w-xl"
                style={{ color: 'var(--muted)' }}
              >
                <span className="sm:hidden">Software developer at{' '}
                  <span style={{ color: 'var(--accent)' }}>SmartEdge Solutions</span>,
                  working on <span style={{ color: 'var(--accent)' }}>Areeva AI</span>.
                  2+ years of hands-on experience building for the web.</span>
                <span className="hidden sm:inline">Software developer at{' '}
                  <span style={{ color: 'var(--accent)' }}>SmartEdge Solutions</span>,
                  where I work on <span style={{ color: 'var(--accent)' }}>Areeva AI</span> —
                  an AI-powered recruitment platform. Over the past two years, I&apos;ve
                  shipped dashboards, e-commerce storefronts, and SaaS products across
                  multiple startups, focusing on clean code and thoughtful interfaces.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-wrap gap-2.5 sm:gap-4"
              style={{ opacity: 0 }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-black transition-all duration-300 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, var(--accent), var(--accent3))',
                  boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)',
                }}
              >
                View My Work
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border px-5 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold transition-all duration-300 active:scale-95"
                style={{
                  borderColor: 'rgba(212, 175, 55, 0.3)',
                  background: 'rgba(212, 175, 55, 0.05)',
                  color: 'var(--text)',
                }}
              >
                Get In Touch
              </a>
            </div>

            {/* Status */}
            <div
              ref={statusRef}
              className="flex items-center gap-2 text-sm"
              style={{ fontFamily: 'var(--font-jetbrains)', color: 'var(--muted)', opacity: 0 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#22c55e' }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#22c55e' }} />
              </span>
              Available for new opportunities
            </div>
          </div>

          {/* Right Column: 3D Element */}
          {!isMobile && (
            <div className="hidden lg:flex items-center justify-center h-[400px] xl:h-[480px]">
              <GoldMesh3D speed={0.3} wireframe scale={0.7} />
            </div>
          )}
        </div>
      </div>

      {/* Tech Stack Marquee - hidden on mobile */}
      <div
        ref={marqueeRef}
        className="relative z-10 mt-8 border-t py-6 overflow-hidden hidden sm:block"
        style={{ borderColor: 'rgba(212, 175, 55, 0.08)', opacity: 0 }}
      >
        <div className="marquee-track">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-12 sm:gap-16 items-center">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs sm:text-sm tracking-[0.15em] whitespace-nowrap uppercase"
                  style={{ fontFamily: 'var(--font-jetbrains)', color: 'var(--muted)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="text-xs tracking-[0.2em] uppercase"
          style={{ fontFamily: 'var(--font-jetbrains)', color: 'var(--muted)' }}
        >
          Scroll
        </span>
        <div
          className="w-5 h-8 rounded-full flex justify-center pt-1.5"
          style={{ border: '1px solid rgba(212, 175, 55, 0.2)' }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ background: 'var(--accent)', animation: 'scrollDot 1.8s ease-in-out infinite' }}
          />
        </div>
      </div>
    </section>
  );
}
