import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  ChartColumnBig,
  CloudRainWind,
  MapPinned,
  MessageSquareMore,
  ShieldCheck,
  Sparkles,
  Store,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteBackground } from "@/components/site-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScreenshotGrid } from "@/components/screenshot-grid";
import {
  PLAY_STORE_URL,
  capabilities,
  faqs,
  highlights,
  pillars,
  platformModules,
  proofStats,
  storyCards,
  testimonials,
} from "@/lib/site-content";

const workflowSteps = [
  {
    title: "Start with what the day is telling you",
    body: "Weather, crop context and operating signals frame the decisions that matter first.",
    icon: CloudRainWind,
  },
  {
    title: "Move inventory into visibility",
    body: "Listings, promoted reach and cleaner product surfaces help supply meet demand with less friction.",
    icon: Store,
  },
  {
    title: "Convert attention into response",
    body: "Messaging, trust cues and lightweight re-engagement loops keep activity moving instead of stalling.",
    icon: MessageSquareMore,
  },
  {
    title: "Layer on premium intelligence",
    body: "Serious operators get deeper guidance, more visibility and stronger growth surfaces over time.",
    icon: Sparkles,
  },
];

const dailySignals = [
  {
    eyebrow: "Weather timing",
    title: "Tomorrow is a better planting window than today",
    body: "Flink turns forecasts into useful farm actions instead of generic weather noise.",
    icon: CloudRainWind,
    tone: "from-[#f4fbe7] to-white",
  },
  {
    eyebrow: "Buyer demand",
    title: "Cassava searches are rising around Ibadan",
    body: "Sellers should see fresh demand movement and product opportunities while they still matter.",
    icon: ChartColumnBig,
    tone: "from-[#eef4ff] to-white",
  },
  {
    eyebrow: "Trust in motion",
    title: "Profile quality affects who gets the first message",
    body: "Identity, response speed and listing confidence all influence conversion once people discover a product.",
    icon: BadgeCheck,
    tone: "from-[#fff3dd] to-white",
  },
];

const operatorRail = [
  "Promoted products should rotate, not overwhelm the same user.",
  "Weather alerts should feel specific to crop, region and timing.",
  "Unread replies, connection signals and product movement should drive useful return visits.",
  "Premium should feel like a meaningful growth layer, not just a paywall.",
];

export default function Home() {
  return (
    <main id="top" className="page-shell min-h-screen overflow-x-clip bg-[#f7f2e8] text-slate-950">
      <SiteBackground />
      <SiteHeader />

      <section className="relative px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="reveal-card mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#163d2a]/12 bg-white/78 px-4 py-2 text-xs text-slate-700 shadow-sm backdrop-blur sm:text-sm">
              <BellRing className="h-4 w-4 text-[#1f7a45]" />
              Weather-led engagement, marketplace execution and farmer trust in one product story
            </div>

            <h1 className="max-w-5xl text-[3rem] font-semibold leading-[0.92] tracking-[-0.075em] text-slate-950 sm:text-[4.8rem] lg:text-[6.4rem]">
              The operating system for African agricultural activity.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
              Flink combines weather intelligence, crop recommendations,
              marketplace velocity, live messaging, premium growth tools and
              farmer identity into a mobile-first product that keeps users coming
              back because there is always something useful to do next.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 w-full rounded-full bg-[#163d2a] px-7 text-base text-white hover:bg-[#10281d] sm:w-auto"
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
                <Link href="/platform">See the product in depth</Link>
              </Button>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.value}
                  className="reveal-card rounded-[1.8rem] border border-slate-900/8 bg-white/76 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur"
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
            <div className="hero-orb absolute -right-8 top-12 h-36 w-36 rounded-full bg-[#d9f99d]/50 blur-3xl" />
            <div className="hero-orb absolute -left-8 bottom-12 h-40 w-40 rounded-full bg-[#f3c97f]/35 blur-3xl" />

            <div className="reveal-card relative rounded-[2.2rem] border border-slate-900/10 bg-[#163d2a] p-4 text-white shadow-[0_30px_120px_rgba(22,61,42,0.28)] sm:p-5">
              <div className="rounded-[1.7rem] border border-white/10 bg-[#10281d] p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-white/55">
                      Flink live surface
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                      One screen. Multiple high-value returns.
                    </p>
                  </div>
                  <div className="rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/75">
                    Product-led
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="rounded-[1.6rem] bg-white/8 p-4 backdrop-blur">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-white/55">Today&apos;s command layer</p>
                        <p className="mt-1 text-xl font-semibold">Weather, products, replies, demand</p>
                      </div>
                      <CloudRainWind className="h-5 w-5 text-[#d6f277]" />
                    </div>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="progress-sheen h-2 w-[74%] rounded-full bg-[#d6f277]" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.6rem] bg-[#f6eedc] p-5 text-slate-950">
                      <p className="text-sm text-slate-500">Engagement signal</p>
                      <p className="mt-2 text-3xl font-semibold tracking-tight">Contextual</p>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        Alerts and nudges are tied to actions like planting windows, unread demand and product performance.
                      </p>
                    </div>
                    <div className="rounded-[1.6rem] bg-white/8 p-5">
                      <p className="text-sm text-white/55">Marketplace pulse</p>
                      <p className="mt-2 text-3xl font-semibold tracking-tight">Adaptive</p>
                      <p className="mt-3 text-sm leading-6 text-white/65">
                        Boosted exposure, product freshness and buyer-facing trust signals work together instead of competing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal-card absolute -left-4 top-14 hidden w-56 rounded-[1.6rem] border border-slate-900/8 bg-white/92 p-4 text-slate-950 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur xl:block">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#eff8e7] p-2.5 text-[#163d2a]">
                  <CloudRainWind className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.26em] text-slate-500">
                    Weather Alert
                  </p>
                  <p className="mt-1 text-sm font-semibold tracking-tight">
                    Plant maize this week in Jos
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal-card absolute -right-5 bottom-26 hidden w-60 rounded-[1.6rem] border border-slate-900/8 bg-white/92 p-4 text-slate-950 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur xl:block">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.26em] text-slate-500">
                    Boosted Listing
                  </p>
                  <p className="mt-1 text-sm font-semibold tracking-tight">
                    Fresh cassava ready for buyers
                  </p>
                </div>
                <div className="rounded-full bg-[#fef3c7] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#92400e]">
                  Live
                </div>
              </div>
              <div className="mt-4 h-2 rounded-full bg-slate-100">
                <div className="h-2 w-[61%] rounded-full bg-[#1f7a45]" />
              </div>
              <p className="mt-3 text-xs leading-5 text-slate-600">
                128 nearby impressions this week with direct buyer chat from the explore feed.
              </p>
            </div>

            <div className="reveal-card mt-4 rounded-[1.7rem] border border-slate-900/8 bg-white px-5 py-4 shadow-[0_16px_60px_rgba(15,23,42,0.12)] sm:absolute sm:-bottom-8 sm:-left-6 sm:mt-0 sm:max-w-xs">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                Why this matters
              </p>
              <p className="mt-2 text-base font-semibold tracking-tight text-slate-950">
                Flink is strongest when every return to the app feels earned by useful context.
              </p>
            </div>
          </div>
        </div>
      </section>

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
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#1f7a45]">Core story</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
              Flink should feel like a serious product, not a loose collection of useful screens.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              The website needs to make that clear with stronger sequencing,
              deeper detail, and visual motion that reinforces how the platform
              actually works across farming, selling, responding and growing.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="reveal-card rounded-[2rem] border border-slate-900/8 bg-white/78 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)]"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-[#163d2a] p-3 text-white shadow-[0_16px_32px_rgba(22,61,42,0.2)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl rounded-[2.8rem] bg-[linear-gradient(135deg,#2756db_0%,#1f7a45_100%)] px-8 py-12 text-white shadow-[0_30px_120px_rgba(37,86,219,0.24)] sm:px-10 sm:py-14 lg:px-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Why Flink can retain people</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Strong products create useful reasons to come back.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/76">
                Flink should feel valuable every time it is opened: fresh weather context, new buyer movement,
                product visibility, unread conversations and growth prompts that actually matter.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: MapPinned,
                  title: "Hyper-local weather",
                  body: "Forecast signals tied to actual farm location and crop timing.",
                },
                {
                  icon: Store,
                  title: "Marketplace movement",
                  body: "Listings, boosts and buyer discovery keep supply in motion.",
                },
                {
                  icon: Wallet,
                  title: "Monetization with context",
                  body: "Premium and visibility tools are tied to outcomes, not noise.",
                },
                {
                  icon: BadgeCheck,
                  title: "Trust that compounds",
                  body: "Farmer identity, profile structure and proof reduce friction in trade.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="reveal-card rounded-[1.9rem] border border-white/14 bg-white/10 p-5 backdrop-blur"
                  >
                    <div className="inline-flex rounded-2xl bg-white/14 p-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/78">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="reveal-card rounded-[2.5rem] bg-[#163d2a] p-8 text-white shadow-[0_30px_120px_rgba(22,61,42,0.28)] sm:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-white/58">Product flow</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              A sharper story of how users return to Flink.
            </h2>
            <div className="mt-8 space-y-4">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="rounded-[1.7rem] border border-white/10 bg-white/8 p-5 backdrop-blur"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#d6f277] text-slate-950">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.28em] text-white/55">
                          Step 0{index + 1}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold tracking-tight">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-white/72">{step.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="mb-8 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#1f7a45]">Visual proof</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
                Product detail should look tangible, layered and alive.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                The app already has real surfaces. The website should present them
                like a strong product narrative, not like loose screenshots
                floating in a neutral page.
              </p>
            </div>

            <ScreenshotGrid />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl rounded-[2.7rem] border border-slate-900/8 bg-white/72 p-8 shadow-[0_26px_90px_rgba(15,23,42,0.06)] backdrop-blur sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#1f7a45]">Why people return</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Useful engagement loops keep activity healthy.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              Flink wins when notifications, weather insight, profile trust and
              marketplace momentum feel connected. The product should repeatedly
              answer one question for the user: what is worth doing now?
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {storyCards.map((item) => (
              <div
                key={item.title}
                className="reveal-card rounded-[2rem] border border-slate-900/8 bg-[#fcfbf7] p-6"
              >
                <div className={`inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] ${item.accent}`}>
                  {item.title}
                </div>
                <p className="mt-5 text-lg font-semibold tracking-tight text-slate-950">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="reveal-card rounded-[2rem] border border-slate-900/8 bg-white/78 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eff8e7] text-[#163d2a]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                        {item.copy}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#1f7a45]">Daily motion</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Flink should always have a compelling next thing to check.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              That is the real retention story: useful weather timing, changing buyer
              intent, promoted visibility that feels fair, and messaging surfaces that
              help people act while context is still fresh.
            </p>

            <div className="mt-8 rounded-[2rem] border border-slate-900/8 bg-[#163d2a] p-6 text-white shadow-[0_28px_90px_rgba(22,61,42,0.22)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/58">
                    Operator notes
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight">
                    Product decisions should feel intentional at every layer.
                  </p>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/68">
                  Flink standard
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {operatorRail.map((item) => (
                  <div
                    key={item}
                    className="reveal-card flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-3 backdrop-blur"
                  >
                    <div className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d6f277]" />
                    <p className="text-sm leading-6 text-white/78">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {dailySignals.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`reveal-card rounded-[2rem] border border-slate-900/8 bg-gradient-to-br ${item.tone} p-6 shadow-[0_22px_80px_rgba(15,23,42,0.06)]`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">
                        {item.eyebrow}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                        {item.title}
                      </h3>
                    </div>
                    <div className="rounded-2xl bg-white p-3 text-[#163d2a] shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                    {item.body}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-4 rounded-[1.4rem] border border-slate-900/6 bg-white/72 px-4 py-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                        What good looks like
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-700">
                        Relevant, recent, actionable and calm.
                      </p>
                    </div>
                    <div className="rounded-full bg-[#163d2a] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white">
                      Retention
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#1f7a45]">Platform depth</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Enough detail to feel credible. Enough motion to feel current.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {platformModules.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="reveal-card rounded-[2rem] border border-slate-900/8 bg-[#fffdf8] p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">
                        {item.eyebrow}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                        {item.title}
                      </h3>
                    </div>
                    <div className="rounded-2xl bg-[#163d2a] p-3 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl rounded-[2.8rem] bg-[#163d2a] px-8 py-12 text-white shadow-[0_30px_120px_rgba(22,61,42,0.3)] sm:px-10 sm:py-14 lg:px-12 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/58">Trust signals</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              What early users and operators should feel after one minute on the site.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="reveal-card rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur"
              >
                <ShieldCheck className="h-5 w-5 text-[#d6f277]" />
                <p className="mt-5 text-base leading-7 text-white/80">“{item.quote}”</p>
                <div className="mt-6">
                  <p className="font-semibold tracking-tight">{item.name}</p>
                  <p className="text-sm text-white/58">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#1f7a45]">FAQ</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              The extra detail users expect from a serious product website.
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="reveal-card rounded-[2rem] border border-slate-900/8 bg-white/80 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.04)]"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  {item.question}
                </h3>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.8rem] bg-[#101b16] px-8 py-12 text-white shadow-[0_30px_120px_rgba(16,27,22,0.34)] sm:px-10 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/52">Ready to move</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Flink deserves a website that looks as ambitious as the platform itself.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Start with the current product, show real depth, and build a web presence that feels confident enough for investors, partners and users alike.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full bg-[#d6f277] px-7 text-base text-slate-950 hover:bg-[#c9eb61]"
            >
              <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
                Download Flink
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-white/20 bg-white/6 px-7 text-base text-white hover:bg-white/10"
            >
              <Link href="/workflow">See workflow pages</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
