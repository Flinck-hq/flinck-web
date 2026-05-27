"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "flinck-cookie-consent";
const CONSENT_EVENT = "flinck-cookie-consent-change";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent) {
      return;
    }

    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (!isMobile) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }

    const showAfterHeroImage = () => {
      const trigger = document.querySelector<HTMLElement>("[data-cookie-trigger]");
      const triggerBottom = trigger?.getBoundingClientRect().bottom;
      const hasCrossedTrigger = triggerBottom
        ? triggerBottom < window.innerHeight * 0.72
        : window.scrollY > 520;

      if (hasCrossedTrigger) {
        setIsVisible(true);
        window.removeEventListener("scroll", showAfterHeroImage);
        window.removeEventListener("resize", showAfterHeroImage);
      }
    };

    showAfterHeroImage();
    window.addEventListener("scroll", showAfterHeroImage, { passive: true });
    window.addEventListener("resize", showAfterHeroImage);

    return () => {
      window.removeEventListener("scroll", showAfterHeroImage);
      window.removeEventListener("resize", showAfterHeroImage);
    };
  }, []);

  const setConsent = (value: "accepted" | "declined") => {
    localStorage.setItem(CONSENT_KEY, value);
    window.dispatchEvent(new Event(CONSENT_EVENT));
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-[100] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:max-w-md">
      <div className="rounded-2xl border border-slate-900/8 bg-white/95 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.14)] backdrop-blur-2xl sm:rounded-[2rem] sm:p-6 sm:shadow-[0_30px_100px_rgba(0,0,0,0.15)]">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#163d2a] text-[#d6f277] sm:flex">
            <Cookie className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-950 sm:text-lg">
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
            <p className="mt-1 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6">
              We remember your choice in this browser and only load optional analytics if you accept.{" "}
              <Link href="/policy" className="font-medium text-[#163d2a] underline">
                Privacy policy
              </Link>
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-5">
              <Button
                onClick={() => setConsent("accepted")}
                className="h-10 rounded-full bg-[#163d2a] text-xs text-white hover:bg-[#0f2a1d] sm:h-11 sm:text-sm"
              >
                Accept
              </Button>
              <Button
                onClick={() => setConsent("declined")}
                variant="outline"
                className="h-10 rounded-full text-xs sm:h-11 sm:text-sm"
              >
                Decline
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
