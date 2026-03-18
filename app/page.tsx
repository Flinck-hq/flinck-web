"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  BadgeCheck,
  MapPinned,
  MessageSquareMore,
  ShoppingBasket,
  Sparkles,
  Sprout,
  TrendingUp,
  Wallet,
} from "lucide-react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.k09dtechnologies.flink";

const screenshots = [
  {
    src: "/home.jpg",
    alt: "Flink home dashboard showing wallet, quick actions, and weather insights",
    tone: "from-[#1f7a45]/18 to-[#d6f277]/10",
  },
  {
    src: "/profile.jpg",
    alt: "Flink profile screen showing farmer identity, wallet card, and app navigation",
    tone: "from-[#163d2a]/10 to-[#d9a441]/16",
  },
];

const highlights = [
  {
    value: "One app",
    label: "Weather, crop guidance, market access, wallet and community tools",
  },
  {
    value: "Mobile first",
    label: "Built for fast decisions in the field, not dashboards nobody uses",
  },
  {
    value: "Farmer ready",
    label: "Designed for real producers, buyers and modern agri-commerce flows",
  },
];

const pillars = [
  {
    icon: Sparkles,
    title: "Decision Intelligence",
    description:
      "Turn weather, crop context and local conditions into clearer planting and selling decisions.",
  },
  {
    icon: ShoppingBasket,
    title: "Marketplace That Converts",
    description:
      "List produce, manage product details, connect with buyers and move faster from inventory to income.",
  },
  {
    icon: Wallet,
    title: "Built-In Transactions",
    description:
      "Keep payments, balance visibility and sales momentum close to the rest of the workflow.",
  },
  {
    icon: MessageSquareMore,
    title: "AI + Community Support",
    description:
      "Give farmers a smart assistant and a content layer that helps knowledge spread, not stall.",
  },
];

const capabilities = [
  {
    icon: MapPinned,
    title: "Location-aware weather",
    copy: "Relevant forecasts and practical signals instead of generic weather noise.",
  },
  {
    icon: Sprout,
    title: "Crop recommendations",
    copy: "Guide users on what to plant and how to reduce guesswork around timing.",
  },
  {
    icon: TrendingUp,
    title: "Market visibility",
    copy: "Help farmers understand pricing, demand and where to push inventory next.",
  },
  {
    icon: BarChart3,
    title: "Operator clarity",
    copy: "Bring products, orders, content and profile performance into one clean flow.",
  },
];

const flows = [
  "Check conditions before planting or harvesting.",
  "List produce with images, pricing and descriptions that buyers can trust.",
  "Move from discovery to order without sending users across disconnected tools.",
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#f6f3ea] text-slate-950">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[#1f7a45]/18 blur-3xl" />
        <div className="absolute right-[-8%] top-[8rem] h-[30rem] w-[30rem] rounded-full bg-[#d9a441]/16 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.75),_transparent_60%)]" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-slate-900/10 bg-[#f6f3ea]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="overflow-hidden rounded-2xl border border-slate-900/8 bg-white shadow-[0_12px_30px_rgba(22,61,42,0.12)]">
              <Image
                src="/logo.jpg"
                alt="Flink logo"
                width={44}
                height={44}
                className="h-11 w-11 object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-base font-semibold tracking-tight sm:text-lg">
                Flink
              </p>
              <p className="hidden text-xs uppercase tracking-[0.24em] text-slate-500 sm:block">
                Precision for modern farming
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#platform" className="transition hover:text-slate-950">
              Platform
            </a>
            <a href="#capabilities" className="transition hover:text-slate-950">
              Capabilities
            </a>
            <a href="#workflow" className="transition hover:text-slate-950">
              Workflow
            </a>
          </div>

          <Button
            asChild
            className="h-11 rounded-full bg-[#163d2a] px-4 text-white hover:bg-[#0f2a1d] sm:px-5"
          >
            <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
              Download app
            </a>
          </Button>
        </div>
      </nav>

      <section className="px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#163d2a]/15 bg-white/80 px-4 py-2 text-xs text-slate-700 shadow-sm sm:text-sm">
              <BadgeCheck className="h-4 w-4 text-[#1f7a45]" />
              Designed for real farm operations, market movement and daily
              execution
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
                <a href="#platform">Explore the platform</a>
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
              <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
                Get the app
              </a>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr]">
            {screenshots.map((shot, index) => (
              <div
                key={shot.src}
                className={`relative mx-auto w-full max-w-sm overflow-hidden rounded-[2.25rem] border border-slate-900/8 bg-gradient-to-br ${shot.tone} p-4 shadow-[0_28px_80px_rgba(15,23,42,0.08)] md:max-w-none`}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_transparent_55%)]" />
                <div className="relative rounded-[1.8rem] bg-white/80 p-3 backdrop-blur">
                  <div className="mb-3 flex items-center justify-between px-2">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                      Screen 0{index + 1}
                    </p>
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-300/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-300/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-300/80" />
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-[1.5rem] border border-slate-900/8 bg-[#f5f2e9]">
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.28em] text-[#1f7a45]">
              Platform
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              A sharper product story than a waitlist can tell.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Flink is not an idea page anymore. It is a premium agri platform
              with clear surfaces for product discovery, seller credibility,
              wallet activity, weather-driven planning and a modern farmer
              experience.
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
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="border-y border-slate-900/8 bg-white/55 px-5 py-16 backdrop-blur sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.28em] text-[#1f7a45]">
                Capabilities
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                Everything users need to trust the product in one experience.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              The landing page should sell a serious platform. These are the
              surfaces that make Flink feel complete and high-value.
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
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="workflow" className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#1f7a45]">
              Workflow
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              The story is operational, not aspirational.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Instead of asking for emails, this page should show how Flink fits
              into the day-to-day rhythm of modern farming and agricultural
              commerce.
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

      <section className="px-5 pb-18 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#163d2a] px-8 py-12 text-white shadow-[0_30px_120px_rgba(22,61,42,0.32)] sm:px-12 sm:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.28em] text-white/60">
                Ready to launch stronger
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Flink deserves a landing page that feels like the product is
                already real.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/72">
                Replace the waitlist posture with a confident premium presence
                that sells intelligence, trust and execution.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full bg-[#d6f277] px-7 text-base text-slate-950 hover:bg-[#c7ea54]"
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
                <a href="#top">Back to top</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
