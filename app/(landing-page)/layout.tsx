import Navbar from "@/components/landing-page/navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BottomNav from "@/components/landing-page/bottomNav";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Boy Fachruri Athar Maulana - Web Developer",
  description:
    "Portfolio resmi Boy Fachruri Athar Maulana, seorang Fullstack Web Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <BottomNav />
      </body>
    </html>
  );
}
