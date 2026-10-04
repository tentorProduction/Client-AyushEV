import { siteData } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { PhoneIcon } from "@/components/ui/icons";

export function Hero() {
  const facts = [
    { label: "DC Charging Points", value: "120kW & 80kW" },
    {
      label: "Simultaneous Bays",
      value: "4 vehicles at once",
    },
    { label: "Connectors", value: "GB/T + CCS2" },
    { label: "Energy Rate", value: "Rs 16.50 / kWh" },
  ];

  return (
    <section
      id="top"
      aria-label="Aayush EV Charging Station Hero"
      className="premium-hero relative overflow-hidden px-6 pt-12 pb-16 sm:pt-16 sm:pb-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="hero-location rise inline-flex items-center gap-2 rounded-full border border-hairline bg-panel/80 px-4 py-1.5 text-[13px] font-medium text-ink-soft backdrop-blur-sm">
            <span>📍 Medical Chowk, Ramdaiya Bhawadi-1</span>
            <span aria-hidden="true">·</span>
            <span>Janakpur Dham, Nepal</span>
          </div>

          <h1 className="display hero-title rise rise-1 mt-6 text-ink">
            Fast EV Charging in Janakpur.
            <br />
            <span className="display-italic">Charge up & keep moving.</span>
          </h1>

          <p className="hero-description rise rise-2 mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-ink-soft sm:text-[19px]">
            Welcome to <strong>Aayush EV (Ayush EV)</strong> &mdash; Janakpur Dham&rsquo;s premier commercial DC fast charging station. 120 kW GB/T &amp; 80 kW CCS2 chargers for Tata, BYD, MG, Hyundai &amp; all EVs, plus high-pressure car wash and vehicle servicing.
          </p>

          <div className="hero-actions rise rise-3 mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={siteData.location.directionsUrl} size="lg" withArrow>
              Get GPS Directions
            </Button>
            <Button
              href={`tel:${siteData.phone}`}
              variant="secondary"
              size="lg"
            >
              <PhoneIcon />
              Call +977 9714099611
            </Button>
            <a
              href="#calculator"
              className="inline-flex items-center justify-center rounded-full border border-hairline bg-panel px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:border-ink"
            >
              Estimate Cost &amp; Time
            </a>
          </div>
        </div>

        <div className="hero-facts mt-14 sm:mt-18">
          <dl className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
            {facts.map((fact, index) => (
              <div
                key={fact.label}
                className={`px-3 text-center ${
                  index > 0 ? "md:border-l md:border-hairline" : ""
                }`}
              >
                <dt className="eyebrow text-ink-soft">{fact.label}</dt>
                <dd className="display mt-2 text-[20px] font-semibold text-ink sm:text-[22px]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
