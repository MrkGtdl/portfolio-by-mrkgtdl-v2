import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/ui/BackToTop";

import Navbar from "@/components/layout/Navbar";
import RouteTransition from "@/components/layout/RouteTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio by MrkGtdl",
  description:
    "Portfolio of Kenneth — Web Developer focused on modern, responsive, and purposeful digital experiences.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {/* Global Background */}
        <div className="global-background" />

        {/* Global Route Loader */}
        <RouteTransition />

        {/* Global Navigation */}
        <Navbar />

        {children}
        <BackToTop />
      </body>
    </html>
  );
}
