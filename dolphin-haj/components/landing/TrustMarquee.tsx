'use client';

const TRUST_ITEMS = [
  { label: '29+ YEARS', value: 'TRUSTED SERVICE' },
  { label: '10,000+', value: 'PILGRIMS SERVED' },
  { label: 'GOVT', value: 'APPROVED' },
  { label: 'SAUDI', value: 'CERTIFIED' },
  { label: 'TAMIL NADU', value: 'HQ' },
  { label: '100%', value: 'VISA SUCCESS' },
  { label: 'END-TO-END', value: 'GUIDANCE' },
  { label: '24/7', value: 'SUPPORT' },
];

export function TrustMarquee() {
  const items = [...TRUST_ITEMS, ...TRUST_ITEMS];
  return (
    <div className="overflow-hidden py-6 border-y border-[#27272A] relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
      <div className="marquee-track">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-8 shrink-0">
            <span className="font-mono text-sm font-bold text-neon">{item.label}</span>
            <span className="font-mono text-xs text-[#52525B]">{item.value}</span>
            <span className="text-[#27272A] mx-4">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
