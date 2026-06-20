'use client';

import { useState } from 'react';
import { StatusBadge } from '@/components/ui/StatusBadge';

export interface BookingRow {
  id: string;
  name: string;
  package: string;
  pax: number;
  date: string;
  status: any;
}

const mockData: BookingRow[] = [
  { id: 'DH-99214', name: 'Ahmad Rahman', package: 'PREMIUM', pax: 4, date: '12 Oct 2024', status: 'DOCS_VERIFIED' },
  { id: 'DH-88312', name: 'Zainab Ali', package: 'STANDARD', pax: 2, date: '11 Oct 2024', status: 'SUBMITTED' },
  { id: 'DH-77190', name: 'Mohammed Farooq', package: 'ECONOMY', pax: 1, date: '10 Oct 2024', status: 'VISA_IN_TRANSIT' },
  { id: 'DH-66234', name: 'Fatima Shaikh', package: 'PREMIUM', pax: 5, date: '08 Oct 2024', status: 'VISA_APPROVED' },
  { id: 'DH-55111', name: 'Usman Ghani', package: 'STANDARD', pax: 3, date: '05 Oct 2024', status: 'FLIGHT_CONFIRMED' },
];

export function BookingsTable({ onRowClick }: { onRowClick: (booking: BookingRow) => void }) {
  const [filter, setFilter] = useState('ALL');

  const filtered = filter === 'ALL' ? mockData : mockData.filter(d => d.status.includes(filter));

  return (
    <div className="bg-[#09090B] border border-[#27272A] rounded-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-[#27272A]">
        <div className="font-mono text-xs text-[#71717A]">// bookings.table()</div>
        <select 
          className="bg-[#0A0A0C] border border-[#27272A] rounded px-2 py-1 font-mono text-[10px] text-white focus:outline-none"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="ALL">ALL_STATUS</option>
          <option value="SUBMITTED">SUBMITTED</option>
          <option value="VISA">VISA_PROC</option>
        </select>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full data-table">
          <thead>
            <tr className="bg-[#0A0A0C] text-left text-[#52525B]">
              <th>BOOKING_ID</th>
              <th>PRIMARY_PAX</th>
              <th>PACKAGE</th>
              <th>PAX</th>
              <th>DATE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr 
                key={row.id} 
                onClick={() => onRowClick(row)}
                className="cursor-pointer transition-colors"
              >
                <td className="text-neon">{row.id}</td>
                <td className="text-zinc-300">{row.name}</td>
                <td className={row.package === 'PREMIUM' ? 'text-amber' : 'text-zinc-300'}>{row.package}</td>
                <td className="text-zinc-400">{row.pax}</td>
                <td className="text-zinc-400">{row.date}</td>
                <td><StatusBadge status={row.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-3 border-t border-[#27272A] bg-[#0A0A0C] font-mono text-[10px] text-[#52525B] text-right">
        Showing {filtered.length} of 4,281 records
      </div>
    </div>
  );
}
