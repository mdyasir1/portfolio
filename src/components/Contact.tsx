'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mdyasirarafath/',
    emoji: '💼',
    desc: 'Connect professionally',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mdyasir1',
    emoji: '📦',
    desc: 'View open source work',
  },
  {
    label: 'Email',
    href: 'mailto:mdyasir4145@gmail.com',
    emoji: '✉️',
    desc: 'mdyasir4145@gmail.com',
    copyValue: 'mdyasir4145@gmail.com',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // fallback
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitMessage({ type: 'success', text: 'Message sent successfully! You will receive a confirmation email shortly.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage({ type: 'error', text: data.error || 'Failed to send. Please try again.' });
      }
    } catch {
      setSubmitMessage({ type: 'error', text: 'Network error. Please check your connection.' });
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24"
      style={{ borderTop: '1px solid rgba(212, 175, 55, 0.08)' }}
    >
      <div
        className="absolute inset-x-0 top-0 h-48 pointer-events-none"
        style={{ background: 'radial-gradient(circle at top, rgba(212, 175, 55, 0.04), transparent 40%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p
            className="text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-jetbrains)', color: 'var(--accent)' }}
          >
            Get In Touch
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.04em] leading-[1.15] mb-4 sm:mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Working on something?{' '}
            <span className="name-gradient">
              I&apos;d love to help.
            </span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed max-w-xl mx-auto px-2" style={{ color: 'var(--muted)' }}>
            Whether it&apos;s a project, a collaboration, or just a quick question — drop me a line. I typically respond within a day.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="rounded-2xl p-5 sm:p-8 backdrop-blur-sm"
            style={{
              border: '1px solid rgba(212, 175, 55, 0.1)',
              background: 'rgba(17, 17, 17, 0.6)',
            }}
          >
            <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 mb-6">
              <label className="space-y-2.5" style={{ color: 'var(--muted)' }}>
                <span className="font-medium text-xs tracking-[0.1em] uppercase block" style={{ color: 'var(--text)' }}>Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl px-4 py-3.5 text-base outline-none transition-all duration-300"
                  style={{
                    border: '1px solid rgba(212, 175, 55, 0.12)',
                    background: 'rgba(10, 10, 10, 0.6)',
                    color: 'var(--text)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.12)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </label>
              <label className="space-y-2.5" style={{ color: 'var(--muted)' }}>
                <span className="font-medium text-xs tracking-[0.1em] uppercase block" style={{ color: 'var(--text)' }}>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-xl px-4 py-3.5 text-base outline-none transition-all duration-300"
                  style={{
                    border: '1px solid rgba(212, 175, 55, 0.12)',
                    background: 'rgba(10, 10, 10, 0.6)',
                    color: 'var(--text)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.12)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </label>
            </div>
            <label className="space-y-2.5 block" style={{ color: 'var(--muted)' }}>
              <span className="font-medium text-xs tracking-[0.1em] uppercase block" style={{ color: 'var(--text)' }}>Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full rounded-xl px-4 py-3.5 text-base outline-none transition-all duration-300 resize-none"
                style={{
                  border: '1px solid rgba(212, 175, 55, 0.12)',
                  background: 'rgba(10, 10, 10, 0.6)',
                  color: 'var(--text)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.12)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full rounded-xl px-6 py-4 text-base font-semibold text-black transition-all duration-300 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, var(--accent), var(--accent3))',
                boxShadow: '0 0 30px rgba(212, 175, 55, 0.15)',
                minHeight: '52px',
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message →'}
            </button>
            {submitMessage && (
              <p
                className="mt-4 text-sm text-center"
                style={{ color: submitMessage.type === 'success' ? '#22c55e' : '#ef4444' }}
              >
                {submitMessage.text}
              </p>
            )}
          </motion.form>

          {/* Social Links Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3 sm:space-y-4"
          >
            <p
              className="text-xs tracking-[0.35em] uppercase mb-5 sm:mb-6"
              style={{ fontFamily: 'var(--font-jetbrains)', color: 'var(--accent)' }}
            >
              Connect with me
            </p>
            {socialLinks.map((link) => (
              <div
                key={link.label}
                className="group flex items-center gap-3 sm:gap-4 rounded-2xl p-4 sm:p-5 backdrop-blur-sm transition-all duration-300"
                style={{
                  border: '1px solid rgba(212, 175, 55, 0.1)',
                  background: 'rgba(17, 17, 17, 0.6)',
                }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0"
                >
                  <span className="text-xl sm:text-2xl shrink-0">{link.emoji}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                      {link.label}
                    </p>
                    <p className="text-[11px] tracking-[0.05em] truncate" style={{ color: 'var(--muted)' }}>
                      {link.desc}
                    </p>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(link.label, link.copyValue || link.href)}
                  className="shrink-0 rounded-lg p-2.5 transition-all duration-200"
                  style={{
                    border: '1px solid rgba(212, 175, 55, 0.12)',
                    background: 'rgba(212, 175, 55, 0.05)',
                    color: 'var(--accent)',
                  }}
                  aria-label={`Copy ${link.label}`}
                  title={copied === link.label ? 'Copied!' : 'Copy to clipboard'}
                >
                  {copied === link.label ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
