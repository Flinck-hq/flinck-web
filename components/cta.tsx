"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { PLAY_STORE_URL } from "@/lib/site-content";
import { DeviceFrame } from "./device-frame";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#2563EB] to-[#3B82F6] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
              Get Started
            </p>
            <h2 className="text-balance text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Start farming.
              <br />
              <span className="text-blue-200">For free.</span>
            </h2>
            <p className="mt-6 text-balance text-lg leading-relaxed text-blue-100 sm:text-xl">
              Join the network of modern farmers, buyers, and agribusinesses
              transforming agriculture across Africa.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-semibold text-[#2563EB] transition-all hover:bg-blue-50 active:scale-[0.97]"
              >
                Download App
                <ArrowRight className="h-5 w-5" />
              </a>
              <button className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-[0.97]">
                <PlayCircle className="h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <div className="animate-float">
              <DeviceFrame
                src="/hero-mockup.png"
                alt="Flinck App"
                className="scale-90 sm:scale-100"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
