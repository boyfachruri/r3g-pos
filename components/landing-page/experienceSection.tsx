"use client";

import { motion } from "framer-motion";
import MotionSection from "./MotionSection";

const experiences = [
  {
    role: "Fullstack Web Developer",
    company: "PT. IFCA Property365 Indonesia",
    duration: "2022 - Sekarang",
    description: [
      "Mengembangkan antarmuka pengguna (frontend) menggunakan Next.js dan React.js dengan TypeScript untuk memastikan performa dan pengalaman pengguna yang optimal.",
      "Merancang dan membangun backend aplikasi menggunakan NestJS dengan pendekatan REST API maupun GraphQL untuk kebutuhan komunikasi data yang fleksibel dan efisien.",
      "Mendesain skema basis data yang terstruktur dan efisien menggunakan PostgreSQL.",
      "Melakukan integrasi API antar layanan serta deployment aplikasi ke lingkungan produksi secara aman dan stabil.",
      "Melakukan code review dan merging pull request di GitHub dan Azure DevOps sebagai bagian dari workflow pengembangan, untuk memastikan kualitas dan stabilitas integrasi kode.",
      "Membimbing junior developer melalui sesi mentoring, code review, dan diskusi teknis guna menjaga kualitas kode serta mempercepat adaptasi mereka terhadap alur kerja proyek dan teknologi yang digunakan."
    ]
  },  
  {
    role: "Customer Service",
    company: "PT. Sari Melati Kencana TBK",
    duration: "2015 - 2022",
    description: [
      "Menerima pesanan dan informasi produk melalui telepon",
      "Menerima keluhan pelanggan dan memberikan solusi untuk mengatasi masalah yang di alami oleh pelanggan melalui telepon",
      "Menghubungi pelanggan terkait kepuasan pelanggan terhadap pelayan dan pesanan",
      "Menerima pertanyaan seputar informasi produk melalui live chat",
      "Menerima keluhan pelanggan dan memberikan solusi untuk mengatasi masalah yang di alami oleh pelanggan melalui live chat",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ExperienceSection() {
  return (
    <MotionSection className="py-20 px-6 bg-gradient-to-br from-white to-gray-50">
      {" "}
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center text-gray-900"
        >
          Pengalaman Kerja
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl border border-gray-200 p-8 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                {exp.role}
              </h3>
              <p className="text-gray-600 text-base">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                {exp.description.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}
