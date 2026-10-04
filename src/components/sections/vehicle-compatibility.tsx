import Image from "next/image";
import { siteData } from "@/lib/site-data";
import { Section, SectionHeader } from "@/components/ui/section";
import { BoltIcon, PlugIcon } from "@/components/ui/icons";

export function VehicleCompatibility() {
  const gbTModels = siteData.popularEvModels.filter((m) => m.connector === "GB/T");
  const ccs2Models = siteData.popularEvModels.filter((m) => m.connector === "CCS2");

  return (
    <Section id="compatibility">
      <SectionHeader
        label="Supported Vehicles & Connectors"
        title={
          <>
            Universal EV compatibility in{" "}
            <span className="display-italic">Janakpur Dham</span>.
          </>
        }
        description="Aayush EV provides dual-standard fast charging infrastructure with 120kW GB/T and 80kW CCS2 DC fast connectors, supporting all major electric vehicles in Nepal."
        align="center"
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-12 items-stretch">
        {/* Machine Unit Visual Showcase */}
        <div className="lg:col-span-4 card-surface overflow-hidden rounded-[24px] border border-hairline p-6 flex flex-col justify-between shadow-card">
          <div>
            <span className="eyebrow text-ink-soft">Charging Hardware</span>
            <h3 className="display mt-2 text-[22px] text-ink">
              Dual-Gun DC Dispenser
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
              Equipped with heavy-duty liquid-cooled cables and smart digital power management.
            </p>
          </div>

          <div className="relative my-4 aspect-[4/3] w-full overflow-hidden rounded-xl border border-hairline bg-surface">
            <Image
              src="/ev-charger-machine.jpg"
              alt="Aayush EV commercial dual-gun DC fast charging dispenser machine in Janakpur"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="rounded-xl bg-panel p-3 text-center border border-hairline text-[12.5px] text-ink-soft">
            <span className="font-semibold text-ink">Dual Guns:</span> GB/T (120 kW) &amp; CCS2 (80 kW)
          </div>
        </div>

        {/* Connectors & Model Matrix */}
        <div className="lg:col-span-8 grid gap-6">
          {/* GB/T Card */}
          <div className="card-surface rounded-[24px] border border-hairline p-7 shadow-card">
            <div className="flex items-center justify-between border-b border-hairline pb-4">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-[12px] font-semibold text-emerald-700">
                  <BoltIcon /> 120 kW Ultra-Fast
                </span>
                <h3 className="display mt-2 text-[24px] text-ink">
                  GB/T DC Standard
                </h3>
              </div>
              <div className="text-right">
                <span className="eyebrow text-ink-soft">Charging Rate</span>
                <p className="text-[16px] font-bold text-ink">Rs 16.50 / kWh</p>
              </div>
            </div>

            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              Standard DC fast charging connector widely used in Chinese manufactured electric vehicles across Nepal. High-voltage ultra-fast power delivery.
            </p>

            <div className="mt-4">
              <h4 className="eyebrow text-ink-soft">Popular Compatible Models:</h4>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {gbTModels.map((model) => (
                  <span
                    key={model.id}
                    className="rounded-lg border border-hairline bg-panel px-3 py-1.5 text-[12.5px] font-medium text-ink"
                  >
                    {model.name}
                  </span>
                ))}
                <span className="rounded-lg border border-hairline bg-panel px-3 py-1.5 text-[12.5px] font-medium text-ink-soft">
                  + Seres, Dongfeng, Great Wall, Wuling &amp; Other GB/T EVs
                </span>
              </div>
            </div>
          </div>

          {/* CCS2 Card */}
          <div className="card-surface rounded-[24px] border border-hairline p-7 shadow-card">
            <div className="flex items-center justify-between border-b border-hairline pb-4">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-[12px] font-semibold text-blue-700">
                  <PlugIcon /> 80 kW High-Speed
                </span>
                <h3 className="display mt-2 text-[24px] text-ink">
                  CCS2 DC Standard
                </h3>
              </div>
              <div className="text-right">
                <span className="eyebrow text-ink-soft">Charging Rate</span>
                <p className="text-[16px] font-bold text-ink">Rs 16.50 / kWh</p>
              </div>
            </div>

            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              Combined Charging System Type 2 standard used by Indian, European, and global EV manufacturers in Nepal. Direct plug-and-charge compatibility.
            </p>

            <div className="mt-4">
              <h4 className="eyebrow text-ink-soft">Popular Compatible Models:</h4>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {ccs2Models.map((model) => (
                  <span
                    key={model.id}
                    className="rounded-lg border border-hairline bg-panel px-3 py-1.5 text-[12.5px] font-medium text-ink"
                  >
                    {model.name}
                  </span>
                ))}
                <span className="rounded-lg border border-hairline bg-panel px-3 py-1.5 text-[12.5px] font-medium text-ink-soft">
                  + Kia EV6, Audi e-tron, BMW iX, Volvo &amp; All CCS2 EVs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-hairline bg-panel p-6 text-center">
        <p className="text-[14.5px] text-ink-soft">
          Not sure which port your electric vehicle has? Call administration at{" "}
          <a
            href={`tel:${siteData.phone}`}
            className="font-semibold text-ink underline underline-offset-4"
          >
            {siteData.phone}
          </a>{" "}
          and our team will confirm your port, adapter availability, and bay slot.
        </p>
      </div>
    </Section>
  );
}
