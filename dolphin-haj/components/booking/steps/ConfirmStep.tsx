'use client';

import { PACKAGES, type BookingFormData } from '@/context/BookingContext';
import { InvoiceCalculator } from '@/components/booking/InvoiceCalculator';

export function ConfirmStep({ formData, updateForm }: { formData: BookingFormData, updateForm: (updates: Partial<BookingFormData>) => void }) {
  const pkg = PACKAGES.find((p) => p.id === formData.packageId);

  return (
    <div>
      <div className="font-mono text-xs text-[#52525B] mb-6">// step_05: review_and_confirm</div>

      {/* Summary */}
      <div className="space-y-3 mb-6">
        {[
          { label: 'package', value: pkg?.name || '—' },
          { label: 'pilgrims', value: formData.pilgrims || 1 },
          { label: 'name', value: formData.name || '—' },
          { label: 'phone', value: formData.phone || '—' },
          { label: 'email', value: formData.email || '—' },
          { label: 'travel_date', value: formData.travelDate || '—' },
          { label: 'return_date', value: formData.returnDate || '—' },
          { label: 'docs_submitted', value: formData.passportSubmitted && formData.photoSubmitted ? 'true' : 'false' },
        ].map((item) => (
          <div key={item.label} className="flex gap-3 font-mono text-xs py-1.5 border-b border-[#27272A]/50">
            <span className="text-purple-400 w-32 shrink-0">{item.label}</span>
            <span className="text-[#52525B]">:</span>
            <span className="text-zinc-300">{item.value}</span>
          </div>
        ))}
      </div>

      <InvoiceCalculator packageId={formData.packageId} pilgrims={formData.pilgrims || 1} />

      <div className="mt-5 p-4 bg-[#09090B] border border-[#27272A] rounded-lg">
        <label className="flex items-start gap-3 cursor-pointer">
          <div
            onClick={() => updateForm({ invoiceAccepted: !formData.invoiceAccepted })}
            className={`mt-0.5 w-4 h-4 rounded border-2 flex items-center justify-center transition-all shrink-0 ${
              formData.invoiceAccepted ? 'border-neon bg-neon' : 'border-[#3F3F46]'
            }`}
          >
            {formData.invoiceAccepted && <span className="text-void text-[10px] font-bold">✓</span>}
          </div>
          <span className="font-mono text-xs text-[#71717A]">
            I confirm the above details are correct and agree to the terms and conditions of Dolphin Haj.
          </span>
        </label>
      </div>
    </div>
  );
}
