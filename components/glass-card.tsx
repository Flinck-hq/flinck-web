"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlassCard({ children, className, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-3xl border border-white/30 bg-white/70 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-xl ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
