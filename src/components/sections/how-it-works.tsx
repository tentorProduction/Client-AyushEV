
const steps = [
  {
    title: "Find the station",
    description: "Tap Get directions and your maps app takes it from there.",
  },
  {
    title: "Park and plug in",
    description: "Pull into a charging bay and connect the matching cable.",
  },
  {
    title: "Start charging",
    description: "Confirm your pricing option and target battery level with the team, then start your session.",
  },
  {
    title: "Pay and go",
    description: "Pay for your charging session and continue your journey.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="band-dark px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-on-dark-soft">How it works</p>
        <h2 className="display mt-4 max-w-3xl text-[34px] text-on-dark sm:text-[46px] md:text-[54px]">
          Four simple steps to{" "}
          <span className="display-italic">charge and go</span>.
        </h2>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="reveal">
              <div className="border-t border-white/15 pt-6">
                <span className="display text-[14px] tracking-[0.08em] text-on-dark-soft">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[19px] font-medium text-on-dark">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-on-dark-soft">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
