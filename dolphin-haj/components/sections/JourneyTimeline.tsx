"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, FileText, BookOpen, Plane, Landmark, ArrowRight } from "lucide-react";
import { processSteps } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Phone,
  FileText,
  BookOpen,
  Plane,
  Landmark,
};

export function JourneyTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      className="py-20 md:py-28 gradient-navy relative overflow-hidden"
      id="how-it-works"
      aria-label="How the process works"
    >
      <div className="geometric-pattern-dark" />
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto mb-4 w-fit bg-white/10 text-white/80 border-white/15">
            <ArrowRight className="w-3.5 h-3.5" />
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            How It{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4AF37, #E8C547)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Works
            </span>
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            From your first enquiry to safe return — we guide you through every
            step of your sacred journey.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon] || Phone;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.15 * index,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative text-center group"
              >
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px]">
                    <motion.div
                      className="h-full bg-gradient-to-r from-gold/60 to-gold/20"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ delay: 0.3 + 0.2 * index, duration: 0.8 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                )}

                {/* Step number */}
                <div className="relative z-10 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center mx-auto group-hover:bg-gold/20 group-hover:border-gold/30 transition-all duration-300">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full gradient-gold text-navy text-xs font-bold flex items-center justify-center shadow-lg mx-auto">
                    {index + 1}
                  </div>
                </div>

                <h5 className="text-white font-bold font-body text-sm mb-1.5">
                  {step.title}
                </h5>
                <p className="text-white/45 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
