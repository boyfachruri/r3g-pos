'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 relative">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-gray-900"
      >
        Halo, Saya{" "}
        <span className="text-blue-600">Boy Fachruri Athar Maulana</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 text-lg text-gray-600 max-w-xl"
      >
        Saya seorang Fullstack Developer yang suka membangun aplikasi dan website yang berguna untuk banyak orang.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 flex gap-4 flex-wrap justify-center"
      >
        <Link href="/projects">
          <Button className="px-6 py-3">Lihat Proyek</Button>
        </Link>
        <a href="/cv-boy-2025.pdf" download>
          <Button variant="outline" className="px-6 py-3">
            Unduh CV
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
