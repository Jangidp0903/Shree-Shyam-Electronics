import React from "react";
import { DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Metadata } from "next";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shree Shyam | Fridge, Washing Machine & Microwave Service",
  description:
    "Get expert fridge, washing machine & microwave repair in Gurugram. Same-day service, genuine parts & affordable pricing—24/7 support available.",
  keywords: [
    "Gurugram appliance repair",
    "fridge repair Gurugram",
    "washing machine repair Gurugram",
    "microwave repair Gurugram",
    "on-site appliance service Gurugram",
    "same day repair Gurugram",
  ],
  authors: [{ name: "Shree Shyam Electronics" }],
  robots: "index, follow",
  metadataBase: new URL("https://shree-shyam-electronics.vercel.app"),
  alternates: {
    canonical: "https://shree-shyam-electronics.vercel.app",
  },
  openGraph: {
    title:
      "Shree Shyam Electronics | Fridge, Washing Machine & Microwave Service",
    description:
      "Book same-day fridge repair, washing machine repair, and microwave repair in Gurugram with certified technicians. Affordable, reliable, 24/7 support.",
    url: "https://shree-shyam-electronics.vercel.app",
    siteName: "Shree Shyam Electronics",
    images: [
      {
        url: "https://shree-shyam-electronics.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Certified technician repairing a washing machine and fridge",
        type: "image/png",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Gurugram Home Appliance Repair | Fridge, Washing Machine & Microwave Service",
    description:
      "Same-day fridge repair, washing machine repair, and microwave repair in Gurugram. Affordable, reliable service with certified technicians.",
    images: ["https://shree-shyam-electronics.vercel.app/logo.png"],
    site: "@ShreeShyamElect",
    creator: "@ShreeShyamElect",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="antialiased font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
