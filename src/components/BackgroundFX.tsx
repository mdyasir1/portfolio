'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundFX() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="noise-overlay" />
      <div className="grid-overlay" />
      <div ref={cursorRef} className="cursor-glow" />

      {/* Floating orbs */}
      <div
        className="pointer-events-none fixed z-0"
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.08), transparent 70%)',
          top: '10%',
          left: '5%',
          animation: 'orbFloat 20s ease-in-out infinite',
        }}
      />
      <div
        className="pointer-events-none fixed z-0"
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.06), transparent 70%)',
          bottom: '15%',
          right: '10%',
          animation: 'orbFloat 25s ease-in-out infinite reverse',
        }}
      />
      <div
        className="pointer-events-none fixed z-0"
        style={{
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.06), transparent 70%)',
          top: '50%',
          left: '60%',
          animation: 'orbFloat 18s ease-in-out infinite',
          animationDelay: '-5s',
        }}
      />
    </>
  );
}
