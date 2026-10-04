"use client";

import { useEffect, useState } from "react";
import { siteData } from "@/lib/site-data";
import { PhoneIcon, PinIcon } from "@/components/ui/icons";

export function StickyActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (approx 300px)
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-label="Quick Actions"
      className="fixed inset-x-0 bottom-0 z-40 block border-t border-hairline bg-surface/95 px-4 py-3 backdrop-blur-md transition-all duration-300 sm:hidden"
    >
      <div className="flex items-center gap-2">
        <a
          href={siteData.location.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 text-[14px] font-medium text-white shadow-sm active:scale-95"
        >
          <PinIcon />
          <span>Directions</span>
        </a>

        <a
          href={`tel:${siteData.phone}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-hairline bg-panel px-4 py-3 text-[14px] font-medium text-ink shadow-sm active:scale-95"
        >
          <PhoneIcon />
          <span>Call Admin</span>
        </a>

        <a
          href={siteData.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Aayush EV"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-hairline bg-panel text-emerald-600 shadow-sm active:scale-95"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
