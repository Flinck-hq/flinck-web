"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DeviceFrame } from "./device-frame";

interface FloatingPhoneProps {
  src: string;
  alt: string;
  className?: string;
}

export function FloatingPhone({ src, alt, className }: FloatingPhoneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 2]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale, rotate }}
      className={className}
    >
      <div className="animate-float">
        <DeviceFrame src={src} alt={alt} priority />
      </div>
    </motion.div>
  );
}
