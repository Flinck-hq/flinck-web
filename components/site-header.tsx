import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PLAY_STORE_URL, navLinks } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-900/10 bg-[#f6f3ea]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="overflow-hidden rounded-2xl border border-slate-900/8 bg-white shadow-[0_12px_30px_rgba(22,61,42,0.12)]">
            <Image
              src="/logo.jpg"
              alt="Flink logo"
              width={44}
              height={44}
              className="h-11 w-11 object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-base font-semibold tracking-tight sm:text-lg">
              Flink
            </p>
            <p className="hidden text-xs uppercase tracking-[0.24em] text-slate-500 sm:block">
              Precision for modern farming
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Button
          asChild
          className="h-11 rounded-full bg-[#163d2a] px-4 text-white hover:bg-[#0f2a1d] sm:px-5"
        >
          <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
            Download app
          </a>
        </Button>
      </div>
    </nav>
  );
}
