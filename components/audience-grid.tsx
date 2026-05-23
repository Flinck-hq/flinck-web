import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { audiences } from "@/lib/site-content";

export function AudienceGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {audiences.map((audience) => {
        const Icon = audience.icon;
        return (
          <Link
            key={audience.slug}
            href={`/for/${audience.slug}`}
            className="reveal-card group rounded-[2rem] border border-slate-900/8 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:bg-white"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#163d2a] text-white">
              <Icon className="h-5 w-5" />
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.24em] text-[#1f7a45]">
              {audience.tagline}
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
              {audience.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {audience.description}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#163d2a]">
              Learn more
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
