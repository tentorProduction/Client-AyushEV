"use client";

import { useSyncExternalStore } from "react";
import { siteData } from "@/lib/site-data";

const key = "aayush-map-consent";
const event = "aayush-map-preference";
let memoryPreference = false;
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(event, callback);
  return () => { window.removeEventListener("storage", callback); window.removeEventListener(event, callback); };
}
function snapshot() {
  try { return localStorage.getItem(key) === "allowed"; } catch { return memoryPreference; }
}
function choose(allowed: boolean) {
  memoryPreference = allowed;
  try { localStorage.setItem(key, allowed ? "allowed" : "declined"); } catch { /* Storage may be disabled. */ }
  window.dispatchEvent(new Event(event));
}

export function ConsentMap() {
  const allowed = useSyncExternalStore(subscribe, snapshot, () => false);
  return <>
    <div className="aspect-[4/3] w-full">
      {allowed ? <iframe src={siteData.location.mapEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer" title="Aayush EV location on Google Maps" /> :
        <div className="flex h-full flex-col items-center justify-center gap-5 px-8 text-center">
          <p className="eyebrow text-ink-soft">Medical Chowk · Janakpur Dham</p>
          <h3 className="display text-3xl text-ink">Your next stop.</h3>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">Load the map to connect to Google Maps. Google may use cookies and receive information about your visit.</p>
          <button type="button" onClick={() => choose(true)} className="cursor-pointer rounded-full bg-ink px-6 py-3 text-sm font-medium text-white">Load Google Maps</button>
          <a href="/privacy" className="text-sm text-ink-soft underline underline-offset-4">Privacy policy</a>
        </div>}
    </div>
    <div className="border-t border-hairline px-6 py-4 text-center">
      <button type="button" onClick={() => choose(false)} className="cursor-pointer text-sm text-ink-soft underline underline-offset-4">{allowed ? "Map privacy settings: disable map" : "Map disabled · privacy settings"}</button>
    </div>
  </>;
}
