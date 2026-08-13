export function RingMotif({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 600 600" className="h-full w-full">
        <defs>
          <linearGradient id="pvl-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--brand-cyan)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <circle cx="300" cy="300" r="290" fill="none" stroke="url(#pvl-ring)" strokeWidth="2" />
        <circle cx="300" cy="300" r="240" fill="none" stroke="url(#pvl-ring)" strokeWidth="10" />
        <circle cx="300" cy="300" r="196" fill="none" stroke="url(#pvl-ring)" strokeWidth="26" />
        <circle cx="300" cy="300" r="150" fill="var(--indigo-core)" opacity="0.55" />
        <circle
          cx="300"
          cy="300"
          r="268"
          fill="none"
          stroke="var(--brand-cyan)"
          strokeWidth="1.5"
          strokeDasharray="6 22"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
