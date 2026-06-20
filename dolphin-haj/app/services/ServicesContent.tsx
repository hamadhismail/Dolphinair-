"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ConciergeBell, Home, ChevronRight, CheckCircle, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { generateWhatsAppUrl } from "@/lib/utils";
import { CTABanner } from "@/components/sections/CTABanner";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function ServicesContent() {
  const waUrl = generateWhatsAppUrl(
    siteConfig.whatsapp,
    "Assalamu Alaikum! I would like to enquire about your travel services."
  );

  return (
    <>
      {/* Page Hero */}
      <section className="gradient-navy pt-32 pb-16 text-center relative overflow-hidden">
        <div className="geometric-pattern-dark" />
        <div className="max-w-4xl mx-auto px-5 relative z-10">
          <ScrollReveal>
            <div className="section-tag mx-auto mb-4 w-fit bg-white/10 text-white/80 border-white/15">
              <ConciergeBell className="w-3.5 h-3.5" />
              What We Do
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              Our{" "}
              <span style={{ background: "linear-gradient(135deg, #D4AF37, #E8C547)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Services
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-6">
              Complete travel solutions from Visa processing to Air Ticketing. IATA Accredited Travel Agent.
            </p>
          </ScrollReveal>
          <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/40">
            <Link href="/" className="hover:text-white transition-colors no-underline text-white/40">
              <Home className="w-3.5 h-3.5 inline mr-1" />Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gold">Services</span>
          </nav>
        </div>
      </section>

      {/* Services Grid (reused from homepage but styled slightly different contextually if needed) */}
      <ServicesGrid />

      {/* Detailed Service Feature Section */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="bg-navy rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                <div className="geometric-pattern-dark opacity-10" />
                <h3 className="text-2xl font-heading font-bold mb-4 relative z-10 text-gold">IATA Accredited Agency</h3>
                <p className="text-white/80 mb-6 relative z-10 leading-relaxed">
                  As an IATA (International Air Transport Association) accredited travel agency, Dolphin Air Services guarantees the highest standards of professional service for your global ticketing needs.
                </p>
                <ul className="space-y-3 relative z-10 mb-8">
                  {[
                    "Direct access to global airline inventory",
                    "Competitive group and individual fares",
                    "Instant ticketing and confirmations",
                    "24/7 dedicated support for rebooking"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/90">
                      <CheckCircle className="w-5 h-5 text-emerald" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4 relative z-10">
                  <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn-gold btn-sm">
                    <Phone className="w-4 h-4" /> Call for Flight Booking
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Expert Visa & <span className="text-gradient">Attestation Services</span></h2>
              <p className="text-muted leading-relaxed mb-6">
                Navigating international bureaucracy can be challenging. Let our experts handle your documentation with our expedited Visa and MEA Attestation services.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-xl border border-border shadow-sm">
                  <h4 className="font-bold text-navy mb-2">Visa Processing</h4>
                  <p className="text-sm text-muted">Tourist, Business, Umrah and Visit Visas for KSA, UAE, UK, USA, Europe and more.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-border shadow-sm">
                  <h4 className="font-bold text-navy mb-2">Document Attestation</h4>
                  <p className="text-sm text-muted">Educational, personal and commercial document MEA attestation and apostille.</p>
                </div>
              </div>
              <a href={waUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" /> Enquire Service Fees
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
