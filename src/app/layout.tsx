import "../styles/globals.css";
import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Dzypher — Software Development Services",
  description: "Dzypher builds thoughtful web platforms, mobile apps, and product systems for businesses ready to move forward.",
  metadataBase: new URL("https://dzypher.dev"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${sans.variable} ${display.variable}`}><body><Navbar /><main>{children}</main><Footer /></body></html>;
}
