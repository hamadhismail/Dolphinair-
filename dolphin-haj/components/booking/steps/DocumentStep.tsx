'use client';

import { type BookingFormData } from '@/context/BookingContext';
import { FileDropzone } from '@/components/booking/FileDropzone';

export function DocumentStep({ formData, updateForm }: { formData: BookingFormData, updateForm: (updates: Partial<BookingFormData>) => void }) {
  return (
    <div>
      <div className="font-mono text-xs text-[#52525B] mb-6">// step_03: document_upload</div>
      <div className="space-y-6">
        <FileDropzone
          label="passport_scan (PDF/JPG)"
          accept=".pdf,.jpg,.jpeg,.png"
          onFile={(f) => updateForm({ passportFile: f, passportSubmitted: !!f })}
          submitted={formData.passportSubmitted}
        />
        <FileDropzone
          label="passport_photo (JPG)"
          accept=".jpg,.jpeg,.png"
          onFile={(f) => updateForm({ photoFile: f, photoSubmitted: !!f })}
          submitted={formData.photoSubmitted}
        />
        <div className="bg-[#09090B] border border-[#27272A] rounded-lg p-4">
          <div className="font-mono text-[10px] text-[#52525B] space-y-1">
            <div className="text-amber">// requirements</div>
            <div>• Passport must be valid for 6+ months from travel date</div>
            <div>• Photo: white background, recent 6 months, 35x45mm</div>
            <div>• File size: max 5MB per document</div>
            <div>• Accepted: JPG, PNG, PDF</div>
          </div>
        </div>
      </div>
    </div>
  );
}
