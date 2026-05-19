import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { CookieConsent } from "@/components/cookie-consent";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getflink.pro"),
  alternate: {
    canonical: "https://getflink.pro",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.jpg", sizes: "332x350", type: "image/jpeg" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.jpg",
  },

  title: {
    default: "Flinck – Agricultural Social Network & Marketplace for Farmers",
    template: "%s | Flinck",
  },

  description:
    "Flinck is an agricultural social marketplace that helps farmers connect, share insights, and sell farm produce directly to buyers while accessing crop recommendations and market opportunities.",

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
    title: "Flinck – Agricultural Social Network & Marketplace for Farmers",
    description:
      "Flinck is an agricultural social marketplace that helps farmers connect, share insights, and sell farm produce directly to buyers while accessing crop recommendations and market opportunities.",
    url: "https://getflink.pro",
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
    title: "Flinck – Agricultural Social Network & Marketplace for Farmers",
    description:
      "Flinck is an agricultural social marketplace that helps farmers connect, share insights, and sell farm produce directly to buyers while accessing crop recommendations and market opportunities.",
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
      url: "https://getflink.pro",
      logo: "https://getflink.pro/logo.jpg",
      description:
        "Flinck is an agricultural social marketplace that helps farmers connect, share insights, and sell farm produce directly to buyers while accessing crop recommendations and market opportunities.",
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
      operatingSystem: "iOS, Android",
      url: "https://getflink.pro",
      description:
        "Flinck is an agricultural social marketplace that helps farmers connect, share insights, and sell farm produce directly to buyers while accessing crop recommendations and market opportunities.",
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
