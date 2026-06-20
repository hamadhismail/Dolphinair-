'use client';

import { motion } from 'framer-motion';

export function StatsRow() {
  const stats = [
    { label: 'total_bookings', value: '4,281', delta: '+12%', type: 'increase' },
    { label: 'pending_docs', value: '142', delta: '-5%', type: 'decrease' },
    { label: 'visa_transit', value: '89', delta: 'batch_44', type: 'neutral' },
    { label: 'revenue_ytd', value: '₹14.2M', delta: '+24%', type: 'increase' },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="relative bg-[#09090B] border border-[#27272A] rounded-lg p-5 overflow-hidden group hover:border-[#3F3F46] transition-colors"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#3F3F46] group-hover:border-neon transition-colors" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#3F3F46] group-hover:border-neon transition-colors" />
          
          <div className="font-mono text-xs text-[#52525B] mb-2">{stat.label}</div>
          <div className="flex items-end justify-between">
            <div className="font-mono text-2xl font-bold text-white">{stat.value}</div>
            <div className={`font-mono text-[10px] ${
              stat.type === 'increase' ? 'text-neon' :
              stat.type === 'decrease' ? 'text-amber' :
              'text-blue-400'
            }`}>
              {stat.delta}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
