"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteBackground } from "@/components/site-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  PLAY_STORE_URL,
  capabilities,
  highlights,
  pillars,
  proofStats,
} from "@/lib/site-content";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 25,
      stiffness: 100,
    },
  },
};

export default function Home() {
  return (
    <main
      id="top"
      className="page-shell min-h-screen overflow-x-clip bg-[#f7f2e8] text-slate-950"
    >
      <SiteBackground />
      <SiteHeader />

      {/* HERO SECTION */}
      <section className="relative px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="reveal-card mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#163d2a]/12 bg-white/78 px-4 py-2 text-xs text-slate-700 shadow-sm backdrop-blur sm:text-sm">
              <Sparkles className="h-4 w-4 text-[#1f7a45]" />
              The complete digital ecosystem for modern African farmers
            </div>

            <h1 className="max-w-5xl text-[3rem] font-semibold leading-[0.92] tracking-[-0.075em] text-slate-950 sm:text-[4.8rem] lg:text-[6.4rem]">
              The operating system for African agriculture.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
              Flinck combines precision weather intelligence, a high-velocity
              marketplace, and verified farmer identity into one powerful mobile
              platform.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 w-full rounded-full bg-[#163d2a] px-7 text-base text-white hover:bg-[#10281d] sm:w-auto"
              >
                <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
                  Start Farming with Flinck
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 w-full rounded-full border-slate-300 bg-white/70 px-7 text-base text-slate-900 hover:bg-white sm:w-auto"
              >
                <Link href="/platform">View Platform Details</Link>
              </Button>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mt-10 grid gap-4 md:grid-cols-3"
            >
              {highlights.map((item) => (
                <motion.div
                  variants={itemVariants}
                  key={item.value}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="reveal-card rounded-[1.8rem] border border-slate-900/8 bg-white/76 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur transition-all"
                >
                  <p className="text-lg font-semibold tracking-tight text-slate-950">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative"
          >
            <div className="hero-orb absolute -right-8 top-12 h-36 w-36 rounded-full bg-[#d9f99d]/50 blur-3xl" />
            <div className="hero-orb absolute -left-8 bottom-12 h-40 w-40 rounded-full bg-[#f3c97f]/35 blur-3xl" />

            <motion.div
              whileHover={{ y: -10, rotate: -1 }}
              className="relative overflow-hidden rounded-[2.5rem] border border-slate-900/10 bg-white p-2 shadow-[0_40px_100px_rgba(22,61,42,0.15)]"
            >
              <Image
                src="/hero-mockup.png"
                alt="Flinck App Mockup"
                width={500}
                height={500}
                className="rounded-[2.5rem] object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROOF STATS */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {proofStats.map((item) => (
            <motion.div
              variants={itemVariants}
              key={item.value}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="reveal-card rounded-[2rem] border border-slate-900/8 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] cursor-default"
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
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* LIFESTYLE SECTION */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#1f7a45]">
                The Flinck Mission
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
                Empowering farmers with data and market access.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                We provide the tools necessary for farmers to transition from
                traditional methods to high-performance, data-driven
                agricultural operations.
              </p>

              <div className="mt-10 grid gap-6">
                {pillars.slice(0, 2).map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#163d2a] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-slate-900/10 shadow-[0_50px_100px_rgba(0,0,0,0.1)]"
            >
              <Image
                src="/farmer-lifestyle.png"
                alt="Modern African Farmer using Flinck"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PILLARS SECTION */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#1f7a45]">
              Core Pillars
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
              A comprehensive layer for agricultural excellence.
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 grid gap-5 lg:grid-cols-4"
          >
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  variants={itemVariants}
                  key={item.title}
                  whileHover={{ y: -10 }}
                  className="reveal-card rounded-[2rem] border border-slate-900/8 bg-white/78 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)]"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-[#163d2a] p-3 text-white shadow-[0_16px_32px_rgba(22,61,42,0.2)]">
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
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.02 }}
                  className="reveal-card rounded-[2rem] border border-slate-900/8 bg-white/78 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eff8e7] text-[#163d2a]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.copy}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-slate-900/10 shadow-2xl">
              <Image
                src="/marketplace-vibe.png"
                alt="Marketplace Activity"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-xs uppercase tracking-widest opacity-70">
                  Live Marketplace
                </p>
                <h3 className="mt-2 text-3xl font-semibold">Real-time Trade</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[3.5rem] bg-[#101b16] px-8 py-12 text-white shadow-[0_40px_120px_rgba(0,0,0,0.3)] sm:px-10 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:px-20"
        >
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/platform-dashboard.png"
              alt=""
              fill
              className="object-cover grayscale"
            />
          </div>

          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d6f277]">
              Get Started
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Ready to scale your agricultural business?
            </h2>
            <p className="mt-6 text-xl text-white/70">
              Download Flinck today and join the network of modern African
              farmers.
            </p>
          </div>

          <div className="relative z-10 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-16 rounded-full bg-[#d6f277] px-10 text-lg text-slate-950 hover:bg-[#c9eb61]"
            >
              <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
                Download Now
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      <SiteFooter />
    </main>
  );
}
