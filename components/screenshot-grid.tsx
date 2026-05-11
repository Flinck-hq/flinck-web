import Image from "next/image";
import { screenshots } from "@/lib/site-content";

export function ScreenshotGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      {screenshots.map((shot, index) => (
        <div
          key={shot.src}
          className={`group relative overflow-hidden rounded-[2.4rem] border border-slate-900/8 bg-gradient-to-br ${shot.tone} p-4 shadow-[0_28px_90px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_36px_120px_rgba(15,23,42,0.12)]`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.72),_transparent_45%)]" />
          <div className="absolute -right-14 top-14 h-44 w-44 rounded-full bg-white/30 blur-3xl transition duration-500 group-hover:scale-110" />
          <div className="relative rounded-[2rem] border border-white/60 bg-white/78 p-4 backdrop-blur-xl sm:p-5">
            <div className="mb-4 flex items-center justify-between px-1">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">
                  Screen 0{index + 1}
                </p>
                <p className="mt-1 text-lg font-semibold tracking-tight text-slate-950">
                  {index === 0 ? "Daily command center" : "Identity and operator trust"}
                </p>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300/80" />
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.7rem] border border-slate-900/8 bg-[#f5f2e9]">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={720}
                height={1600}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
