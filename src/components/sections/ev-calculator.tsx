"use client";

import { useState, useId } from "react";
import { siteData } from "@/lib/site-data";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { BoltIcon, PhoneIcon } from "@/components/ui/icons";

export function EVCalculator() {
  const modelSelectId = useId();
  const batteryInputId = useId();
  const startSocId = useId();
  const targetSocId = useId();

  const [selectedModelId, setSelectedModelId] = useState<string>("byd-atto-3");
  const [customBattery, setCustomBattery] = useState<number>(60.48);
  const [startSoc, setStartSoc] = useState<number>(20);
  const [targetSoc, setTargetSoc] = useState<number>(80);
  const [chargerPower, setChargerPower] = useState<number>(120);

  const selectedModel = siteData.popularEvModels.find(
    (m) => m.id === selectedModelId
  );

  const handleModelChange = (id: string) => {
    setSelectedModelId(id);
    const model = siteData.popularEvModels.find((m) => m.id === id);
    if (model) {
      setCustomBattery(model.batteryCapacity);
      if (model.connector === "CCS2") {
        setChargerPower(80);
      } else {
        setChargerPower(120);
      }
    }
  };

  const batteryKwh = customBattery > 0 ? customBattery : 50;
  const socDiff = Math.max(0, targetSoc - startSoc);
  const energyNeeded = (batteryKwh * socDiff) / 100;
  const ratePerKwh = 16.5; // NPR
  const estimatedCost = (energyNeeded * ratePerKwh).toFixed(2);

  // Effective charging speed calculation (taking into account vehicle max charging rate)
  const maxVehicleRate = selectedModel?.maxDcPower ?? chargerPower;
  const effectivePower = Math.min(chargerPower, maxVehicleRate);
  // Average power efficiency ~85% due to charging curve taper
  const avgChargingKw = effectivePower * 0.85;
  const estimatedMinutes = Math.max(
    5,
    Math.round((energyNeeded / (avgChargingKw || 50)) * 60)
  );

  return (
    <Section id="calculator" className="bg-canvas-alt">
      <SectionHeader
        label="EV Charging Estimator"
        title={
          <>
            Calculate your charging <span className="display-italic">cost & time</span>.
          </>
        }
        description="Select your EV model or customize your battery capacity to estimate your charging duration and cost at Aayush EV Janakpur Dham (Rs 16.50 / kWh)."
        align="center"
      />

      <div className="mx-auto mt-12 max-w-4xl">
        <div className="card-surface overflow-hidden rounded-[24px] border border-hairline p-6 shadow-card sm:p-10">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Input Controls */}
            <div className="space-y-6 lg:col-span-7">
              <div>
                <label
                  htmlFor={modelSelectId}
                  className="block text-[14px] font-medium text-ink"
                >
                  Select Your Electric Vehicle (EV)
                </label>
                <select
                  id={modelSelectId}
                  value={selectedModelId}
                  onChange={(e) => handleModelChange(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-hairline bg-panel px-4 py-3 text-[15px] text-ink focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
                >
                  {siteData.popularEvModels.map((model) => (
                    <option key={model.id} value={model.id}>
                      {model.name} ({model.connector} • Max {model.maxDcPower}kW)
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor={batteryInputId}
                    className="block text-[13px] font-medium text-ink-soft"
                  >
                    Battery Size (kWh)
                  </label>
                  <input
                    type="number"
                    id={batteryInputId}
                    value={customBattery}
                    onChange={(e) => setCustomBattery(Number(e.target.value))}
                    min={10}
                    max={150}
                    step={0.5}
                    className="mt-1.5 w-full rounded-xl border border-hairline bg-panel px-3.5 py-2.5 text-[15px] text-ink focus:border-ink focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-ink-soft">
                    Connector & Station
                  </label>
                  <div className="mt-1.5 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setChargerPower(120)}
                      className={`flex-1 rounded-xl border py-2.5 text-[13px] font-medium transition-colors ${
                        chargerPower === 120
                          ? "border-ink bg-ink text-white"
                          : "border-hairline bg-panel text-ink hover:border-ink/50"
                      }`}
                    >
                      120kW GB/T
                    </button>
                    <button
                      type="button"
                      onClick={() => setChargerPower(80)}
                      className={`flex-1 rounded-xl border py-2.5 text-[13px] font-medium transition-colors ${
                        chargerPower === 80
                          ? "border-ink bg-ink text-white"
                          : "border-hairline bg-panel text-ink hover:border-ink/50"
                      }`}
                    >
                      80kW CCS2
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-[13px]">
                  <label htmlFor={startSocId} className="font-medium text-ink-soft">
                    Starting Battery: <span className="font-bold text-ink">{startSoc}%</span>
                  </label>
                  <label htmlFor={targetSocId} className="font-medium text-ink-soft">
                    Target Battery: <span className="font-bold text-ink">{targetSoc}%</span>
                  </label>
                </div>
                <div className="mt-3 flex items-center gap-4">
                  <input
                    type="range"
                    id={startSocId}
                    min="5"
                    max="90"
                    step="5"
                    value={startSoc}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setStartSoc(val);
                      if (val >= targetSoc) setTargetSoc(Math.min(100, val + 10));
                    }}
                    className="h-2 w-full cursor-pointer accent-ink"
                    aria-label="Starting Battery Percentage"
                  />
                  <input
                    type="range"
                    id={targetSocId}
                    min="15"
                    max="100"
                    step="5"
                    value={targetSoc}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setTargetSoc(val);
                      if (val <= startSoc) setStartSoc(Math.max(0, val - 10));
                    }}
                    className="h-2 w-full cursor-pointer accent-ink"
                    aria-label="Target Battery Percentage"
                  />
                </div>
                <p className="mt-2 text-[12px] text-ink-soft">
                  Adding +{socDiff}% state of charge (~{energyNeeded.toFixed(1)} kWh energy)
                </p>
              </div>
            </div>

            {/* Results Output */}
            <div className="flex flex-col justify-between rounded-2xl bg-panel p-6 border border-hairline lg:col-span-5">
              <div>
                <span className="eyebrow text-ink-soft">Estimated Results</span>
                <div className="mt-4">
                  <p className="text-[13px] text-ink-soft">Estimated Total Cost</p>
                  <p className="display mt-1 text-[38px] font-bold text-ink">
                    Rs {estimatedCost}
                    <span className="ml-2 font-sans text-[13px] font-normal text-ink-soft">
                      NPR
                    </span>
                  </p>
                </div>

                <div className="mt-5 border-t border-hairline pt-4">
                  <p className="text-[13px] text-ink-soft">Estimated Charging Time</p>
                  <p className="display mt-1 text-[26px] font-semibold text-ink">
                    ~{estimatedMinutes} mins
                  </p>
                  <p className="mt-1 text-[12px] text-ink-soft">
                    Based on {effectivePower}kW DC fast charging curve
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-2.5 pt-4 border-t border-hairline">
                <Button
                  href={siteData.location.directionsUrl}
                  size="md"
                  withArrow
                  className="w-full justify-center"
                >
                  Get Directions to Station
                </Button>
                <Button
                  href={`tel:${siteData.phone}`}
                  variant="secondary"
                  size="md"
                  className="w-full justify-center"
                >
                  <PhoneIcon />
                  Confirm Rate with Admin
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-hairline pt-4 text-center text-[12px] text-ink-soft">
            * Note: Charging duration may slightly vary with vehicle battery thermal management, ambient temperature, and charging curve taper above 80%.
          </div>
        </div>
      </div>
    </Section>
  );
}
