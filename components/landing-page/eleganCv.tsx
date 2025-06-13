"use client"

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const sections = [
  {
    title: "Tentang Saya",
    content:
      "Saya adalah seorang pengembang web yang antusias dan berpengalaman dalam membangun aplikasi modern dengan teknologi seperti Next.js, Tailwind CSS, dan TypeScript.",
  },
  {
    title: "Riwayat Pendidikan",
    content:
      "- S1 Teknik Informatika - Universitas ABC (2017 - 2021)\n- SMA Negeri 1 Kota XYZ (2014 - 2017)",
  },
  {
    title: "Pengalaman Kerja",
    content:
      "- Frontend Developer - PT Digital Nusantara (2022 - Sekarang)\n- Web Developer Intern - Startup Kreatif (2021 - 2022)",
  },
  {
    title: "Kemampuan",
    content:
      "JavaScript, TypeScript, React, Next.js, Tailwind CSS, Framer Motion, Git, REST API, UI/UX Design",
  },
];

export default function CV() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) setIsVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white px-6 py-12 sm:px-12 lg:px-24 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-20">
        {sections.map((section, i) => (
          <motion.section
            key={section.title}
            custom={i}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-primary tracking-tight">
              {section.title}
            </h2>
            <p className="whitespace-pre-line text-lg leading-relaxed">
              {section.content}
            </p>
          </motion.section>
        ))}
      </div>
    </main>
  );
}
