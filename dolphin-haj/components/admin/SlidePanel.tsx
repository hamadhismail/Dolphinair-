'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { type BookingRow } from '@/components/admin/BookingsTable';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Button } from '@/components/ui/Button';

export function SlidePanel({ booking, onClose }: { booking: BookingRow | null, onClose: () => void }) {
  return (
    <AnimatePresence>
      {booking && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[500px] bg-[#09090B] border-l border-[#27272A] z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-[#0A0A0C]/90 backdrop-blur border-b border-[#27272A] p-6 flex items-center justify-between z-10">
              <div>
                <div className="font-mono text-xs text-[#52525B] mb-1">// inspection_mode</div>
                <h2 className="font-mono text-xl font-bold text-white">{booking.id}</h2>
              </div>
              <button 
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#18181B] hover:bg-[#27272A] text-[#71717A] hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Primary Info */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-mono text-sm font-bold text-white">Primary Pilgrim</h3>
                  <StatusBadge status={booking.status} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#18181B] border border-[#27272A] rounded p-3">
                    <div className="font-mono text-[10px] text-[#52525B]">Name</div>
                    <div className="font-mono text-sm text-zinc-300">{booking.name}</div>
                  </div>
                  <div className="bg-[#18181B] border border-[#27272A] rounded p-3">
                    <div className="font-mono text-[10px] text-[#52525B]">Package</div>
                    <div className={`font-mono text-sm ${booking.package === 'PREMIUM' ? 'text-amber' : 'text-zinc-300'}`}>
                      {booking.package}
                    </div>
                  </div>
                  <div className="bg-[#18181B] border border-[#27272A] rounded p-3">
                    <div className="font-mono text-[10px] text-[#52525B]">Pax Count</div>
                    <div className="font-mono text-sm text-zinc-300">{booking.pax}</div>
                  </div>
                  <div className="bg-[#18181B] border border-[#27272A] rounded p-3">
                    <div className="font-mono text-[10px] text-[#52525B]">Date</div>
                    <div className="font-mono text-sm text-zinc-300">{booking.date}</div>
                  </div>
                </div>
              </section>

              {/* Documents */}
              <section>
                <h3 className="font-mono text-sm font-bold text-white mb-4">Documents (2/2)</h3>
                <div className="space-y-2">
                  {[
                    { name: 'Passport_Front.pdf', type: 'IDENTITY', size: '2.4MB' },
                    { name: 'Photo_White.jpg', type: 'MEDIA', size: '1.1MB' },
                  ].map(doc => (
                    <div key={doc.name} className="flex items-center justify-between p-3 border border-[#27272A] rounded hover:border-[#3F3F46] transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="text-xl">📄</div>
                        <div>
                          <div className="font-mono text-xs text-white">{doc.name}</div>
                          <div className="font-mono text-[10px] text-[#52525B]">{doc.type} · {doc.size}</div>
                        </div>
                      </div>
                      <span className="text-[#52525B]">↓</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Admin Actions */}
              <section>
                <h3 className="font-mono text-sm font-bold text-white mb-4">Admin Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-center">
                    Verify Documents
                  </Button>
                  <Button variant="primary" className="w-full justify-center">
                    Push to Visa Queue
                  </Button>
                  <Button variant="danger" className="w-full justify-center">
                    Reject Application
                  </Button>
                </div>
              </section>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
