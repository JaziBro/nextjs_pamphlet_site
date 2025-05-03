"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { initLogRocket } from '@/lib/logrocket';
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// You can leave your metadata here if you use it somewhere

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Initialize LogRocket
    initLogRocket();

    // Inject Tawk.to script
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/680e80f08532ee190f3f3dd9/1ipsafbjj";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900 min-h-screen flex flex-col`}
      >
        <GoogleAnalytics GA_MEASUREMENT_ID="G-4C6HBW0324" />
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
