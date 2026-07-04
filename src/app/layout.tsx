import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono, Raleway } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundFX from "@/components/BackgroundFX";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
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

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["300", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mdyasir.me"),
  title: "M Yasir Arafath | Software Developer & Frontend Engineer – React, Next.js, TypeScript",
  description:
    "M Yasir Arafath is a Software Developer and Frontend Engineer with 2+ years of experience building modern web applications using React, Next.js, TypeScript, and Tailwind CSS. Currently at SmartEdge Solutions building Areeva AI. Available for hire.",
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
    title: "M Yasir Arafath | Software Developer & Frontend Engineer",
    description:
      "Software Developer and Frontend Engineer specializing in React, Next.js, TypeScript, and modern UI engineering. Based in Hyderabad, India. Available for hire.",
    type: "website",
    url: "https://mdyasir.me/",
    images: [
      {
        url: "/yasir.png",
        width: 800,
        height: 800,
        alt: "M Yasir Arafath - Software Developer & Frontend Engineer",
      },
    ],
    siteName: "M Yasir Arafath - Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "M Yasir Arafath | Software Developer & Frontend Engineer",
    description:
      "Software Developer and Frontend Engineer specializing in React, Next.js, TypeScript, and modern UI engineering. Available for hire.",
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
    "theme-color": "#0a0e1a",
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
      className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} ${raleway.variable} h-full antialiased`}
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
                image: "https://mdyasir.me/yasir.png",
                sameAs: [
                  "https://www.linkedin.com/in/mdyasirarafath/",
                  "https://github.com/mdyasir1",
                ],
                jobTitle: "Software Developer & Frontend Engineer",
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
                description: "M Yasir Arafath is a Software Developer and Frontend Engineer with 2+ years of experience building modern web applications using React, Next.js, TypeScript, and Tailwind CSS.",
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
                description: "Portfolio of M Yasir Arafath, a Software Developer and Frontend Engineer specializing in React, Next.js, and modern web technologies.",
                inLanguage: "en-US",
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfilePage",
                url: "https://mdyasir.me",
                name: "M Yasir Arafath | Software Developer & Frontend Engineer",
                description: "Professional portfolio of M Yasir Arafath - Software Developer and Frontend Engineer.",
                mainEntity: {
                  "@type": "Person",
                  name: "M Yasir Arafath",
                  jobTitle: "Software Developer & Frontend Engineer",
                },
              },
            ]),
          }}
        />
        <SmoothScroll />
        <BackgroundFX />
        {children}
      </body>
    </html>
  );
}
