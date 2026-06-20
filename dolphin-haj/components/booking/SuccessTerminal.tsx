'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { TerminalBlock } from '@/components/ui/TerminalBlock';
import { type BookingResult } from '@/context/BookingContext';

export function SuccessTerminal({ result }: { result: BookingResult }) {
  const lines = [
    { p: '$', t: 'booking.submit() → PROCESSING...', delay: 0 },
    { p: 'OK', t: 'Identity verification — PASSED', delay: 0.4 },
    { p: 'OK', t: 'Ministry API registration — SUCCESS', delay: 0.8 },
    { p: 'OK', t: 'Visa queue entry — CONFIRMED', delay: 1.2 },
    { p: 'OK', t: 'WhatsApp notification — DISPATCHED', delay: 1.6 },
    { p: 'OK', t: 'Email confirmation — SENT', delay: 2.0 },
    { p: '$', t: 'Booking complete. Inshallah. ✓', delay: 2.4 },
  ];

  const json = JSON.stringify(result, null, 2);

  const PREFIX_COLORS: Record<string, string> = { '$': 'text-neon', 'OK': 'text-neon', 'ERR': 'text-red-400' };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-2xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
          className="w-16 h-16 rounded-full border-2 border-neon bg-neon/10 flex items-center justify-center mx-auto mb-4 shadow-neon-md"
        >
          <span className="text-neon text-2xl">✓</span>
        </motion.div>
        <h2 className="font-mono text-2xl font-bold text-white">BOOKING CONFIRMED</h2>
        <p className="font-mono text-xs text-[#71717A] mt-2">ref: {result.bookingId}</p>
      </div>

      {/* Terminal log */}
      <TerminalBlock title="booking_confirmation.log" className="mb-5">
        <div className="p-4 space-y-2">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: line.delay, duration: 0.3 }}
              className="flex gap-2 font-mono text-xs"
            >
              <span className={`font-bold ${PREFIX_COLORS[line.p]}`}>[{line.p}]</span>
              <span className="text-zinc-300">{line.t}</span>
            </motion.div>
          ))}
        </div>
      </TerminalBlock>

      {/* JSON output */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8 }}
        className="bg-[#09090B] border border-neon/20 rounded-lg overflow-hidden mb-5"
      >
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#27272A] bg-[#0A0A0C]">
          <span className="font-mono text-xs text-[#71717A]">booking_response.json</span>
          <button
            onClick={() => navigator.clipboard.writeText(json)}
            className="font-mono text-[10px] text-neon hover:text-neon-dim transition-colors"
          >
            copy
          </button>
        </div>
        <pre className="p-4 font-mono text-xs text-zinc-300 overflow-x-auto">
          <span className="text-[#52525B]" dangerouslySetInnerHTML={{ __html: json.replace(/"([^"]+)":/g, '"<span class="text-purple-400">$1</span>":') }} />
        </pre>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <Link href="/dashboard">
          <Button variant="primary" size="lg">
            View Dashboard →
          </Button>
        </Link>
        <Button
          variant="ghost"
          size="lg"
          onClick={() => window.print()}
        >
          ↓ Download Confirmation
        </Button>
        <Link href="/">
          <Button variant="ghost" size="lg">← Home</Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
