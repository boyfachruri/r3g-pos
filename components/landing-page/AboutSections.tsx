"use client";

import { motion } from "framer-motion";
import MotionSection from "@/components/landing-page/MotionSection";

// const skills = [
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "Tailwind CSS",
//   "Bootstrap",
//   "Material UI",
//   "Shadcn UI",
//   "Node.js",
//   "NestJS",
//   "PostgreSQL",
//   "MySQL",
//   "MongoDB",
//   "Prisma",
//   "Restful API",
//   "GraphQL API"
// ];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <MotionSection className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center text-gray-900"
        >
          Tentang Saya
        </motion.h2>

        <div className="mt-16 flex flex-col items-center md:flex-row md:justify-between md:space-x-16">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            className="relative group w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500"
          >
            <img
              src="/boy.png"
              alt="Boy Fachruri Athar Maulana"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
          </motion.div>

          {/* Text & Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center md:text-left md:max-w-xl text-gray-700 mt-10 md:mt-0"
          >
            <p className="text-lg leading-relaxed mb-8">
              Hai, saya{" "}
              <span className="font-semibold text-gray-900">
                Boy Fachruri Athar Maulana
              </span>
              , seorang Fullstack Developer dengan passion membangun aplikasi web
              yang berguna bagi banyak orang. Saya senang belajar teknologi baru,
              berkolaborasi dalam tim, dan berinovasi untuk meningkatkan
              kualitas pengembangan perangkat lunak.
            </p>

            {/* <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Keahlian Saya
            </h3> */}

            {/* <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={skillVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 8px 24px rgba(0,0,0,0.15)",
                  }}
                  className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-medium text-center transition-transform cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
}
