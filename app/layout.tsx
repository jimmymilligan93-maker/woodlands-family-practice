import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { Navbar } from "@/components/Navbar";
import { SITE_CANONICAL_BASE } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CANONICAL_BASE),
  title: {
    default: "Woodlands Family Practice | GP Clinic Woodlands WA",
    template: "%s | Woodlands Family Practice",
  },
  description:
    "Doctor-owned, RACGP accredited general practice in Woodlands, Perth WA. Comprehensive family medicine, women’s health, skin checks, pathology on-site.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2C3A50",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://wfpwa.com.au" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
      </head>
      <body className="min-h-screen bg-cream font-dm text-navy antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-cream focus:outline-none focus:ring-2 focus:ring-terra focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <MobileStickyBar />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="outline-none">
          <div className="pb-24 md:pb-0">{children}</div>
        </main>
      </body>
    </html>
  );
}
