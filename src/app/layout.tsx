import dynamic from "next/dynamic";

import "@/app/globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

const ThemeProvider = dynamic(() => import("@/components/theme-provider"), {
  ssr: false,
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Canary Workflows",
  description: "Testing Canary Workflows with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <menu className="flex items-center justify-end gap-2">
            <li className="flex items-center gap-2">
              <ModeToggle />
            </li>
          </menu>
          <main className="mx-auto mt-6 flex justify-start md:w-8/12">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
