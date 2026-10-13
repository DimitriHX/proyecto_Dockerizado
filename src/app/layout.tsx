import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Enterprise Web Platform | Docker Containerized",
  description:
    "High-performance Next.js application containerized with multi-stage Docker builds and Alpine Linux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full font-sans antialiased bg-slate-950 text-slate-100 flex flex-col">
        {children}
      </body>
    </html>
  );
}
