import Link from "next/link";
import { PLAY_STORE_URL, navLinks } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-900/8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-600 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="text-base font-semibold tracking-tight text-slate-950">
            Flink
          </p>
          <p className="mt-2 leading-7">
            Premium agri intelligence, marketplace execution, and mobile-first
            farmer workflows built for real trade.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-3">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-slate-950">
              {link.label}
            </Link>
          ))}
          <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer" className="hover:text-slate-950">
            Play Store
          </a>
        </div>
      </div>
    </footer>
  );
}
