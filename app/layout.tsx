import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/navigation/sidebar";
import { MobileNav } from "@/components/navigation/mobile-nav";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nicholas Lin",
  description: "Cofounder & CEO of Guava | Building AI agents for healthcare prior authorization",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans">
        <div className="flex min-h-screen">
          {/* Desktop Sidebar */}
          <Sidebar />

          {/* Mobile Navigation */}
          <MobileNav />

          {/* Main Content */}
          <main className="flex-1 w-full lg:pt-0 pt-16">
            <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
