"use client";

import { Award, Users, Plane, Smile } from "lucide-react";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { siteConfig } from "@/lib/constants";

const stats = [
  {
    icon: Award,
    target: siteConfig.stats.years,
    suffix: "+",
    label: "Years of Experience",
    color: "text-emerald",
    bg: "bg-emerald/10",
  },
  {
    icon: Users,
    target: siteConfig.stats.pilgrims,
    suffix: "+",
    label: "Pilgrims Served",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: Plane,
    target: siteConfig.stats.tickets,
    suffix: "+",
    label: "Air Tickets Issued",
    color: "text-emerald",
    bg: "bg-emerald/10",
  },
  {
    icon: Smile,
    target: siteConfig.stats.trips,
    suffix: "+",
    label: "Successful Trips",
    color: "text-gold",
    bg: "bg-gold/10",
  },
];

export function TrustBar() {
  return (
    <section
      className="py-16 bg-surface relative"
      id="stats"
      aria-label="Company statistics"
    >
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 text-center border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  className="text-3xl md:text-4xl font-bold font-heading text-gradient"
                  labelClassName="text-sm font-semibold text-muted uppercase tracking-wide mt-1"
                  label={stat.label}
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
