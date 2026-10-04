import { siteData } from "@/lib/site-data";
import { Wordmark } from "@/components/ui/wordmark";

const explore = [
  { label: "120kW & 80kW Chargers", href: "#charging" },
  { label: "EV Cost & Time Calculator", href: "#calculator" },
  { label: "Vehicle Compatibility", href: "#compatibility" },
  { label: "Pricing & Per-kWh Rates", href: "#pricing" },
  { label: "Highway & Transit Routes", href: "#routes" },
  { label: "Location & Directions", href: "#location" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline px-6 py-16 sm:py-20 bg-surface">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="min-w-0 md:col-span-2">
            <a
              href="/#top"
              aria-label="Aayush EV - Top of Page"
              className="brand-lockup flex w-full min-w-0 text-ink"
            >
              <Wordmark size="md" wrap nameClassName="tracking-[-0.022em]" />
            </a>
            <p className="mt-4 max-w-sm text-[14.5px] leading-relaxed text-ink-soft">
              {siteData.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-[12px] text-ink-soft">
              <span className="rounded-md border border-hairline bg-panel px-2.5 py-1 font-medium text-ink">
                120kW GB/T Fast Charger
              </span>
              <span className="rounded-md border border-hairline bg-panel px-2.5 py-1 font-medium text-ink">
                80kW CCS2 Fast Charger
              </span>
              <span className="rounded-md border border-hairline bg-panel px-2.5 py-1 font-medium text-ink">
                Simultaneous 4 Vehicles
              </span>
              <span className="rounded-md border border-hairline bg-panel px-2.5 py-1 font-medium text-ink">
                Rs 16.50 / kWh
              </span>
            </div>
          </div>

          <div>
            <p className="eyebrow text-ink-soft">Explore Services</p>
            <ul className="mt-5 space-y-3">
              {explore.map((link) => (
                <li key={link.href}>
                  <a
                    href={`/${link.href}`}
                    className="text-[14.5px] text-ink-soft transition-colors duration-300 hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ink-soft">Station Location</p>
            <address className="mt-5 space-y-3 not-italic text-[14.5px] text-ink-soft">
              <p className="font-medium text-ink">{siteData.businessName} (Ayush EV)</p>
              <p>{siteData.address.full}</p>
              <p className="text-[13px] text-ink-soft/90">
                Landmark: {siteData.location.nearbyLandmark} (Janakpur-Dhalkebar Corridor)
              </p>
              <p className="pt-1">
                <a
                  href={`tel:${siteData.phone}`}
                  className="font-semibold text-ink transition-colors duration-300 hover:underline"
                >
                  {siteData.phone}
                </a>
              </p>
              <p className="text-[13px]">{siteData.openingHours.display}</p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-hairline pt-8 text-[13px] text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteData.businessName} (Ayush EV). All rights
            reserved. Janakpur Dham, Dhanusha, Nepal.
          </p>
          <nav aria-label="Legal Links" className="flex flex-wrap gap-5">
            <a href="/privacy" className="hover:text-ink underline-offset-4 hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-ink underline-offset-4 hover:underline">
              Terms of Use
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
