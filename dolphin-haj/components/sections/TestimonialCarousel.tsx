"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, MapPin, Quote } from "lucide-react";
import { testimonials } from "@/lib/constants";

export function TestimonialCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const total = testimonials.length;
  const visibleCards = typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1;

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <section
      className="py-20 md:py-28"
      id="testimonials"
      aria-label="Customer testimonials"
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
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Words From Our{" "}
            <span className="text-gradient">Happy Pilgrims</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Thousands of pilgrims have completed their sacred journey with
            Dolphin Haj. Here&apos;s what they say.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <motion.div
            className="flex gap-6 transition-transform duration-500"
            animate={{ x: `-${current * (100 / visibleCards)}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="min-w-full md:min-w-[calc(50%-12px)] flex-shrink-0"
              >
                <div className="bg-white rounded-2xl p-8 border border-border shadow-sm h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-gold/20 mb-4" />

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-gold text-gold"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-navy/70 leading-relaxed flex-1 mb-6 text-[0.95rem]">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="w-11 h-11 rounded-full gradient-emerald flex items-center justify-center text-white text-sm font-bold">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-navy text-sm">
                        {t.name}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted">
                        <MapPin className="w-3 h-3" />
                        {t.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border bg-white hover:bg-emerald hover:text-white hover:border-emerald flex items-center justify-center transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  current === i
                    ? "bg-gold w-7"
                    : "bg-border hover:bg-muted"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border bg-white hover:bg-emerald hover:text-white hover:border-emerald flex items-center justify-center transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
