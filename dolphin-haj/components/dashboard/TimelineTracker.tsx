'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function TimelineTracker() {
  const STAGES = [
    { id: 1, label: 'SUBMITTED', desc: 'Application received', status: 'completed' },
    { id: 2, label: 'VERIFICATION', desc: 'Documents & identity', status: 'completed' },
    { id: 3, label: 'MINISTRY', desc: 'Nusuk portal sync', status: 'completed' },
    { id: 4, label: 'VISA_PROC', desc: 'Embassy processing', status: 'active' },
    { id: 5, label: 'LOGISTICS', desc: 'Flight & Hotel lock', status: 'pending' },
    { id: 6, label: 'READY', desc: 'Kit dispatched', status: 'pending' },
  ];

  return (
    <div className="py-8">
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-[#27272A] z-0">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 3.5 / 5 }} // Active step is 4 (index 3), so 3.5/5
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-full bg-neon origin-left shadow-[0_0_10px_rgba(0,255,102,0.5)]"
          />
        </div>

        {/* Stages */}
        <div className="relative z-10 flex justify-between">
          {STAGES.map((stage) => (
            <div key={stage.id} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-mono text-xs mb-3 transition-colors ${
                  stage.status === 'completed'
                    ? 'border-neon bg-neon text-void shadow-neon-sm'
                    : stage.status === 'active'
                    ? 'border-neon bg-[#09090B] text-neon animate-pulse-neon'
                    : 'border-[#3F3F46] bg-[#0A0A0C] text-[#52525B]'
                }`}
              >
                {stage.status === 'completed' ? '✓' : stage.id}
              </div>
              <div
                className={`font-mono text-[10px] text-center max-w-[80px] ${
                  stage.status === 'completed' || stage.status === 'active'
                    ? 'text-white font-bold'
                    : 'text-[#52525B]'
                }`}
              >
                {stage.label}
              </div>
              <div className="font-sans text-[10px] text-[#52525B] text-center mt-1 hidden sm:block">
                {stage.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
