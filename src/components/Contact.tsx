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
    <section id="contact" className="relative overflow-hidden border-t border-[rgba(99,102,241,0.08)] bg-[var(--bg)] py-24 px-6">
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.1),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-xs tracking-[0.35em] text-[var(--accent3)] uppercase mb-4"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            Get In Touch
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] leading-[1.15] mb-6"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Have an idea?{' '}
            <span className="bg-gradient-to-r from-[var(--accent)] via-[var(--accent2)] to-[var(--accent3)] bg-clip-text text-transparent">
              Let&apos;s talk
            </span>
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)] max-w-xl mx-auto">
            If you&apos;ve got a project in mind or just want to say hi, send me a message. I usually reply within a day.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[rgba(99,102,241,0.1)] bg-[rgba(16,22,38,0.6)] p-8 backdrop-blur-sm"
          >
            <div className="grid gap-6 sm:grid-cols-2 mb-6">
              <label className="space-y-2 text-sm text-[var(--muted)]">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[rgba(99,102,241,0.15)] bg-[rgba(8,12,20,0.6)] px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--accent)] focus:ring-1 focus:ring-[rgba(99,102,241,0.2)]"
                />
              </label>
              <label className="space-y-2 text-sm text-[var(--muted)]">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[rgba(99,102,241,0.15)] bg-[rgba(8,12,20,0.6)] px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--accent)] focus:ring-1 focus:ring-[rgba(99,102,241,0.2)]"
                />
              </label>
            </div>
            <label className="space-y-2 text-sm text-[var(--muted)]">
              <span>Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full rounded-xl border border-[rgba(99,102,241,0.15)] bg-[rgba(8,12,20,0.6)] px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--accent)] focus:ring-1 focus:ring-[rgba(99,102,241,0.2)] resize-none"
              />
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] px-6 py-3.5 text-base font-semibold text-white shadow-xl shadow-[rgba(99,102,241,0.2)] transition-all duration-300 hover:shadow-[rgba(99,102,241,0.35)] hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message →'}
            </button>
            {submitMessage && (
              <p
                className={`mt-4 text-sm text-center ${submitMessage.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
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
            className="space-y-4"
          >
            <p
              className="text-xs tracking-[0.35em] text-[var(--accent3)] uppercase mb-6"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              Connect with me
            </p>
            {socialLinks.map((link) => (
              <div
                key={link.label}
                className="group flex items-center gap-4 rounded-2xl border border-[rgba(99,102,241,0.1)] bg-[rgba(16,22,38,0.6)] p-5 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(99,102,241,0.3)] hover:shadow-lg hover:shadow-[rgba(99,102,241,0.06)] hover:-translate-y-0.5"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 flex-1 min-w-0"
                >
                  <span className="text-2xl shrink-0">{link.emoji}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-syne)' }}>
                      {link.label}
                    </p>
                    <p className="text-[11px] tracking-[0.05em] text-[var(--muted)] truncate">
                      {link.desc}
                    </p>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(link.label, link.copyValue || link.href)}
                  className="shrink-0 rounded-lg border border-[rgba(99,102,241,0.15)] bg-[rgba(99,102,241,0.05)] p-2 text-[var(--accent3)] transition-all duration-200 hover:bg-[rgba(99,102,241,0.12)] hover:border-[var(--accent)]"
                  aria-label={`Copy ${link.label}`}
                  title={copied === link.label ? 'Copied!' : 'Copy to clipboard'}
                >
                  {copied === link.label ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
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
