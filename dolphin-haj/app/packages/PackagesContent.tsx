"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Landmark, Home, ChevronRight, Check, Send } from "lucide-react";
import { packages, siteConfig } from "@/lib/constants";
import { generateWhatsAppUrl } from "@/lib/utils";
import { CTABanner } from "@/components/sections/CTABanner";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function PackagesContent() {
  return (
    <>
      {/* Page Hero */}
      <section className="gradient-navy pt-32 pb-16 text-center relative overflow-hidden">
        <div className="geometric-pattern-dark" />
        <div className="max-w-4xl mx-auto px-5 relative z-10">
          <ScrollReveal>
            <div className="section-tag mx-auto mb-4 w-fit bg-white/10 text-white/80 border-white/15">
              <Landmark className="w-3.5 h-3.5" />
              Sacred Journeys
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              Our{" "}
              <span style={{ background: "linear-gradient(135deg, #D4AF37, #E8C547)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Packages
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-6">
              Carefully curated Hajj and Umrah packages with the best hotels, flights, and comprehensive spiritual guidance.
            </p>
          </ScrollReveal>
          <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/40">
            <Link href="/" className="hover:text-white transition-colors no-underline text-white/40">
              <Home className="w-3.5 h-3.5 inline mr-1" />Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gold">Packages</span>
          </nav>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {packages.map((pkg) => {
              const waMsg = `Assalamu Alaikum! I'm interested in the ${pkg.title} (${pkg.priceLabel}/person). Please share more details. Thank you!`;
              const waUrl = generateWhatsAppUrl(siteConfig.whatsapp, waMsg);

              return (
                <motion.div
                  key={pkg.id}
                  variants={fadeUp}
                  className={`relative bg-white rounded-2xl border overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                    pkg.featured
                      ? "border-gold/30 shadow-gold ring-1 ring-gold/10"
                      : "border-border shadow-sm"
                  }`}
                >
                  {/* Popular badge */}
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-gold-dark to-gold text-navy text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}

                  {/* Image */}
                  <Link href={`/packages/${pkg.id}`} className="block relative h-56 overflow-hidden bg-navy/5 no-underline">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${pkg.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
                        {pkg.category}
                      </span>
                    </div>
                  </Link>

                  {/* Body */}
                  <div className="p-6">
                    <span className={`badge ${pkg.tierBadge} mb-3`}>{pkg.tier}</span>
                    <h3 className="text-xl font-heading font-bold mb-2">
                      <Link href={`/packages/${pkg.id}`} className="text-navy hover:text-emerald transition-colors no-underline">
                        {pkg.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {pkg.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {pkg.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm">
                          <Check className="w-3.5 h-3.5 text-emerald flex-shrink-0" />
                          <span className="text-navy/70">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-end justify-between pt-4 border-t border-border/50">
                      <div>
                        <div className="text-xs text-muted font-medium">Starting from</div>
                        <div className="text-xl font-bold font-heading text-navy">
                          {pkg.priceLabel}{" "}
                          <span className="text-xs font-normal text-muted">{pkg.priceSuffix}</span>
                        </div>
                      </div>
                      <a
                        href={waUrl}
                        className={`btn btn-sm ${pkg.featured ? "btn-gold" : "btn-primary"}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Send className="w-3.5 h-3.5" /> Enquire
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
