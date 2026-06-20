"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Star, Landmark, Send, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { generateWhatsAppUrl } from "@/lib/utils";

export function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const waUrl = generateWhatsAppUrl(
    siteConfig.whatsapp,
    "Assalamu Alaikum! I would like to begin my sacred journey. Please share details."
  );

  return (
    <section
      className="py-20 md:py-28 gradient-navy relative overflow-hidden text-center"
      id="cta"
      aria-label="Call to action"
    >
      <div className="geometric-pattern-dark" />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <motion.div
        ref={ref}
        className="max-w-3xl mx-auto px-5 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="section-tag gold mx-auto mb-6 w-fit bg-white/10 border-white/15">
          <Star className="w-3.5 h-3.5" />
          Begin Your Journey
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-5">
          Start Your Sacred Journey Today
        </h2>

        <p className="text-white/55 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Join thousands of pilgrims who have trusted Dolphin Haj for their
          Hajj, Umrah and travel needs. Let us make your spiritual journey truly
          unforgettable.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/packages" className="btn btn-gold btn-lg">
            <Landmark className="w-4 h-4" />
            View All Packages
          </Link>
          <Link href="/contact" className="btn btn-outline-white btn-lg">
            <Send className="w-4 h-4" />
            Get Free Quote
          </Link>
          <a
            href={waUrl}
            className="btn btn-wa btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
