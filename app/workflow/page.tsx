import type { Metadata } from "next";
import { SiteBackground } from "@/components/site-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { flows } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Workflow",
  description:
    "Understand the core Flink workflow from conditions and planning to listings, discovery, and transactions.",
};

export default function WorkflowPage() {
  return (
    <main className="min-h-screen bg-[#f6f3ea] text-slate-950">
      <SiteBackground />
      <SiteHeader />
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#1f7a45]">
              Workflow
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              The story is operational, not aspirational.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Flink fits into the day-to-day rhythm of modern farming and
              agricultural commerce, rather than acting like a passive brochure.
            </p>
          </div>

          <div className="space-y-5">
            {flows.map((flow, index) => (
              <div
                key={flow}
                className="flex gap-5 rounded-[1.75rem] border border-slate-900/8 bg-white/80 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#163d2a] text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <div>
                  <p className="text-lg font-semibold tracking-tight text-slate-950">
                    {flow}
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
