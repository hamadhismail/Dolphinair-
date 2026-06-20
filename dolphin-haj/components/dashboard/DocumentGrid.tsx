'use client';

import { motion } from 'framer-motion';
import { StatusBadge } from '@/components/ui/StatusBadge';

export function DocumentGrid() {
  const docs = [
    { name: 'Passport.pdf', type: 'IDENTITY', status: 'VERIFIED' as const, size: '2.4 MB', updated: 'Today, 10:42 AM' },
    { name: 'Photo_WhiteBg.jpg', type: 'MEDIA', status: 'VERIFIED' as const, size: '1.1 MB', updated: 'Today, 10:42 AM' },
    { name: 'PanCard.pdf', type: 'IDENTITY', status: 'PENDING' as const, size: '1.8 MB', updated: 'Today, 11:15 AM' },
    { name: 'VaccineCert.pdf', type: 'MEDICAL', status: 'VERIFIED' as const, size: '0.8 MB', updated: 'Yesterday, 04:20 PM' },
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {docs.map((doc, i) => (
        <motion.div
          key={doc.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-[#09090B] border border-[#27272A] rounded-lg p-4 flex gap-4 hover:border-[#3F3F46] transition-colors"
        >
          <div className="w-10 h-10 rounded bg-[#18181B] border border-[#27272A] flex items-center justify-center shrink-0 font-mono text-xs text-[#71717A]">
            {doc.name.split('.')[1].toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="font-mono text-xs text-white truncate">{doc.name}</div>
              <StatusBadge status={doc.status} />
            </div>
            <div className="font-mono text-[10px] text-[#52525B] mt-2 flex gap-3">
              <span>type: {doc.type}</span>
              <span>size: {doc.size}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
