import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import GradientMesh from "@/components/ParticleGalaxy";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mdyasir.me"),
  title: "M Yasir Arafath | Software Developer – React, Next.js, TypeScript",
  description:
    "M Yasir Arafath is a Software Developer with 2+ years of experience building modern web applications using React, Next.js, TypeScript, and Tailwind CSS. Currently at SmartEdge Solutions building Areeva AI. Available for hire.",
  keywords: [
    "M Yasir Arafath",
    "Yasir",
    "Arafath",
    "Mohammad Yasir Arafath",
    "Yasir Arafath",
    "software developer",
    "software engineer",
    "frontend developer",
    "frontend engineer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "web developer",
    "UI engineer",
    "UI/UX developer",
    "React.js developer",
    "Tailwind CSS developer",
    "JavaScript developer",
    "Hyderabad software developer",
    "Hyderabad frontend developer",
    "India software engineer",
    "hire frontend developer",
    "freelance frontend developer",
    "freelance web developer",
    "freelance React developer",
    "hire software developer",
    "freelance software engineer",
    "freelancer India",
    "developer portfolio",
    "Areeva AI developer",
    "SmartEdge Solutions developer",
    "web application developer",
    "responsive web design",
    "modern web development",
  ],
  icons: {
    icon: "/yasir.png",
    apple: "/yasir.png",
  },
  openGraph: {
    title: "M Yasir Arafath | Software Developer",
    description:
      "Software Developer specializing in React, Next.js, TypeScript, and modern UI engineering. Based in Hyderabad, India. Available for hire.",
    type: "website",
    url: "https://mdyasir.me/",
    images: [
      {
        url: "/yasir.png",
        width: 800,
        height: 800,
        alt: "M Yasir Arafath - Software Developer from Hyderabad, India",
      },
    ],
    siteName: "M Yasir Arafath - Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "M Yasir Arafath | Software Developer",
    description:
      "Software Developer specializing in React, Next.js, TypeScript, and modern UI engineering. Available for hire.",
    images: ["/yasir.png"],
    creator: "@mdyasirarafath",
  },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  verification: {
    google: "pYRrz1oqPOQS3jOVVcCXYz94t7sFAXvT6k5ZTJC5pNY",
  },
  alternates: {
    canonical: "https://mdyasir.me",
  },
  other: {
    "theme-color": "#0a0a0a",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "M Yasir Arafath",
                alternateName: ["Mohammad Yasir Arafath", "Yasir Arafath"],
                url: "https://mdyasir.me",
                image: {
                  "@type": "ImageObject",
                  url: "https://mdyasir.me/yasir.png",
                  caption: "M Yasir Arafath - Software Developer",
                  description: "Photo of M Yasir Arafath, a Software Developer from Hyderabad, India",
                },
                sameAs: [
                  "https://www.linkedin.com/in/mdyasirarafath/",
                  "https://github.com/mdyasir1",
                ],
                jobTitle: "Software Developer",
                worksFor: {
                  "@type": "Organization",
                  name: "SmartEdge Solutions",
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Hyderabad",
                  addressRegion: "Telangana",
                  addressCountry: "IN",
                },
                knowsAbout: [
                  "React",
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "Tailwind CSS",
                  "Frontend Development",
                  "Software Development",
                  "Web Development",
                  "UI Engineering",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                ],
                description: "M Yasir Arafath is a Software Developer from Hyderabad, India with 2+ years of experience building modern web applications using React, Next.js, TypeScript, and Tailwind CSS.",
                email: "mdyasir4145@gmail.com",
                availableFor: "Full-time, Freelance, Contract",
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "M Yasir Arafath - Portfolio",
                url: "https://mdyasir.me",
                author: {
                  "@type": "Person",
                  name: "M Yasir Arafath",
                },
                description: "Portfolio of M Yasir Arafath, a Software Developer specializing in React, Next.js, and modern web technologies.",
                inLanguage: "en-US",
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfilePage",
                url: "https://mdyasir.me",
                name: "M Yasir Arafath | Software Developer",
                description: "Professional portfolio of M Yasir Arafath - Software Developer.",
                mainEntity: {
                  "@type": "Person",
                  name: "M Yasir Arafath",
                  jobTitle: "Software Developer",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Who is M Yasir Arafath?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "M Yasir Arafath is a Software Developer from Hyderabad, India with 2+ years of experience. He currently works at SmartEdge Solutions building Areeva AI — an AI-powered recruitment platform.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What technologies does M Yasir work with?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "He works with React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Node.js, Express.js, MongoDB, Redux, and Git.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Where does M Yasir currently work?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "He works at SmartEdge Solutions in Hyderabad, building Areeva AI — a recruitment platform that uses AI to interview and screen candidates.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What projects has M Yasir built?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "He has delivered 10+ projects including Areeva AI, a hotel booking system, a fleet management dashboard, a social fitness app, TrackKit (inventory app), and Zyora (e-commerce storefront).",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is M Yasir available for hire?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, M Yasir is available for full-time, freelance, and contract opportunities. Contact him at mdyasir4145@gmail.com or through the contact form on this site.",
                    },
                  },
                ],
              },
            ]),
          }}
        />
        <LoadingScreen />
        <CustomCursor />
        <GradientMesh />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
