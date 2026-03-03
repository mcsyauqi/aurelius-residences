"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface Amenity {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

const amenities: Amenity[] = [
  {
    title: "Infinity Pool",
    subtitle: "52nd Floor Sky Deck",
    description:
      "A 25-meter infinity pool seemingly merging with the Jakarta skyline. Open from dawn to midnight, with private cabanas and a poolside bar serving artisanal cocktails.",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80",
    features: ["25m Infinity Edge", "Heated Year-Round", "Private Cabanas", "Sky Bar"],
  },
  {
    title: "Private Cinema",
    subtitle: "Level 3 Entertainment Wing",
    description:
      "A 24-seat Dolby Atmos cinema with Italian leather recliners, available for private screenings. Pre-order gourmet dining delivered to your seat.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80",
    features: ["Dolby Atmos", "4K Laser", "24 Recliners", "Private Booking"],
  },
  {
    title: "Wellness Spa",
    subtitle: "Level 4 Serenity Wing",
    description:
      "A holistic wellness sanctuary featuring a vitality pool, Finnish sauna, steam room, and treatment suites staffed by internationally certified therapists.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80",
    features: ["Vitality Pool", "Finnish Sauna", "Treatment Suites", "Yoga Studio"],
  },
  {
    title: "Sky Lounge",
    subtitle: "55th Floor Penthouse Level",
    description:
      "An exclusive members-only lounge perched above the city, with a curated wine cellar, private dining rooms, and a cigar terrace overlooking the golden triangle.",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
    features: ["Wine Cellar", "Private Dining", "Cigar Terrace", "Panoramic Views"],
  },
  {
    title: "Concierge",
    subtitle: "24/7 Personal Service",
    description:
      "Your dedicated lifestyle team anticipates every need — from securing restaurant reservations to arranging private jet charters and bespoke travel itineraries.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
    features: ["24/7 Available", "Private Chef", "Travel Desk", "Valet Service"],
  },
];

function AmenitySection({
  amenity,
  index,
}: {
  amenity: Amenity;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[80vh] ${
        isReversed ? "" : ""
      }`}
    >
      {/* Image */}
      <motion.div
        className={`relative overflow-hidden min-h-[50vh] lg:min-h-[80vh] ${
          isReversed ? "lg:order-2" : ""
        }`}
      >
        <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
          <Image
            src={amenity.image}
            alt={amenity.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className={`absolute inset-0 ${
              isReversed
                ? "bg-gradient-to-l from-[#0A0A0A]/80 to-transparent"
                : "bg-gradient-to-r from-[#0A0A0A]/80 to-transparent"
            }`}
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/30" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div
        className={`flex items-center ${
          isReversed ? "lg:order-1 lg:justify-end" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12 lg:p-20 max-w-xl"
        >
          {/* Number */}
          <span className="font-[family-name:var(--font-playfair)] text-[#C9A96E]/20 text-7xl md:text-8xl absolute -top-4 -left-2 lg:static lg:mb-4 lg:block">
            0{index + 1}
          </span>

          {/* Subtitle */}
          <span className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase">
            {amenity.subtitle}
          </span>

          {/* Title */}
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-[#F5F0E8] mt-3 mb-6">
            {amenity.title}
          </h3>

          {/* Gold Line */}
          <div className="w-12 h-[1px] bg-[#C9A96E] mb-6" />

          {/* Description */}
          <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#6B6B6B] leading-relaxed mb-8">
            {amenity.description}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3">
            {amenity.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#C9A96E] rotate-45" />
                <span className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-xs">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Amenities() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="amenities" className="bg-[#0A0A0A]">
      {/* Section Header */}
      <div ref={headerRef} className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C9A96E]" />
            <span className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase">
              World-Class Amenities
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C9A96E]" />
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl lg:text-6xl text-[#F5F0E8] leading-[1.1] mb-6">
            Curated for the
            <br />
            <span className="italic text-[#C9A96E]">Extraordinary</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-sm max-w-lg mx-auto">
            Every amenity at Aurelius has been designed not merely to impress,
            but to transform your daily rituals into moments of pure indulgence.
          </p>
        </motion.div>
      </div>

      {/* Amenity Sections */}
      {amenities.map((amenity, index) => (
        <AmenitySection key={amenity.title} amenity={amenity} index={index} />
      ))}
    </section>
  );
}
