"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroCopy, highlights, PLAY_STORE_URL } from "@/lib/site-content";

export function HomeHero() {
  return (
    <section className="relative px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="reveal-card mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#163d2a]/12 bg-white/78 px-4 py-2 text-xs text-slate-700 shadow-sm backdrop-blur sm:text-sm">
            <Sparkles className="h-4 w-4 text-[#1f7a45]" />
            {heroCopy.eyebrow}
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
            {heroCopy.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {heroCopy.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 w-full rounded-full bg-[#163d2a] px-7 text-base text-white hover:bg-[#10281d] sm:w-auto"
            >
              <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
                {heroCopy.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 w-full rounded-full border-slate-300 bg-white/70 px-7 text-base text-slate-900 hover:bg-white sm:w-auto"
            >
              <Link href="/how-it-works">{heroCopy.secondaryCta}</Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.value}
                className="reveal-card rounded-[1.8rem] border border-slate-900/8 bg-white/76 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-900/10 bg-white p-2 shadow-[0_40px_100px_rgba(22,61,42,0.15)]">
            <Image
              src="/hero-mockup.png"
              alt="Flinck mobile app"
              width={1200}
              height={1200}
              className="rounded-[2.2rem] object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
