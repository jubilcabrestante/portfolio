import "../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/motion/Cursor";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const description =
  "Dzypher is a founder-led software studio in Palawan, Philippines. We design, build, and maintain iOS and Android apps, web apps, and the backend that connects them.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dzypher.dev"),
  title: "Dzypher — Web and mobile app development",
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Dzypher",
    title: "Dzypher — Web and mobile apps that work as one",
    description,
    locale: "en_PH",
  },
  twitter: {
    card: "summary",
    title: "Dzypher — Web and mobile apps that work as one",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0e1117",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <a
          href="#main"
          className="sr-only rounded-full bg-teal px-4 py-2 text-sm font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]"
        >
          Skip to content
        </a>
        <Cursor />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
