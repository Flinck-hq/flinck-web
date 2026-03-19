"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { PLAY_STORE_URL, navLinks } from "@/lib/site-content";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : previous;

    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

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

        <button
          type="button"
          aria-label={menuOpen ? "Close site menu" : "Open site menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/8 bg-white text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition hover:bg-slate-50"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`site-menu-overlay ${menuOpen ? "site-menu-overlay-open" : ""}`}
        onClick={closeMenu}
      />

      <div className={`site-menu-panel ${menuOpen ? "site-menu-panel-open" : ""}`}>
        <div className="mx-auto flex max-w-7xl flex-col px-4 pb-6 pt-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-slate-900/8 bg-white/96 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:p-5">
            <div className="mb-4 border-b border-slate-900/8 pb-4">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Site menu
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                Explore Flink
              </p>
            </div>

            <div className="grid gap-3">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="site-menu-item flex items-center justify-between rounded-[1.4rem] border border-slate-900/8 bg-[#fcfbf7] px-5 py-4 text-slate-900 transition hover:bg-white"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-base font-medium tracking-tight">
                    {link.label}
                  </span>
                  <span className="text-sm text-slate-400">Open</span>
                </Link>
              ))}
            </div>

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="site-menu-item mt-4 flex items-center justify-center rounded-[1.4rem] bg-[#163d2a] px-5 py-4 text-base font-medium text-white shadow-[0_18px_50px_rgba(22,61,42,0.25)] transition hover:bg-[#0f2a1d]"
              style={{ animationDelay: `${navLinks.length * 50}ms` }}
            >
              Download app
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
