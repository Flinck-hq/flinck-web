import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroCopy, highlights, PLAY_STORE_URL } from "@/lib/site-content";

export function HomeHero() {
  return (
    <section className="relative px-4 pb-12 pt-6 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12">
        <div>
          <div className="reveal-card mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#163d2a]/12 bg-white/78 px-3 py-2 text-[11px] leading-5 text-slate-700 shadow-sm backdrop-blur sm:mb-6 sm:px-4 sm:text-sm">
            <Sparkles className="h-4 w-4 shrink-0 text-[#1f7a45]" />
            {heroCopy.eyebrow}
          </div>

          <h1 className="max-w-4xl text-[2.65rem] font-semibold leading-[0.98] tracking-[-0.04em] text-slate-950 sm:text-5xl sm:leading-[1.02] lg:text-6xl">
            {heroCopy.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {heroCopy.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-[3.25rem] w-full rounded-full bg-[#163d2a] px-5 text-sm text-white hover:bg-[#10281d] sm:h-14 sm:w-auto sm:px-7 sm:text-base"
            >
              <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
                {heroCopy.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-[3.25rem] w-full rounded-full border-slate-300 bg-white/70 px-5 text-sm text-slate-900 hover:bg-white sm:h-14 sm:w-auto sm:px-7 sm:text-base"
            >
              <Link href="/how-it-works">{heroCopy.secondaryCta}</Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.value}
                className="reveal-card rounded-[1.8rem] border border-slate-900/8 bg-white/76 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <p className="text-lg font-semibold tracking-tight text-slate-950">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            data-cookie-trigger
            className="relative mx-auto max-w-sm overflow-hidden rounded-[1.75rem] border border-slate-900/10 bg-white p-2 shadow-[0_28px_70px_rgba(22,61,42,0.14)] sm:max-w-none sm:rounded-[2.5rem] sm:shadow-[0_40px_100px_rgba(22,61,42,0.15)]"
          >
            <Image
              src="/hero-mockup.png"
              alt="Flinck mobile app"
              width={1200}
              height={1200}
              className="h-auto w-full rounded-[1.5rem] object-cover sm:rounded-[2.2rem]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
