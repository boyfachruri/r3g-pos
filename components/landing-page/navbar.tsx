"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Home, Info, Folder, Mail } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Tentang", href: "/about", icon: Info },
  { label: "Proyek", href: "/projects", icon: Folder },
  { label: "Kontak", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/">
          <Image
            src="/r3g-software.png"
            alt="BoyF Logo"
            width={120}
            height={40}
            className="rounded-md"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition hover:text-blue-600",
                pathname === item.href && "text-blue-600"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0 border-l">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="p-6 h-full flex flex-col"
              >
                <SheetHeader>
                  <SheetTitle className="text-blue-600 text-2xl font-bold tracking-tight">
                    <Image
                      src="/r3g-software.png"
                      alt="BoyF Logo"
                      width={120}
                      height={40}
                      className="rounded-md"
                      priority
                    />
                  </SheetTitle>
                </SheetHeader>

                <div className="border-t border-gray-200 my-4" />

                <div className="flex flex-col gap-4 mt-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "text-base font-medium px-3 py-2 rounded-md transition-all duration-200 hover:bg-blue-100 hover:text-blue-700",
                            pathname === item.href && "text-blue-600"
                          )}
                        >
                          <div className="flex items-center gap-2">
                            <Icon className="w-5 h-5" />
                            <span>{item.label}</span>
                          </div>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </div>

                <div className="mt-auto text-xs text-gray-400 px-3 pt-6">
                  © {new Date().getFullYear()} Boy Fachruri Athar Maulana
                </div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
