import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms of Use | Aayush EV Janakpur",
  description: "Terms and conditions for EV charging services, rates per kWh, vehicle compatibility, car wash, and station policies at Aayush EV Janakpur Dham.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Use | Aayush EV",
    description: "Terms and conditions for EV charging services and rates at Aayush EV Janakpur Dham.",
    url: "/terms",
    images: [{ url: "/social-card", width: 1200, height: 630, alt: "Aayush EV Terms of Use" }],
  },
};

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Use."
      description="Guidelines, equipment specifications, pricing transparency, and station rules for Aayush EV (Ayush EV)."
    >
      <section>
        <h2>1. Charging Services & Equipment Specifications</h2>
        <p>
          Aayush EV provides commercial DC fast charging infrastructure at Medical Chowk, Ramdaiya Bhawadi-1, Janakpur Dham. Our station operates two DC charging points (120 kW GB/T ultra-fast charger and 80 kW CCS2 high-speed charger) capable of serving up to 4 electric vehicles simultaneously.
        </p>
        <p>
          Charger output ratings (120kW / 80kW) denote maximum delivery capacity. Actual charging power received by a vehicle depends on the vehicle manufacturer&rsquo;s onboard Battery Management System (BMS), state of charge (SoC), battery temperature, and electrical supply conditions.
        </p>
      </section>

      <section>
        <h2>2. Pricing Transparency & Billing</h2>
        <p>
          The standard energy consumption rate is Rs 16.50 per kWh for both GB/T and CCS2 charging points. For customers opting for percentage-based charging, total rates are determined according to vehicle model battery capacity and requested charge increment.
        </p>
        <p>
          Customers are advised to confirm the current rate and calculate their estimated session cost with administration or on-site attendants prior to initiating a charging session.
        </p>
      </section>

      <section>
        <h2>3. Vehicle Compatibility & Safe Operation</h2>
        <p>
          Electric vehicle owners are responsible for ensuring that their vehicle, inlet port, and connectors (GB/T or CCS2) are in good working order and compatible with DC fast charging standards. Drivers must follow posted safety guidelines and instructions from on-site staff when connecting and disconnecting charging cables.
        </p>
      </section>

      <section>
        <h2>4. Car Wash & Vehicle Servicing</h2>
        <p>
          Car wash, exterior foam cleaning, tire pressure checks, and routine EV servicing are provided on-site. Service prices vary based on vehicle size and requested treatments. Confirm specific service charges with administration prior to commencement.
        </p>
      </section>

      <section>
        <h2>5. Station Etiquette & Bay Clearance</h2>
        <p>
          To maintain smooth charging flow for fellow EV drivers travelling across Janakpur Dham and the Mahendra Highway corridor, vehicles should be moved from the charging bay promptly once their target charging session is completed.
        </p>
      </section>

      <section>
        <h2>6. Inquiries & Contact</h2>
        <p>
          For queries, reservations, or emergency route support, contact administration at <a href={`tel:${siteData.phone}`} className="underline">{siteData.phone}</a> or visit us at {siteData.address.full}.
        </p>
      </section>
    </LegalPage>
  );
}
