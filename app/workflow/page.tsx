import type { Metadata } from "next";
import Image from "next/image";
import { SiteBackground } from "@/components/site-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { flows } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Workflow",
  description:
    "Understand the core Flink agricultural workflow: From conditions and planning to listing, discovery, and secure transactions.",
};

export default function WorkflowPage() {
  return (
    <main className="page-shell min-h-screen bg-[#f6f3ea] text-slate-950">
      <SiteBackground />
      <SiteHeader />
      
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.28em] text-[#1f7a45]">
              System Workflow
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-7xl">
              From Field to Market.
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-600">
              Our streamlined 4-step process ensures that every agricultural decision is backed by data and every transaction is secured by trust.
            </p>
          </div>

          <div className="relative mb-20 aspect-video w-full overflow-hidden rounded-[3rem] border border-slate-900/10 shadow-2xl">
            <Image 
              src="/workflow-visual.png" 
              alt="The Flink Workflow Infographic" 
              fill 
              className="object-contain bg-white"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {flows.map((flow, index) => (
              <div
                key={flow}
                className="group flex gap-6 rounded-[2.2rem] border border-slate-900/8 bg-white/90 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition-all hover:bg-white"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#163d2a] text-xl font-bold text-[#d6f277] shadow-[0_10px_20px_rgba(22,61,42,0.15)]">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {flow}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-7">
                    {index === 0 && "Assess environmental signals and soil moisture to plan your farming calendar."}
                    {index === 1 && "Create high-visibility listings for your produce and reach verified buyers instantly."}
                    {index === 2 && "Coordinate terms, negotiate pricing, and finalize logistics within our secure environment."}
                    {index === 3 && "Complete trades with verified fulfillment and build your long-term reputation."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
