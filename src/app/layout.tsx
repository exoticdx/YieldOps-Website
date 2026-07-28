import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yeildops.com'),
  title: {
    default: "YieldOps | We Delete Your Busy Work",
    template: "%s | YieldOps",
  },
  description: "YieldOps is a boutique IT automation agency. We audit your business, identify expensive bottlenecks, and build automated systems that yield higher profits. Discover our E-Commerce Seller Hub for Meesho tools.",
  keywords: ["automation", "workflow optimization", "business efficiency", "IT consulting", "process automation", "Meesho shipping reducer", "E-commerce tools"],
  openGraph: {
    title: "YieldOps | We Delete Your Busy Work",
    description: "Stop paying your team to copy-paste. We build automated systems that yield higher profits.",
    url: "https://yeildops.com",
    siteName: "YieldOps",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YieldOps | We Delete Your Busy Work",
    description: "Stop paying your team to copy-paste. We build automated systems that yield higher profits.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-GDP31DZ5M8`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GDP31DZ5M8', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
