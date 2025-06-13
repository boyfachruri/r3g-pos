'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Info, Folder, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Tentang', href: '/about', icon: Info },
  { label: 'Proyek', href: '/projects', icon: Folder },
  { label: 'Kontak', href: '/contact', icon: Mail },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center text-xs text-gray-500 hover:text-blue-600 transition',
                isActive && 'text-blue-600'
              )}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
