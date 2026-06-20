'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function BentoCard({ 
  children,
  className = '',
  color = 'neon',
  delay = 0,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  color?: 'neon' | 'amber';
  delay?: number;
  onClick?: () => void;
}) {
  const borderColor = color === 'amber'
    ? 'group-hover:border-amber/60 group-hover:shadow-amber-sm'
    : 'group-hover:border-neon/50 group-hover:shadow-neon-sm';

  const gradientColor = color === 'amber' ? 'amber' : 'neon';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, type: 'spring', stiffness: 300, damping: 25 }}
      onClick={onClick}
      className={`group relative bg-[#09090B] border border-[#27272A] rounded-lg overflow-hidden transition-all duration-200 ${borderColor} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Corner accent */}
      <div className="absolute top-0 left-0 pointer-events-none">
        <div className={`w-20 h-px bg-gradient-to-r from-${gradientColor}/40 to-transparent`} />
        <div className={`w-px h-20 bg-gradient-to-b from-${gradientColor}/30 to-transparent`} />
      </div>
      
      {children}
    </motion.div>
  );
}
