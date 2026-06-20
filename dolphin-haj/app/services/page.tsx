import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Travel Services – Dolphin Haj",
  description:
    "Complete travel solutions including Visa processing, Air Ticketing, Attestation services, and Travel Consultation by Dolphin Air Services Pvt. Ltd.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
