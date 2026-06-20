import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "All Packages", href: "/packages" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Hajj Packages", href: "/packages/hajj" },
  { label: "Umrah Packages", href: "/packages/umrah" },
  { label: "Ramadan Umrah", href: "/packages/ramadan-umrah" },
  { label: "Visa Services", href: "/services/visa" },
  { label: "Air Tickets", href: "/services/air-tickets" },
  { label: "Attestation", href: "/services/attestation" },
];

export function Footer() {
  return (
    <footer className="gradient-navy text-white relative overflow-hidden">
      <div className="geometric-pattern-dark" />
      <div className="max-w-7xl mx-auto px-5 pt-16 pb-8 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 no-underline mb-5">
              <div className="w-11 h-11 rounded-xl gradient-gold flex items-center justify-center text-navy font-bold font-heading text-xl">
                D
              </div>
              <div>
                <div className="text-lg font-bold font-heading text-white">
                  Dolphin Haj
                </div>
                <div className="text-[0.65rem] text-white/50 font-medium">
                  {siteConfig.legalName}
                </div>
              </div>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Government-approved Haj Group Organiser since 1995. {siteConfig.stats.pilgrims.toLocaleString("en-IN")}+ pilgrims served from Trichy, Tamil Nadu.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${siteConfig.address.street}, ${siteConfig.address.city}`
                )}`}
                className="flex items-start gap-2.5 text-white/55 hover:text-gold transition-colors no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold/60" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.city} -{" "}
                  {siteConfig.address.zip}, {siteConfig.address.state}
                </span>
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-2.5 text-white/55 hover:text-gold transition-colors no-underline"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-gold/60" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-white/55 hover:text-gold transition-colors no-underline"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-gold/60" />
                {siteConfig.email}
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-2.5 mt-5">
              {[
                { icon: FacebookIcon, href: siteConfig.social.facebook },
                { icon: TwitterIcon, href: siteConfig.social.twitter },
                { icon: InstagramIcon, href: siteConfig.social.instagram },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/50 hover:bg-gold hover:text-navy transition-all no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-5 font-body">
              Quick Links
            </h6>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-gold hover:translate-x-1 transition-all no-underline"
                >
                  <ChevronRight className="w-3 h-3 opacity-50" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-5 font-body">
              Our Services
            </h6>
            <div className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-gold hover:translate-x-1 transition-all no-underline"
                >
                  <ChevronRight className="w-3 h-3 opacity-50" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact / Hours */}
          <div>
            <h6 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-5 font-body">
              Business Hours
            </h6>
            <div className="text-sm text-white/50 leading-relaxed mb-6">
              <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
              <p>Saturday: 9:00 AM – 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

            <h6 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-4 font-body">
              Get in Touch
            </h6>
            <div className="flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Assalamu Alaikum! I have an enquiry.")}`}
                className="btn btn-wa btn-sm text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
              <Link href="/contact" className="btn btn-outline-white btn-sm text-sm">
                Contact Form
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-white/70 transition-colors no-underline text-white/40"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white/70 transition-colors no-underline text-white/40"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
