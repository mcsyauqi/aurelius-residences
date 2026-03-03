'use client';

import { useState, useEffect } from 'react';

/* ─── Data ─── */

const navLinks = [
  { label: 'Residences', href: '#residences' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const residences = [
  {
    name: 'The Imperial Suite',
    size: '280 sqm',
    beds: '4 Bedrooms',
    description:
      'The crown jewel of Aurelius. A sprawling penthouse-level residence with panoramic views, private elevator foyer, and bespoke interiors crafted by Italian artisans.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    name: 'The Chancellor',
    size: '180 sqm',
    beds: '3 Bedrooms',
    description:
      'Commanding presence meets refined elegance. Expansive living spaces flow into a private terrace with unobstructed skyline views across Jakarta.',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
  },
  {
    name: 'The Diplomat',
    size: '120 sqm',
    beds: '2 Bedrooms',
    description:
      'Sophisticated urban living distilled to its purest form. Every square meter is meticulously designed for comfort, beauty, and intelligent functionality.',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
  },
];

const amenities = [
  {
    name: 'Infinity Pool',
    description: '25-meter rooftop pool merging with the Jakarta skyline.',
    icon: '\u2248', // ≈ wave-like symbol
  },
  {
    name: 'Private Cinema',
    description: 'Dolby Atmos theater with Italian leather recliners.',
    icon: '\u25B6', // ▶ play symbol
  },
  {
    name: 'Wine Cellar',
    description: 'Temperature-controlled vault housing 2,000+ rare vintages.',
    icon: '\u2662', // ♢ diamond
  },
  {
    name: 'Fitness Center',
    description: 'State-of-the-art equipment with personal training suites.',
    icon: '\u2606', // ☆ star
  },
  {
    name: 'Sky Lounge',
    description: 'Members-only lounge on the 42nd floor with panoramic views.',
    icon: '\u25C7', // ◇ diamond outline
  },
  {
    name: 'Concierge Service',
    description: '24/7 dedicated lifestyle management for every resident.',
    icon: '\u2302', // ⌂ house
  },
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    alt: 'Modern luxury house exterior',
    span: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    alt: 'Luxury kitchen with marble island',
    span: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    alt: 'City skyline at dusk',
    span: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    alt: 'Luxury bathroom with freestanding tub',
    span: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    alt: 'Elegant bedroom with warm lighting',
    span: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    alt: 'Modern apartment living room',
    span: false,
  },
];

const stats = [
  { value: '42', label: 'Floors' },
  { value: '168', label: 'Residences' },
  { value: '5', label: 'Penthouses' },
  { value: '1', label: 'Vision' },
];

/* ─── Component ─── */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="bg-[#0A0A0A] min-h-screen">

      {/* ══════════════════════════════════════════════════════════════════
          1. FIXED NAVIGATION
      ══════════════════════════════════════════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#C9A96E]/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a
              href="#"
              className="font-[family-name:var(--font-playfair)] text-[#F5F0EB] text-xl tracking-[0.3em] uppercase"
            >
              AURELIUS
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-inter)] text-[#A8A29E] hover:text-[#C9A96E] text-xs tracking-[0.15em] uppercase transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:inline-block px-6 py-2.5 border border-[#C9A96E] text-[#C9A96E] font-[family-name:var(--font-inter)] text-xs tracking-[0.15em] uppercase hover:bg-[#C9A96E] hover:text-[#0A0A0A] transition-all duration-300"
            >
              Schedule Visit
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[1px] bg-[#C9A96E] transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block w-6 h-[1px] bg-[#C9A96E] transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-[1px] bg-[#C9A96E] transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-[family-name:var(--font-playfair)] text-[#F5F0EB] text-2xl tracking-[0.2em] uppercase hover:text-[#C9A96E] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 border border-[#C9A96E] text-[#C9A96E] font-[family-name:var(--font-inter)] text-sm tracking-[0.15em] uppercase"
          >
            Schedule Visit
          </a>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          2. HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80"
            alt="Luxury residential exterior at golden hour"
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay - heavier at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 via-[#0A0A0A]/30 to-[#0A0A0A]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          {/* Main Title */}
          <h1 className="font-[family-name:var(--font-playfair)] text-[#F5F0EB] text-5xl md:text-7xl lg:text-8xl tracking-[0.3em] uppercase mb-2">
            AURELIUS
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-[#F5F0EB] text-sm md:text-base tracking-[0.5em] uppercase mb-8">
            RESIDENCES
          </p>

          {/* Gold Line */}
          <div className="w-20 h-[1px] bg-[#C9A96E] mb-8" />

          {/* Tagline */}
          <p className="font-[family-name:var(--font-playfair)] text-[#C9A96E] text-lg md:text-xl italic mb-12 max-w-lg">
            Where timeless elegance meets modern grandeur
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#residences"
              className="px-8 py-3.5 border border-[#C9A96E] text-[#C9A96E] font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase hover:bg-[#C9A96E]/10 transition-all duration-300"
            >
              Explore Residences
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 bg-[#C9A96E] text-[#0A0A0A] font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase hover:bg-[#D4B97E] transition-all duration-300"
            >
              Book Private Tour
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <span className="font-[family-name:var(--font-inter)] text-[#A8A29E] text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#C9A96E] to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. INTRODUCTION
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Text */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-[#C9A96E]" />
                <span className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase">
                  The Vision
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-[#F5F0EB] leading-[1.2] mb-8">
                Where Luxury Finds
                <br />
                <span className="italic text-[#C9A96E]">Its Address</span>
              </h2>

              <p className="font-[family-name:var(--font-inter)] text-[#A8A29E] text-sm md:text-base leading-relaxed mb-6">
                Aurelius Residences represents the pinnacle of residential
                architecture in Southeast Asia. Rising 42 stories above
                Jakarta&apos;s most coveted address, each residence is a
                masterpiece of space, light, and material crafted for the
                discerning few who understand that true luxury is not about
                excess, but the perfection of every detail.
              </p>

              <p className="font-[family-name:var(--font-inter)] text-[#A8A29E] text-sm leading-relaxed mb-10">
                Conceived by world-renowned architects and interior designers,
                every surface, every view, and every moment within Aurelius has
                been orchestrated to elevate the art of living.
              </p>

              {/* Gold Accent Line */}
              <div className="w-16 h-[1px] bg-[#C9A96E]" />
            </div>

            {/* Right: Image with gold border frame */}
            <div className="relative">
              <div className="relative p-3 border border-[#C9A96E]/20">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Luxury interior with marble countertops and warm lighting"
                  className="w-full h-auto aspect-[4/5] object-cover"
                />
              </div>
              {/* Offset gold corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-[#C9A96E]" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-[#C9A96E]" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. KEY NUMBERS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center py-8 md:py-0 ${
                  index < stats.length - 1
                    ? 'md:border-r md:border-[#C9A96E]/20'
                    : ''
                } ${
                  index < 2 ? 'border-b md:border-b-0 border-[#C9A96E]/20' : ''
                }`}
              >
                <span className="font-[family-name:var(--font-playfair)] text-[#C9A96E] text-4xl md:text-5xl lg:text-6xl block mb-2">
                  {stat.value}
                </span>
                <span className="font-[family-name:var(--font-inter)] text-[#F5F0EB] text-xs tracking-[0.2em] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. RESIDENCES
      ══════════════════════════════════════════════════════════════════ */}
      <section id="residences" className="py-24 lg:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C9A96E]" />
              <span className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase">
                The Collection
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C9A96E]" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-[#F5F0EB] leading-[1.2]">
              Exceptional <span className="italic text-[#C9A96E]">Residences</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {residences.map((residence) => (
              <div
                key={residence.name}
                className="group border border-[#1A1A1A] hover:border-[#C9A96E]/30 transition-colors duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={residence.image}
                    alt={residence.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#F5F0EB] mb-2">
                    {residence.name}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-xs tracking-[0.1em] mb-4">
                    {residence.size} &middot; {residence.beds}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-[#A8A29E] text-sm leading-relaxed mb-6">
                    {residence.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-[#C9A96E] text-xs tracking-[0.15em] uppercase hover:gap-3 transition-all duration-300"
                  >
                    View Details
                    <span className="text-sm">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. AMENITIES
      ══════════════════════════════════════════════════════════════════ */}
      <section id="amenities" className="py-24 lg:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C9A96E]" />
              <span className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase">
                World-Class Living
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C9A96E]" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-[#F5F0EB] leading-[1.2]">
              Curated <span className="italic text-[#C9A96E]">Amenities</span>
            </h2>
          </div>

          {/* 2x3 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity) => (
              <div
                key={amenity.name}
                className="bg-[#111111] border border-[#1A1A1A] p-8 hover:border-[#C9A96E]/30 transition-colors duration-500"
              >
                {/* Icon */}
                <div className="w-12 h-12 border border-[#C9A96E]/40 flex items-center justify-center mb-6">
                  <span className="text-[#C9A96E] text-xl">{amenity.icon}</span>
                </div>

                {/* Name */}
                <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[#F5F0EB] mb-3">
                  {amenity.name}
                </h3>

                {/* Description */}
                <p className="font-[family-name:var(--font-inter)] text-[#A8A29E] text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          7. GALLERY
      ══════════════════════════════════════════════════════════════════ */}
      <section id="gallery" className="py-24 lg:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C9A96E]" />
              <span className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase">
                Visual Journey
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C9A96E]" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-[#F5F0EB] leading-[1.2]">
              Gallery
            </h2>
          </div>

          {/* Masonry-like Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden cursor-pointer ${
                  img.span ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-square'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/60 transition-all duration-500 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-inter)] text-[#F5F0EB] text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          8. CONTACT CTA
      ══════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 lg:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C9A96E]" />
              <span className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase">
                Get in Touch
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C9A96E]" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-[#F5F0EB] leading-[1.2] mb-4">
              Experience <span className="italic text-[#C9A96E]">Aurelius</span>
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-[#A8A29E] text-sm max-w-lg mx-auto">
              Schedule a private tour and discover why Aurelius is Jakarta&apos;s
              most sought-after address.
            </p>
          </div>

          {/* Two Columns: Info + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact Info */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                {/* Address */}
                <div>
                  <h3 className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase mb-3">
                    Sales Gallery
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[#F5F0EB] text-sm leading-relaxed">
                    Jl. Jend. Sudirman Kav. 52-53
                    <br />
                    SCBD, South Jakarta 12190
                    <br />
                    Indonesia
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase mb-3">
                    Phone
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[#F5F0EB] text-sm">
                    +62 21 5790 8888
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase mb-3">
                    Email
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[#F5F0EB] text-sm">
                    private@aurelius-residences.com
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase mb-3">
                    Viewing Hours
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[#F5F0EB] text-sm">
                    By Appointment Only
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {!formSubmitted ? (
                <form
                  onSubmit={handleFormSubmit}
                  className="bg-[#111111] border border-[#1A1A1A] p-8 md:p-10"
                >
                  {/* Name */}
                  <div className="mb-6">
                    <label className="font-[family-name:var(--font-inter)] text-[#A8A29E] text-[10px] tracking-[0.2em] uppercase block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full bg-transparent border-b border-[#1A1A1A] focus:border-[#C9A96E] text-[#F5F0EB] font-[family-name:var(--font-inter)] text-sm py-3 outline-none transition-colors placeholder:text-[#A8A29E]/40"
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label className="font-[family-name:var(--font-inter)] text-[#A8A29E] text-[10px] tracking-[0.2em] uppercase block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-transparent border-b border-[#1A1A1A] focus:border-[#C9A96E] text-[#F5F0EB] font-[family-name:var(--font-inter)] text-sm py-3 outline-none transition-colors placeholder:text-[#A8A29E]/40"
                    />
                  </div>

                  {/* Phone */}
                  <div className="mb-6">
                    <label className="font-[family-name:var(--font-inter)] text-[#A8A29E] text-[10px] tracking-[0.2em] uppercase block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+62 812 3456 7890"
                      className="w-full bg-transparent border-b border-[#1A1A1A] focus:border-[#C9A96E] text-[#F5F0EB] font-[family-name:var(--font-inter)] text-sm py-3 outline-none transition-colors placeholder:text-[#A8A29E]/40"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-10">
                    <label className="font-[family-name:var(--font-inter)] text-[#A8A29E] text-[10px] tracking-[0.2em] uppercase block mb-2">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your ideal residence..."
                      className="w-full bg-transparent border-b border-[#1A1A1A] focus:border-[#C9A96E] text-[#F5F0EB] font-[family-name:var(--font-inter)] text-sm py-3 outline-none transition-colors resize-none placeholder:text-[#A8A29E]/40"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C9A96E] text-[#0A0A0A] font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase hover:bg-[#D4B97E] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,110,0.3)]"
                  >
                    Send Inquiry
                  </button>

                  <p className="font-[family-name:var(--font-inter)] text-[#A8A29E]/40 text-[10px] mt-4 text-center">
                    We respect your privacy. Your information will never be
                    shared.
                  </p>
                </form>
              ) : (
                <div className="bg-[#111111] border border-[#C9A96E]/30 p-8 md:p-10 flex flex-col items-center justify-center min-h-[460px] text-center">
                  <div className="w-12 h-12 border border-[#C9A96E] rotate-45 flex items-center justify-center mb-8">
                    <span className="text-[#C9A96E] -rotate-45 text-lg">
                      &#10003;
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#F5F0EB] mb-4">
                    Thank You
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[#A8A29E] text-sm max-w-sm leading-relaxed">
                    Your inquiry has been received. Our team will contact you
                    within 24 hours to arrange your private viewing.
                  </p>
                  <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mt-8" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          9. FOOTER
      ══════════════════════════════════════════════════════════════════ */}
      <footer className="bg-[#050505] border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Column 1: Brand */}
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-[#F5F0EB] text-lg tracking-[0.2em] uppercase mb-4">
                Aurelius
              </h3>
              <p className="font-[family-name:var(--font-playfair)] text-[#C9A96E] text-sm italic mb-4">
                Where timeless elegance meets modern grandeur
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[#A8A29E]/60 text-xs leading-relaxed">
                An ultra-luxury residential tower offering 168 exquisite
                residences in the heart of Jakarta.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase mb-6">
                Quick Links
              </h3>
              <div className="space-y-3">
                {['Residences', 'Amenities', 'Gallery', 'Contact', 'Privacy Policy', 'Terms'].map(
                  (link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block font-[family-name:var(--font-inter)] text-[#A8A29E]/60 text-xs hover:text-[#C9A96E] transition-colors duration-300"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="font-[family-name:var(--font-inter)] text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase mb-6">
                Contact
              </h3>
              <div className="space-y-3">
                <p className="font-[family-name:var(--font-inter)] text-[#A8A29E]/60 text-xs">
                  Jl. Jend. Sudirman Kav. 52-53
                </p>
                <p className="font-[family-name:var(--font-inter)] text-[#A8A29E]/60 text-xs">
                  SCBD, South Jakarta 12190
                </p>
                <p className="font-[family-name:var(--font-inter)] text-[#A8A29E]/60 text-xs">
                  +62 21 5790 8888
                </p>
                <p className="font-[family-name:var(--font-inter)] text-[#A8A29E]/60 text-xs">
                  private@aurelius-residences.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1A1A1A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-[family-name:var(--font-inter)] text-[#A8A29E]/40 text-[10px] tracking-[0.1em]">
                &copy; 2026 Aurelius Residences. All rights reserved.
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[#A8A29E]/40 text-[10px] tracking-[0.1em]">
                Made with &#9829; by{' '}
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
          </div>
        </div>
      </footer>
    </main>
  );
}
