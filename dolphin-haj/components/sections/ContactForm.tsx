"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  User,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { generateWhatsAppUrl } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[\d\s\-+()]+$/, "Enter a valid phone number"),
  service: z.string(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: "Umrah Package" },
  });

  const onSubmit = (data: FormData) => {
    const msg = `Assalamu Alaikum!\n\nI would like to enquire about your services.\n\nName: ${data.name}\nPhone: ${data.phone}\nService: ${data.service}${data.message ? `\nMessage: ${data.message}` : ""}\n\nPlease share more details. JazakAllahu Khayran!`;

    const waUrl = generateWhatsAppUrl(siteConfig.whatsapp, msg);
    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, "_blank");
      setTimeout(() => {
        setSubmitted(false);
        reset();
      }, 3000);
    }, 1000);
  };

  return (
    <section
      className="py-20 md:py-28 bg-surface"
      id="contact"
      aria-label="Contact form"
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag mb-4">
              <Mail className="w-3.5 h-3.5" />
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Begin Your <span className="text-gradient">Sacred Journey</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Fill out the form and our team will reach out to you via WhatsApp
              with all the details you need. You can also reach us directly.
            </p>

            <div className="space-y-4">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border hover:border-emerald/30 hover:shadow-sm transition-all no-underline group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald/10 text-emerald flex items-center justify-center group-hover:bg-emerald group-hover:text-white transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-muted font-medium">
                    Call Us
                  </div>
                  <div className="text-navy font-semibold">
                    {siteConfig.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border hover:border-emerald/30 hover:shadow-sm transition-all no-underline group"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold-dark flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-muted font-medium">
                    Email Us
                  </div>
                  <div className="text-navy font-semibold">
                    {siteConfig.email}
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-emerald" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    JazakAllahu Khayran!
                  </h3>
                  <p className="text-muted">
                    Redirecting you to WhatsApp...
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <h3 className="text-xl font-heading font-bold mb-6 text-center">
                    🕌 Get Free Quote
                  </h3>

                  {/* Name */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                      <input
                        {...register("name")}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/10 transition-all text-sm"
                        placeholder="Enter your name"
                      />
                    </div>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.name.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                      <input
                        {...register("phone")}
                        type="tel"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/10 transition-all text-sm"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.phone.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Service */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      Interested In
                    </label>
                    <select
                      {...register("service")}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/10 transition-all text-sm appearance-none cursor-pointer"
                    >
                      <option>Umrah Package</option>
                      <option>Hajj Package</option>
                      <option>Ramadan Umrah</option>
                      <option>VIP Package</option>
                      <option>Visa Services</option>
                      <option>Air Tickets</option>
                      <option>Attestation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      Message (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted" />
                      <textarea
                        {...register("message")}
                        rows={3}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/10 transition-all text-sm resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-gold w-full justify-center text-base"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send via WhatsApp
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
