"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  ChevronRight,
  CheckCircle,
  MessageCircle,
  Phone,
  Send,
  CalendarDays,
  Hotel,
  Plane,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { generateWhatsAppUrl } from "@/lib/utils";
import { CTABanner } from "@/components/sections/CTABanner";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { fadeUp, fadeLeft, fadeRight } from "@/lib/animations";

type Package = {
  id: string;
  title: string;
  category: string;
  tier: string;
  tierBadge: string;
  priceLabel: string;
  priceSuffix: string;
  duration: string;
  description: string;
  features: string[];
  image: string;
};

export function PackageDetailContent({ pkg }: { pkg: Package }) {
  const waMsg = `Assalamu Alaikum! I'm interested in booking the ${pkg.title} (${pkg.priceLabel}/person). Please share the complete itinerary and departure dates.`;
  const waUrl = generateWhatsAppUrl(siteConfig.whatsapp, waMsg);

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pkg.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/80 to-navy-dark/90" />
        <div className="geometric-pattern-dark" />

        <div className="max-w-4xl mx-auto px-5 relative z-10 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold">
                {pkg.category}
              </span>
              <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${pkg.tierBadge.replace("badge-", "bg-white/10 text-")}`}>
                {pkg.tier} Tier
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              {pkg.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8 font-light">
              {pkg.duration} Spiritual Journey
            </p>
          </ScrollReveal>
          <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/40">
            <Link href="/" className="hover:text-white transition-colors no-underline text-white/40">
              <Home className="w-3.5 h-3.5 inline mr-1" />Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/packages" className="hover:text-white transition-colors no-underline text-white/40">
              Packages
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gold">{pkg.title}</span>
          </nav>
        </div>
      </section>

      {/* Package Content */}
      <section className="py-20 bg-surface relative -mt-6 rounded-t-[2.5rem] z-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <ScrollReveal variants={fadeUp}>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Package Overview
                </h2>
                <p className="text-muted leading-relaxed text-lg mb-8">
                  {pkg.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-xl border border-border text-center">
                    <CalendarDays className="w-6 h-6 mx-auto mb-2 text-gold" />
                    <div className="text-xs text-muted font-medium mb-1">Duration</div>
                    <div className="font-semibold text-navy">{pkg.duration}</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-border text-center">
                    <Hotel className="w-6 h-6 mx-auto mb-2 text-gold" />
                    <div className="text-xs text-muted font-medium mb-1">Accommodation</div>
                    <div className="font-semibold text-navy">Premium Hotels</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-border text-center">
                    <Plane className="w-6 h-6 mx-auto mb-2 text-gold" />
                    <div className="text-xs text-muted font-medium mb-1">Flights</div>
                    <div className="font-semibold text-navy">Included</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-border text-center">
                    <ShieldCheck className="w-6 h-6 mx-auto mb-2 text-gold" />
                    <div className="text-xs text-muted font-medium mb-1">Visa</div>
                    <div className="font-semibold text-navy">Included</div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Inclusions */}
              <ScrollReveal variants={fadeUp}>
                <h3 className="text-2xl font-heading font-bold mb-6">
                  What&apos;s Included
                </h3>
                <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" />
                        <span className="text-navy/80">{feature}</span>
                      </div>
                    ))}
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" />
                      <span className="text-navy/80">Internal Transportation by AC Coach</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" />
                      <span className="text-navy/80">Guided Ziyarat in Makkah & Madinah</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" />
                      <span className="text-navy/80">5 Litres of Zamzam Water</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" />
                      <span className="text-navy/80">Pre-departure Guidance Kit</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Booking Card */}
            <div className="lg:col-span-1">
              <ScrollReveal variants={fadeLeft}>
                <div className="bg-white rounded-2xl border border-border shadow-xl p-6 sticky top-28">
                  <div className="text-center pb-6 border-b border-border/50">
                    <div className="text-sm text-muted font-medium mb-1">Package Price</div>
                    <div className="text-4xl font-heading font-bold text-navy mb-1">
                      {pkg.priceLabel}
                    </div>
                    <div className="text-sm text-muted">{pkg.priceSuffix}</div>
                  </div>

                  <div className="py-6 space-y-4">
                    <a href={waUrl} className="btn btn-wa w-full justify-center" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
                    </a>
                    <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn-outline w-full justify-center">
                      <Phone className="w-4 h-4" /> Call to Book
                    </a>
                  </div>

                  <div className="pt-6 border-t border-border/50 bg-surface -mx-6 -mb-6 p-6 rounded-b-2xl">
                    <h4 className="font-bold text-sm text-navy flex items-center gap-2 mb-3">
                      <FileText className="w-4 h-4 text-emerald" /> Need to Know
                    </h4>
                    <ul className="text-xs text-muted space-y-2 list-disc pl-4">
                      <li>Prices are approximate and subject to change based on flight availability.</li>
                      <li>Double/Triple sharing options available on request.</li>
                      <li>Visa processing requires 5-10 working days.</li>
                      <li>5% GST applies on the final package cost.</li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
