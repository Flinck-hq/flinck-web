"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "flinck-cookie-consent";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const setConsent = (value: "accepted" | "declined") => {
    localStorage.setItem(CONSENT_KEY, value);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:max-w-md"
        >
          <div className="rounded-[2rem] border border-slate-900/8 bg-white/95 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.15)] backdrop-blur-2xl">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#163d2a] text-[#d6f277]">
                <Cookie className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-950">
                    Cookie notice
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsVisible(false)}
                    aria-label="Dismiss cookie notice"
                    className="rounded-full p-1 text-slate-400 hover:bg-slate-100"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We use cookies for analytics and to improve your experience.{" "}
                  <Link href="/policy" className="font-medium text-[#163d2a] underline">
                    Privacy policy
                  </Link>
                </p>
                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <Button
                    onClick={() => setConsent("accepted")}
                    className="h-11 flex-1 rounded-full bg-[#163d2a] text-sm text-white hover:bg-[#0f2a1d]"
                  >
                    Accept
                  </Button>
                  <Button
                    onClick={() => setConsent("declined")}
                    variant="outline"
                    className="h-11 flex-1 rounded-full text-sm"
                  >
                    Decline
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
