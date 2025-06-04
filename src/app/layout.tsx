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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Shree Shyam Electronics | Trusted Gurugram Appliance Repair</title>
        <meta
          name="description"
          content="Shree Shyam Electronics offers same-day, affordable home appliance repair in Gurugram—fridges, washing machines, microwaves & more. Certified technicians at your doorstep."
        />
        <meta
          name="keywords"
          content="home appliance repair Gurugram, washing machine repair near me, fridge repair Gurugram, microwave repair Gurugram, appliance service Gurugram, same day repair Gurugram"
        />
        <meta name="author" content="Shree Shyam Electronics" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.shreeshyamelectronics.vercel.app"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Shree Shyam Electronics – Trusted Appliance Repairs in Gurugram" />
        <meta property="og:description" content="Book same-day fridge, washer & microwave repair in Gurugram with certified technicians. Affordable, reliable, 24/7 support." />
        <meta property="og:url" content="https://www.shreeshyamelectronics.vercel.app" />
        <meta property="og:site_name" content="Shree Shyam Electronics" />
        <meta property="og:image" content="https://www.shreeshyamelectronics.vercel.app/hero.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Technician repairing appliances" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shree Shyam Electronics | Appliance Repair Gurugram" />
        <meta name="twitter:description" content="Same-day fridge, washing machine & microwave repair in Gurugram. Certified, affordable, on-site service." />
        <meta name="twitter:image" content="https://www.shreeshyamelectronics.vercel.app/hero.png" />
        <meta name="twitter:creator" content="@ShreeShyamElect" />

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
