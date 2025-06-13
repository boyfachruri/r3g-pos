// app/layout.tsx
import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'R3g Software',
  description: 'R3g Software',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
