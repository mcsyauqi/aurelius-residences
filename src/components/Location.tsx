"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Landmark {
  name: string;
  distance: string;
  type: string;
}

const landmarks: Landmark[] = [
  { name: "Grand Indonesia Mall", distance: "3 min", type: "Shopping" },
  { name: "Plaza Indonesia", distance: "5 min", type: "Shopping" },
  { name: "Jakarta Stock Exchange", distance: "7 min", type: "Business" },
  { name: "Bundaran HI", distance: "4 min", type: "Landmark" },
  { name: "CGK International Airport", distance: "35 min", type: "Airport" },
  { name: "Jakarta Convention Center", distance: "8 min", type: "Events" },
  { name: "British International School", distance: "12 min", type: "Education" },
  { name: "Menteng Park", distance: "6 min", type: "Leisure" },
];

export default function Location() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="location"
      className="relative py-32 md:py-40 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background decorative grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Text & Landmarks */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-[#C9A96E]" />
                <span className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase">
                  Prime Location
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-[#F5F0E8] leading-[1.1] mb-6">
                The Heart of
                <br />
                Jakarta&apos;s{" "}
                <span className="italic text-[#C9A96E]">Golden Triangle</span>
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-sm leading-relaxed mb-12 max-w-md">
                Positioned at the nexus of Jakarta&apos;s most coveted
                addresses, Aurelius Residences offers unparalleled access to the
                city&apos;s finest dining, shopping, and cultural destinations.
              </p>
            </motion.div>

            {/* Landmark List */}
            <div className="space-y-0">
              {landmarks.map((landmark, index) => (
                <motion.div
                  key={landmark.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center justify-between py-4 border-b border-[#1F1F1F] group hover:border-[#C9A96E]/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    {/* Gold marker dot */}
                    <div className="w-2 h-2 bg-[#C9A96E] rotate-45 group-hover:scale-125 transition-transform" />
                    <div>
                      <span className="font-[family-name:var(--font-inter)] text-[#F5F0E8] text-sm group-hover:text-[#C9A96E] transition-colors">
                        {landmark.name}
                      </span>
                      <span className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-[10px] tracking-[0.1em] uppercase ml-3">
                        {landmark.type}
                      </span>
                    </div>
                  </div>
                  <span className="font-[family-name:var(--font-cormorant)] text-[#C9A96E] text-lg">
                    {landmark.distance}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Stylized Map Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-lg">
              {/* Concentric circles */}
              {[1, 2, 3, 4].map((ring) => (
                <div
                  key={ring}
                  className="absolute border border-[#C9A96E]/10 rounded-full"
                  style={{
                    width: `${ring * 25}%`,
                    height: `${ring * 25}%`,
                    top: `${50 - (ring * 25) / 2}%`,
                    left: `${50 - (ring * 25) / 2}%`,
                  }}
                />
              ))}

              {/* Center pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  <div className="w-4 h-4 bg-[#C9A96E] rotate-45" />
                  <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 w-4 h-4 bg-[#C9A96E] rotate-45"
                  />
                </div>
                <p className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.2em] uppercase mt-4 whitespace-nowrap text-center">
                  Aurelius
                </p>
              </div>

              {/* Scattered landmark markers */}
              {[
                { top: "20%", left: "30%", label: "Grand Indonesia" },
                { top: "15%", left: "65%", label: "Plaza Indonesia" },
                { top: "40%", left: "80%", label: "JSX" },
                { top: "35%", left: "15%", label: "Bundaran HI" },
                { top: "70%", left: "25%", label: "JCC" },
                { top: "75%", left: "70%", label: "BIS" },
              ].map((marker) => (
                <div
                  key={marker.label}
                  className="absolute"
                  style={{ top: marker.top, left: marker.left }}
                >
                  <div className="w-1.5 h-1.5 bg-[#6B6B6B] rotate-45" />
                  <span className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-[8px] tracking-wider uppercase mt-1 block whitespace-nowrap">
                    {marker.label}
                  </span>
                </div>
              ))}

              {/* Cross-hair lines */}
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#C9A96E]/5" />
              <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[#C9A96E]/5" />

              {/* Corner coordinates */}
              <span className="absolute top-0 left-0 font-[family-name:var(--font-inter)] text-[#6B6B6B]/30 text-[8px] tracking-wider">
                6.1754&deg;S
              </span>
              <span className="absolute top-0 right-0 font-[family-name:var(--font-inter)] text-[#6B6B6B]/30 text-[8px] tracking-wider">
                106.8272&deg;E
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom address bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-[#1F1F1F] flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-[#F5F0E8] text-lg">
              Jl. Jend. Sudirman Kav. 52-53
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-xs mt-1">
              SCBD, South Jakarta 12190, Indonesia
            </p>
          </div>
          <a
            href="#register"
            className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.2em] uppercase border-b border-[#C9A96E]/30 pb-0.5 hover:border-[#C9A96E] transition-colors"
          >
            Schedule a Visit &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
