import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy | Aayush EV Charging Janakpur",
  description: "Privacy policy and data handling guidelines for Aayush EV charging station, website preferences, and customer enquiries.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Aayush EV",
    description: "Privacy policy and data handling guidelines for Aayush EV charging station.",
    url: "/privacy",
    images: [{ url: "/social-card", width: 1200, height: 630, alt: "Aayush EV Privacy Policy" }],
  },
};

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy."
      description="Clear, transparent information on how we respect your privacy and manage data at Aayush EV (Ayush EV)."
    >
      <section>
        <h2>1. Commitment to Privacy</h2>
        <p>
          Aayush EV (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy. This website is designed to provide transparent information about our electric vehicle DC fast charging, car wash, and vehicle servicing facilities located at Medical Chowk, Ramdaiya Bhawadi-1, Janakpur Dham, Dhanusha, Nepal.
        </p>
      </section>

      <section>
        <h2>2. Data Collection on Website Visits</h2>
        <p>
          We do not require user account creation, online logins, or invasive tracking cookies. We do not sell, rent, or trade your personal data to third-party advertisers. Standard non-identifying server logs (such as IP address, browser user-agent, and requested URLs) may be processed by hosting infrastructure solely for security, DDoS prevention, and service delivery.
        </p>
      </section>

      <section>
        <h2>3. Local Storage and Preferences</h2>
        <p>
          We use modern browser local storage (<code className="rounded bg-panel px-1.5 py-0.5 text-[13px]">localStorage</code>) strictly to remember your site interface preferences (such as your Google Maps display preference and cookie notification dismissal). No cross-site tracking or advertising identifiers are stored.
        </p>
      </section>

      <section>
        <h2>4. Google Maps & Third-Party Embeds</h2>
        <p>
          To protect your privacy by default, our interactive map is only loaded when you explicitly click &ldquo;Load Google Maps.&rdquo; Once activated, your browser connects directly to Google&rsquo;s servers, which may process your IP address and set cookies in accordance with Google&rsquo;s Privacy Policy. You may revoke map consent at any time via the on-page toggle.
        </p>
      </section>

      <section>
        <h2>5. Phone Inquiries & Service Coordination</h2>
        <p>
          When you call our administration at <a href={`tel:${siteData.phone}`} className="underline">{siteData.phone}</a> or message us regarding charger availability, vehicle model rates, car wash, or servicing bookings, your contact information is used strictly to assist with your inquiry.
        </p>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>
          For any privacy questions or requests, contact administration at <a href={`tel:${siteData.phone}`} className="underline">{siteData.phone}</a> or visit us at {siteData.address.full}.
        </p>
      </section>
    </LegalPage>
  );
}
