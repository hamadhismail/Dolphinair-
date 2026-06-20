"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Award,
  Users,
  Plane,
  Ticket,
  Heart,
  Handshake,
  Star,
  HandHelping,
  Shield,
  Eye,
  Bullseye,
  History,
  ShieldCheck,
  GraduationCap,
  Hotel,
  Headset,
  IndianRupee,
  Home,
  ChevronRight,
  Phone,
  MessageCircle,
  Send,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { generateWhatsAppUrl } from "@/lib/utils";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { fadeLeft, fadeRight } from "@/lib/animations";

const milestones = [
  { year: "1995", title: "Company Founded", desc: "Dolphin Air Services established in Trichy by visionary travel professionals." },
  { year: "2000", title: "IATA Accreditation", desc: "Received international IATA accreditation for air ticketing." },
  { year: "2005", title: "500+ Pilgrims/Season", desc: "Crossed 500 pilgrims in a single season milestone." },
  { year: "2010", title: "1,000+ Annual Pilgrims", desc: "Achieved 1,000+ pilgrims per year." },
  { year: "2015", title: "10,000+ Pilgrims", desc: "Crossed cumulative 10,000 pilgrims after 20 years." },
  { year: "2024", title: "16,500+ Pilgrims", desc: "29 years and still growing with same dedication." },
];

const coreValues = [
  { icon: Heart, title: "Faith", desc: "Everything rooted in sincerity and devotion to Allah's service.", color: "text-emerald", bg: "bg-emerald/10" },
  { icon: Handshake, title: "Trust", desc: "29 years of transparent dealings — the most trusted name in Tamil Nadu.", color: "text-gold-dark", bg: "bg-gold/10" },
  { icon: Star, title: "Excellence", desc: "We strive for excellence in every service, from visa to on-ground support.", color: "text-emerald", bg: "bg-emerald/10" },
  { icon: HandHelping, title: "Service", desc: "Available at every step of your sacred journey — before, during and after.", color: "text-gold-dark", bg: "bg-gold/10" },
];

export function AboutContent() {
  const storyRef = useRef<HTMLDivElement>(null);
  const storyInView = useInView(storyRef, { once: true, amount: 0.2 });

  const waUrl = generateWhatsAppUrl(
    siteConfig.whatsapp,
    "Assalamu Alaikum! I would like to enquire about Haj and Umrah packages."
  );

  return (
    <>
      {/* Page Hero */}
      <section className="gradient-navy pt-32 pb-16 text-center relative overflow-hidden">
        <div className="geometric-pattern-dark" />
        <div className="max-w-4xl mx-auto px-5 relative z-10">
          <ScrollReveal>
            <div className="section-tag mx-auto mb-4 w-fit bg-white/10 text-white/80 border-white/15">
              🕌 Our Story
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              About{" "}
              <span style={{ background: "linear-gradient(135deg, #D4AF37, #E8C547)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Dolphin Haj
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-6">
              Government of India approved Haj Group Organiser · Serving pilgrims since 1995 from Trichy, Tamil Nadu
            </p>
          </ScrollReveal>
          <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/40">
            <Link href="/" className="hover:text-white transition-colors no-underline text-white/40">
              <Home className="w-3.5 h-3.5 inline mr-1" />Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gold">About Us</span>
          </nav>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={storyRef}>
            <ScrollReveal variants={fadeLeft}>
              <div className="section-tag mb-4">Est. 1995 · Trichy</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Three Decades of <span className="text-gradient">Trusted Service</span>
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Founded in 1995 by travel professionals with deep knowledge of Hajj operations, Dolphin Air Services Pvt. Ltd. has grown to become one of Tamil Nadu&apos;s most trusted pilgrimage service providers.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                Officially recognized as a Government of India approved Haj Group Organiser, we carry the responsibility of facilitating one of the most sacred journeys in a Muslim&apos;s life.
              </p>
              <p className="text-muted leading-relaxed">
                Over 29 years, we have served 16,500+ pilgrims, issued 58,000+ air tickets, and conducted 490+ trips — making us the go-to partner for Hajj and Umrah from South India.
              </p>
            </ScrollReveal>

            <ScrollReveal variants={fadeRight}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, value: "16,500+", label: "Pilgrims Served", gradient: true },
                  { icon: Ticket, value: "58,000+", label: "Air Tickets Issued", gold: true },
                  { icon: Plane, value: "490+", label: "Successful Trips", gradient: true },
                  { icon: Award, value: "29+", label: "Years of Excellence", gold: true },
                ].map((stat) => (
                  <div key={stat.label} className="bg-surface rounded-2xl p-6 text-center border border-border">
                    <stat.icon className={`w-7 h-7 mx-auto mb-3 ${stat.gold ? "text-gold" : "text-emerald"}`} />
                    <div className={`text-3xl font-bold font-heading ${stat.gold ? "text-gold-gradient" : "text-gradient"}`}
                      style={stat.gold ? { background: "linear-gradient(135deg, #D4AF37, #E8C547)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } : undefined}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-muted uppercase tracking-wide mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 gradient-navy relative overflow-hidden">
        <div className="geometric-pattern-dark" />
        <div className="max-w-5xl mx-auto px-5 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="section-tag mx-auto mb-4 w-fit bg-white/10 text-white/80 border-white/15">Our Purpose</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                Mission &amp; <span style={{ background: "linear-gradient(135deg, #D4AF37, #E8C547)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Vision</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal variants={fadeLeft}>
              <div className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-8 text-center hover:bg-white/12 hover:-translate-y-1 transition-all">
                <div className="w-20 h-20 rounded-full bg-emerald/20 flex items-center justify-center mx-auto mb-5">
                  <Bullseye className="w-9 h-9 text-emerald" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">Our Mission</h3>
                <p className="text-white/60 leading-relaxed">
                  To guide and assist pilgrims throughout their Hajj journey so they can focus entirely on worship, leaving every logistical concern to our experienced team.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variants={fadeRight}>
              <div className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-8 text-center hover:bg-white/12 hover:-translate-y-1 transition-all">
                <div className="w-20 h-20 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-5">
                  <Eye className="w-9 h-9 text-gold" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">Our Vision</h3>
                <p className="text-white/60 leading-relaxed">
                  To be the most trusted pilgrimage service provider in South India, known for our integrity, expertise and sincere service to Allah&apos;s guests.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="section-tag mx-auto mb-4 w-fit">What We Stand For</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Our Core <span className="text-gradient">Values</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues.map((v, i) => (
              <ScrollReveal key={v.title}>
                <div className="bg-white rounded-2xl p-6 text-center border border-border shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all">
                  <div className={`w-16 h-16 rounded-xl ${v.bg} ${v.color} flex items-center justify-center mx-auto mb-4`}>
                    <v.icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-navy mb-2 font-body">{v.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 gradient-navy relative overflow-hidden">
        <div className="geometric-pattern-dark" />
        <div className="max-w-4xl mx-auto px-5 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="section-tag mx-auto mb-4 w-fit bg-white/10 text-white/80 border-white/15">Our Journey</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                Milestones Through <span style={{ background: "linear-gradient(135deg, #D4AF37, #E8C547)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>29 Years</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year}>
                <div className="bg-white/7 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/12 hover:-translate-y-1 transition-all flex gap-5 items-start">
                  <div className="text-3xl font-bold font-heading text-gold flex-shrink-0 w-20">
                    {m.year}
                  </div>
                  <div>
                    <h5 className="text-white font-bold font-body mb-1">{m.title}</h5>
                    <p className="text-white/50 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-surface text-center">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Begin Your Sacred Journey Today
            </h2>
            <p className="text-muted text-lg mb-8">
              Join 16,500+ pilgrims who have trusted Dolphin Haj for their life&apos;s most important journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={waUrl} className="btn btn-wa btn-lg" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
              <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn-gold btn-lg">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <Link href="/contact" className="btn btn-outline btn-lg">
                <Send className="w-4 h-4" /> Free Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
