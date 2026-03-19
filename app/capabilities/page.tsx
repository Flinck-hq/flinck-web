import type { Metadata } from "next";
import { SiteBackground } from "@/components/site-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { capabilities } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "See the main Flink capabilities including location-aware weather, crop recommendations, market visibility, and operator clarity.",
};

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen bg-[#f6f3ea] text-slate-950">
      <SiteBackground />
      <SiteHeader />
      <section className="border-y border-slate-900/8 bg-white/55 px-4 py-12 backdrop-blur sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.28em] text-[#1f7a45]">
                Capabilities
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
                Everything users need to trust the product in one experience.
              </h1>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              These are the surfaces that make Flink feel complete and
              high-value across modern farming and agricultural trade.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] bg-[#fcfbf7] p-6 ring-1 ring-slate-900/8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dff2dd] text-[#1f7a45]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.copy}
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
