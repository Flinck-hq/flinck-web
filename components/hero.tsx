"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { PLAY_STORE_URL } from "@/lib/site-content";
import { GradientBackground } from "./gradient-background";
import { FloatingPhone } from "./floating-phone";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-[#f7f2e8] pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      <GradientBackground />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div style={{ opacity, y }} className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center rounded-full border border-[#163d2a]/15 bg-[#163d2a]/5 px-4 py-1.5 text-xs font-medium text-[#163d2a]">
              The digital ecosystem for agriculture
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-balance text-6xl font-bold leading-[0.95] tracking-[-0.04em] text-gray-900 sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Agriculture.
            <br />
            <span className="bg-gradient-to-r from-[#163d2a] to-[#1f7a45] bg-clip-text text-transparent">
              Reimagined.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-gray-500 sm:text-xl sm:leading-8"
          >
            The first social marketplace connecting farmers, buyers, and
            agribusinesses into one trusted ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#163d2a] px-8 text-base font-semibold text-white shadow-lg shadow-[#163d2a]/25 transition-all hover:bg-[#10281d] active:scale-[0.97]"
            >
              Download App
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16 flex justify-center sm:mt-20"
        >
          <FloatingPhone src="/hero-mockup.png" alt="Flinck App" />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f7f2e8] to-transparent" />
    </section>
  );
}
