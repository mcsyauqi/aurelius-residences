"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function Introduction() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 md:py-40 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#C9A96E]" />
              <span className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase">
                The Vision
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-[#F5F0E8] leading-[1.2] mb-8">
              A Sanctuary of{" "}
              <span className="italic text-[#C9A96E]">Refined</span>
              <br />
              Living Above the Clouds
            </h2>

            {/* Body Text */}
            <p className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl text-[#6B6B6B] leading-relaxed mb-6">
              Aurelius Residences represents the pinnacle of residential
              architecture in Southeast Asia. Each residence is a masterpiece of
              space, light, and material — curated for the discerning few who
              understand that true luxury is not about excess, but about the
              perfection of every detail.
            </p>

            <p className="font-[family-name:var(--font-inter)] text-sm text-[#6B6B6B] leading-relaxed mb-10">
              Conceived by world-renowned architects and interior designers,
              every surface, every view, and every moment within Aurelius has been
              orchestrated to elevate the art of living. From the travertine
              marble lobbies to the floor-to-ceiling panoramas, this is where
              ambition finds its home.
            </p>

            {/* Stats Row */}
            <div className="flex gap-12">
              <div>
                <span className="font-[family-name:var(--font-playfair)] text-3xl text-[#C9A96E]">
                  58
                </span>
                <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#6B6B6B] mt-1">
                  Stories
                </p>
              </div>
              <div>
                <span className="font-[family-name:var(--font-playfair)] text-3xl text-[#C9A96E]">
                  120
                </span>
                <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#6B6B6B] mt-1">
                  Residences
                </p>
              </div>
              <div>
                <span className="font-[family-name:var(--font-playfair)] text-3xl text-[#C9A96E]">
                  4
                </span>
                <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#6B6B6B] mt-1">
                  Collections
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80"
                alt="Luxury modern interior with marble and gold accents"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
            </div>

            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A96E]/20 -z-10" />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-[#0A0A0A] border border-[#C9A96E]/30 px-6 py-4"
            >
              <p className="font-[family-name:var(--font-cormorant)] text-[#C9A96E] text-sm italic">
                &ldquo;Architecture is the learned game,
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-[#C9A96E] text-sm italic">
                correct and magnificent, of forms
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-[#C9A96E] text-sm italic">
                assembled in the light.&rdquo;
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-[10px] tracking-[0.2em] uppercase mt-2">
                Le Corbusier
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
