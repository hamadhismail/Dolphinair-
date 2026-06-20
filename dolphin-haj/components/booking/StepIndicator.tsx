export function StepIndicator({ currentStep }: { currentStep: number }) {
  const steps = [
    { num: 1, label: 'PKG' },
    { num: 2, label: 'ID' },
    { num: 3, label: 'DOCS' },
    { num: 4, label: 'DATE' },
    { num: 5, label: 'CONFIRM' },
  ];

  return (
    <div className="flex items-center w-full">
      {steps.map((step, i) => {
        const isPast = currentStep > step.num;
        const isActive = currentStep === step.num;
        
        return (
          <div key={step.num} className="flex items-center flex-1 last:flex-none">
            <div className="relative flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-mono text-xs transition-all duration-300 ${
                  isActive
                    ? 'border-neon bg-neon text-void shadow-neon-sm'
                    : isPast
                    ? 'border-neon bg-neon/10 text-neon'
                    : 'border-[#3F3F46] bg-[#0A0A0C] text-[#52525B]'
                }`}
              >
                {isPast ? '✓' : step.num}
              </div>
              <div
                className={`absolute top-10 font-mono text-[10px] whitespace-nowrap transition-colors duration-300 ${
                  isActive ? 'text-neon font-bold' : isPast ? 'text-[#71717A]' : 'text-[#52525B]'
                }`}
              >
                {step.label}
              </div>
            </div>
            
            {i < steps.length - 1 && (
              <div className="flex-1 mx-2 h-0.5 bg-[#27272A] relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-neon transition-transform duration-500 origin-left"
                  style={{ transform: `scaleX(${isPast ? 1 : 0})` }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
