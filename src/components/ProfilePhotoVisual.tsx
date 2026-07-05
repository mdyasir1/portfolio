'use client';

export default function ProfilePhotoVisual() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow */}
      <div
        className="absolute w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Outer ring - slow rotation */}
      <div
        className="absolute w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] rounded-full"
        style={{
          border: '1px solid rgba(212, 175, 55, 0.1)',
          animation: 'rotateSlow 25s linear infinite',
        }}
      >
        <div
          className="absolute w-2 h-2 rounded-full"
          style={{
            top: '0',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'var(--accent)',
            boxShadow: '0 0 12px rgba(212, 175, 55, 0.6)',
          }}
        />
        <div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            bottom: '20%',
            right: '0',
            transform: 'translate(50%, 50%)',
            background: 'var(--accent3)',
            boxShadow: '0 0 8px rgba(245, 208, 97, 0.5)',
          }}
        />
      </div>

      {/* Middle ring - reverse rotation */}
      <div
        className="absolute w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] rounded-full"
        style={{
          border: '1px solid rgba(212, 175, 55, 0.07)',
          animation: 'rotateSlow 18s linear infinite reverse',
        }}
      >
        <div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            top: '15%',
            left: '0',
            transform: 'translate(-50%, -50%)',
            background: 'var(--accent2)',
            boxShadow: '0 0 8px rgba(184, 134, 11, 0.5)',
          }}
        />
      </div>

      {/* Inner ring */}
      <div
        className="absolute w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] rounded-full"
        style={{
          border: '1px dashed rgba(212, 175, 55, 0.06)',
          animation: 'rotateSlow 12s linear infinite',
        }}
      />

      {/* Photo container */}
      <div
        className="relative w-[170px] h-[170px] sm:w-[190px] sm:h-[190px] rounded-full overflow-hidden"
        style={{
          border: '2px solid rgba(212, 175, 55, 0.2)',
          boxShadow: '0 0 40px rgba(212, 175, 55, 0.1), 0 0 80px rgba(212, 175, 55, 0.05)',
          animation: 'photoFloat 5s ease-in-out infinite',
        }}
      >
        <img
          src="/yasir.png"
          alt="M Yasir Arafath"
          className="w-full h-full object-cover"
        />
        {/* Photo overlay gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.3) 100%)',
          }}
        />
      </div>

      {/* Floating dots */}
      {[
        { top: '5%', left: '10%', size: 4, delay: '0s' },
        { top: '80%', left: '5%', size: 3, delay: '1.5s' },
        { top: '10%', right: '5%', size: 3, delay: '0.8s' },
        { bottom: '8%', right: '12%', size: 4, delay: '2s' },
        { top: '45%', left: '-5%', size: 2, delay: '3s' },
        { top: '30%', right: '-3%', size: 2, delay: '1s' },
      ].map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: dot.top,
            left: dot.left,
            right: dot.right,
            bottom: dot.bottom,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            background: 'var(--accent)',
            opacity: 0.35,
            animation: `pulse 3s ease-in-out infinite`,
            animationDelay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}
