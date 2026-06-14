# M Yasir Arafath — Portfolio

A dark-themed portfolio built with Next.js 16, TypeScript, and Tailwind CSS. Showcases real projects, work experience, skills, and a contact form that sends email.

## Tech Stack

- **Next.js 16** — App Router, Turbopack
- **TypeScript**
- **Tailwind CSS** (v4)
- **Framer Motion** — scroll/enter animations
- **Lenis** — smooth scrolling
- **Nodemailer** — contact form → email

## Sections

- **Hero** — gradient name with glow, code editor visual, tech marquee
- **About** — bio, stats, orbital profile image
- **Skills** — 6 grouped skill cards
- **Experience** — vertical timeline with scroll-driven scale
- **Projects** — 5 company + 2 personal project cards with expandable details
- **Contact** — form → `/api/contact` + social links with copy buttons

## Getting Started

```bash
npm install
```

Copy `.env.local` and add your email credentials:

```
EMAIL_USER=mdyasir4145@gmail.com
EMAIL_PASS=your-app-password
```

Run:

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Designed for Vercel (or any Next.js-compatible host).

## Project Structure

```
src/
├── app/
│   ├── api/contact/     # Email API route
│   ├── globals.css      # Design system, keyframes, utilities
│   ├── layout.tsx       # Fonts, SEO metadata, JSON-LD
│   └── page.tsx         # Section composition
├── components/
│   ├── Hero.tsx         # Name, tagline, code editor, marquee
│   ├── About.tsx        # Bio, stats, orbital portrait
│   ├── Skills.tsx       # Skill category cards
│   ├── Experience.tsx   # Timeline with scroll effects
│   ├── Projects.tsx     # Project cards with detail toggle
│   ├── Contact.tsx      # Form + social links
│   ├── Nav.tsx          # Sticky nav with mobile menu
│   ├── Footer.tsx       # Credits
│   ├── BackgroundFX.tsx # Orbs, noise, grid, cursor glow
│   └── SmoothScroll.tsx # Lenis wrapper
```
