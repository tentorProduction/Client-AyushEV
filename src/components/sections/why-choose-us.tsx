import { Section, SectionHeader } from "@/components/ui/section";
import { BoltIcon, PhoneIcon, PinIcon, PlugIcon } from "@/components/ui/icons";

const reasons = [
  {
    title: "Room for four",
    description:
      "Two DC charging points with capacity to charge four vehicles at the same time.",
    icon: <BoltIcon />,
  },
  {
    title: "Easy to reach",
    description:
      "Find us at Medical Chowk, Ramdaiya Bhawadi-1, Janakpur Dham, with Google Maps directions a tap away.",
    icon: <PinIcon />,
  },
  {
    title: "The connectors you need",
    description: "120 kW GB/T and 80 kW CCS2 charging. Call to confirm compatibility with your model.",
    icon: <PlugIcon />,
  },
  {
    title: "Someone to call",
    description:
      "Call administration directly for charger availability, model-specific pricing, car wash and servicing.",
    icon: <PhoneIcon />,
  },
];

export function WhyChooseUs() {
  return (
    <Section>
      <SectionHeader
        label="Why us"
        title="The details make the difference."
        align="center"
      />

      <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2">
        {reasons.map((reason) => (
          <div key={reason.title} className="reveal">
            <div className="mx-auto max-w-md text-center sm:text-left">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-panel text-ink [&>svg]:h-5 [&>svg]:w-5">
                {reason.icon}
              </span>
              <h3 className="mt-5 text-[19px] font-medium text-ink">
                {reason.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
