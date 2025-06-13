"use client";

import { motion } from "framer-motion";
import MotionSection from "./MotionSection";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "Shadcn UI",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Prisma",
  "TypeORM",
  "Restful API",
  "GraphQL API",
];
export default function SkillsSection() {
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
          Kemampuan
        </motion.h2>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.1 }}
              className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm font-medium shadow-md transition-transform transform"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
