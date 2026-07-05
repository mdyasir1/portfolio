'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouchDevice || prefersReducedMotion) return;

    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    const onMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target_ = e.target as HTMLElement;
      if (
        target_.tagName === 'A' ||
        target_.tagName === 'BUTTON' ||
        target_.closest('a') ||
        target_.closest('button') ||
        target_.dataset.cursor === 'pointer'
      ) {
        isHovering.current = true;
        outer.style.transform = `translate(${pos.current.x - 20}px, ${pos.current.y - 20}px) scale(1.8)`;
        outer.style.borderColor = 'var(--accent)';
        outer.style.background = 'rgba(212, 175, 55, 0.06)';
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target_ = e.target as HTMLElement;
      if (
        target_.tagName === 'A' ||
        target_.tagName === 'BUTTON' ||
        target_.closest('a') ||
        target_.closest('button') ||
        target_.dataset.cursor === 'pointer'
      ) {
        isHovering.current = false;
        outer.style.transform = `translate(${pos.current.x - 16}px, ${pos.current.y - 16}px) scale(1)`;
        outer.style.borderColor = 'rgba(212, 175, 55, 0.3)';
        outer.style.background = 'transparent';
      }
    };

    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.12);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.12);

      if (!isHovering.current) {
        outer.style.transform = `translate(${pos.current.x - 16}px, ${pos.current.y - 16}px) scale(1)`;
      } else {
        outer.style.transform = `translate(${pos.current.x - 20}px, ${pos.current.y - 20}px) scale(1.8)`;
      }
      inner.style.transform = `translate(${target.current.x - 3}px, ${target.current.y - 3}px)`;

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div
        ref={outerRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[10000] mix-blend-difference hidden md:block"
        style={{
          borderColor: 'rgba(212, 175, 55, 0.3)',
          transition: 'width 0.3s ease, height 0.3s ease, background 0.3s ease, border-color 0.3s ease',
          willChange: 'transform',
        }}
      />
      <div
        ref={innerRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[10001] hidden md:block"
        style={{
          background: 'var(--accent)',
          willChange: 'transform',
        }}
      />
    </>
  );
}
