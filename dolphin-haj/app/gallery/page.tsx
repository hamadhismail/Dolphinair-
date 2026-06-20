import type { Metadata } from "next";
import { GalleryContent } from "./GalleryContent";

export const metadata: Metadata = {
  title: "Photo Gallery – Dolphin Haj",
  description:
    "View moments from our sacred Hajj and Umrah journeys. Browse our photo gallery to see the premium experience we provide to our pilgrims.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
