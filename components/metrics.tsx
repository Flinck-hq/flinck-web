"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedCounter } from "./animated-counter";
import { GlassCard } from "./glass-card";

const stats = [
  { end: 100, suffix: "+", label: "Farmers", desc: "Growing every day" },
  { end: 1000, suffix: "+", label: "Products", desc: "Listed on marketplace" },
  { end: 5, suffix: "+", label: "Communities", desc: "Across regions" },
];

export function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative bg-[#f5f0e5] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <GlassCard key={stat.label} delay={i * 0.1}>
              <p className="text-5xl font-bold tracking-tight text-[#163d2a] sm:text-6xl">
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  duration={2}
                />
              </p>
              <p className="mt-2 text-lg font-semibold text-gray-900">
                {stat.label}
              </p>
              <p className="mt-1 text-sm text-gray-500">{stat.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
