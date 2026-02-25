import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://getflink.pro"),

  title: {
    default: "Flink – Smarter Farming Starts with Better Information",
    template: "%s | Flink",
  },

  description:
    "Flink is an AgriTech platform that helps smallholder farmers make smarter decisions with crop recommendations, market insights, and direct sales opportunities. Join the early access waitlist.",

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
    title: "Flink – Smarter Farming Starts with Better Information",
    description:
      "Helping farmers grow smarter with data, insights, and direct market access. Join the Flink early access waitlist.",
    url: "https://getflink.pro",
    siteName: "Flink",
    images: [
      {
        url: "/logo.png", // add this image in public/
        width: 1200,
        height: 630,
        alt: "Flink AgriTech",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Flink – Smarter Farming",
    description:
      "AgriTech platform helping farmers make better decisions and access markets.",
    images: ["/logo.png"],
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
      logo: "https://getflink.pro/logo.png", // add logo in public/
      description:
        "Flink is an AgriTech platform helping smallholder farmers with crop insights, market intelligence, and direct sales opportunities.",
      founder: {
        "@type": "Person",
        name: "David Uchenna Munachimso",
        url: "https://kingdav.com.ng",
      },
      sameAs: [
        "https://x.com/flink_space"
      ],
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
        "A digital platform that helps farmers decide what to plant, when to sell, and where to find buyers.",
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
