export default function Footer() {
  return (
    <footer
      className="relative py-8 px-6"
      style={{ borderTop: '1px solid rgba(212, 175, 55, 0.08)', background: 'var(--bg2)' }}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-center px-5 sm:px-6 lg:px-8 text-center">
        <p style={{ color: 'var(--muted)' }}>
          <span className="text-sm">Designed &amp; developed by </span>
          <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>M Yasir Arafath</span>
          <span className="hidden sm:inline text-sm"> &middot; Hyderabad, India</span>
        </p>
      </div>
    </footer>
  );
}
