"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { generateWhatsAppUrl } from "@/lib/utils";

export function WhatsAppFloat() {
  const url = generateWhatsAppUrl(
    siteConfig.whatsapp,
    "Assalamu Alaikum! I found Dolphin Haj website and would like to enquire about your packages."
  );

  return (
    <a
      href={url}
      className="wa-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
