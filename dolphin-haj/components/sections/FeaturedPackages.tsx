"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Check, Send } from "lucide-react";
import Link from "next/link";
import { packages, siteConfig } from "@/lib/constants";
import { generateWhatsAppUrl } from "@/lib/utils";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function FeaturedPackages() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      className="py-20 md:py-28"
      id="packages"
      aria-label="Featured packages"
    >
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag gold mx-auto mb-4 w-fit">
            <Star className="w-3.5 h-3.5" />
            Featured Packages
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Choose Your <span className="text-gradient">Sacred Journey</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Browse our most popular Umrah packages with flexible options for
            every budget and duration.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {packages.map((pkg) => {
            const waMsg = `Assalamu Alaikum! I'm interested in the ${pkg.title} (${pkg.priceLabel}/person). Please share more details. Thank you!`;
            const waUrl = generateWhatsAppUrl(siteConfig.whatsapp, waMsg);

            return (
              <motion.div
                key={pkg.id}
                variants={fadeUp}
                className={`relative bg-white rounded-[2rem] overflow-hidden group transition-all duration-700 hover:-translate-y-3 ${
                  pkg.featured
                    ? "shadow-glow ring-1 ring-gold/10"
                    : "shadow-lg hover:shadow-xl ring-1 ring-border"
                }`}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-gold-dark to-gold text-navy text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                {/* Image */}
                <Link href={`/packages/${pkg.id}`} className="block relative h-64 overflow-hidden bg-navy/5 no-underline">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{ backgroundImage: `url(${pkg.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-5">
                    <span className="px-4 py-1.5 rounded-full glass-panel text-navy text-xs font-semibold tracking-wide shadow-sm">
                      {pkg.category}
                    </span>
                  </div>
                </Link>

                {/* Body */}
                <div className="p-8">
                  <span className={`badge ${pkg.tierBadge} mb-4`}>
                    {pkg.tier}
                  </span>
                  <h3 className="text-2xl font-heading font-bold mb-3">
                    <Link href={`/packages/${pkg.id}`} className="text-navy hover:text-gold transition-colors no-underline">
                      {pkg.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {pkg.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald flex-shrink-0" />
                        <span className="text-navy/70">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-end justify-between pt-6 border-t border-border/50">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-muted font-bold mb-1">
                        Starting from
                      </div>
                      <div className="text-2xl font-bold font-heading text-navy">
                        {pkg.priceLabel}{" "}
                        <span className="text-xs font-normal text-muted tracking-normal">
                          {pkg.priceSuffix}
                        </span>
                      </div>
                    </div>
                    <a
                      href={waUrl}
                      className={`btn btn-sm ${
                        pkg.featured ? "btn-gold" : "btn-outline"
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All */}
        <div className="text-center mt-10">
          <Link href="/packages" className="btn btn-outline">
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
