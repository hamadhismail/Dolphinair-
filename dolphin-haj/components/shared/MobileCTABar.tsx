"use client";

import { Phone, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { generateWhatsAppUrl } from "@/lib/utils";

export function MobileCTABar() {
  const waUrl = generateWhatsAppUrl(
    siteConfig.whatsapp,
    "Assalamu Alaikum! I would like to enquire."
  );

  return (
    <div className="mobile-cta-bar">
      <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn-outline-white btn-sm">
        <Phone className="w-3.5 h-3.5" />
        Call
      </a>
      <a
        href={waUrl}
        className="btn btn-wa btn-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        WhatsApp
      </a>
      <Link href="/contact" className="btn btn-gold btn-sm">
        <Send className="w-3.5 h-3.5" />
        Quote
      </Link>
    </div>
  );
}
