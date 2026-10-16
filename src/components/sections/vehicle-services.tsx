import { siteData } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { DropIcon } from "@/components/ui/icons";

export function VehicleServices() {
  return (
    <>
      <Section id="car-wash" className="bg-canvas-alt">
        <div className="grid items-start gap-10 md:grid-cols-[1.5fr_1fr] md:gap-16">
          <SectionHeader
            label="Car washing & vehicle care"
            title={<>A clean car.<br /><span className="display-italic">Ready for the road.</span></>}
            description="Car washing is available here at Aayush EV, Medical Chowk. Visit us for a high-pressure foam wash and exterior cleaning, or ask our team about vehicle servicing."
          />
          <div className="border-t border-hairline pt-7">
            <span aria-hidden="true" className="text-ink [&>svg]:h-8 [&>svg]:w-8"><DropIcon /></span>
            <h3 className="mt-5 text-xl font-medium text-ink">Plan your car wash</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-soft">Call our team to check wash availability, pricing, and timing before your visit.</p>
            <div className="mt-6"><Button href={`tel:${siteData.rawPhone}`} withArrow>Enquire about car washing</Button></div>
          </div>
        </div>
      </Section>

      <Section id="rentals">
        <SectionHeader
          label="Vehicle rentals"
          title={<>A vehicle for <span className="display-italic">your next trip.</span></>}
          description="Rent a car or choose a 14-seat or 16-seat Winger from Aayush EV in Janakpur Dham. Call with your travel date, route, and passenger count to arrange your rental."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {siteData.rentals.map((rental) => (
            <article key={rental.id} className="flex flex-col border-t border-hairline pt-6">
              <p className="eyebrow text-ink-soft">{rental.capacity}</p>
              <h3 className="display mt-4 text-[28px] text-ink">{rental.name}</h3>
              <p className="mt-4 flex-1 text-[16px] leading-relaxed text-ink-soft">{rental.description}</p>
              <div className="mt-7"><Button href={`tel:${siteData.rawPhone}`} variant="secondary" withArrow>Enquire about {rental.id === "car" ? "a car" : rental.capacity.toLowerCase()}</Button></div>
            </article>
          ))}
        </div>
        <p className="mt-10 border-t border-hairline pt-6 text-[14px] leading-relaxed text-ink-soft">Bookings are arranged by phone at <a href={`tel:${siteData.rawPhone}`} className="font-medium text-ink underline underline-offset-4">{siteData.phone}</a>. Confirm vehicle availability, rental rates, driver arrangements, and booking terms with our team.</p>
      </Section>
    </>
  );
}
