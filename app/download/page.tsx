import type { Metadata } from "next";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { ScreenshotGrid } from "@/components/screenshot-grid";
import { PLAY_STORE_URL, SITE_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download Flinck for Android—agricultural social marketplace for farmers, buyers, and the wider ag economy.",
  alternates: { canonical: `${SITE_URL}/download` },
  openGraph: {
    title: "Download | Flinck",
    description:
      "Download Flinck for Android—agricultural social marketplace for farmers, buyers, and the wider ag economy.",
    url: `${SITE_URL}/download`,
    images: [{ url: `${SITE_URL}/hero-mockup.png`, alt: "Download Flinck" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download | Flinck",
    description:
      "Download Flinck for Android—agricultural social marketplace for farmers, buyers, and the wider ag economy.",
    images: [`${SITE_URL}/hero-mockup.png`],
  },
};

export default function DownloadPage() {
  return (
    <PageShell>
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#dff2dd] px-3 py-1 text-xs uppercase tracking-[0.24em] text-[#1f7a45]">
                <Download className="h-4 w-4" />
                Android · Google Play
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
                Ready to join the Flinck network?
              </h1>
              <p className="mt-6 text-xl leading-8 text-slate-600">
                Connect, list, negotiate, and trade on the agricultural social
                marketplace built for farmers, buyers, and the institutions
                that support them.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                iOS is not yet available. We will announce it on this site when
                ready.
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

            <div className="rounded-[3rem] border border-slate-900/10 bg-white p-4 shadow-2xl">
              <ScreenshotGrid />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
