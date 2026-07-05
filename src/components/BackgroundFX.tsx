'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundFX() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

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

      {/* Cursor glow */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9998] hidden md:block"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.03), transparent 70%)',
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s',
          willChange: 'left, top',
        }}
      />

      {/* Subtle ambient orbs */}
      <div
        className="pointer-events-none fixed z-0"
        style={{
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.03), transparent 70%)',
          top: '10%',
          left: '5%',
          animation: 'orbFloat 25s ease-in-out infinite',
        }}
      />
      <div
        className="pointer-events-none fixed z-0"
        style={{
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184, 134, 11, 0.02), transparent 70%)',
          bottom: '15%',
          right: '10%',
          animation: 'orbFloat 30s ease-in-out infinite reverse',
        }}
      />
    </>
  );
}
