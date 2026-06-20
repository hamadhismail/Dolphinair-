'use client';

import { motion } from 'framer-motion';
import { PACKAGES, type BookingFormData } from '@/context/BookingContext';

export function PackageStep({ formData, updateForm }: { formData: BookingFormData, updateForm: (updates: Partial<BookingFormData>) => void }) {
  return (
    <div>
      <div className="font-mono text-xs text-[#52525B] mb-6">// step_01: select_package</div>
      <div className="grid gap-4">
        {PACKAGES.map((pkg) => {
          const isSelected = formData.packageId === pkg.id;
          return (
            <motion.div
              key={pkg.id}
              layout
              onClick={() => updateForm({ packageId: pkg.id })}
              whileHover={{ x: 4 }}
              className={`border rounded-lg p-5 cursor-pointer transition-all duration-200 ${
                isSelected
                  ? 'border-neon bg-neon/5 shadow-neon-sm'
                  : 'border-[#27272A] bg-[#09090B] hover:border-[#3F3F46]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full border-2 transition-all ${isSelected ? 'border-neon bg-neon' : 'border-[#3F3F46]'}`} />
                    <span className="font-mono text-sm font-bold text-white">{pkg.label}</span>
                    {pkg.badge && (
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber/10 text-amber border border-amber/30">
                        {pkg.badge}
                      </span>
                    )}
                  </div>
                  <div className="font-mono text-xs text-[#71717A] mt-1 ml-6">{pkg.duration} · {pkg.hotel} · {pkg.distance}</div>
                </div>
                <div className="text-right">
                  <div className={`font-mono text-lg font-bold ${isSelected ? 'text-neon' : 'text-amber'}`}>{pkg.priceDisplay}</div>
                  <div className="font-mono text-[10px] text-[#52525B]">per person</div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6">
        <label className="font-mono text-xs text-[#71717A] mb-3 block">// number of pilgrims</label>
        <div className="flex items-center gap-4">
          <button
            onClick={() => updateForm({ pilgrims: Math.max(1, (formData.pilgrims || 1) - 1) })}
            className="w-9 h-9 border border-[#27272A] rounded text-white hover:border-neon hover:text-neon font-mono text-lg transition-all"
          >−</button>
          <div className="font-mono text-2xl font-bold text-white w-12 text-center">{formData.pilgrims || 1}</div>
          <button
            onClick={() => updateForm({ pilgrims: Math.min(10, (formData.pilgrims || 1) + 1) })}
            className="w-9 h-9 border border-[#27272A] rounded text-white hover:border-neon hover:text-neon font-mono text-lg transition-all"
          >+</button>
          <span className="font-mono text-xs text-[#52525B]">max 10 per booking</span>
        </div>
      </div>
    </div>
  );
}
