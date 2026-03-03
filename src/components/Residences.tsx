"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface Residence {
  name: string;
  size: string;
  sqm: number;
  bedrooms: string;
  bathrooms: string;
  price: string;
  image: string;
  description: string;
}

const residences: Residence[] = [
  {
    name: "Sovereign Suite",
    size: "350 sqm",
    sqm: 350,
    bedrooms: "4 Bedrooms",
    bathrooms: "5 Bathrooms",
    price: "From IDR 45B",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    description:
      "The crown jewel of Aurelius. Panoramic 270-degree views, private elevator access, and a dedicated butler service.",
  },
  {
    name: "Ambassador",
    size: "220 sqm",
    sqm: 220,
    bedrooms: "3 Bedrooms",
    bathrooms: "3 Bathrooms",
    price: "From IDR 28B",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    description:
      "Commanding presence with expansive living areas, a private study, and access to the Ambassador Lounge.",
  },
  {
    name: "Diplomat",
    size: "150 sqm",
    sqm: 150,
    bedrooms: "2 Bedrooms",
    bathrooms: "2 Bathrooms",
    price: "From IDR 18B",
    image:
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80",
    description:
      "Sophisticated elegance with carefully proportioned spaces, premium finishes, and stunning city views.",
  },
  {
    name: "Attach\u00E9",
    size: "85 sqm",
    sqm: 85,
    bedrooms: "1 Bedroom",
    bathrooms: "1 Bathroom",
    price: "From IDR 9.5B",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    description:
      "A refined pied-\u00E0-terre for the cosmopolitan individual. Smart living distilled to its purest form.",
  },
];

function ResidenceCard({
  residence,
  index,
}: {
  residence: Residence;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group min-w-[320px] md:min-w-[400px] lg:min-w-[450px] flex-shrink-0"
    >
      <div className="relative overflow-hidden bg-[#111111]">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={residence.image}
            alt={residence.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 320px, 450px"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />

          {/* Unit size badge */}
          <div className="absolute top-6 right-6 bg-[#0A0A0A]/80 backdrop-blur-sm border border-[#C9A96E]/30 px-4 py-2">
            <span className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-xs tracking-[0.1em]">
              {residence.size}
            </span>
          </div>
        </div>

        {/* Content overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#F5F0E8] mb-2">
            {residence.name}
          </h3>

          <p className="font-[family-name:var(--font-cormorant)] text-[#6B6B6B] text-sm leading-relaxed mb-4 line-clamp-2">
            {residence.description}
          </p>

          {/* Details */}
          <div className="flex items-center gap-4 mb-4">
            <span className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-xs">
              {residence.bedrooms}
            </span>
            <span className="w-[1px] h-3 bg-[#C9A96E]/30" />
            <span className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-xs">
              {residence.bathrooms}
            </span>
            <span className="w-[1px] h-3 bg-[#C9A96E]/30" />
            <span className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-xs">
              {residence.sqm} m&sup2;
            </span>
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between">
            <span className="font-[family-name:var(--font-playfair)] text-[#C9A96E] text-lg">
              {residence.price}
            </span>
            <a
              href="#register"
              className="font-[family-name:var(--font-inter)] text-[#F5F0E8] text-[10px] tracking-[0.2em] uppercase border-b border-[#C9A96E]/30 pb-0.5 hover:border-[#C9A96E] transition-colors"
            >
              Inquire
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Residences() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={sectionRef}
      id="residences"
      className="relative py-32 md:py-40 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Subtle background pattern */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-[0.02]"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #C9A96E 0, #C9A96E 1px, transparent 0, transparent 50%)",
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#C9A96E]" />
              <span className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase">
                The Collection
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl lg:text-6xl text-[#F5F0E8] leading-[1.1] mb-6">
              Four Distinct
              <br />
              <span className="italic text-[#C9A96E]">Collections</span>
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-sm max-w-lg">
              Each residence type represents a different philosophy of luxury
              living, united by an unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Scroll on Desktop, Vertical on Mobile */}
        <div className="hidden md:block">
          <div
            ref={scrollRef}
            className="flex gap-6 px-6 lg:px-8 overflow-x-auto no-scrollbar pb-4"
          >
            {residences.map((residence, index) => (
              <ResidenceCard
                key={residence.name}
                residence={residence}
                index={index}
              />
            ))}
          </div>
          {/* Scroll hint */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-8 flex items-center gap-3">
            <div className="w-12 h-[1px] bg-[#C9A96E]/30" />
            <span className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-[10px] tracking-[0.2em] uppercase">
              Scroll to explore
            </span>
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[#C9A96E] text-sm"
            >
              &rarr;
            </motion.div>
          </div>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="md:hidden flex flex-col gap-8 px-6">
          {residences.map((residence, index) => (
            <ResidenceCard
              key={residence.name}
              residence={residence}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
