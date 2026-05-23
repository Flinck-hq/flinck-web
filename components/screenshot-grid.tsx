"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { screenshots } from "@/lib/site-content";

const labels = [
  "Daily command center",
  "Identity and trust",
  "Field intelligence",
  "Operator in the field",
];

export function ScreenshotGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {screenshots.map((shot, index) => (
        <motion.div
          key={shot.src}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.1 }}
          className={`relative overflow-hidden rounded-[2.4rem] border border-slate-900/8 bg-gradient-to-br ${shot.tone} p-4 shadow-[0_28px_90px_rgba(15,23,42,0.08)]`}
        >
          <div className="relative rounded-[2rem] border border-white/60 bg-white/78 p-4 backdrop-blur-xl">
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">
              Screen {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-1 text-lg font-semibold text-slate-950">
              {labels[index] ?? "Flinck app"}
            </p>
            <div className="mt-4 overflow-hidden rounded-[1.7rem] border border-slate-900/8 bg-[#f5f2e9]">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={720}
                height={1600}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
