"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Images, Expand, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const galleryImages = [
  { src: "/images/kaaba.jpg", alt: "Kaaba at twilight - Makkah" },
  { src: "/images/madinah-mosque.jpg", alt: "Prophet's Mosque - Madinah" },
  { src: "/images/makkah-aerial.jpg", alt: "Makkah aerial night view" },
  { src: "/images/luxury-hotel.jpg", alt: "5-star hotel near Haram" },
  { src: "/images/pilgrim-group.jpg", alt: "Pilgrim group at airport" },
  { src: "/images/umrah-pilgrims.jpg", alt: "Pilgrims performing Tawaf" },
  { src: "/images/madinah-mosque.jpg", alt: "Madinah skyline" },
  { src: "/images/kaaba.jpg", alt: "Holy Kaaba night view" },
];

export function GalleryGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () =>
    setLightboxIndex((p) => (p !== null ? (p + 1) % galleryImages.length : 0));
  const prevImage = () =>
    setLightboxIndex((p) =>
      p !== null ? (p - 1 + galleryImages.length) % galleryImages.length : 0
    );

  return (
    <section
      className="py-20 md:py-28 bg-surface"
      id="gallery"
      aria-label="Photo gallery"
    >
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto mb-4 w-fit">
            <Images className="w-3.5 h-3.5" />
            Gallery
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Memories of{" "}
            <span className="text-gradient">Sacred Journeys</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            A visual glimpse into the beautiful spiritual experiences we craft
            for our pilgrims.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.05 * index, duration: 0.5 }}
              className={`relative rounded-xl overflow-hidden cursor-pointer group ${
                index === 0 || index === 3
                  ? "row-span-2 aspect-[3/4]"
                  : "aspect-square"
              }`}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`View ${img.alt}`}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${img.src})` }}
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Expand className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/gallery" className="btn btn-outline">
            <Images className="w-4 h-4" />
            View Full Gallery
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-navy-dark/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full max-h-[80vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full h-[60vh] md:h-[70vh] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${galleryImages[lightboxIndex].src})`,
                }}
              />
              <div className="bg-navy/80 backdrop-blur-xl px-6 py-3 text-white/70 text-sm text-center">
                {galleryImages[lightboxIndex].alt} · {lightboxIndex + 1} /{" "}
                {galleryImages.length}
              </div>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
