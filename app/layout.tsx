import React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { CookieConsent } from "@/components/cookie-consent";

export const metadata: Metadata = {
  metadataBase: new URL("https://getflinck.pro"),
  alternates: {
    canonical: "https://getflinck.pro",
  },
  icons: {
    icon: [
      { url: "/icon.jpg", sizes: "332x350", type: "image/jpeg" },
    ],
    shortcut: "/icon.jpg",
    apple: "/icon.jpg",
  },

  title: {
    default:
      "Flinck – Agricultural Social Marketplace for Farmers, Buyers & Institutions",
    template: "%s | Flinck",
  },

  description:
    "Flinck is the agricultural social marketplace connecting farmers, consumers, businesses, manufacturers, banks, government, and ag investors—trade, trust, and grow in one network.",

  applicationName: "Flinck",

  keywords: [
    "Flinck",
    "Flinck AgriTech",
    "AgriTech Nigeria",
    "Agricultural social network",
    "Agricultural marketplace",
    "Farmers marketplace",
    "Farming app Africa",
    "Smart farming",
    "Crop recommendations",
    "Farm market platform",
    "Sell farm produce online",
    "Agriculture technology",
    "Smallholder farmers",
  ],

  authors: [{ name: "David Uchenna" }],
  creator: "David Uchenna",
  publisher: "Flinck",

  openGraph: {
    title:
      "Flinck – Agricultural Social Marketplace for Farmers, Buyers & Institutions",
    description:
      "Flinck is the agricultural social marketplace connecting farmers, consumers, businesses, banks, government, and ag investors.",
    url: "https://getflinck.pro",
    siteName: "Flinck",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Flinck Agricultural Social Network for Farmers",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Flinck – Agricultural Social Marketplace for Farmers, Buyers & Institutions",
    description:
      "Flinck is the agricultural social marketplace connecting farmers, consumers, businesses, banks, government, and ag investors.",
    images: ["/logo.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    // ORGANIZATION (Flinck)
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Flinck",
      url: "https://getflinck.pro",
      logo: "https://getflinck.pro/logo.jpg",
      description:
        "Flinck is the agricultural social marketplace connecting farmers, consumers, businesses, banks, government, and ag investors.",
      founder: {
        "@type": "Person",
        name: "David Uchenna Munachimso",
        url: "https://kingdav.com.ng",
      },
      sameAs: ["https://x.com/Flinck_space"],
    },

    // PRODUCT / SOFTWARE
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Flinck",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android",
      url: "https://getflinck.pro",
      description:
        "Flinck is the agricultural social marketplace for farmers, buyers, businesses, banks, government, and ag investors.",
      creator: {
        "@type": "Person",
        name: "David Uchenna Munachimso",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ];

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <CookieConsent />
        {children}

        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <Analytics />
      </body>
    </html>
  );
}
