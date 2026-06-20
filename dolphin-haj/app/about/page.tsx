import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us – Dolphin Haj | Dolphin Air Services Pvt. Ltd.",
  description:
    "Learn about Dolphin Haj (Dolphin Air Services Pvt. Ltd.) – Government of India approved Haj Group Organiser since 1995. Serving 16,500+ pilgrims from Trichy, Tamil Nadu.",
};

export default function AboutPage() {
  return <AboutContent />;
}
