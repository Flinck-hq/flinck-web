"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
              alt="Flinck logo"
              width={44}
              height={44}
              className="h-11 w-11 object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-base font-semibold tracking-tight sm:text-lg">
              Flinck
            </p>
            <p className="hidden text-xs uppercase tracking-[0.24em] text-slate-500 sm:block">
              Ag social marketplace
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
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

        <div className="hidden items-center gap-3 md:flex">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-slate-300 bg-white/80"
          >
            <Link href="/partners">Partner</Link>
          </Button>
          <Button
            asChild
            className="rounded-full bg-[#163d2a] text-white hover:bg-[#10281d]"
          >
            <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
              Download
            </a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close site menu" : "Open site menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/8 bg-white text-slate-900 shadow-sm lg:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              className="fixed inset-x-0 top-0 z-50 pt-20 lg:hidden"
            >
              <div className="mx-auto max-w-7xl px-4 pb-6">
                <div className="rounded-[2rem] border border-slate-900/8 bg-white p-4 shadow-xl">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                    Menu
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-950">
                    Explore Flinck
                  </p>
                  <div className="mt-4 grid gap-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        className="rounded-[1.2rem] border border-slate-900/8 bg-[#fcfbf7] px-5 py-3 font-medium text-slate-900"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 grid gap-2">
                    <a
                      href={PLAY_STORE_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                      className="rounded-[1.2rem] bg-[#163d2a] px-5 py-3 text-center font-medium text-white"
                    >
                      Download app
                    </a>
                    <Link
                      href="/partners"
                      onClick={closeMenu}
                      className="rounded-[1.2rem] border border-slate-900/8 px-5 py-3 text-center font-medium"
                    >
                      Partner with us
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
