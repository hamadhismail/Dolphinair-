"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, MapPin, HandHeart, Hotel, ShieldCheck } from "lucide-react";
import { whyChooseUs } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const iconMap: Record<string, any> = {
  Award: Award,
  MapPin: MapPin,
  HandHeart: HandHeart,
  Hotel: Hotel,
  ShieldCheck: ShieldCheck,
};

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <motion.div variants={fadeUp} className="section-tag mx-auto mb-6 w-fit bg-white border-border shadow-sm">
            <Shield className="w-3.5 h-3.5" />
            The Dolphin Difference
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
            Why Choose <span className="text-gold-gradient">Us?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-muted font-light leading-relaxed">
            We combine decades of logistical expertise with deep spiritual insight to offer you an unparalleled, worry-free pilgrimage experience.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] || Award;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-white rounded-[2rem] p-8 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-xl ring-1 ring-border group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy/5 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                <p className="text-muted leading-relaxed font-light">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
