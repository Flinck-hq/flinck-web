import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PLAY_STORE_URL } from "@/lib/site-content";

export function HomeCta() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="relative mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2rem] bg-[#101b16] px-5 py-10 text-white shadow-[0_32px_90px_rgba(0,0,0,0.26)] sm:rounded-[3.5rem] sm:px-10 sm:py-20 sm:shadow-[0_40px_120px_rgba(0,0,0,0.3)] lg:grid-cols-[1fr_auto] lg:items-center lg:px-20">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/platform-dashboard.png"
            alt=""
            fill
            className="object-cover grayscale"
          />
        </div>
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d6f277]">
            Get started
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl sm:tracking-[-0.05em]">
            Join the agricultural network built for everyone.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:mt-6 sm:text-lg">
            Download Flinck on Android or become a sponsor to support the open agricultural infrastructure.
          </p>
        </div>
        <div className="relative z-10 flex flex-col gap-4 sm:flex-row lg:flex-col">
          <Button
            asChild
            size="lg"
            className="h-[3.25rem] w-full rounded-full bg-[#d6f277] px-6 text-base text-slate-950 hover:bg-[#c9eb61] sm:h-14 sm:w-auto sm:px-8"
          >
            <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
              Download for Android
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-[3.25rem] w-full rounded-full border-white/30 bg-transparent px-6 text-base text-white hover:bg-white/10 sm:h-14 sm:w-auto sm:px-8"
          >
            <a href="/sponsors">Sponsor Flinck</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
