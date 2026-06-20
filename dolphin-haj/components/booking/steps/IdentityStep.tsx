'use client';

import { type BookingFormData } from '@/context/BookingContext';

export function IdentityStep({ formData, updateForm }: { formData: BookingFormData, updateForm: (updates: Partial<BookingFormData>) => void }) {
  const fields = [
    { key: 'name' as const, label: 'full_name', placeholder: 'Ahmad Rahman', type: 'text' },
    { key: 'phone' as const, label: 'phone_number', placeholder: '+91 98765 43210', type: 'tel' },
    { key: 'email' as const, label: 'email_address', placeholder: 'user@example.com', type: 'email' },
  ];

  return (
    <div>
      <div className="font-mono text-xs text-[#52525B] mb-6">// step_02: identity_verification</div>
      <div className="space-y-5">
        {fields.map((f) => (
          <div key={f.key}>
            <label className="font-mono text-xs text-[#71717A] mb-2 block">
              <span className="text-purple-400">const</span> {f.label}
            </label>
            <input
              type={f.type}
              placeholder={f.placeholder}
              value={formData[f.key] as string || ''}
              onChange={(e) => updateForm({ [f.key]: e.target.value })}
              className="w-full bg-[#09090B] border border-[#27272A] rounded-lg px-4 py-3 font-mono text-sm text-white placeholder-[#3F3F46] focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/30 transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
