'use client';

import { useState } from 'react';
import { StatsRow } from '@/components/admin/StatsRow';
import { BookingsTable, type BookingRow } from '@/components/admin/BookingsTable';
import { SlidePanel } from '@/components/admin/SlidePanel';

export default function AdminDashboardPage() {
  const [selectedBooking, setSelectedBooking] = useState<BookingRow | null>(null);

  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="mb-10">
        <div className="font-mono text-xs text-red-400 mb-2">$ sudo ./admin_console</div>
        <h1 className="font-mono text-3xl font-bold text-white">
          INFRASTRUCTURE_CONTROL<span className="text-neon animate-[type-cursor_1s_step-end_infinite]">_</span>
        </h1>
      </div>

      <div className="space-y-8">
        <StatsRow />
        <BookingsTable onRowClick={setSelectedBooking} />
      </div>

      <SlidePanel booking={selectedBooking} onClose={() => setSelectedBooking(null)} />
    </div>
  );
}
