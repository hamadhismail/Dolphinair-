export function StatusBadge({ 
  status, 
  className = '' 
}: { 
  status: 'SUBMITTED' | 'DOCS_VERIFIED' | 'VISA_IN_TRANSIT' | 'VISA_APPROVED' | 'FLIGHT_CONFIRMED' | 'COMPLETE' | 'VERIFIED' | 'PENDING' | 'REJECTED';
  className?: string;
}) {
  const config: Record<string, { label: string, color: string, bg: string, dot: string }> = {
    SUBMITTED: { label: 'SUBMITTED', color: 'text-blue-400', bg: 'bg-blue-950 border-blue-800', dot: 'bg-blue-400' },
    DOCS_VERIFIED: { label: 'DOCS_VERIFIED', color: 'text-amber', bg: 'bg-amber/10 border-amber/30', dot: 'bg-amber' },
    VISA_IN_TRANSIT: { label: 'VISA_TRANSIT', color: 'text-purple-400', bg: 'bg-purple-950 border-purple-800', dot: 'bg-purple-400' },
    VISA_APPROVED: { label: 'VISA_APPROVED', color: 'text-neon', bg: 'bg-neon/10 border-neon/30', dot: 'bg-neon' },
    FLIGHT_CONFIRMED: { label: 'FLIGHT_OK', color: 'text-neon', bg: 'bg-neon/10 border-neon/30', dot: 'bg-neon' },
    COMPLETE: { label: 'COMPLETE', color: 'text-neon', bg: 'bg-neon/10 border-neon/30', dot: 'bg-neon' },
    VERIFIED: { label: 'VERIFIED', color: 'text-neon', bg: 'bg-neon/10 border-neon/30', dot: 'bg-neon' },
    PENDING: { label: 'PENDING', color: 'text-amber', bg: 'bg-amber/10 border-amber/30', dot: 'bg-amber' },
    REJECTED: { label: 'REJECTED', color: 'text-red-400', bg: 'bg-red-950 border-red-900', dot: 'bg-red-400' },
  };

  const c = config[status] || config.PENDING;

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border font-mono text-[10px] ${c.bg} ${c.color} ${className}`}>
      {c.dot && <div className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />}
      {c.label}
    </span>
  );
}
