import { siteData } from "@/lib/site-data";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ConsentMap } from "@/components/ui/consent-map";

export function Location() {
  const details = [
    { label: "Address", value: siteData.address.full },
    { label: "Nearest landmark", value: siteData.location.nearbyLandmark },
    { label: "Opening hours", value: siteData.openingHours.display },
  ];

  return (
    <Section id="location" className="bg-canvas-alt">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeader
            label="Location"
            title={
              <>
                Find us at{" "}
                <span className="display-italic">
                  {siteData.location.nearbyLandmark}
                </span>
                .
              </>
            }
            description={`${siteData.address.area}, ${siteData.address.city}, ${siteData.address.state}. EV charging, car wash and servicing in one place.`}
          />

          <dl className="mt-10 space-y-7">
            {details.map((detail) => (
              <div key={detail.label}>
                <dt className="eyebrow text-ink-soft">{detail.label}</dt>
                <dd className="mt-2 text-[17px] text-ink">{detail.value}</dd>
              </div>
            ))}
            <div>
              <dt className="eyebrow text-ink-soft">Phone</dt>
              <dd className="mt-2">
                <a
                  href={`tel:${siteData.phone}`}
                  className="text-[17px] text-ink underline decoration-ink-faint decoration-1 underline-offset-4 transition-[text-decoration-color] duration-300 hover:decoration-ink"
                >
                  {siteData.phone}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-10">
            <Button href={siteData.location.directionsUrl} size="lg" withArrow>
              Get directions
            </Button>
          </div>
        </div>

        <div className="reveal">
          <div className="overflow-hidden rounded-[28px] border border-hairline bg-panel shadow-card">
            <ConsentMap />
          </div>
        </div>
      </div>
    </Section>
  );
}
