'use client';

import { useState, useEffect } from 'react';
import { TerminalBlock } from '@/components/ui/TerminalBlock';

const TERMINAL_LINES = [
  { prefix: '$', text: 'initializing umrah_booking_engine v2.4.1...' },
  { prefix: 'OK', text: 'Ministry of Hajj API — CONNECTED' },
  { prefix: 'OK', text: 'Saudi Airlines gateway — ONLINE' },
  { prefix: 'INFO', text: 'Loading certified packages...' },
  { prefix: 'OK', text: '3 packages loaded successfully' },
  { prefix: 'INFO', text: 'Visa processing queue: READY' },
  { prefix: '$', text: 'System ready. Awaiting pilgrim input.' },
];

export function TerminalTypewriter() {
  const [visibleLines, setVisibleLines] = useState<{prefix: string, text: string}[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (currentLine >= TERMINAL_LINES.length) {
      const t = setTimeout(() => {
        setVisibleLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
        setTyped('');
      }, 4000);
      return () => clearTimeout(t);
    }
    const line = TERMINAL_LINES[currentLine];
    if (currentChar < line.text.length) {
      const t = setTimeout(() => {
        setTyped((prev) => prev + line.text[currentChar]);
        setCurrentChar((c) => c + 1);
      }, 28);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, { prefix: line.prefix, text: typed + line.text.slice(typed.length) }]);
        setTyped('');
        setCurrentChar(0);
        setCurrentLine((l) => l + 1);
      }, 180);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar, typed]);

  const PREFIX_COLORS: Record<string, string> = {
    '$': 'text-neon', 'OK': 'text-neon', 'INFO': 'text-blue-400',
    'ERR': 'text-red-400', '>': 'text-amber',
  };

  return (
    <TerminalBlock title="system — umrah_engine@v2.4.1" showLiveIndicator className="h-full">
      <div className="p-4 font-mono text-xs space-y-1.5 min-h-[200px]">
        {visibleLines.map((line, i) => (
          <div key={i} className="flex gap-2">
            <span className={`shrink-0 font-bold ${PREFIX_COLORS[line.prefix] || 'text-[#71717A]'}`}>[{line.prefix}]</span>
            <span className="text-zinc-300">{line.text}</span>
          </div>
        ))}
        {currentLine < TERMINAL_LINES.length && (
          <div className="flex gap-2">
            <span className={`shrink-0 font-bold ${PREFIX_COLORS[TERMINAL_LINES[currentLine]?.prefix] || 'text-[#71717A]'}`}>
              [{TERMINAL_LINES[currentLine]?.prefix}]
            </span>
            <span className="text-zinc-300">
              {typed}
              <span className="inline-block w-2 h-3.5 bg-neon ml-px align-middle animate-[type-cursor_1s_step-end_infinite]" />
            </span>
          </div>
        )}
      </div>
    </TerminalBlock>
  );
}
