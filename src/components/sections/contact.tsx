import { siteData } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function Contact() {
  const routes = [
    { label: "Administration", value: siteData.phone, href: `tel:${siteData.phone}` },
  ];

  return (
    <section id="contact" className="band-dark px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-on-dark-soft">Visit us</p>
          <h2 className="display mt-4 text-[38px] text-on-dark sm:text-[50px] md:text-[60px]">
            Ready when <span className="display-italic">you</span> are.
          </h2>
          <p className="mt-6 text-[19px] leading-relaxed text-on-dark-soft">
            Call ahead to check availability, or head straight over — the
            chargers are {siteData.address.area}, {siteData.address.city}.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button
              href={siteData.location.directionsUrl}
              variant="inverse"
              size="lg"
              withArrow
            >
              Get directions
            </Button>
            <Button
              href={`tel:${siteData.phone}`}
              variant="inverseOutline"
              size="lg"
            >
              Call administration
            </Button>
          </div>
        </div>

        <div className="reveal mt-20">
          <dl className="grid gap-10 border-t border-white/15 pt-12 text-center">
            {routes.map((route) => (
              <div key={route.label}>
                <dt className="eyebrow text-on-dark-soft">{route.label}</dt>
                <dd className="mt-3">
                  <a
                    href={route.href}
                    className="display text-[20px] text-on-dark transition-opacity duration-300 hover:opacity-70"
                  >
                    {route.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
