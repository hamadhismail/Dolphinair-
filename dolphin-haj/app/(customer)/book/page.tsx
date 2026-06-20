'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useBooking, type BookingFormData } from '@/context/BookingContext';
import { Button } from '@/components/ui/Button';
import { StepIndicator } from '@/components/booking/StepIndicator';
import { TelemetryPanel } from '@/components/booking/TelemetryPanel';
import { PackageStep } from '@/components/booking/steps/PackageStep';
import { IdentityStep } from '@/components/booking/steps/IdentityStep';
import { DocumentStep } from '@/components/booking/steps/DocumentStep';
import { TravelStep } from '@/components/booking/steps/TravelStep';
import { ConfirmStep } from '@/components/booking/steps/ConfirmStep';
import { SuccessTerminal } from '@/components/booking/SuccessTerminal';

function canProceed(step: number, formData: BookingFormData) {
  if (step === 1) return !!formData.packageId;
  if (step === 2) return !!(formData.name && formData.phone && formData.email);
  if (step === 3) return !!(formData.passportSubmitted && formData.photoSubmitted);
  if (step === 4) return !!(formData.travelDate && formData.returnDate);
  if (step === 5) return !!formData.invoiceAccepted;
  return true;
}

export default function BookPage() {
  const { step, formData, bookingResult, nextStep, prevStep, updateForm, submitBooking } = useBooking();

  const steps = [PackageStep, IdentityStep, DocumentStep, TravelStep, ConfirmStep];
  const CurrentStep = steps[step - 1];

  const handleNext = () => {
    if (step === 5) {
      submitBooking();
    } else {
      nextStep();
    }
  };

  return (
    <div className="pt-20 pb-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="font-mono text-xs text-[#52525B] mb-2">$ ./book_umrah --interactive</div>
        <h1 className="font-mono text-3xl font-bold text-white">
          BOOKING ENGINE<span className="text-neon animate-[type-cursor_1s_step-end_infinite]">_</span>
        </h1>
      </div>

      {bookingResult ? (
        <SuccessTerminal result={bookingResult} />
      ) : (
        <>
          {/* Step indicator */}
          <div className="mb-10">
            <StepIndicator currentStep={step} />
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Left: Telemetry */}
            <div className="hidden lg:block">
              <TelemetryPanel formData={formData} step={step} />
            </div>

            {/* Right: Input */}
            <div className="bg-[#09090B] border border-[#27272A] rounded-xl p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  {CurrentStep && <CurrentStep formData={formData} updateForm={updateForm} />}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#27272A]">
                <Button
                  variant="ghost"
                  onClick={prevStep}
                  disabled={step === 1}
                >
                  ← Back
                </Button>
                <div className="font-mono text-xs text-[#52525B]">
                  step {step} of 5
                </div>
                <Button
                  variant="primary"
                  onClick={handleNext}
                  disabled={!canProceed(step, formData)}
                >
                  {step === 5 ? 'Submit Booking →' : 'Continue →'}
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
