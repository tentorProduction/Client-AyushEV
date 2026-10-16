"use client";

import { useId, useRef, useState, type AnchorHTMLAttributes } from "react";
import { siteData } from "@/lib/site-data";

export function DirectionsLink({ children, className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const requesting = useRef(false);
  const statusId = useId();

  function requestDirections(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    if (requesting.current) return;
    setError("");

    if (!window.isSecureContext || !navigator.geolocation) {
      setError("Location is unavailable. Open this site over HTTPS in a browser that supports location access.");
      return;
    }

    requesting.current = true;
    setPending(true);
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const url = new URL(siteData.location.directionsUrl);
        url.searchParams.set("origin", `${coords.latitude},${coords.longitude}`);
        url.searchParams.set("travelmode", "driving");
        window.location.assign(url.toString());
        requesting.current = false;
        setPending(false);
      },
      (failure) => {
        requesting.current = false;
        setPending(false);
        setError(failure.code === 1
          ? "Allow location access in your browser settings, then tap directions again."
          : failure.code === 3
            ? "Finding your location took too long. Please try again."
            : "Unable to find your location. Turn on location services and try again.");
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 },
    );
  }

  return (
    <>
      <a
        {...props}
        href={siteData.location.directionsUrl}
        className={className}
        onClick={requestDirections}
        aria-disabled={pending}
        aria-busy={pending}
        aria-describedby={statusId}
      >
        {pending ? "Finding your location…" : children}
      </a>
      <span id={statusId} role="status" className={error ? "block basis-full text-sm" : "sr-only"}>
        {error || (pending ? "Please allow location access when your browser asks." : "Requests your location to get driving directions to Aayush EV.")}
      </span>
    </>
  );
}
