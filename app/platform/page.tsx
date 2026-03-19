import type { Metadata } from "next";
import { SiteBackground } from "@/components/site-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pillars } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Explore the Flink platform across weather intelligence, marketplace flows, wallet visibility, and AI-assisted farmer support.",
};

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-[#f6f3ea] text-slate-950">
      <SiteBackground />
      <SiteHeader />
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.28em] text-[#1f7a45]">
              Platform
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              A sharper product story than a waitlist can tell.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Flink is a premium agri platform with clear surfaces for product
              discovery, seller credibility, wallet activity, weather-driven
              planning and a modern farmer experience.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-[2rem] border border-slate-900/8 bg-white/80 p-7 shadow-[0_22px_60px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#163d2a] text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                    {pillar.title}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
