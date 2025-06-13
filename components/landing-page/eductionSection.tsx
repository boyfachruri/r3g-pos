"use client";

import { motion } from "framer-motion";
import MotionSection from "./MotionSection";

const education = [
  {
    degree: "Teknik Informatika (S.Kom.)",
    university: "Universitas Indraprasta PGRI",
    year: "2019 - 2024",
    description:
      "Mengambil jurusan teknik informatika dengan fokus pada pengembangan perangkat lunak dan teknologi web.",
  },
  {
    degree: "SMA Negeri 17 Jakarta",
    university: "SMA Negeri 17 Jakarta",
    year: "2012 - 2015",
    description: "Mendalami Ilmu Pengetahuan Alam di tingkat menengah atas.",
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

export default function EducationSection() {
  return (
    <MotionSection className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      {" "}
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center text-gray-900"
        >
          Riwayat Pendidikan
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl border border-gray-200 p-8 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-600 text-base">{edu.university}</p>
              <p className="text-sm text-gray-500 mb-6">{edu.year}</p>
              <p className="text-gray-700 leading-relaxed">{edu.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
    // <section id="education" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">

    // </section>
  );
}
