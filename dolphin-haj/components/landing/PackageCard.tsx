'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useBooking, type Package } from '@/context/BookingContext';
import { BentoCard } from '@/components/ui/BentoCard';

export function PackageCard({ pkg, index }: { pkg: Package; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const { selectPackage } = useBooking();

  const handleBook = (e: React.MouseEvent) => {
    e.stopPropagation();
    selectPackage(pkg.id);
    router.push('/book');
  };

  return (
    <BentoCard
      color={pkg.color}
      delay={index * 0.1}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Badge */}
      {pkg.badge && (
        <div className={`absolute top-4 right-4 px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
          pkg.badge === 'MOST POPULAR' ? 'bg-amber/10 text-amber border border-amber/30' : 'bg-neon/10 text-neon border border-neon/30'
        }`}>
          {pkg.badge}
        </div>
      )}

      <div className="p-6">
        {/* Package header as code block */}
        <div className="font-mono text-xs text-[#52525B] mb-3">// pkg.config.ts</div>
        <div className="font-mono text-sm space-y-1 mb-5">
          <div><span className="text-blue-400">const</span> <span className="text-white">{pkg.id}Pkg</span> <span className="text-[#71717A]">=</span> <span className="text-[#27272A]">{'{'}</span></div>
          <div className="pl-4"><span className="text-purple-400">name</span><span className="text-[#71717A]">:</span> <span className={pkg.color === 'amber' ? 'text-amber' : 'text-neon'}>"{pkg.label}"</span><span className="text-[#71717A]">,</span></div>
          <div className="pl-4"><span className="text-purple-400">price</span><span className="text-[#71717A]">:</span> <span className="text-white">{pkg.priceDisplay}</span><span className="text-[#71717A]">,</span></div>
          <div className="pl-4"><span className="text-purple-400">duration</span><span className="text-[#71717A]">:</span> <span className="text-orange-400">"{pkg.duration}"</span><span className="text-[#71717A]">,</span></div>
          <div className="pl-4"><span className="text-purple-400">hotel</span><span className="text-[#71717A]">:</span> <span className="text-orange-400">"{pkg.hotel}"</span><span className="text-[#71717A]">,</span></div>
          <div><span className="text-[#27272A]">{'}'}</span></div>
        </div>

        {/* Distance chip */}
        <div className="flex items-center gap-2 mb-5">
          <div className={`w-1.5 h-1.5 rounded-full bg-[#27272A] group-hover:bg-${pkg.color} transition-colors`} />
          <span className="font-mono text-xs text-[#71717A]">{pkg.distance}</span>
        </div>

        {/* Expand indicator */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#52525B]">
          <motion.span
            animate={{ rotate: expanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >▶</motion.span>
          <span>{expanded ? 'collapse details' : 'expand features'}</span>
        </div>

        {/* Expanded features */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-[#27272A] space-y-2">
                {pkg.features.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 font-mono text-xs"
                  >
                    <span className={pkg.color === 'amber' ? 'text-amber' : 'text-neon'}>✓</span>
                    <span className="text-zinc-300">{f}</span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: pkg.features.length * 0.05 + 0.1 }}
                  className="pt-3"
                >
                  <button
                    onClick={handleBook}
                    className={`w-full font-mono text-xs py-2.5 rounded border transition-all duration-150 ${
                      pkg.color === 'amber'
                        ? 'bg-amber/10 border-amber/40 text-amber hover:bg-amber hover:text-void'
                        : 'bg-neon/10 border-neon/40 text-neon hover:bg-neon hover:text-void'
                    }`}
                  >
                    {'>'} select_package("{pkg.id}") →
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BentoCard>
  );
}
