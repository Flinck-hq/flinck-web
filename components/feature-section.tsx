"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FloatingPhone } from "./floating-phone";

interface FeatureSectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  bgColor?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function FeatureSection({
  id,
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  reversed = false,
  bgColor = "bg-[#f7f2e8]",
  ctaText,
  ctaHref,
}: FeatureSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative overflow-hidden py-24 sm:py-32 ${bgColor}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            style={reversed ? {} : { y: imageY }}
            className={`flex justify-center ${reversed ? "lg:order-2" : "lg:order-1"}`}
          >
            <FloatingPhone src={imageSrc} alt={imageAlt} />
          </motion.div>

          <motion.div
            style={{ opacity: textOpacity }}
            className={`${reversed ? "lg:order-1" : "lg:order-2"}`}
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#1f7a45]"
            >
              {eyebrow}
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-balance text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-gray-900 sm:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-balance text-lg leading-relaxed text-gray-500 sm:text-xl"
            >
              {description}
            </motion.p>
            {ctaText && ctaHref && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8"
              >
                <a
                  href={ctaHref}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#163d2a] transition-colors hover:text-[#10281d]"
                >
                  {ctaText}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
