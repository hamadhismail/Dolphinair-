import type { Metadata } from "next";
import { PackagesContent } from "./PackagesContent";

export const metadata: Metadata = {
  title: "Hajj & Umrah Packages – Dolphin Haj",
  description:
    "Explore our complete range of Hajj, Umrah, and Ramadan special packages. Book your sacred journey with the most trusted Haj Group Organiser in Tamil Nadu.",
};

export default function PackagesPage() {
  return <PackagesContent />;
}
