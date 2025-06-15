// app/layout.tsx
import { ThemeProvider } from "@/components/providers/theme-provider";
import "../globals.css";
import type { Metadata } from "next";
import { ActiveThemeProvider } from "@/components/active-theme";

import { cookies } from "next/headers";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";

export const metadata: Metadata = {
  title: "R3g Software",
  description: "R3g Software",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const activeThemeValue = cookieStore.get("active_theme")?.value;
  const isScaled = activeThemeValue?.endsWith("-scaled");
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          {" "}
          <ActiveThemeProvider initialTheme={activeThemeValue}>
             <ReactQueryProvider>
              {children}
            </ReactQueryProvider>
          </ActiveThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
