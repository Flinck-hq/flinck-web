"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const CONSENT_KEY = "flinck-cookie-consent";
const CONSENT_EVENT = "flinck-cookie-consent-change";

export function SiteAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const updateConsent = () => {
      setEnabled(localStorage.getItem(CONSENT_KEY) === "accepted");
    };

    updateConsent();
    window.addEventListener(CONSENT_EVENT, updateConsent);
    window.addEventListener("storage", updateConsent);

    return () => {
      window.removeEventListener(CONSENT_EVENT, updateConsent);
      window.removeEventListener("storage", updateConsent);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
