"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Landmark,
  Building,
  BookOpen,
  Plane,
  CreditCard,
  Stamp,
  Globe,
  Headphones,
  ArrowRight,
  ConciergeBell,
} from "lucide-react";
import { services as servicesData } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Landmark,
  Building,
  BookOpen,
  Plane,
  CreditCard,
  Stamp,
  Globe,
  HeadphonesIcon: Headphones,
};

export function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      className="py-20 md:py-28 bg-surface relative overflow-hidden"
      id="services"
      aria-label="Our services"
    >
      <div className="geometric-pattern" />
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto mb-4 w-fit">
            <ConciergeBell className="w-3.5 h-3.5" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Complete{" "}
            <span className="text-gradient">Travel Solutions</span> Under
            One Roof
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            We offer a wide array of bespoke travel solutions customized to suit
            your pilgrimage and travel needs.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Landmark;

            return (
              <motion.div key={service.title} variants={fadeUp}>
                <Link
                  href={service.href}
                  className="block bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group h-full no-underline"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald/10 to-emerald/5 text-emerald flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-emerald group-hover:to-emerald-dark group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-navy text-[0.95rem] mb-2 font-body">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald group-hover:gap-2.5 transition-all">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
