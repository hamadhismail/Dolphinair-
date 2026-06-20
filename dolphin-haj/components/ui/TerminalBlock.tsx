export function TerminalBlock({
  title,
  showLiveIndicator = false,
  children,
  className = '',
}: {
  title: string;
  showLiveIndicator?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-[#09090B] border border-[#27272A] rounded-lg overflow-hidden ${className}`}>
      {/* Title Bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#27272A] bg-[#0A0A0C]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-900/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-neon/40" />
        </div>
        <span className="font-mono text-xs text-[#71717A] ml-2">{title}</span>
        
        {showLiveIndicator && (
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            <span className="font-mono text-[10px] text-neon">LIVE</span>
          </div>
        )}
      </div>
      
      {/* Content */}
      {children}
    </div>
  );
}
