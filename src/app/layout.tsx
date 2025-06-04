// app/layout.tsx
import React from "react";
import { DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        {/* Primary Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Shree Shyam Electronics | Fridge, Washing Machine & Microwave Service
        </title>
        <meta
          name="description"
          content="Same-day, certified fridge repair, washing machine repair, and microwave repair in Gurugram. Affordable on-site appliance service with genuine parts and 24/7 support."
        />
        <meta
          name="keywords"
          content="Gurugram appliance repair, fridge repair Gurugram, washing machine repair Gurugram, microwave repair Gurugram, on-site appliance service Gurugram, same day repair Gurugram"
        />
        <meta name="author" content="Shree Shyam Electronics" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.shreeshyamelectronics.vercel.app/"
        />

        {/* Open Graph / Facebook */}
        {/* Always use absolute URLs (https://) */}
        <meta
          property="og:title"
          content="Shree Shyam Electronics | Fridge, Washing Machine & Microwave Service"
        />
        <meta
          property="og:description"
          content="Book same-day fridge repair, washing machine repair, and microwave repair in Gurugram with certified technicians. Affordable, reliable, 24/7 support."
        />
        <meta
          property="og:url"
          content="https://www.shreeshyamelectronics.vercel.app/"
        />
        <meta property="og:site_name" content="Shree Shyam Electronics" />
        <meta
          property="og:image"
          content="https://www.shreeshyamelectronics.vercel.app/hero.png"
        />
        {/* Useful to add secure_url and type as well */}
        <meta
          property="og:image:secure_url"
          content="https://www.shreeshyamelectronics.vercel.app/hero.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Certified technician repairing a washing machine and fridge"
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Gurugram Home Appliance Repair | Fridge, Washing Machine & Microwave Service"
        />
        <meta
          name="twitter:description"
          content="Same-day fridge repair, washing machine repair, and microwave repair in Gurugram. Affordable, reliable service with certified technicians."
        />
        <meta
          name="twitter:image"
          content="https://www.shreeshyamelectronics.vercel.app/hero.png"
        />
        <meta name="twitter:site" content="@ShreeShyamElect" />
        <meta name="twitter:creator" content="@ShreeShyamElect" />
        <meta
          name="twitter:url"
          content="https://www.shreeshyamelectronics.vercel.app/"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />

        {/* Structured Data (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Shree Shyam Electronics",
              image: "https://www.shreeshyamelectronics.vercel.app/hero.png",
              "@id": "https://www.shreeshyamelectronics.vercel.app/",
              url: "https://www.shreeshyamelectronics.vercel.app/",
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

      <body className="antialiased font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
