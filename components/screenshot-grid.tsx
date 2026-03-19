import Image from "next/image";
import { screenshots } from "@/lib/site-content";

export function ScreenshotGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr]">
      {screenshots.map((shot, index) => (
        <div
          key={shot.src}
          className={`relative mx-auto w-full max-w-sm overflow-hidden rounded-[2.25rem] border border-slate-900/8 bg-gradient-to-br ${shot.tone} p-4 shadow-[0_28px_80px_rgba(15,23,42,0.08)] md:max-w-none`}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_transparent_55%)]" />
          <div className="relative rounded-[1.8rem] bg-white/80 p-3 backdrop-blur">
            <div className="mb-3 flex items-center justify-between px-2">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                Screen 0{index + 1}
              </p>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300/80" />
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-900/8 bg-[#f5f2e9]">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={720}
                height={1600}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
