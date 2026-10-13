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
  title: "Plataforma Web Empresarial | Contenerizada con Docker",
  description:
    "Aplicación Next.js de alto rendimiento contenerizada mediante compilación multi-stage de Docker y Alpine Linux.",
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
