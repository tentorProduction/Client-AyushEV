import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/site-data";
import { PhoneIcon, PinIcon } from "@/components/ui/icons";

export default function NotFound() {
  const quickLinks = [
    { label: "120kW & 80kW Chargers", href: "/#charging" },
    { label: "Pricing (Rs 16.50/kWh)", href: "/#pricing" },
    { label: "EV Cost Calculator", href: "/#calculator" },
    { label: "Vehicle Compatibility", href: "/#compatibility" },
    { label: "Location & Directions", href: "/#location" },
    { label: "Questions & Answers (FAQ)", href: "/#faq" },
  ];

  return (
    <main
      id="main-content"
      className="flex min-h-[85vh] flex-col items-center justify-center px-6 py-20 text-center"
    >
      <div className="mx-auto max-w-xl">
        <span className="eyebrow text-ink-soft">404 · Page Not Found</span>
        <h1 className="display mt-3 text-[42px] font-bold text-ink sm:text-[54px]">
          Lost your <span className="display-italic">route</span>?
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
          The page you are looking for does not exist or has been moved. Find the {siteData.businessName} EV charging station at Medical Chowk, Janakpur Dham below.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" size="lg" withArrow>
            Back to Home
          </Button>
          <Button
            href={siteData.location.directionsUrl}
            variant="secondary"
            size="lg"
          >
            <PinIcon />
            Get GPS Directions
          </Button>
          <Button
            href={`tel:${siteData.phone}`}
            variant="secondary"
            size="lg"
          >
            <PhoneIcon />
            Call Administration
          </Button>
        </div>

        <div className="mt-12 rounded-2xl border border-hairline bg-panel p-6 text-left">
          <h2 className="eyebrow text-ink-soft">Quick Navigation Links:</h2>
          <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg border border-hairline/60 bg-surface px-3 py-2 text-[14px] text-ink transition-colors hover:border-ink hover:text-ink"
              >
                → {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
