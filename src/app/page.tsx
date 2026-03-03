"use client";

import { useState } from "react";

/* ─── Data ─── */

const navLinks = [
  { label: "Residences", href: "#residences" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const residences = [
  {
    name: "Sovereign Suite",
    size: "350 sqm",
    sqm: 350,
    bedrooms: "4 Bedrooms",
    bathrooms: "5 Bathrooms",
    price: "From IDR 45B",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    description:
      "A refined pied-\u00E0-terre for the cosmopolitan individual. Smart living distilled to its purest form.",
  },
];

const amenities = [
  {
    title: "Infinity Pool",
    subtitle: "52nd Floor Sky Deck",
    description:
      "A 25-meter infinity pool seemingly merging with the Jakarta skyline. Open from dawn to midnight, with private cabanas and a poolside bar.",
    features: ["25m Infinity Edge", "Heated Year-Round", "Private Cabanas", "Sky Bar"],
  },
  {
    title: "Private Cinema",
    subtitle: "Level 3 Entertainment Wing",
    description:
      "A 24-seat Dolby Atmos cinema with Italian leather recliners, available for private screenings with gourmet dining.",
    features: ["Dolby Atmos", "4K Laser", "24 Recliners", "Private Booking"],
  },
  {
    title: "Wellness Spa",
    subtitle: "Level 4 Serenity Wing",
    description:
      "A holistic wellness sanctuary featuring a vitality pool, Finnish sauna, steam room, and treatment suites.",
    features: ["Vitality Pool", "Finnish Sauna", "Treatment Suites", "Yoga Studio"],
  },
  {
    title: "Sky Lounge",
    subtitle: "55th Floor Penthouse Level",
    description:
      "An exclusive members-only lounge with a curated wine cellar, private dining rooms, and a cigar terrace.",
    features: ["Wine Cellar", "Private Dining", "Cigar Terrace", "Panoramic Views"],
  },
  {
    title: "Concierge",
    subtitle: "24/7 Personal Service",
    description:
      "Your dedicated lifestyle team anticipates every need — from restaurant reservations to private jet charters.",
    features: ["24/7 Available", "Private Chef", "Travel Desk", "Valet Service"],
  },
];

const unitTypes = [
  "Sovereign Suite \u2014 350 sqm",
  "Ambassador \u2014 220 sqm",
  "Diplomat \u2014 150 sqm",
  "Attach\u00E9 \u2014 85 sqm",
];

/* ─── Page Component ─── */

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#0A0A0A]">
      {/* ═══════════════════════════════════════════════════════════════
          NAVBAR
      ═══════════════════════════════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#C9A96E]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-[family-name:var(--font-playfair)] text-[#F5F0E8] text-2xl tracking-[0.2em] uppercase hover:text-[#C9A96E] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="City skyline at night with illuminated skyscrapers"
            className="w-full h-full object-cover ken-burns"
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/40 to-[#0A0A0A]" />
          {/* Side vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          {/* Small decorative line */}
          <div className="gold-line mb-8" />

          {/* Subtitle */}
          <p className="font-[family-name:var(--font-cormorant)] text-[#C9A96E] text-sm md:text-base tracking-[0.4em] uppercase mb-6">
            Jakarta&apos;s Most Prestigious Address
          </p>

          {/* Main Title */}
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-8xl text-[#F5F0E8] leading-[1.1] mb-6 max-w-4xl">
            Where Legacy
            <br />
            <span className="italic">Meets</span>{" "}
            <span className="gold-gradient-text">Luxury</span>
          </h1>

          {/* Description */}
          <p className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-sm md:text-base max-w-lg leading-relaxed mb-12">
            A limited collection of 120 residences rising 58 stories above
            Jakarta&apos;s golden triangle, designed for those who define excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
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
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <span className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-[10px] tracking-[0.3em] uppercase">
            Scroll to discover
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#C9A96E] to-transparent animate-pulse-slow" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          INTRODUCTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Text Content */}
            <div>
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
                {[
                  { value: "58", label: "Stories" },
                  { value: "120", label: "Residences" },
                  { value: "4", label: "Collections" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="font-[family-name:var(--font-playfair)] text-3xl text-[#C9A96E]">
                      {stat.value}
                    </span>
                    <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#6B6B6B] mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                  alt="Luxury modern interior with marble and gold accents"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
              </div>

              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A96E]/20 -z-10" />

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#0A0A0A] border border-[#C9A96E]/30 px-6 py-4">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          RESIDENCES
      ═══════════════════════════════════════════════════════════════ */}
      <section id="residences" className="relative py-20 lg:py-28 bg-[#0A0A0A] overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #C9A96E 0, #C9A96E 1px, transparent 0, transparent 50%)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
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
          </div>

          {/* Residence Cards - Grid layout */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {residences.map((residence) => (
              <div key={residence.name} className="group">
                <div className="relative overflow-hidden bg-[#111111]">
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={residence.image}
                      alt={residence.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-[#F5F0E8] mb-2">
                      {residence.name}
                    </h3>

                    <p className="font-[family-name:var(--font-cormorant)] text-[#6B6B6B] text-sm leading-relaxed mb-3 line-clamp-2">
                      {residence.description}
                    </p>

                    {/* Details */}
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-[10px]">
                        {residence.bedrooms}
                      </span>
                      <span className="w-[1px] h-3 bg-[#C9A96E]/30" />
                      <span className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-[10px]">
                        {residence.bathrooms}
                      </span>
                      <span className="w-[1px] h-3 bg-[#C9A96E]/30" />
                      <span className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-[10px]">
                        {residence.sqm} m&sup2;
                      </span>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between">
                      <span className="font-[family-name:var(--font-playfair)] text-[#C9A96E] text-base">
                        {residence.price}
                      </span>
                      <a
                        href="#contact"
                        className="font-[family-name:var(--font-inter)] text-[#F5F0E8] text-[10px] tracking-[0.2em] uppercase border-b border-[#C9A96E]/30 pb-0.5 hover:border-[#C9A96E] transition-colors"
                      >
                        Inquire
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          AMENITIES
      ═══════════════════════════════════════════════════════════════ */}
      <section id="amenities" className="bg-[#0A0A0A]">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="text-center">
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
          </div>
        </div>

        {/* Amenity Cards - alternating grid layout */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 space-y-16">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Number + Content */}
              <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                {/* Number */}
                <span className="font-[family-name:var(--font-playfair)] text-[#C9A96E]/20 text-6xl md:text-7xl block mb-4">
                  0{index + 1}
                </span>

                {/* Subtitle */}
                <span className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase">
                  {amenity.subtitle}
                </span>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#F5F0E8] mt-3 mb-6">
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
                      <div className="w-1.5 h-1.5 bg-[#C9A96E] rotate-45 flex-shrink-0" />
                      <span className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-xs">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative card placeholder (visual element) */}
              <div className={`relative ${index % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                <div className="bg-[#111111] border border-[#1F1F1F] p-8 md:p-12 flex flex-col items-center justify-center min-h-[300px]">
                  <span className="font-[family-name:var(--font-playfair)] text-[#C9A96E]/15 text-8xl md:text-9xl">
                    0{index + 1}
                  </span>
                  <span className="font-[family-name:var(--font-cormorant)] text-[#6B6B6B] text-lg italic mt-4">
                    {amenity.title}
                  </span>
                  <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent mt-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          GALLERY / QUOTE SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section id="gallery" className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
        {/* Full Width Image */}
        <div className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80"
              alt="Modern glass tower architecture"
              className="w-full h-full object-cover ken-burns"
            />
            {/* Heavy dark overlay for text readability */}
            <div className="absolute inset-0 bg-[#0A0A0A]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
          </div>

          {/* Centered Quote Content */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center px-6 max-w-4xl">
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
            </div>
          </div>
        </div>

        {/* Architecture Details Bar */}
        <div className="bg-[#111111] border-t border-b border-[#1F1F1F]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1F1F1F]">
              {[
                { label: "Facade Material", value: "Low-E Glass & Titanium" },
                { label: "Structural System", value: "Reinforced Core Wall" },
                { label: "Seismic Rating", value: "Zone IV Compliant" },
                { label: "Sustainability", value: "LEED Gold Certified" },
              ].map((item) => (
                <div key={item.label} className="py-8 px-6">
                  <p className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-[10px] tracking-[0.2em] uppercase mb-2">
                    {item.label}
                  </p>
                  <p className="font-[family-name:var(--font-cormorant)] text-[#F5F0E8] text-lg">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          IMAGE GALLERY ROW
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
                alt: "Luxury pool area",
                label: "Sky Pool",
              },
              {
                src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
                alt: "Grand lobby interior",
                label: "Grand Lobby",
              },
              {
                src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
                alt: "Luxury bedroom suite",
                label: "Master Suite",
              },
            ].map((img) => (
              <div key={img.label} className="group relative aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CONTACT / REGISTRATION
      ═══════════════════════════════════════════════════════════════ */}
      <section id="contact" className="relative py-20 lg:py-28 bg-[#0A0A0A] overflow-hidden">
        {/* Decorative gold corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-[#C9A96E]/10" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-[#C9A96E]/10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Text Content */}
            <div className="flex flex-col justify-center">
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
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#C9A96E] rotate-45 mt-1.5 flex-shrink-0" />
                    <span className="font-[family-name:var(--font-inter)] text-[#6B6B6B] text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div>
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
                <div className="bg-[#111111] border border-[#C9A96E]/30 p-8 md:p-10 flex flex-col items-center justify-center min-h-[500px] text-center">
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
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════════ */}
      <footer className="bg-[#0A0A0A] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
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
        <div className="border-t border-[#1F1F1F] overflow-hidden">
          <p className="font-[family-name:var(--font-playfair)] text-[#1F1F1F] text-[8vw] md:text-[6vw] leading-none text-center py-4 select-none">
            AURELIUS RESIDENCES
          </p>
        </div>

        {/* Creativism credit */}
        <div className="border-t border-[#1F1F1F] py-4">
          <p className="text-center font-[family-name:var(--font-inter)] text-[#6B6B6B]/40 text-[10px] tracking-[0.1em]">
            Made with &#9829; by{" "}
            <a
              href="https://creativism.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A96E]/50 hover:text-[#C9A96E] transition-colors"
            >
              Creativism
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
