"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "R3g Cashflow",
    description:
      "Website untuk mengatur keuangan pribadi seperti pengeluaran dan pemasukan, silahkan melakukan pendaftaran jika ingin mencoba aplikasi ini",
    tech: [
      "Progressive Web Application",
      "Next.js",
      "Material UI",
      "NestJS",
      "MongoDB",
    ],
    image: "/cashflow.png",
    github: "https://github.com/boyfachruri/cash-flow",
    demo: "https://cashflow.r3g-software.online/login",
  },
  {
    title: "R3g POS Order",
    description: "Website untuk melakukan pemesanan makanan dari sisi customer",
    tech: ["Next.js", "Material UI"],
    image: "/r3g-pos.png",
    github: "https://github.com/boyfachruri/r3g-pos-customer",
    demo: "https://pos-customer.r3g-software.online/menu",
  },
  {
    title: "Company Profile Asyraf Bakery",
    description: "Website Company Profile untuk UMKM Asyraf Bakery",
    tech: ["React.js", "Bootstrap"],
    image: "/asyraf-bakery.png",
    github: "https://github.com/boyfachruri/react-food-landing-page",
    demo: "https://asyraf-bakery.r3g-software.online",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
        >
          Proyek Saya
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl shadow-lg hover:shadow-2xl bg-white overflow-hidden transition-all duration-300"
            >
              <div className="relative overflow-hidden group h-56 md:h-64 rounded-lg shadow-md">
                {/* Jika di mobile, gambar bisa diklik langsung ke demo */}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                )}

                {/* Overlay gelap, hanya di desktop */}
                <div className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/30 absolute inset-0" />
                </div>

                {/* Tombol hanya muncul di desktop */}
                <div
                  className="hidden md:flex absolute inset-0 items-center justify-center 
    opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                >
                  <div className="flex gap-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white text-black text-sm font-semibold rounded hover:bg-gray-200 transition"
                      >
                        🔗 Lihat Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white text-black text-sm font-semibold rounded hover:bg-gray-200 transition"
                      >
                        🐙 Lihat Kode
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-black transition"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-black transition"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
