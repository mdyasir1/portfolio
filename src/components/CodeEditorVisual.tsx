'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const codeLines = [
  { indent: 0, text: 'const ', keyword: 'app', rest: ' = () => {' },
  { indent: 1, text: '', keyword: 'return', rest: ' (' },
  { indent: 2, text: '', keyword: '<div', rest: ' className="hero">' },
  { indent: 3, text: '', keyword: '<h1', rest: '>' },
  { indent: 4, text: '', keyword: 'Hello, World!', rest: '' },
  { indent: 3, text: '', keyword: '</h1>', rest: '' },
  { indent: 2, text: '', keyword: '</div>', rest: '' },
  { indent: 1, text: '', keyword: ')', rest: ';' },
  { indent: 0, text: '', keyword: '};', rest: '' },
];

function CodeLine({ line, index }: { line: typeof codeLines[0]; index: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3200 + index * 180);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className="flex items-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-8px)',
        transition: 'all 0.4s ease',
        paddingLeft: `${line.indent * 16}px`,
      }}
    >
      <span className="w-6 text-right mr-4 text-[10px] select-none" style={{ color: 'rgba(212,175,55,0.25)' }}>
        {index + 1}
      </span>
      <span className="text-xs sm:text-[13px]" style={{ fontFamily: 'var(--font-jetbrains)' }}>
        {line.text && <span style={{ color: 'var(--accent)' }}>{line.text}</span>}
        <span style={{ color: '#c792ea' }}>{line.keyword}</span>
        <span style={{ color: 'var(--muted)' }}>{line.rest}</span>
      </span>
    </div>
  );
}

export default function CodeEditorVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 3, duration: 0.8, ease: 'easeOut' }}
      className="relative w-full max-w-[380px]"
    >
      {/* Floating glow behind */}
      <div
        className="absolute -inset-8 rounded-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Editor window */}
      <div
        className="relative rounded-2xl overflow-hidden backdrop-blur-xl"
        style={{
          border: '1px solid rgba(212,175,55,0.12)',
          background: 'rgba(10,10,10,0.85)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(212,175,55,0.05)',
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ borderBottom: '1px solid rgba(212,175,55,0.08)' }}
        >
          <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: '#28ca41' }} />
          <span
            className="ml-3 text-[10px] tracking-[0.1em] uppercase"
            style={{ fontFamily: 'var(--font-jetbrains)', color: 'rgba(212,175,55,0.4)' }}
          >
            app.tsx
          </span>
        </div>

        {/* Code content */}
        <div className="p-4 space-y-1.5 min-h-[220px]">
          {codeLines.map((line, i) => (
            <CodeLine key={i} line={line} index={i} />
          ))}
        </div>

        {/* Bottom status */}
        <div
          className="flex items-center justify-between px-4 py-2"
          style={{ borderTop: '1px solid rgba(212,175,55,0.06)' }}
        >
          <span className="text-[9px] tracking-[0.1em] uppercase" style={{ fontFamily: 'var(--font-jetbrains)', color: 'rgba(212,175,55,0.3)' }}>
            TypeScript React
          </span>
          <span className="text-[9px] tracking-[0.1em] uppercase" style={{ fontFamily: 'var(--font-jetbrains)', color: 'rgba(212,175,55,0.3)' }}>
            UTF-8
          </span>
        </div>
      </div>

      {/* Floating tech badges */}
      {[
        { label: 'React', top: '-12px', right: '-12px', delay: 3.5 },
        { label: 'Next.js', bottom: '-10px', left: '-10px', delay: 3.8 },
      ].map((badge) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: badge.delay, duration: 0.4 }}
          className="absolute px-3 py-1.5 rounded-full text-[10px] tracking-[0.1em] uppercase backdrop-blur-md"
          style={{
            top: badge.top,
            right: badge.right,
            bottom: badge.bottom,
            left: badge.left,
            fontFamily: 'var(--font-jetbrains)',
            border: '1px solid rgba(212,175,55,0.2)',
            background: 'rgba(10,10,10,0.7)',
            color: 'var(--accent)',
            animation: 'pulse 3s ease-in-out infinite',
            animationDelay: `${badge.delay}s`,
          }}
        >
          {badge.label}
        </motion.div>
      ))}
    </motion.div>
  );
}
