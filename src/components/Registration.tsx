"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const unitTypes = [
  "Sovereign Suite — 350 sqm",
  "Ambassador — 220 sqm",
  "Diplomat — 150 sqm",
  "Attach\u00E9 — 85 sqm",
];

export default function Registration() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      id="register"
      className="relative py-32 md:py-40 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Decorative gold corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-[#C9A96E]/10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-[#C9A96E]/10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#C9A96E]" />
              <span className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase">
                Private Registration
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-[#F5F0E8] leading-[1.1] mb-6">
              Begin Your
              <br />
              <span className="italic text-[#C9A96E]">Aurelius</span> Journey
            </h2>

            <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#6B6B6B] leading-relaxed mb-8 max-w-md">
              Register your interest for priority access to floor plans,
              pricing, and exclusive private viewings. Our dedicated sales
              team will contact you within 24 hours.
            </p>

            {/* Trust indicators */}
            <div className="space-y-4">
              {[
                "Priority access to unreleased floor plans",
                "Exclusive invitation to private showcase events",
                "Direct line to your personal sales consultant",
                "Early-bird pricing for founding residents",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 bg-[#C9A96E] rotate-45 mt-1.5 flex-shrink-0" />
                  <span className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-sm">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="bg-[#111111] border border-[#1F1F1F] p-8 md:p-10"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#F5F0E8] mb-8">
                  Request Private Viewing
                </h3>

                {/* Name */}
                <div className="mb-6">
                  <label className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-[10px] tracking-[0.2em] uppercase block mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full bg-transparent border-b border-[#1F1F1F] focus:border-[#C9A96E] text-[#F5F0E8] font-[family-name:var(--font-inter)] text-sm py-3 outline-none transition-colors placeholder:text-[#6B6B6B]/50"
                  />
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-[10px] tracking-[0.2em] uppercase block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-[#1F1F1F] focus:border-[#C9A96E] text-[#F5F0E8] font-[family-name:var(--font-inter)] text-sm py-3 outline-none transition-colors placeholder:text-[#6B6B6B]/50"
                  />
                </div>

                {/* Phone */}
                <div className="mb-6">
                  <label className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-[10px] tracking-[0.2em] uppercase block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+62 812 3456 7890"
                    className="w-full bg-transparent border-b border-[#1F1F1F] focus:border-[#C9A96E] text-[#F5F0E8] font-[family-name:var(--font-inter)] text-sm py-3 outline-none transition-colors placeholder:text-[#6B6B6B]/50"
                  />
                </div>

                {/* Unit Type */}
                <div className="mb-10">
                  <label className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-[10px] tracking-[0.2em] uppercase block mb-2">
                    Preferred Residence
                  </label>
                  <select
                    required
                    defaultValue=""
                    className="w-full bg-transparent border-b border-[#1F1F1F] focus:border-[#C9A96E] text-[#F5F0E8] font-[family-name:var(--font-inter)] text-sm py-3 outline-none transition-colors appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L1 3h10z' fill='%23C9A96E'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 0 center",
                    }}
                  >
                    <option value="" disabled className="bg-[#111111] text-[#6B6B6B]">
                      Select your preferred residence
                    </option>
                    {unitTypes.map((unit) => (
                      <option key={unit} value={unit} className="bg-[#111111]">
                        {unit}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#C9A96E] to-[#A68B5B] text-[#0A0A0A] font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase hover:from-[#D4B87A] hover:to-[#C9A96E] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,110,0.3)]"
                >
                  Request Private Viewing
                </button>

                <p className="font-[family-name:var(--font-inter)] text-[#6B6B6B]/50 text-[10px] mt-4 text-center">
                  By submitting, you agree to our privacy policy.
                  Your information will never be shared.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#111111] border border-[#C9A96E]/30 p-8 md:p-10 flex flex-col items-center justify-center min-h-[500px] text-center"
              >
                <div className="w-12 h-12 border border-[#C9A96E] rotate-45 flex items-center justify-center mb-8">
                  <span className="text-[#C9A96E] -rotate-45 text-lg">
                    &#10003;
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#F5F0E8] mb-4">
                  Thank You
                </h3>
                <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#6B6B6B] max-w-sm">
                  Your request has been received. A member of our exclusive
                  sales team will contact you within 24 hours to arrange your
                  private viewing.
                </p>
                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mt-8" />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
