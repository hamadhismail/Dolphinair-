export function Footer() {
  return (
    <footer className="border-t border-[#27272A] py-8 px-6 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm text-[#52525B]">
          © 2025 <span className="text-neon">DOLPHIN_HAJ</span> — Tamil Nadu, India
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[#52525B]">
          <span>Govt Reg: TN/HAJ/2024/001</span>
          <span className="text-[#27272A] hidden sm:inline">|</span>
          <span>Saudi MOFA Approved</span>
          <span className="text-[#27272A] hidden sm:inline">|</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            <span className="text-neon">ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
