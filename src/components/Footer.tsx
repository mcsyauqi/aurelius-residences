"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo & Address */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-[#C9A96E] rotate-45 flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-[#C9A96E] text-sm -rotate-45 font-semibold">
                  A
                </span>
              </div>
              <span className="font-[family-name:var(--font-playfair)] text-[#F5F0E8] text-lg tracking-[0.2em] uppercase">
                Aurelius
              </span>
            </div>
            <p className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-xs leading-relaxed">
              Jl. Jend. Sudirman Kav. 52-53
              <br />
              SCBD, South Jakarta 12190
              <br />
              Indonesia
            </p>
          </div>

          {/* Contact */}
          <div className="text-left md:text-right">
            <p className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-xs mb-1">
              <span className="text-[#C9A96E]">T</span> &nbsp;+62 21 5790 8888
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-xs mb-1">
              <span className="text-[#C9A96E]">E</span>{" "}
              &nbsp;private@aurelius-residences.com
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-xs">
              <span className="text-[#C9A96E]">W</span>{" "}
              &nbsp;aurelius-residences.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1F1F1F] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-inter)] text-[#6B6B6B]/50 text-[10px] tracking-[0.1em]">
            &copy; 2026 Aurelius Residences. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-[family-name:var(--font-inter)] text-[#6B6B6B]/50 text-[10px] tracking-[0.1em] uppercase hover:text-[#C9A96E] transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-[family-name:var(--font-inter)] text-[#6B6B6B]/50 text-[10px] tracking-[0.1em] uppercase hover:text-[#C9A96E] transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="font-[family-name:var(--font-inter)] text-[#6B6B6B]/50 text-[10px] tracking-[0.1em] uppercase hover:text-[#C9A96E] transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Grand Aurelius text at the very bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-[#1F1F1F] overflow-hidden"
      >
        <p className="font-[family-name:var(--font-playfair)] text-[#1F1F1F] text-[8vw] md:text-[6vw] leading-none text-center py-4 select-none">
          AURELIUS RESIDENCES
        </p>
      </motion.div>
    </footer>
  );
}
