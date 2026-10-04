import Image from "next/image";
import { siteData } from "@/lib/site-data";
import { Section, SectionHeader } from "@/components/ui/section";
import { BoltIcon, PlugIcon, PinIcon, PhoneIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export function ChargingInfo() {
  return (
    <Section id="charging">
      <SectionHeader
        label="DC Fast Charging Hardware"
        title={
          <>
            Two DC units. <span className="display-italic">Four</span> simultaneous bays.
          </>
        }
        description={`Commercial DC fast charging infrastructure at ${siteData.businessName} (Medical Chowk, Janakpur Dham). High-power GB/T and CCS2 dual-gun dispensers engineered for rapid vehicle turnarounds.`}
      />

      {/* Featured Machine Visual Banner */}
      <div className="reveal mt-12 overflow-hidden rounded-[28px] border border-hairline bg-panel shadow-card">
        <div className="grid lg:grid-cols-12 items-center">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full lg:col-span-7 overflow-hidden">
            <Image
              src="/ev-charging-station.jpg"
              alt="Aayush EV 120kW DC Fast EV Charging Station and Canopy in Janakpur Dham Nepal"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:hidden" />
            <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
              <span className="inline-block rounded-full bg-emerald-500/90 px-3 py-1 text-[11px] font-semibold tracking-wide uppercase text-white backdrop-blur-sm">
                Active DC Station
              </span>
              <p className="mt-1 text-[16px] font-bold">120kW & 80kW DC Fast Chargers</p>
              <p className="text-[12px] text-white/80">Medical Chowk, Ramdaiya Bhawadi-1, Janakpur</p>
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="eyebrow text-ink-soft">Station Architecture</span>
              <h3 className="display mt-3 text-[26px] sm:text-[30px] text-ink">
                High-Power Dual Dispensers
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                Our heavy-duty DC charging units deliver rapid charging speeds up to 120 kW, reducing typical 20% to 80% charge sessions to just 30&ndash;45 minutes. Dual-gun configurations allow up to 4 electric vehicles to charge simultaneously.
              </p>

              <ul className="mt-6 space-y-3 text-[13.5px] text-ink">
                <li className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700">✓</span>
                  <span><strong>120kW GB/T:</strong> Dual-gun ultra-fast Chinese EV standard</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10 text-blue-700">✓</span>
                  <span><strong>80kW CCS2:</strong> Dual-gun European &amp; Indian EV standard</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink/10 text-ink">✓</span>
                  <span><strong>Clean Canopy:</strong> Weather-protected charging bays</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 pt-6 border-t border-hairline">
              <Button href={siteData.location.directionsUrl} size="sm" withArrow>
                <PinIcon />
                Navigate Here
              </Button>
              <Button href={`tel:${siteData.phone}`} variant="secondary" size="sm">
                <PhoneIcon />
                Check Slot
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Charger Cards Grid with Machine Detail Visual */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {siteData.chargers.map((charger, index) => (
          <div key={charger.id} className="reveal">
            <article className="charger-card card-surface h-full p-8 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-card">
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-panel text-ink [&>svg]:h-5 [&>svg]:w-5">
                  {index === 0 ? <BoltIcon /> : <PlugIcon />}
                </span>
                <span className="eyebrow pt-3 text-ink-soft">
                  {charger.count}
                </span>
              </div>

              <div className="mt-8 flex items-baseline justify-between">
                <p className="display text-[46px] text-ink">
                  {charger.power}
                </p>
                <span className="rounded-full bg-ink/5 px-3 py-1 text-[12px] font-semibold text-ink">
                  Rs 16.50 / kWh
                </span>
              </div>

              <h3 className="mt-2 text-[19px] font-medium text-ink">
                {charger.type}
              </h3>
              <p className="mt-1 text-[14.5px] text-ink-soft">
                {charger.connector} connector &mdash; {charger.description}
              </p>
            </article>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-hairline bg-panel p-5 text-[14px] text-ink-soft">
        <p>
          {siteData.supportedVehicles}. Availability can change through peak travel hours, so it is recommended to call ahead on highway trips.
        </p>
        <a
          href="#compatibility"
          className="shrink-0 font-medium text-ink underline underline-offset-4 hover:opacity-80"
        >
          View Model Compatibility Matrix →
        </a>
      </div>
    </Section>
  );
}
