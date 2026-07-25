"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "./section-title";

export function WhyFlinck() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#f7f2e8] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionTitle
          eyebrow="Why Flinck"
          title="The ecosystem for the future of food."
          subtitle="One platform connecting every piece of the agricultural value chain — from soil to sale."
        />

        <motion.div
          style={{ scale }}
          className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl sm:rounded-4xl"
        >
          <motion.div style={{ y: imageY }} className="relative aspect-[21/9]">
            <Image
              src="/farmer-lifestyle.png"
              alt="Farmer using Flinck"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 80vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                Empowering farmers
              </p>
              <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                From traditional methods to data-driven growth.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
