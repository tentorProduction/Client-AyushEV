"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "aayush-privacy-consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(CONSENT_KEY);
      if (!consent) {
        setShow(true);
      }
    } catch {
      // Ignore if localStorage is disabled
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "accepted");
    } catch {}
    setShow(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "declined");
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside
      aria-label="Privacy and Cookie Notice"
      className="fixed bottom-16 sm:bottom-6 right-4 left-4 sm:left-auto sm:max-w-md z-50 rounded-2xl border border-hairline bg-surface/98 p-5 shadow-2xl backdrop-blur-md"
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-[14px] font-semibold text-ink">
          Privacy & Preferences
        </h4>
        <button
          type="button"
          onClick={handleDecline}
          aria-label="Close Notice"
          className="text-ink-soft hover:text-ink text-xs"
        >
          ✕
        </button>
      </div>
      <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
        We respect your privacy. This site uses local storage strictly for site preferences and does not track personal identifying data without consent.
      </p>
      <div className="mt-4 flex items-center gap-2.5">
        <button
          type="button"
          onClick={handleAccept}
          className="cursor-pointer rounded-lg bg-ink px-4 py-2 text-[12.5px] font-medium text-white transition-opacity hover:opacity-90"
        >
          Accept Preferences
        </button>
        <button
          type="button"
          onClick={handleDecline}
          className="cursor-pointer rounded-lg border border-hairline bg-panel px-3.5 py-2 text-[12.5px] font-medium text-ink hover:border-ink/50"
        >
          Essential Only
        </button>
        <a
          href="/privacy"
          className="ml-auto text-[12px] text-ink-soft underline underline-offset-4 hover:text-ink"
        >
          Privacy Policy
        </a>
      </div>
    </aside>
  );
}
