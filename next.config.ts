import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Nonaktifkan error ESLint saat build
  },
  // opsi lain bisa kamu tambahkan di sini
};

export default nextConfig;
