"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Packages",
    href: "/packages",
    dropdown: [
      { label: "All Packages", href: "/packages" },
      { label: "Hajj Packages", href: "/packages/hajj" },
      { label: "Umrah Packages", href: "/packages/umrah" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-navy-dark text-white/70 py-2 hidden md:block border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center text-xs tracking-wide">
          <div className="flex items-center gap-6">
            <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-2 hover:text-gold transition-colors no-underline">
              <Phone className="w-3 h-3 text-gold-light" />
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-gold transition-colors no-underline">
              <Mail className="w-3 h-3 text-gold-light" />
              {siteConfig.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3 text-gold-light" />
            <span>Govt. Approved Haj Group Organiser</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`w-full transition-all duration-500 z-50 ${
          scrolled ? "glass-panel-dark shadow-md py-3 sticky top-0" : "bg-transparent py-5 absolute top-auto"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline z-50">
            <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center text-navy font-bold font-heading text-xl shadow-glow">
              D
            </div>
            <div>
              <div className="text-xl font-bold font-heading text-white tracking-tight">
                Dolphin Haj
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.dropdown ? (
                  <div className="flex items-center gap-1 cursor-pointer py-2">
                    <span className="text-sm font-medium text-white/90 group-hover:text-gold transition-colors">
                      {link.label}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-white/50 group-hover:text-gold transition-transform duration-300 group-hover:rotate-180" />
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 glass-panel-dark rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0">
                      {link.dropdown.map((drop) => (
                        <Link
                          key={drop.href}
                          href={drop.href}
                          className="block px-4 py-2.5 text-sm text-white/80 hover:text-gold hover:bg-white/5 rounded-xl transition-all no-underline"
                        >
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-white/90 hover:text-gold transition-colors py-2 no-underline"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              className="hidden md:flex btn btn-outline-white btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire Now
            </a>

            <button
              className="lg:hidden p-2 text-white/90 hover:text-gold transition-colors z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy-dark/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] glass-panel-dark z-50 lg:hidden overflow-y-auto border-l border-white/10"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
            >
              <div className="flex flex-col p-6 space-y-6 mt-16">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.dropdown ? (
                      <div className="space-y-3">
                        <div className="text-white/50 text-xs font-bold uppercase tracking-wider">
                          {link.label}
                        </div>
                        <div className="flex flex-col space-y-2 pl-3 border-l border-white/10">
                          {link.dropdown.map((drop) => (
                            <Link
                              key={drop.href}
                              href={drop.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-white/80 text-lg hover:text-gold transition-colors no-underline py-1"
                            >
                              {drop.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-white text-xl font-medium hover:text-gold transition-colors no-underline"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-6 mt-6 border-t border-white/10 flex flex-col gap-4">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    className="btn btn-wa w-full justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
