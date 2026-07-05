# M Yasir Arafath — Portfolio

This is my personal portfolio site. I built it to showcase the work I've done over the past couple of years — the projects, the people I've worked with, and the kind of code I like to write.

I went with a dark theme and gold accents because that's what felt right. Everything is built from scratch using Next.js, TypeScript, and Tailwind CSS.

## What's in here

- **Hero** — my name, a quick intro, and a scrolling tech marquee
- **About** — a bit about me, my background, and some numbers
- **Skills** — grouped cards showing the tools I work with daily
- **Experience** — a timeline of where I've worked and what I did
- **Projects** — real company projects and a couple of personal ones, each with expandable details
- **Contact** — a working form that sends me an email, plus links to LinkedIn, GitHub, and my inbox

## Running it locally

```bash
npm install
npm run dev
```

That's it. The site will be up at `http://localhost:3000`.

## Building for production

```bash
npm run build
```

## Deployment

I deployed this on Vercel. It works out of the box with any Next.js-compatible host.

## A note on the contact form

The form uses Nodemailer under the hood. To get it working, you'll need to set up environment variables for your email provider. I use Gmail with an app password — works fine.

## Tech I used

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Framer Motion for animations
- Lenis for smooth scrolling
- GSAP for scroll-triggered effects
- Three.js for the 3D wireframe in the hero
- Nodemailer for the contact form

## Project structure

```
src/
├── app/
│   ├── api/contact/     # Contact form API
│   ├── globals.css      # Styles, animations, variables
│   ├── layout.tsx       # Fonts, metadata
│   └── page.tsx         # Puts all sections together
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Nav.tsx
│   ├── Footer.tsx
│   └── ...supporting components
```

---

Built by M Yasir Arafath.
