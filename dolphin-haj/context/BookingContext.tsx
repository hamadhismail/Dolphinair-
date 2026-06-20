'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

export interface Package {
  id: string;
  name: string;
  label: string;
  price: number;
  priceDisplay: string;
  duration: string;
  distance: string;
  hotel: string;
  features: string[];
  color: 'neon' | 'amber';
  badge: string | null;
}

export const PACKAGES: Package[] = [
  {
    id: 'economy',
    name: 'Economy',
    label: 'ECONOMY',
    price: 450000,
    priceDisplay: '₹4,50,000',
    duration: '25 Days',
    distance: '500m from Haram',
    hotel: 'Economy Hotels',
    features: [
      'Economy 3★ Hotels',
      'Group Transport',
      'Basic Guidance',
      'Tamil Support',
      'Visa Processing',
    ],
    color: 'neon',
    badge: null,
  },
  {
    id: 'standard',
    name: 'Standard',
    label: 'STANDARD',
    price: 650000,
    priceDisplay: '₹6,50,000',
    duration: '28 Days',
    distance: '200m from Haram',
    hotel: '5★ Hotels',
    features: [
      '5★ Hotels',
      'VIP Transport',
      'Personal Guide',
      'Tamil Support',
      'Visa Processing',
      'Ziyarath Tours',
    ],
    color: 'amber',
    badge: 'MOST POPULAR',
  },
  {
    id: 'premium',
    name: 'Premium',
    label: 'PREMIUM',
    price: 950000,
    priceDisplay: '₹9,50,000',
    duration: '35 Days',
    distance: '100m from Haram',
    hotel: 'Luxury 5★',
    features: [
      'Luxury 5★ Hotels',
      'Private Jet Option',
      '24/7 Personal Support',
      'VIP Services',
      'Visa Processing',
      'Ziyarath Tours',
      'Exclusive Lounge Access',
    ],
    color: 'amber',
    badge: 'EXECUTIVE',
  },
];

export interface BookingFormData {
  packageId: string | null;
  pilgrims: number;
  name: string;
  phone: string;
  email: string;
  passportFile: File | null;
  passportSubmitted: boolean;
  photoFile: File | null;
  photoSubmitted: boolean;
  travelDate: string;
  returnDate: string;
  invoiceAccepted: boolean;
}

export interface BookingResult {
  bookingId: string;
  timestamp: string;
  status: string;
  package: string | null;
  pilgrims: number;
  notifications_dispatched: string[];
}

interface BookingContextType {
  step: number;
  formData: BookingFormData;
  bookingResult: BookingResult | null;
  setStep: (s: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (s: number) => void;
  updateForm: (updates: Partial<BookingFormData>) => void;
  selectPackage: (packageId: string) => void;
  submitBooking: () => void;
  packages: Package[];
}

const INITIAL_FORM: BookingFormData = {
  packageId: null,
  pilgrims: 1,
  name: '',
  phone: '',
  email: '',
  passportFile: null,
  passportSubmitted: false,
  photoFile: null,
  photoSubmitted: false,
  travelDate: '',
  returnDate: '',
  invoiceAccepted: false,
};

const BookingContext = createContext<BookingContextType | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>(INITIAL_FORM);
  const [bookingResult, setBookingResult] = useState<BookingResult | null>(null);

  const updateForm = (updates: Partial<BookingFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 5));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));
  const goToStep = (s: number) => setStep(s);

  const selectPackage = (packageId: string) => {
    updateForm({ packageId });
  };

  const submitBooking = () => {
    const bookingId = `DH-${Date.now().toString(36).toUpperCase()}`;
    setBookingResult({
      bookingId,
      timestamp: new Date().toISOString(),
      status: 'SUBMITTED',
      package: formData.packageId,
      pilgrims: formData.pilgrims,
      notifications_dispatched: ['SMS', 'WHATSAPP', 'EMAIL'],
    });
  };

  return (
    <BookingContext.Provider value={{
      step, formData, bookingResult,
      setStep, nextStep, prevStep, goToStep,
      updateForm, selectPackage, submitBooking,
      packages: PACKAGES,
    }}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within BookingProvider');
  return ctx;
};
