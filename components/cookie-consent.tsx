"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("flink-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("flink-cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:max-w-md"
        >
          <div className="overflow-hidden rounded-[2rem] border border-slate-900/8 bg-white/90 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.15)] backdrop-blur-2xl">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#163d2a] text-[#d6f277] shadow-[0_12px_24px_rgba(22,61,42,0.2)]">
                <Cookie className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                    Cookie Notice
                  </h3>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We use cookies to enhance your experience, analyze site traffic, and serve better agricultural insights.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Button
                    onClick={acceptCookies}
                    className="h-11 flex-1 rounded-full bg-[#163d2a] text-sm text-white hover:bg-[#0f2a1d]"
                  >
                    Accept all
                  </Button>
                  <Button
                    onClick={acceptCookies}
                    variant="outline"
                    className="h-11 flex-1 rounded-full border-slate-200 text-sm hover:bg-slate-50"
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
