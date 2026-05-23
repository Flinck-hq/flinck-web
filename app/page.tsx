import Image from "next/image";
import Link from "next/link";
import { AudienceGrid } from "@/components/audience-grid";
import { FaqSection } from "@/components/faq-section";
import { HomeCta } from "@/components/home-cta";
import { HomeHero } from "@/components/home-hero";
import { PageShell } from "@/components/page-shell";
import { ScreenshotGrid } from "@/components/screenshot-grid";
import { TestimonialsSection } from "@/components/testimonials-section";
import { pillars, proofStats, capabilities } from "@/lib/site-content";

export default function Home() {
  return (
    <PageShell>
      <HomeHero />

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {proofStats.map((item) => (
            <div
              key={item.value}
              className="reveal-card rounded-[2rem] border border-slate-900/8 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              <p className="text-sm uppercase tracking-[0.26em] text-[#1f7a45]">
                {item.value}
              </p>
              <p className="mt-4 text-lg font-semibold tracking-tight text-slate-950">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#1f7a45]">
              Built for every stakeholder
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              One network. Many ways to participate.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether you grow, buy, finance, govern, or invest in agriculture,
              Flinck gives you a place in the same trusted marketplace.
            </p>
          </div>
          <div className="mt-10">
            <AudienceGrid />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#1f7a45]">
                The Flinck mission
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
                Social discovery meets marketplace execution.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Connect with operators, list and discover inventory, negotiate
                in-app, and build reputation that institutions can recognize.
              </p>
              <Link
                href="/how-it-works"
                className="mt-8 inline-flex text-sm font-semibold text-[#163d2a] hover:underline"
              >
                See the full workflow →
              </Link>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-slate-900/10 shadow-[0_50px_100px_rgba(0,0,0,0.1)]">
              <Image
                src="/farmer-lifestyle.png"
                alt="Farmer using Flinck"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#1f7a45]">
              Core pillars
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Everything the ag economy needs in one platform.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="reveal-card rounded-[2rem] border border-slate-900/8 bg-white/78 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)]"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-[#163d2a] p-3 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#1f7a45]">
              Capabilities
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Tools that work in the field and in the market.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="reveal-card rounded-[2rem] border border-slate-900/8 bg-white/78 p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eff8e7] text-[#163d2a]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#1f7a45]">
              The app
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Designed for real operators.
            </h2>
          </div>
          <ScreenshotGrid />
        </div>
      </section>

      <TestimonialsSection />
      <FaqSection />
      <HomeCta />
    </PageShell>
  );
}
