import { siteData } from "@/lib/site-data";
import { Section, SectionHeader } from "@/components/ui/section";
import { PinIcon, BoltIcon, DropIcon, PhoneIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export function LocalGeoGuide() {
  const transitRoutes = [
    {
      route: "Janakpur-Dhalkebar Highway",
      desc: "Direct access off Medical Chowk, Ramdaiya Bhawadi-1 for vehicles travelling between Dhalkebar and Janakpur Dham.",
    },
    {
      route: "Kathmandu / BP Highway to Janakpur",
      desc: "Ideal fast charging stop upon entering Dhanusha from Bardibas / Sindhuli before heading into core Janakpur city.",
    },
    {
      route: "East-West (Mahendra) Highway Corridor",
      desc: "Convenient high-capacity detour just off the highway corridor for cross-country electric car travelers.",
    },
    {
      route: "Janaki Temple & Local City Visitors",
      desc: "Only minutes from central Janakpur Dham with ample parking space and simultaneous 4-vehicle charging capacity.",
    },
  ];

  return (
    <Section id="routes" className="bg-canvas-alt">
      <SectionHeader
        label="Location & Transit Guide"
        title={
          <>
            Strategically located at{" "}
            <span className="display-italic">Medical Chowk</span>.
          </>
        }
        description="Whether you are traveling across Madhesh Pradesh on the Mahendra Highway or commuting in Janakpur Dham, Aayush EV is positioned for quick access without city congestion."
        align="center"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {transitRoutes.map((item) => (
          <div
            key={item.route}
            className="card-surface flex flex-col justify-between rounded-2xl border border-hairline p-6 shadow-card"
          >
            <div>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-panel text-ink">
                <PinIcon />
              </span>
              <h3 className="mt-4 text-[17px] font-semibold text-ink">
                {item.route}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-[24px] border border-hairline bg-panel p-8">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
          <div className="lg:col-span-2">
            <h3 className="display text-[22px] text-ink">
              Multi-Service Hub: Fast Charging, Foam Car Wash & Servicing
            </h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
              Make the most of your 30-minute charging stop. While your EV charges at 120kW or 80kW DC speeds, our on-site team can provide an express foam car wash, tire pressure checks, and routine electric vehicle checkups at Ramdaiya Bhawadi-1, Janakpur Dham.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-[13px] text-ink">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <BoltIcon /> 2 DC Charging Units (4 bays)
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <DropIcon /> High-Pressure Car Wash
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <PinIcon /> Medical Chowk Landmark
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              href={siteData.location.directionsUrl}
              size="lg"
              withArrow
              className="w-full justify-center"
            >
              Open in Google Maps
            </Button>
            <Button
              href={`tel:${siteData.phone}`}
              variant="secondary"
              size="lg"
              className="w-full justify-center"
            >
              <PhoneIcon />
              Call +977 9714099611
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
