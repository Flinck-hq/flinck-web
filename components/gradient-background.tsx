"use client";

interface GradientBackgroundProps {
  className?: string;
}

export function GradientBackground({ className }: GradientBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      <div
        className="absolute -top-40 -right-40 h-[600px] w-[600px] animate-gradient rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(59,130,246,0.04) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-40 -left-40 h-[500px] w-[500px] animate-gradient rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.06) 0%, rgba(37,99,235,0.03) 40%, transparent 70%)",
          animationDelay: "-3s",
        }}
      />
    </div>
  );
}
