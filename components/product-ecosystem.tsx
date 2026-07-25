"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Users,
  ShoppingBag,
  CloudSun,
  Brain,
  Truck,
  Landmark,
} from "lucide-react";
import { SectionTitle } from "./section-title";

const ecosystemItems = [
  { icon: Users, label: "Social", desc: "Connect & discover" },
  { icon: ShoppingBag, label: "Marketplace", desc: "Buy & sell directly" },
  { icon: CloudSun, label: "Weather", desc: "Smart forecasting" },
  { icon: Brain, label: "AI", desc: "Intelligent assistant" },
  { icon: Truck, label: "Logistics", desc: "Delivery network" },
  { icon: Landmark, label: "Finance", desc: "Payments & credit" },
];

export function ProductEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 0.6], ["0%", "-35%"]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#f5f0e5] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionTitle
          eyebrow="Ecosystem"
          title="Everything you need. One platform."
          subtitle="Six integrated modules that work together seamlessly."
        />
      </div>

      <div className="relative mt-16 overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 px-5 sm:px-8 lg:px-12">
          {[...ecosystemItems, ...ecosystemItems].map((item, i) => (
            <motion.div
              key={`${item.label}-${i}`}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group flex min-w-[260px] flex-col items-center rounded-3xl border border-[#163d2a]/8 bg-white/80 p-8 shadow-sm transition-shadow hover:shadow-xl sm:min-w-[300px]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eff8e7] text-[#163d2a] transition-colors group-hover:bg-[#163d2a] group-hover:text-white">
                <item.icon className="h-7 w-7" />
              </div>
              <p className="mt-5 text-xl font-bold text-gray-900">
                {item.label}
              </p>
              <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
