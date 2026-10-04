import { siteData } from "@/lib/site-data";
import { Section, SectionHeader } from "@/components/ui/section";

export function Pricing() {
  return (
    <Section id="pricing" className="bg-canvas-alt">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
        <div>
          <SectionHeader
            label="Pricing"
            title={
              <>
                Rates you can read at a{" "}
                <span className="display-italic">glance</span>.
              </>
            }
            description="One energy rate for both chargers. Percentage-based pricing depends on your vehicle model."
          />
          <p className="mt-6 max-w-md text-[14px] leading-relaxed text-ink-soft">
            {siteData.pricing.note}
          </p>
        </div>

        <div className="reveal">
          <div className="card-surface overflow-hidden">
            {siteData.pricing.rates.map((rate) => (
              <div
                key={rate.type}
                className="flex flex-wrap items-baseline justify-between gap-3 border-b border-hairline px-6 py-7 sm:px-8"
              >
                <span className="text-[17px] text-ink">{rate.type}</span>
                <span className="display text-[32px] whitespace-nowrap text-ink">
                  {rate.rate}
                  <span className="ml-2 font-sans text-[14px] font-normal tracking-normal text-ink-soft">
                    {rate.unit}
                  </span>
                </span>
              </div>
            ))}

            <div className="px-6 py-6 sm:px-8">
              <h3 className="text-[17px] font-medium">Charging by percentage</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">Your starting battery level and target level determine how much charge is added. The price per percentage varies by model and battery capacity.</p>
              <a href={`tel:${siteData.phone}`} className="mt-4 inline-block underline underline-offset-4">Call administration for your model’s rate</a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
