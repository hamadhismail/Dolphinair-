'use client';

import { PACKAGES } from '@/context/BookingContext';

export function InvoiceCalculator({ packageId, pilgrims }: { packageId: string | null; pilgrims: number }) {
  const pkg = PACKAGES.find((p) => p.id === packageId);
  const basePrice = pkg ? pkg.price : 0;
  const subtotal = basePrice * pilgrims;
  const tax = subtotal * 0.05; // 5% GST
  const total = subtotal + tax;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-[#0A0A0C] border border-[#27272A] rounded-lg overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-[#27272A] bg-[#09090B]">
        <span className="font-mono text-[10px] text-[#52525B]">invoice_calculator</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex justify-between font-mono text-xs text-zinc-300">
          <span>Base Price ({pkg?.name || 'Package'}) × {pilgrims}</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between font-mono text-xs text-zinc-300">
          <span>Taxes & Fees (5% GST)</span>
          <span>{formatCurrency(tax)}</span>
        </div>
        <div className="h-px bg-[#27272A] my-2" />
        <div className="flex justify-between font-mono text-sm font-bold text-white">
          <span>Total Estimated Cost</span>
          <span className="text-amber">{formatCurrency(total)}</span>
        </div>
      </div>
    </div>
  );
}
