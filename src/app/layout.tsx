import "../styles/globals.css";
import type { Metadata } from "next";
import { Libre_Franklin, Lora, Caveat } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const franklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-franklin",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Jubil L. Cabrestante — Mobile & Full-Stack Web Developer",
  description:
    "Portfolio of Jubil L. Cabrestante — turning rough ideas into robust mobile apps and web systems. Flutter, React, Next.js, Firebase, Supabase.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${franklin.variable} ${lora.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
