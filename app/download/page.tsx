import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteBackground } from "@/components/site-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScreenshotGrid } from "@/components/screenshot-grid";
import { PLAY_STORE_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download Flink from the Play Store and preview the mobile app experience across wallet, weather, profile, and marketplace flows.",
};

export default function DownloadPage() {
  return (
    <main className="page-shell min-h-screen bg-[#f6f3ea] text-slate-950">
      <SiteBackground />
      <SiteHeader />
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.28em] text-[#1f7a45]">
              Download
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Get Flink on your phone and see the real product in motion.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Flink is designed for mobile-first usage, where most of the
              traffic and day-to-day product interaction will happen.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full bg-[#163d2a] px-7 text-base text-white hover:bg-[#0f2a1d]"
              >
                <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
                  Download on Play Store
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-12">
            <ScreenshotGrid />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
