import Link from "next/link";
import { ArrowRight, BadgeCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteBackground } from "@/components/site-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScreenshotGrid } from "@/components/screenshot-grid";
import { PLAY_STORE_URL, highlights } from "@/lib/site-content";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#f6f3ea] text-slate-950">
      <SiteBackground />
      <SiteHeader />

      <section className="px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#163d2a]/15 bg-white/80 px-4 py-2 text-xs text-slate-700 shadow-sm sm:text-sm">
              <BadgeCheck className="h-4 w-4 text-[#1f7a45]" />
              Designed for real farm operations, market movement and daily execution
            </div>

            <h1 className="max-w-4xl text-[2.85rem] leading-[0.95] font-semibold tracking-[-0.06em] text-slate-950 sm:text-6xl sm:leading-none lg:text-7xl">
              The premium operating layer for smarter farming and faster trade.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
              Flink brings weather intelligence, crop support, farmer content,
              marketplace workflows and buyer-ready product discovery into one
              polished platform that feels modern from the first click.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 w-full rounded-full bg-[#163d2a] px-7 text-base text-white hover:bg-[#0f2a1d] sm:w-auto"
              >
                <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
                  Download on Play Store
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 w-full rounded-full border-slate-300 bg-white/70 px-7 text-base text-slate-900 hover:bg-white sm:w-auto"
              >
                <Link href="/platform">Explore the platform</Link>
              </Button>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.value}
                  className="rounded-[1.75rem] border border-slate-900/8 bg-white/75 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur"
                >
                  <p className="text-lg font-semibold tracking-tight text-slate-950">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-slate-900/10 bg-[#163d2a] p-4 text-white shadow-[0_30px_120px_rgba(22,61,42,0.28)] sm:p-5">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#10281d] p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-white/55">
                      Flink dashboard
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight">
                      One clean command layer
                    </p>
                  </div>
                  <div className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/75">
                    Live-ready
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="rounded-[1.5rem] bg-white/8 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/55">
                          Marketplace pulse
                        </p>
                        <p className="mt-1 text-xl font-semibold">
                          Products, orders, demand
                        </p>
                      </div>
                      <TrendingUp className="h-5 w-5 text-[#d6f277]" />
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[72%] rounded-full bg-[#d6f277]" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] bg-[#f5efe2] p-5 text-slate-950">
                      <p className="text-sm text-slate-500">Field conditions</p>
                      <p className="mt-2 text-3xl font-semibold tracking-tight">
                        Clear
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        Weather context that supports real planning, not passive
                        reading.
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] bg-white/8 p-5">
                      <p className="text-sm text-white/55">Assistant status</p>
                      <p className="mt-2 text-3xl font-semibold tracking-tight">
                        Ready
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/65">
                        Guidance, product insight and next-step support in one
                        place.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-slate-900/8 bg-white px-5 py-4 shadow-[0_16px_60px_rgba(15,23,42,0.12)] sm:absolute sm:-bottom-6 sm:-left-4 sm:mt-0">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                Built for growth
              </p>
              <p className="mt-1 text-base font-semibold tracking-tight text-slate-950">
                Farmers, buyers and insight tools finally work together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.28em] text-[#1f7a45]">
                Product Preview
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                Real screens, not placeholder promises.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Flink already has a polished mobile experience for wallet flows,
                weather-aware actions, profile identity and marketplace access.
              </p>
            </div>

            <Button
              asChild
              variant="outline"
              className="rounded-full border-slate-300 bg-white/70 px-6 text-slate-900 hover:bg-white"
            >
              <Link href="/download">See download details</Link>
            </Button>
          </div>

          <ScreenshotGrid />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] bg-[#163d2a] px-8 py-12 text-white shadow-[0_30px_120px_rgba(22,61,42,0.32)] sm:px-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.28em] text-white/60">
              Explore further
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Separate pages make Flink easier to crawl, easier to trust, and easier to understand.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              Visit the dedicated platform, capabilities, workflow, download,
              and policy pages for clearer indexing and a stronger content
              architecture.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full bg-[#d6f277] px-7 text-base text-slate-950 hover:bg-[#c7ea54]"
            >
              <Link href="/platform">View platform</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-white/20 bg-white/6 px-7 text-base text-white hover:bg-white/10"
            >
              <Link href="/policy">Read policy</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
