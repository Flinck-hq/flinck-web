import Image from "next/image";
import { screenshots } from "@/lib/site-content";

export function ScreenshotGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {screenshots.map((shot, index) => (
        <div
          key={shot.src}
          className={`relative overflow-hidden rounded-[2.4rem] border border-slate-900/8 bg-gradient-to-br ${shot.tone} p-4 shadow-[0_28px_90px_rgba(15,23,42,0.08)]`}
        >
          <div className="relative rounded-[2rem] border border-white/60 bg-white/78 p-4 backdrop-blur-xl">
            <div className="mt-4 overflow-hidden rounded-[1.7rem] border border-slate-900/8 bg-[#f5f2e9]">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={720}
                height={1600}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
