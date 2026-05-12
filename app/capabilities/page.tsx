import type { Metadata } from "next";
import Image from "next/image";
import { SiteBackground } from "@/components/site-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { capabilities } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Explore Flink's agricultural capabilities: Location-aware weather, crop-specific guidance, and high-visibility marketplace tools.",
};

export default function CapabilitiesPage() {
  return (
    <main className="page-shell min-h-screen bg-[#f6f3ea] text-slate-950">
      <SiteBackground />
      <SiteHeader />
      
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.28em] text-[#1f7a45]">
                Core Capabilities
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-7xl">
                Precision Tools for Serious Operators.
              </h1>
              <p className="mt-6 text-xl leading-8 text-slate-600">
                Flink provides a suite of advanced features designed to enhance productivity, improve market access, and secure long-term trade credibility for agricultural stakeholders.
              </p>
            </div>
            
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-[3rem] shadow-2xl">
              <Image 
                src="/trust-badge.png" 
                alt="Flink Verified Farmer Security" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-[2.5rem] bg-white/90 p-8 shadow-[0_20px_50px_rgba(15,23,42,0.05)] ring-1 ring-slate-900/5 transition-all hover:bg-white"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eff8e7] text-[#163d2a] shadow-inner">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">
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
