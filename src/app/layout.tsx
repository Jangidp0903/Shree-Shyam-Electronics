import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shree Shyam Electronics | Trusted Home Appliance Repair Service",
  description:
    "Shree Shyam Electronics provides quick, affordable, and trusted home appliance repair services including fridge, washing machine, microwave repairs and more in your local area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta
          name="keywords"
          content="home appliance repair service near me, fridge repair Jaipur, washing machine technician, microwave repair in Jaipur, affordable appliance service"
        />
        <meta name="author" content="Shree Shyam Electronics" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Shree Shyam Electronics - Trusted Appliance Repairs"
        />
        <meta
          property="og:description"
          content="Book affordable and same-day home appliance repair services from Shree Shyam Electronics. Serving Jaipur and nearby areas."
        />
        <meta property="og:image" content="/hero.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
