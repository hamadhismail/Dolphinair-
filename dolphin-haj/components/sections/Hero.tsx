"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Star,
  Landmark,
  Send,
  MessageCircle,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import {
  heroBadgeReveal,
  heroTextReveal,
  heroButtonReveal,
  fadeUp,
} from "@/lib/animations";
import { siteConfig } from "@/lib/constants";
import { generateWhatsAppUrl } from "@/lib/utils";

export function Hero() {
  const waUrl = generateWhatsAppUrl(
    siteConfig.whatsapp,
    "Assalamu Alaikum! I found Dolphin Haj website and would like to enquire about your packages."
  );

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
      aria-label="Hero section"
    >
      {/* Background & Overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-kaaba.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy/85 to-navy-dark/95" />
      <div className="geometric-pattern-dark" />

      {/* Floating particles effect (CSS) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          variants={heroBadgeReveal}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-sm font-medium mb-8"
        >
          <Star className="w-4 h-4 text-gold" />
          Government Approved Haj Group Organiser · Est. 1995
        </motion.div>

        {/* Arabic Calligraphy / Accent */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-6 opacity-80">
          <span className="font-arabic text-4xl md:text-5xl text-gold-light drop-shadow-lg">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white mb-6 leading-[1.1] tracking-tight"
        >
          Your Sacred Journey <br className="hidden md:block" />
          <span className="text-gold-gradient drop-shadow-xl relative inline-block mt-2">
            Begins Here
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light tracking-wide leading-relaxed"
        >
          Experience the ultimate spiritual journey with Tamil Nadu's most trusted
          and luxurious Hajj & Umrah organizer. Since 1995.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <motion.div custom={0} variants={heroButtonReveal} initial="hidden" animate="visible">
            <Link href="/packages" className="btn btn-gold btn-lg">
              <Landmark className="w-4 h-4" />
              View Packages
            </Link>
          </motion.div>
          <motion.div custom={1} variants={heroButtonReveal} initial="hidden" animate="visible">
            <Link href="/contact" className="btn btn-outline-white btn-lg">
              <Send className="w-4 h-4" />
              Get Free Quote
            </Link>
          </motion.div>
          <motion.div custom={2} variants={heroButtonReveal} initial="hidden" animate="visible">
            <a
              href={waUrl}
              className="btn btn-wa btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-white/60 font-medium tracking-wide"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
            Govt. Approved
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
            Premium Hotels
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
            Expert Guidance
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
}
