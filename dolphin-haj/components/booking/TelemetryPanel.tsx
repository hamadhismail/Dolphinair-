'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { type BookingFormData, PACKAGES } from '@/context/BookingContext';

export function TelemetryPanel({ formData, step }: { formData: BookingFormData; step: number }) {
  const pkg = PACKAGES.find((p) => p.id === formData.packageId);

  const fields = [
    { key: 'package_id', value: formData.packageId || 'null', done: !!formData.packageId },
    { key: 'pilgrims', value: formData.pilgrims || 1, done: true },
    { key: 'name', value: formData.name || 'null', done: !!formData.name },
    { key: 'phone', value: formData.phone || 'null', done: !!formData.phone },
    { key: 'email', value: formData.email || 'null', done: !!formData.email },
    { key: 'passport_submitted', value: String(formData.passportSubmitted), done: formData.passportSubmitted },
    { key: 'photo_submitted', value: String(formData.photoSubmitted), done: formData.photoSubmitted },
    { key: 'travel_date', value: formData.travelDate || 'null', done: !!formData.travelDate },
    { key: 'return_date', value: formData.returnDate || 'null', done: !!formData.returnDate },
    { key: 'invoice_accepted', value: String(formData.invoiceAccepted), done: formData.invoiceAccepted },
  ];

  return (
    <div className="sticky top-24 h-fit">
      {/* Step progress */}
      <div className="mb-6">
        <div className="font-mono text-[10px] text-[#52525B] mb-3 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
          booking_telemetry.live
        </div>
        <div className="space-y-1.5">
          {[1,2,3,4,5].map((s) => (
            <div key={s} className={`flex items-center gap-2 font-mono text-xs py-1 ${step === s ? 'text-neon' : step > s ? 'text-neon/60' : 'text-[#3F3F46]'}`}>
              <span className="w-4 shrink-0">{step > s ? '✓' : step === s ? '▶' : '○'}</span>
              <span>
                {['SELECT_PACKAGE', 'IDENTITY', 'DOCUMENTS', 'TRAVEL_DATES', 'CONFIRM'][s - 1]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Live JSON state */}
      <div className="bg-[#09090B] border border-[#27272A] rounded-lg overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-[#27272A] bg-[#0A0A0C]">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-900/80" />
            <div className="w-2 h-2 rounded-full bg-amber/40" />
            <div className="w-2 h-2 rounded-full bg-neon/40" />
          </div>
          <span className="font-mono text-[10px] text-[#52525B] ml-1">booking_state.json</span>
        </div>
        <div className="p-3 font-mono text-[11px] space-y-0.5">
          <div className="text-[#52525B]">{'{'}</div>
          {fields.map((f) => (
            <motion.div
              key={f.key}
              layout
              className="flex gap-2 pl-3"
            >
              <span className="text-purple-400">"{f.key}"</span>
              <span className="text-[#52525B]">:</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={String(f.value)}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className={
                    f.value === 'null' || f.value === 'false'
                      ? 'text-red-400'
                      : f.value === 'true' || f.done
                      ? 'text-neon'
                      : 'text-amber'
                  }
                >
                  {typeof f.value === 'string' && f.value !== 'null' && f.value !== 'true' && f.value !== 'false'
                    ? `"${f.value}"`
                    : f.value}
                </motion.span>
              </AnimatePresence>
              <span className="text-[#52525B]">,</span>
              {f.done && <span className="text-neon ml-1">✓</span>}
            </motion.div>
          ))}
          <div className="text-[#52525B]">{'}'}</div>
        </div>
      </div>

      {pkg && (
        <div className="mt-4 p-3 bg-[#09090B] border border-neon/20 rounded-lg">
          <div className="font-mono text-[10px] text-neon mb-2">// selected package</div>
          <div className="font-mono text-xs text-white">{pkg.name}</div>
          <div className="font-mono text-sm font-bold text-amber mt-1">{pkg.priceDisplay}</div>
          <div className="font-mono text-[10px] text-[#52525B] mt-1">{pkg.duration} · {pkg.distance}</div>
        </div>
      )}
    </div>
  );
}
