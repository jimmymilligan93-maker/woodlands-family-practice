import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { Navbar } from "@/components/Navbar";
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
  title: {
    default: "Woodlands Family Practice | GP Clinic Woodlands WA",
    template: "%s | Woodlands Family Practice",
  },
  description:
    "Doctor-owned, RACGP accredited general practice in Woodlands, Perth WA. Comprehensive family medicine, women’s health, skin checks, pathology on-site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-cream font-dm text-navy antialiased">
        <MobileStickyBar />
        <Navbar />
        <div className="pb-24 md:pb-0">{children}</div>
      </body>
    </html>
  );
}
