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
  title: "Shree Shyam Electronics | Trusted Gurugram Appliance Repair",
  description:
    "Shree Shyam Electronics offers same-day, affordable home appliance repair in Gurugram—fridges, washing machines, microwaves & more. Certified technicians at your doorstep.",
  keywords: [
    "home appliance repair Gurugram",
    "washing machine repair near me",
    "fridge repair Gurugram",
    "microwave repair Gurugram",
    "appliance service Gurugram",
    "same day repair Gurugram",
  ],
  authors: [{ name: "Shree Shyam Electronics" }],
  creator: "Shree Shyam Electronics",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.shreeshyamelectronics.vercel.app",
  },
  openGraph: {
    title: "Shree Shyam Electronics – Trusted Appliance Repairs in Gurugram",
    description:
      "Book same-day fridge, washer & microwave repair in Gurugram with certified technicians. Affordable, reliable, 24/7 support.",
    url: "https://www.shreeshyamelectronics.vercel.app",
    siteName: "Shree Shyam Electronics",
    images: [
      {
        url: "https://www.shreeshyamelectronics.vercel.app/hero.png",
        width: 1200,
        height: 630,
        alt: "Technician repairing appliances",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Shyam Electronics | Appliance Repair Gurugram",
    description:
      "Same-day fridge, washing machine & microwave repair in Gurugram. Certified, affordable, on-site service.",
    images: ["https://www.shreeshyamelectronics.vercel.app/hero.png"],
    creator: "@ShreeShyamElect",
  },
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
        {/* <meta
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
        <meta property="og:locale" content="en_IN" /> */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Shree Shyam Electronics",
              image: "https://www.shreeshyamelectronics.vercel.app/hero.png",
              "@id": "https://www.shreeshyamelectronics.vercel.app",
              url: "https://www.shreeshyamelectronics.vercel.app",
              telephone: "+91-9876543210",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Main Street",
                addressLocality: "Gurugram",
                addressRegion: "Haryana",
                postalCode: "122001",
                addressCountry: "IN",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "08:00",
                  closes: "20:00",
                },
              ],
              geo: {
                "@type": "GeoCoordinates",
                latitude: 28.4594965,
                longitude: 77.0266383,
              },
              priceRange: "₹₹",
            }),
          }}
        />
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
