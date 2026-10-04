import { siteData } from "@/lib/site-data";

export function LiveStatus({ compact = false }: { compact?: boolean }) {
  return <span className="inline-flex items-center gap-2">{compact ? "Call for availability" : siteData.openingHours.display}</span>;
}
