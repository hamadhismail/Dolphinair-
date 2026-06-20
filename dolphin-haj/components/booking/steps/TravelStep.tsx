'use client';

import { type BookingFormData } from '@/context/BookingContext';

export function TravelStep({ formData, updateForm }: { formData: BookingFormData, updateForm: (updates: Partial<BookingFormData>) => void }) {
  const fields = [
    { key: 'travelDate' as const, label: 'departure_date', note: 'Makkah arrival date' },
    { key: 'returnDate' as const, label: 'return_date', note: 'Estimated return to India' },
  ];

  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <div className="font-mono text-xs text-[#52525B] mb-6">// step_04: travel_configuration</div>
      <div className="space-y-5">
        {fields.map((f) => (
          <div key={f.key}>
            <label className="font-mono text-xs text-[#71717A] mb-2 block">
              <span className="text-purple-400">let</span> {f.label}{' '}
              <span className="text-[#52525B]">// {f.note}</span>
            </label>
            <input
              type="date"
              value={formData[f.key] as string || ''}
              min={today}
              onChange={(e) => updateForm({ [f.key]: e.target.value })}
              className="w-full bg-[#09090B] border border-[#27272A] rounded-lg px-4 py-3 font-mono text-sm text-white focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/30 transition-all [color-scheme:dark]"
            />
          </div>
        ))}

        <div className="grid grid-cols-2 gap-4 mt-2">
          {[
            { label: 'Makkah Stay', value: '14 nights' },
            { label: 'Madinah Stay', value: '8 nights' },
            { label: 'Transit', value: 'via Jeddah' },
            { label: 'Group Size', value: `${formData.pilgrims || 1} pilgrim${formData.pilgrims > 1 ? 's' : ''}` },
          ].map((item) => (
            <div key={item.label} className="bg-[#09090B] border border-[#27272A] rounded-lg p-3">
              <div className="font-mono text-[10px] text-[#52525B]">{item.label}</div>
              <div className="font-mono text-xs text-white mt-1">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
