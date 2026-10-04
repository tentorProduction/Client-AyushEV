/* Single stroke weight, rounded caps, currentColor. */
const base = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function BoltIcon() {
  return (
    <svg {...base}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}

export function PinIcon() {
  return (
    <svg {...base}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function PlugIcon() {
  return (
    <svg {...base}>
      <path d="M9 3v6M15 3v6" />
      <path d="M6 9h12v3a6 6 0 01-6 6 6 6 0 01-6-6V9z" />
      <path d="M12 18v3" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg {...base}>
      <path d="M21 16.9v2.6a2 2 0 01-2.2 2 19.5 19.5 0 01-8.5-3 19.2 19.2 0 01-5.9-5.9 19.5 19.5 0 01-3-8.6A2 2 0 013.4 2h2.6a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L7.1 9.8a16 16 0 006 6l1.2-1.1a2 2 0 012.1-.5c.9.4 1.8.6 2.8.7a2 2 0 011.8 2z" />
    </svg>
  );
}

export function InfoIcon() {
  return (
    <svg {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </svg>
  );
}

export function ParkingIcon() {
  return (
    <svg {...base}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <path d="M10 17V8h3a3 3 0 010 6h-3" />
    </svg>
  );
}

export function SofaIcon() {
  return (
    <svg {...base}>
      <path d="M5 11V8a2 2 0 012-2h10a2 2 0 012 2v3" />
      <path d="M3.5 11.5a2 2 0 012 2V16h13v-2.5a2 2 0 114 0V18H2v-4.5a2 2 0 011.5-2z" />
    </svg>
  );
}

export function DropIcon() {
  return (
    <svg {...base}>
      <path d="M12 3s6 6.5 6 10.5a6 6 0 11-12 0C6 9.5 12 3 12 3z" />
    </svg>
  );
}

export function WifiIcon() {
  return (
    <svg {...base}>
      <path d="M5 12.5a10 10 0 0114 0" />
      <path d="M8.5 16a5.5 5.5 0 017 0" />
      <path d="M12 19.5h.01" />
    </svg>
  );
}

export function CoffeeIcon() {
  return (
    <svg {...base}>
      <path d="M4 8h13v6a5 5 0 01-5 5H9a5 5 0 01-5-5V8z" />
      <path d="M17 9h1.5a2.5 2.5 0 010 5H17" />
    </svg>
  );
}

