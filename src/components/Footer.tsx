export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(99,102,241,0.08)] bg-[var(--bg2)] py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 px-6 text-center sm:text-left">
        <p className="text-sm text-[var(--muted)]">
          Designed &amp; developed by{' '}
          <span className="text-[var(--text)] font-medium">M Yasir Arafath</span>
          <span className="hidden sm:inline"> · Hyderabad, India</span>
        </p>
        <p
          className="text-xs tracking-[0.1em] text-[var(--muted)]"
          style={{ fontFamily: 'var(--font-jetbrains)' }}
        >
          Built with Next.js · TypeScript · Tailwind CSS · ♥
        </p>
      </div>
    </footer>
  );
}
