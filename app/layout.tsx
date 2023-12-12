/**
 * Root layout component for the Anime web application.
 * Imports necessary dependencies, sets up global styles, and defines the layout structure.
 */

// Importing type Metadata from Next.js and the DM_Sans font from Google Fonts
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

// Importing React components for Hero and Footer, and global styles from "./globals.css"
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import "./globals.css";

// Initializing the DM_Sans font with Latin subset
const dmSans = DM_Sans({ subsets: ["latin"] });

// Metadata object providing information for the page
export const metadata: Metadata = {
  title: "Anime Scroller",
  description: "Your favorite anime, all in one place.",
};

/**
 * Functional component representing the root layout of the web application.
 * @param {Object} props - Props object containing 'children' as React node.
 * @returns {ReactElement} - The root layout structure including Hero, children, and Footer.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-[#0F1117]">
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
