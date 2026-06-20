import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us – Dolphin Haj",
  description:
    "Get in touch with Dolphin Haj for your Hajj and Umrah package inquiries. Visit our office in Trichy, call us, or send a WhatsApp message.",
};

export default function ContactPage() {
  return <ContactContent />;
}
