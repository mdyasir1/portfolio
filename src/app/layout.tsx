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
  metadataBase: new URL("https://mdyasirarafath.vercel.app"),
  title: "M Yasir Arafath | Frontend Developer – React, Next.js, UI Engineering",
  description:
    "Frontend Developer with 2+ years experience building modern web applications using React, Next.js, TypeScript, and Tailwind CSS. Currently at SmartEdge Solutions building Areeva AI.",
  keywords: [
    "frontend developer",
    "M Yasir Arafath",
    "Mohammad Yasir Arafath",
    "Yasir Mohammad",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Hyderabad",
    "developer portfolio",
    "UI engineer",
  ],
  icons: {
    icon: "/yasir.png",
    apple: "/yasir.png",
  },
  openGraph: {
    title: "M Yasir Arafath | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern UI engineering. Based in Hyderabad, India.",
    type: "website",
    url: "https://mdyasirarafath.vercel.app/",
    images: [{ url: "/yasir.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "M Yasir Arafath | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern UI engineering.",
    images: ["/yasir.png"],
  },
  robots: "index, follow",
  verification: {
    google: "pXUmuNOtaE_Vu8aOhq4gsVux5jy2aD7lWfFd71Ly2W0",
  },
  alternates: {
    canonical: "https://mdyasirarafath.vercel.app",
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "M Yasir Arafath",
              alternateName: "Mohammad Yasir Arafath",
              url: "https://mdyasirarafath.vercel.app",
              image: "https://mdyasirarafath.vercel.app/yasir.png",
              sameAs: [
                "https://www.linkedin.com/in/mdyasirarafath/",
                "https://github.com/mdyasir1",
              ],
              jobTitle: "Frontend Developer",
              worksFor: {
                "@type": "Organization",
                name: "SmartEdge Solutions",
              },
              knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Frontend Development"],
            }),
          }}
        />
        <SmoothScroll />
        <BackgroundFX />
        {children}
      </body>
    </html>
  );
}
