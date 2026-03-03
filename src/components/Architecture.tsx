"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Architecture() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-10%"]);

  return (
    <section
      ref={ref}
      id="architecture"
      className="relative min-h-screen bg-[#0A0A0A] overflow-hidden"
    >
      {/* Full Width Parallax Image with Ken Burns */}
      <div className="relative h-screen overflow-hidden">
        <motion.div
          style={{ scale: imageScale, y: imageY }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
            alt="Modern glass tower architecture"
            fill
            className="object-cover ken-burns"
            sizes="100vw"
          />
          {/* Heavy dark overlay for text readability */}
          <div className="absolute inset-0 bg-[#0A0A0A]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
        </motion.div>

        {/* Centered Quote Content */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div className="text-center px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
            >
              {/* Section Label */}
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C9A96E]" />
                <span className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase">
                  Design Philosophy
                </span>
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C9A96E]" />
              </div>

              {/* Large opening quote mark */}
              <span className="font-[family-name:var(--font-playfair)] text-[#C9A96E]/30 text-8xl md:text-9xl leading-none block mb-[-20px]">
                &ldquo;
              </span>

              {/* Quote */}
              <blockquote className="font-[family-name:var(--font-cormorant)] text-2xl md:text-4xl lg:text-5xl text-[#F5F0E8] leading-[1.3] italic mb-8">
                We did not design a building.
                <br />
                We sculpted a monument to the
                <br />
                <span className="text-[#C9A96E]">art of living well.</span>
              </blockquote>

              {/* Gold line */}
              <div className="w-16 h-[1px] bg-[#C9A96E] mx-auto mb-6" />

              {/* Attribution */}
              <p className="font-[family-name:var(--font-inter)] text-[#F5F0E8] text-sm tracking-[0.1em]">
                Marcus Hartono
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-[10px] tracking-[0.2em] uppercase mt-1">
                Principal Architect, Hartono &amp; Associates
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Architecture Details Bar */}
      <div className="bg-[#111111] border-t border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1F1F1F]">
            {[
              { label: "Facade Material", value: "Low-E Glass & Titanium" },
              { label: "Structural System", value: "Reinforced Core Wall" },
              { label: "Seismic Rating", value: "Zone IV Compliant" },
              { label: "Sustainability", value: "LEED Gold Certified" },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="py-8 px-6"
              >
                <p className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-[10px] tracking-[0.2em] uppercase mb-2">
                  {item.label}
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-[#F5F0E8] text-lg">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
