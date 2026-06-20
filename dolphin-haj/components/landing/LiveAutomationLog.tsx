'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TerminalBlock } from '@/components/ui/TerminalBlock';

const LOG_EVENTS = [
  { type: 'OK', src: 'ministry_api', msg: 'Hajj quota sync completed' },
  { type: 'OK', src: 'visa_proc', msg: 'Batch #4421 dispatched to embassy' },
  { type: 'INFO', src: 'flight_sys', msg: 'IndiGo IX-701 seats locked — 12 seats' },
  { type: 'OK', src: 'document_svc', msg: 'Passport OCR verified — user_7834' },
  { type: 'WARN', src: 'payment_gw', msg: 'Retry attempt 2 — txn_9921' },
  { type: 'OK', src: 'notify_svc', msg: 'WhatsApp dispatched — 3 pilgrims' },
  { type: 'INFO', src: 'hotel_api', msg: 'Madinah rooms confirmed — Jul 14' },
  { type: 'OK', src: 'visa_proc', msg: 'Visa approved — batch #4418' },
  { type: 'INFO', src: 'flight_sys', msg: 'Air Arabia G9-414 — checkin open' },
  { type: 'OK', src: 'ministry_api', msg: 'Nusuk verification — PASSED' },
];

export function LiveAutomationLog() {
  const [logs, setLogs] = useState<any[]>([]);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const event = LOG_EVENTS[Math.floor(Math.random() * LOG_EVENTS.length)];
      const now = new Date();
      const ts = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
      setLogs((prev) => [{ ...event, ts, id: Date.now() }, ...prev].slice(0, 18));
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  const typeColors: Record<string, string> = { OK: 'text-neon', INFO: 'text-blue-400', WARN: 'text-amber', ERR: 'text-red-400' };

  return (
    <TerminalBlock title="automation_log — live stream" showLiveIndicator className="h-full">
      <div ref={logRef} className="p-3 font-mono text-[11px] space-y-1 h-[260px] overflow-hidden">
        <AnimatePresence initial={false}>
          {logs.map((log) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-start gap-2"
            >
              <span className="text-[#52525B] shrink-0">{log.ts}</span>
              <span className={`shrink-0 font-bold ${typeColors[log.type]}`}>[{log.type}]</span>
              <span className="text-[#71717A]">{log.src}:</span>
              <span className="text-zinc-400">{log.msg}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </TerminalBlock>
  );
}
