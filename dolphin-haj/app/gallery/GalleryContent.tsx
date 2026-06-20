"use client";

import Link from "next/link";
import { Images, Home, ChevronRight } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function GalleryContent() {
  return (
    <>
      {/* Page Hero */}
      <section className="gradient-navy pt-32 pb-16 text-center relative overflow-hidden">
        <div className="geometric-pattern-dark" />
        <div className="max-w-4xl mx-auto px-5 relative z-10">
          <ScrollReveal>
            <div className="section-tag mx-auto mb-4 w-fit bg-white/10 text-white/80 border-white/15">
              <Images className="w-3.5 h-3.5" />
              Moments of Faith
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              Photo{" "}
              <span style={{ background: "linear-gradient(135deg, #D4AF37, #E8C547)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Gallery
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-6">
              A visual glimpse into the beautiful spiritual experiences we craft for our pilgrims in the holy cities of Makkah and Madinah.
            </p>
          </ScrollReveal>
          <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/40">
            <Link href="/" className="hover:text-white transition-colors no-underline text-white/40">
              <Home className="w-3.5 h-3.5 inline mr-1" />Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gold">Gallery</span>
          </nav>
        </div>
      </section>

      {/* Gallery Grid component used directly without its padding wrapper if desired, but reusing it is simpler */}
      <div className="-mt-10">
        <GalleryGrid />
      </div>

      <CTABanner />
    </>
  );
}
