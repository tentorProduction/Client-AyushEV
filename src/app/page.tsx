import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ChargingInfo } from "@/components/sections/charging-info";
import { EVCalculator } from "@/components/sections/ev-calculator";
import { VehicleCompatibility } from "@/components/sections/vehicle-compatibility";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Facilities } from "@/components/sections/facilities";
import { LocalGeoGuide } from "@/components/sections/local-geo-guide";
import { Location } from "@/components/sections/location";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { StickyActionBar } from "@/components/ui/sticky-action-bar";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ChargingInfo />
        <EVCalculator />
        <VehicleCompatibility />
        <HowItWorks />
        <Pricing />
        <WhyChooseUs />
        <Facilities />
        <LocalGeoGuide />
        <Location />
        <FAQ />
        <Contact />
      </main>
      <StickyActionBar />
      <Footer />
    </>
  );
}
