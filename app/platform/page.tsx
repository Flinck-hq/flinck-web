import type { Metadata } from "next";
import Image from "next/image";
import { SiteBackground } from "@/components/site-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pillars } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Explore the Flink platform: Precision weather intelligence, unified marketplace, and secure agricultural management.",
};

export default function PlatformPage() {
  return (
    <main className="page-shell min-h-screen bg-[#f6f3ea] text-slate-950">
      <SiteBackground />
      <SiteHeader />
      
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.28em] text-[#1f7a45]">
                Platform Overview
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-7xl">
                Integrated Agricultural Intelligence.
              </h1>
              <p className="mt-6 text-xl leading-8 text-slate-600">
                Flink is a unified operating layer designed to digitize every stage of the agricultural value chain. From field sensing to final transaction, our platform provides the tools needed for modern farm management.
              </p>
            </div>
            
            <div className="relative aspect-video overflow-hidden rounded-[2.5rem] border border-slate-900/10 shadow-[0_40px_100px_rgba(0,0,0,0.15)]">
              <Image 
                src="/platform-dashboard.png" 
                alt="Flink Platform Dashboard" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group relative overflow-hidden rounded-[2.5rem] border border-slate-900/8 bg-white/80 p-10 shadow-[0_22px_60px_rgba(15,23,42,0.06)] transition-all hover:shadow-[0_30px_80px_rgba(15,23,42,0.1)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-[#163d2a] text-white shadow-[0_12px_24px_rgba(22,61,42,0.2)]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-8 text-3xl font-semibold tracking-tight text-slate-950">
                    {pillar.title}
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[3rem] bg-[#163d2a] px-8 py-16 text-white text-center">
          <h2 className="text-4xl font-semibold">Ready to see it in action?</h2>
          <p className="mt-4 text-xl text-white/70 max-w-2xl mx-auto">
            Our mobile application is designed to be the only tool you need for your daily agricultural operations.
          </p>
          <div className="mt-10">
            <button className="h-14 rounded-full bg-[#d6f277] px-8 text-slate-950 font-semibold hover:bg-[#c9eb61] transition-colors">
              Download the Flink App
            </button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
