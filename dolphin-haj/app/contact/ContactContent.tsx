"use client";

import Link from "next/link";
import { Send, Home, ChevronRight, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { siteConfig } from "@/lib/constants";

export function ContactContent() {
  return (
    <>
      {/* Page Hero */}
      <section className="gradient-navy pt-32 pb-16 text-center relative overflow-hidden">
        <div className="geometric-pattern-dark" />
        <div className="max-w-4xl mx-auto px-5 relative z-10">
          <ScrollReveal>
            <div className="section-tag mx-auto mb-4 w-fit bg-white/10 text-white/80 border-white/15">
              <Send className="w-3.5 h-3.5" />
              Get in Touch
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              Contact{" "}
              <span style={{ background: "linear-gradient(135deg, #D4AF37, #E8C547)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Us
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-6">
              We are here to assist you with your sacred journey. Visit our office, call us, or send a message.
            </p>
          </ScrollReveal>
          <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/40">
            <Link href="/" className="hover:text-white transition-colors no-underline text-white/40">
              <Home className="w-3.5 h-3.5 inline mr-1" />Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gold">Contact</span>
          </nav>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 bg-surface -mb-10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold-dark flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-navy mb-2 font-body text-lg">Head Office</h4>
                <p className="text-muted leading-relaxed mb-4 text-sm">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${siteConfig.address.street}, ${siteConfig.address.city}`)}`}
                  className="text-emerald text-sm font-semibold hover:text-emerald-dark transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-navy mb-2 font-body text-lg">Business Hours</h4>
                <div className="space-y-1.5 text-sm text-muted mb-4">
                  <div className="flex justify-between gap-8"><span>Monday - Friday</span> <span>9:00 AM - 6:00 PM</span></div>
                  <div className="flex justify-between gap-8"><span>Saturday</span> <span>9:00 AM - 4:00 PM</span></div>
                  <div className="flex justify-between gap-8 text-red-500/80"><span>Sunday</span> <span>Closed</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reusing ContactForm component which has the form + phone/email blocks */}
      <ContactForm />

      {/* Map */}
      <section className="bg-surface pb-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-[400px] w-full relative bg-gray-200">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.995963959146!2d78.6834101!3d10.8116124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf56d68b92817%3A0xcf9ba579b128dc95!2sFemina%20Shopping%20Mall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
