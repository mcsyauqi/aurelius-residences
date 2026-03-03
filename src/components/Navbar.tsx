"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Residences", href: "#residences" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Architecture", href: "#architecture" },
  { label: "Register", href: "#register" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#C9A96E]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#C9A96E] rotate-45 flex items-center justify-center">
                <span className="font-[family-name:var(--font-playfair)] text-[#C9A96E] text-sm -rotate-45 font-semibold">
                  A
                </span>
              </div>
              <span className="font-[family-name:var(--font-playfair)] text-[#F5F0E8] text-lg tracking-[0.2em] uppercase">
                Aurelius
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-inter)] text-[#6B6B6B] hover:text-[#C9A96E] text-xs tracking-[0.15em] uppercase transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[1px] bg-[#C9A96E] transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-[1px] bg-[#C9A96E] transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-[1px] bg-[#C9A96E] transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="font-[family-name:var(--font-playfair)] text-[#F5F0E8] text-2xl tracking-[0.2em] uppercase hover:text-[#C9A96E] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
