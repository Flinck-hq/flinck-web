import type { Metadata } from "next";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteBackground } from "@/components/site-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScreenshotGrid } from "@/components/screenshot-grid";
import { PLAY_STORE_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Join thousands of modern farmers. Download Flinck from the Play Store and start optimizing your agricultural trade today.",
};

export default function DownloadPage() {
  return (
    <main className="page-shell min-h-screen bg-[#f6f3ea] text-slate-950">
      <SiteBackground />
      <SiteHeader />
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#dff2dd] px-3 py-1 text-xs uppercase tracking-[0.24em] text-[#1f7a45]">
                <Download className="h-4 w-4" />
                Available Now
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
                Ready to Digitizing Your Farm.
              </h1>
              <p className="mt-6 text-xl leading-8 text-slate-600">
                Join a growing network of farmers and buyers across Africa.
                Flinck is optimized for low-bandwidth environments and
                high-velocity trade.
              </p>
              <div className="mt-10">
                <Button
                  asChild
                  size="lg"
                  className="h-16 rounded-full bg-[#163d2a] px-10 text-lg text-white hover:bg-[#0f2a1d] shadow-xl"
                >
                  <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
                    Download for Android
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative rounded-[3rem] border border-slate-900/10 bg-white p-4 shadow-2xl">
              {/* Reusing ScreenshotGrid here for a premium preview */}
              <ScreenshotGrid />
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
