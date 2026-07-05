'use client';

import { useEffect, useRef } from 'react';

export default function GradientMesh() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      containerRef.current.style.setProperty('--mx', `${x}px`);
      containerRef.current.style.setProperty('--my', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Blob 1 — Large gold, top-left */}
      <div
        className="absolute"
        style={{
          width: '400px',
          height: '400px',
          top: '-10%',
          left: '-5%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'meshDrift1 20s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Blob 2 — Warm amber, bottom-right */}
      <div
        className="absolute"
        style={{
          width: '350px',
          height: '350px',
          bottom: '-5%',
          right: '-5%',
          background: 'radial-gradient(circle, rgba(184, 134, 11, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'meshDrift2 25s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Blob 3 — Faint light gold, center-right */}
      <div
        className="absolute"
        style={{
          width: '300px',
          height: '300px',
          top: '40%',
          right: '20%',
          background: 'radial-gradient(circle, rgba(245, 208, 97, 0.04) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'meshDrift3 30s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Subtle film grain overlay */}
      <div className="noise-overlay" />

      {/* Cursor glow */}
      <div
        className="absolute hidden md:block"
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.025), transparent 70%)',
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.15s ease-out, top 0.15s ease-out',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
