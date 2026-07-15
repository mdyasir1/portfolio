import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "M Yasir Arafath - Software Developer | Photo Gallery",
  description:
    "Photos of Mohammed Yasir Arafath, a Software Developer and Frontend Engineer from Hyderabad, India. View photos of Yasir Arafath, React developer, Next.js developer, and software engineer.",
  keywords: [
    "M Yasir Arafath",
    "Mohammed Yasir Arafath",
    "Yasir Arafath",
    "Yasir",
    "Yasir Vijayawada",
    "Yasir M",
    "MD Yasir",
    "software developer",
    "software engineer",
    "frontend developer",
    "React developer",
    "Hyderabad developer",
    "Vijayawada developer",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://mdyasir.me/gallery",
  },
  openGraph: {
    title: "M Yasir Arafath - Software Developer | Photo Gallery",
    description:
      "Photos of Mohammed Yasir Arafath, a Software Developer from Hyderabad, India.",
    url: "https://mdyasir.me/gallery",
    type: "profile",
  },
};

const photos = [
  {
    src: "/y/mohammed-yasir-arafath-software-developer.png",
    alt: "Mohammed Yasir Arafath Software Developer",
    caption: "Mohammed Yasir Arafath — Software Developer",
  },
  {
    src: "/y/yasir-arafath-vijayawada-developer-1.jpg",
    alt: "Yasir Arafath Vijayawada Developer",
    caption: "Yasir Arafath — Vijayawada, Developer",
  },
  {
    src: "/y/mohammed-yasir-arafath-hyderabad-1.jpg",
    alt: "Mohammed Yasir Arafath Hyderabad Software Developer",
    caption: "Mohammed Yasir Arafath — Hyderabad",
  },
  {
    src: "/y/yasir-arafath-software-engineer-1.jpg",
    alt: "Yasir Arafath Software Engineer",
    caption: "Yasir Arafath — Software Engineer",
  },
  {
    src: "/y/mohammed-yasir-arafath-vijayawada-1.jpg",
    alt: "Mohammed Yasir Arafath Vijayawada",
    caption: "Mohammed Yasir Arafath — Vijayawada",
  },
  {
    src: "/y/yasir-m-software-developer-1.jpg",
    alt: "Yasir M Software Developer",
    caption: "Yasir M — Software Developer",
  },
  {
    src: "/y/mohammed-yasir-arafath-frontend-developer.jpg",
    alt: "Mohammed Yasir Arafath Frontend Developer",
    caption: "Mohammed Yasir Arafath — Frontend Developer",
  },
  {
    src: "/y/yasir-arafath-md-developer-1.jpg",
    alt: "Yasir Arafath MD Developer",
    caption: "Yasir Arafath — MD Developer",
  },
  {
    src: "/y/mohammed-yasir-arafath-react-developer.jpg",
    alt: "Mohammed Yasir Arafath React Developer",
    caption: "Mohammed Yasir Arafath — React Developer",
  },
  {
    src: "/y/yasir-arafath-hyderabad-software-engineer.jpg",
    alt: "Yasir Arafath Hyderabad Software Engineer",
    caption: "Yasir Arafath — Hyderabad Software Engineer",
  },
  {
    src: "/y/mohammed-yasir-arafath-profile.jpg",
    alt: "Mohammed Yasir Arafath Profile Photo",
    caption: "Mohammed Yasir Arafath — Profile",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <header className="mb-14">
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Mohammed Yasir Arafath
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Software Developer &amp; Frontend Engineer from Hyderabad, India.
            Specializing in React, Next.js, TypeScript, and modern web
            development.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <figure key={photo.src} className="group">
              <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-2 text-xs text-gray-500 text-center">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}
