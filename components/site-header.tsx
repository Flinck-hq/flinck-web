"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="overflow-hidden rounded-2xl border border-slate-900/8 bg-white shadow-[0_12px_30px_rgba(22,61,42,0.12)]"
          >
            <Image
              src="/logo.jpg"
              alt="Flinck logo"
              width={44}
              height={44}
              className="h-11 w-11 object-cover"
              priority
            />
          </motion.div>
          <div>
            <p className="text-base font-semibold tracking-tight sm:text-lg">
              Flinck
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
              className="relative transition hover:text-slate-950 group"
            >
              {link.label}
              <motion.span 
                className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#163d2a]"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          type="button"
          aria-label={menuOpen ? "Close site menu" : "Open site menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/8 bg-white text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition hover:bg-slate-50"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm"
              onClick={closeMenu}
            />

            <motion.div 
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 top-0 z-50 pt-20"
            >
              <div className="mx-auto flex max-w-7xl flex-col px-4 pb-6 pt-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-[2rem] border border-slate-900/8 bg-white/96 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:p-5">
                  <div className="mb-4 border-b border-slate-900/8 pb-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                      Site menu
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                      Explore Flinck
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className="flex items-center justify-between rounded-[1.4rem] border border-slate-900/8 bg-[#fcfbf7] px-5 py-4 text-slate-900 transition hover:bg-white"
                        >
                          <span className="text-base font-medium tracking-tight">
                            {link.label}
                          </span>
                          <span className="text-sm text-slate-400">Open</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                    className="mt-4 flex items-center justify-center rounded-[1.4rem] bg-[#163d2a] px-5 py-4 text-base font-medium text-white shadow-[0_18px_50px_rgba(22,61,42,0.25)] transition hover:bg-[#0f2a1d]"
                  >
                    Download app
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
