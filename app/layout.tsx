import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getflink.pro"),
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.jpg",
  },

  title: {
    default: "Flink | AgriTech Platform",
    template: "%s | Flink",
  },

  description:
    "Flink is a agri-tech platform for weather-aware decisions, crop guidance, modern product listings, farmer credibility and direct market access.",

  applicationName: "Flink",

  keywords: [
    "Flink",
    "Flink AgriTech",
    "AgriTech Nigeria",
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
  publisher: "Flink",

  openGraph: {
    title: "Flink | Premium Agri Intelligence and Marketplace Platform",
    description:
      "Helping farmers grow smarter with decision intelligence, direct market access and a modern agricultural commerce experience.",
    url: "https://getflink.pro",
    siteName: "Flink",
    images: [
      {
        url: "/logo.jpg",
        width: 720,
        height: 1600,
        alt: "Flink logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Flink | Premium Agri Intelligence",
    description:
      "Premium agri platform helping farmers make better decisions and move faster from harvest to income.",
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
    // ORGANIZATION (Flink)
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Flink",
      url: "https://getflink.pro",
      logo: "https://getflink.pro/logo.jpg",
      description:
        "Flink is a premium agri platform helping farmers with crop intelligence, market visibility and direct sales workflows.",
      founder: {
        "@type": "Person",
        name: "David Uchenna Munachimso",
        url: "https://kingdav.com.ng",
      },
      sameAs: ["https://x.com/flink_space"],
    },

    // PRODUCT / SOFTWARE
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Flink",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://getflink.pro",
      description:
        "A modern agri platform that helps farmers decide what to plant, when to sell and how to reach buyers with confidence.",
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
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
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
