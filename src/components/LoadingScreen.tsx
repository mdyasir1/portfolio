'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function LoadingScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
        },
      });

      tl.set(containerRef.current, { visibility: 'visible' })
        .fromTo(
          photoRef.current,
          { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
          { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }
        )
        .fromTo(
          ringRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.5'
        )
        .fromTo(
          nameRef.current,
          { opacity: 0, y: 15, filter: 'blur(5px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          taglineRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
          '-=0.2'
        )
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: 'power4.inOut',
          delay: 0.3,
        });
    });

    return () => ctx.revert();
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ visibility: 'hidden', background: 'var(--bg)' }}
    >
      {/* Subtle radial glow behind photo */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.06), transparent 70%)',
        }}
      />

      {/* Photo with ring */}
      <div className="relative mb-6">
        {/* Gold ring */}
        <div
          ref={ringRef}
          className="absolute inset-[-6px] rounded-full"
          style={{
            border: '2px solid rgba(212, 175, 55, 0.3)',
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.1), inset 0 0 30px rgba(212, 175, 55, 0.05)',
            opacity: 0,
          }}
        />
        {/* Photo */}
        <div
          ref={photoRef}
          className="relative w-24 h-24 rounded-full overflow-hidden"
          style={{
            border: '2px solid rgba(212, 175, 55, 0.4)',
            opacity: 0,
          }}
        >
          <img
            src="/yasir.png"
            alt="M Yasir Arafath"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <div
        ref={nameRef}
        className="text-sm sm:text-base tracking-[0.35em] uppercase mb-2"
        style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)', opacity: 0 }}
      >
        M Yasir Arafath
      </div>

      {/* Tagline */}
      <div
        ref={taglineRef}
        className="text-xs tracking-[0.2em] uppercase"
        style={{ fontFamily: 'var(--font-jetbrains)', color: 'var(--muted)', opacity: 0 }}
      >
        Frontend Developer &amp; UI Engineer
      </div>
    </div>
  );
}
