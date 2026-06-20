'use client';

export function NotificationsFeed() {
  const notifs = [
    { type: 'OK', msg: 'Document Passport.pdf verified successfully', time: '10 mins ago' },
    { type: 'INFO', msg: 'Application synced with Ministry portal', time: '1 hour ago' },
    { type: 'WARN', msg: 'PanCard.pdf pending verification', time: '2 hours ago' },
    { type: 'OK', msg: 'Booking confirmed and payment processed', time: '1 day ago' },
  ];

  const PREFIX_COLORS: Record<string, string> = { 'OK': 'text-neon', 'INFO': 'text-blue-400', 'WARN': 'text-amber' };

  return (
    <div className="space-y-3">
      {notifs.map((n, i) => (
        <div key={i} className="flex gap-3 text-xs font-mono p-3 bg-[#09090B] border border-[#27272A] rounded-lg">
          <span className={`font-bold shrink-0 ${PREFIX_COLORS[n.type]}`}>[{n.type}]</span>
          <span className="text-zinc-300 flex-1">{n.msg}</span>
          <span className="text-[#52525B] shrink-0">{n.time}</span>
        </div>
      ))}
    </div>
  );
}
