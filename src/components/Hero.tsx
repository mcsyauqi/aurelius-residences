"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <Image
          src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920&q=80"
          alt="City skyline at night with illuminated skyscrapers"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/40 to-[#0A0A0A]" />
        {/* Side vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/60" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        {/* Small decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[1px] bg-[#C9A96E] mb-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-[family-name:var(--font-cormorant)] text-[#C9A96E] text-sm md:text-base tracking-[0.4em] uppercase mb-6"
        >
          Jakarta&apos;s Most Prestigious Address
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-8xl text-[#F5F0E8] leading-[1.1] mb-6 max-w-4xl"
        >
          Where Legacy
          <br />
          <span className="italic">Meets</span>{" "}
          <span className="gold-gradient-text">Luxury</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-sm md:text-base max-w-lg leading-relaxed mb-12"
        >
          A limited collection of 120 residences rising 58 stories above
          Jakarta&apos;s golden triangle, designed for those who define excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#register"
            className="px-8 py-3.5 bg-gradient-to-r from-[#C9A96E] to-[#A68B5B] text-[#0A0A0A] font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase hover:from-[#D4B87A] hover:to-[#C9A96E] transition-all duration-300"
          >
            Request Private Viewing
          </a>
          <a
            href="#residences"
            className="px-8 py-3.5 border border-[#C9A96E]/30 text-[#C9A96E] font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase hover:bg-[#C9A96E]/10 transition-all duration-300"
          >
            Explore Residences
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-[10px] tracking-[0.3em] uppercase">
          Scroll to discover
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#C9A96E] to-transparent"
        />
      </motion.div>
    </section>
  );
}
