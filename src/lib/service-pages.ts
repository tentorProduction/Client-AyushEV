export interface ServicePageFaq {
  q: string;
  a: string;
}

export interface ServicePageBlock {
  heading: string;
  body: string;
}

export interface ServicePageData {
  slug: string;
  /** Metadata title only — the root layout template appends the brand. */
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  h1Accent: string;
  intro: string;
  facts: readonly { label: string; value: string }[];
  blocks: readonly ServicePageBlock[];
  checklist: { title: string; items: readonly string[] };
  faqs: readonly ServicePageFaq[];
}

const rate = "Rs 16.50 per kWh";

export const servicePages = {
  "ev-charging-janakpur": {
    slug: "ev-charging-janakpur",
    title: "EV Charging Station in Janakpur",
    metaDescription:
      "DC fast charging at Aayush EV Janakpur: 120kW GB/T and 80kW CCS2 chargers at Rs 16.50 per kWh, four vehicles at once, at Medical Chowk, Ramdaiya Bhawadi-1.",
    eyebrow: "DC fast charging",
    h1: "EV charging in",
    h1Accent: "Janakpur that keeps you moving.",
    intro:
      "Aayush EV runs two DC fast charging points at Medical Chowk, Ramdaiya Bhawadi-1 in Janakpur Dham: a 120 kW GB/T charger and an 80 kW CCS2 charger. Both deliver at Rs 16.50 per kWh, and the site handles up to four electric vehicles at the same time.",
    facts: [
      { label: "120 kW charger", value: "GB/T connector, dual gun" },
      { label: "80 kW charger", value: "CCS2 connector, dual gun" },
      { label: "Rate", value: rate },
      { label: "Capacity", value: "Up to 4 vehicles simultaneously" },
    ],
    blocks: [
      {
        heading: "Which charger does your EV need?",
        body: "Most Chinese-market EVs sold in Nepal — BYD Atto 3, Dolphin, Seal, e6, Deepal S07, Neta V and Seres — use the GB/T plug and connect to our 120 kW point. Indian and European models such as the Tata Nexon EV, Tiago EV, Punch EV, MG ZS EV, Mahindra XUV400, Hyundai Ioniq 5, Kona Electric and Omoda E5 use CCS2 and connect to our 80 kW point. If you are unsure which plug your car has, call us before you set out.",
      },
      {
        heading: "How long a charge takes",
        body: "Our published ratings are the maximum the charger can deliver. The power your car actually receives is decided by its onboard battery management system, its state of charge, battery temperature and the supply conditions at that moment. As a guide, a BYD Atto 3 from 20% to 80% typically takes 35 to 45 minutes, a Tata Nexon EV Long Range 40 to 50 minutes, and a Hyundai Ioniq 5 25 to 35 minutes.",
      },
      {
        heading: "On the Janakpur-Dhalkebar corridor",
        body: "The station sits on the Janakpur-Dhalkebar highway corridor at Ramdaiya Bhawadi-1, close to Medical Chowk and its cafes and tea stalls. That makes it a practical stop for drivers continuing towards Kathmandu, Dhalkebar, Sitamarhi or Bardibas rather than a detour through the city.",
      },
    ],
    checklist: {
      title: "What to expect on arrival",
      items: [
        "Park in any free bay and our team connects the cable for you",
        "Confirm your model's rate before the session starts",
        "Pay by cash, Fonepay or QR, eSewa, Khalti or mobile banking",
        "Wait in the driver rest area, or use the car wash while you wait",
      ],
    },
    faqs: [
      {
        q: "How much does EV charging cost at Aayush EV Janakpur?",
        a: "Both DC fast chargers are priced at Rs 16.50 per kWh. Charging billed by battery percentage is calculated from your vehicle model and battery capacity, so call administration to confirm your model's rate before charging.",
      },
      {
        q: "Do you have a GB/T charger for BYD cars in Janakpur?",
        a: "Yes. Our 120 kW DC fast charger uses the GB/T connector and suits BYD Atto 3, Dolphin, Seal and e6, as well as Deepal, Neta, Seres and other GB/T vehicles.",
      },
      {
        q: "Can I charge a Tata Nexon EV or MG ZS EV here?",
        a: "Yes. Those and other CCS2 vehicles use our 80 kW DC fast charger, which also serves the Hyundai Ioniq 5, Kona Electric, Omoda E5 and Mahindra XUV400.",
      },
      {
        q: "Is the station open for emergency charging at night?",
        a: "Phone and route assistance is available around the clock. Call ahead so our team can confirm that a charger is free when you arrive.",
      },
    ],
  },

  "car-wash-janakpur": {
    slug: "car-wash-janakpur",
    title: "Car Wash in Janakpur Dham",
    metaDescription:
      "High-pressure foam wash and exterior cleaning at Aayush EV, Medical Chowk, Ramdaiya Bhawadi-1, Janakpur Dham. Wash your car while it DC fast charges.",
    eyebrow: "Car washing",
    h1: "A clean car while",
    h1Accent: "your battery fills.",
    intro:
      "Aayush EV runs a car wash at Medical Chowk, Ramdaiya Bhawadi-1 in Janakpur Dham. High-pressure foam washing and exterior cleaning are done on site, which means a 30 to 45 minute DC charging session can also finish your wash.",
    facts: [
      { label: "Service", value: "High-pressure foam wash and exterior cleaning" },
      { label: "Location", value: "Medical Chowk, Ramdaiya Bhawadi-1" },
      { label: "Best combined with", value: "DC fast charging on site" },
      { label: "Pricing", value: "Call to confirm current wash pricing" },
    ],
    blocks: [
      {
        heading: "Wash and charge in one stop",
        body: "Most drivers stop washing and charging separately because there is no reason to wait twice. A DC fast charge to 80% takes roughly half an hour for a typical crossover, which is enough time to complete an exterior foam wash. You leave with a charged battery and a clean vehicle.",
      },
      {
        heading: "What the wash covers",
        body: "The service is a high-pressure exterior foam wash. Ask our team before you hand over the car if you want work beyond the exterior, so that timing and price are clear from the start rather than agreed at the counter.",
      },
      {
        heading: "For vehicles that are not charging",
        body: "You do not need an electric car or a charging session to use the wash. Pets, taxis, private cars and Wingers from Janakpur and Dhanusha come here for washing alone. Call ahead at busy times so you are not waiting for a bay.",
      },
    ],
    checklist: {
      title: "Before you arrive",
      items: [
        "Call to check that a wash bay is free",
        "Ask about pricing and how long your vehicle will take",
        "Clear the footwell of loose items if you want interior space untouched",
        "Tell the team about any broken trim or paint you want left alone",
      ],
    },
    faqs: [
      {
        q: "Do I need to charge my car to use the car wash?",
        a: "No. The car wash at Aayush EV in Janakpur Dham is open to any vehicle, including petrol cars, taxis and Wingers, whether or not you use the chargers.",
      },
      {
        q: "How much does a car wash cost in Janakpur?",
        a: "Wash pricing changes with the service you choose, so call our team on the number listed on this site to confirm the current price and timing before you visit.",
      },
      {
        q: "Can I get my car washed while my EV fast charges?",
        a: "Yes, that is the most common way people use the site. A DC fast charge from a low state of charge takes about 30 to 45 minutes for many models, which is enough time for an exterior foam wash.",
      },
    ],
  },

  "car-rental-janakpur": {
    slug: "car-rental-janakpur",
    title: "Car and Winger Rental in Janakpur",
    metaDescription:
      "Rent a car, or a 14-seat or 16-seat Winger, from Aayush EV at Medical Chowk, Janakpur Dham. Call with your date, route and passenger count to arrange a rental.",
    eyebrow: "Vehicle rentals",
    h1: "Cars and Wingers",
    h1Accent: "for your next trip out of Janakpur.",
    intro:
      "Aayush EV arranges car rentals and 14-seat and 16-seat Winger rentals from Medical Chowk, Ramdaiya Bhawadi-1 in Janakpur Dham. Weddings, group pilgrimages, family trips and office transport are all handled by phone so availability can be confirmed for your exact date.",
    facts: [
      { label: "Cars", value: "Talk to us about the model your route needs" },
      { label: "14-seat Winger", value: "Group travel and pilgrimages" },
      { label: "16-seat Winger", value: "Larger groups and events" },
      { label: "Booking", value: "By phone, with date, route and passenger count" },
    ],
    blocks: [
      {
        heading: "Choose by passenger count, not by brochure",
        body: "A 14-seat Winger and a 16-seat Winger look identical on paper but behave very differently once luggage, a driver and a full cabin are involved. Tell us how many people are travelling and what they are carrying, and we will suggest which vehicle actually fits instead of assuming the largest one is best.",
      },
      {
        heading: "Common trips we are asked about",
        body: "Janakpur is a starting point for travel in Madhesh and into the hills. We get regular requests for wedding parties, temple pilgrimages, airport transfers to Kathmandu, business transport around Dhanusha, and multi-day group tours. Each is priced and scheduled differently, so a phone conversation gets you a real answer faster than a form.",
      },
      {
        heading: "How a booking is confirmed",
        body: "Call with your pickup point, travel date, route and number of passengers. We confirm which vehicle is free on that date and what the trip costs before anything is reserved. For the larger Wingers, booking early is wise around festival and wedding season.",
      },
    ],
    checklist: {
      title: "Have these ready when you call",
      items: [
        "Travel date and pickup time",
        "Pickup point and the full route you plan to drive",
        "Number of passengers and luggage",
        "Whether you need a driver or are self-driving",
      ],
    },
    faqs: [
      {
        q: "Do you rent 14-seat and 16-seat Wingers in Janakpur?",
        a: "Yes. Aayush EV arranges both 14-seat and 16-seat Winger rentals from Medical Chowk, Ramdaiya Bhawadi-1, along with car rentals. Call to confirm availability for your travel date.",
      },
      {
        q: "How do I book a rental?",
        a: "By phone. Share your travel date, pickup point, route and passenger count, and we confirm which vehicle is free and what the trip costs before reserving it.",
      },
      {
        q: "Can I hire a car with a driver for a pilgrimage or wedding?",
        a: "That is one of our most common requests. Tell us the group size and itinerary when you call and we will match the vehicle and driving arrangement to the trip.",
      },
    ],
  },

  "ev-servicing-janakpur": {
    slug: "ev-servicing-janakpur",
    title: "EV Servicing and Vehicle Care in Janakpur",
    metaDescription:
      "EV servicing at Aayush EV Janakpur: tyre pressure, brake and coolant checks and routine vehicle inspection at Medical Chowk, Ramdaiya Bhawadi-1, Dhanusha.",
    eyebrow: "Vehicle servicing",
    h1: "Servicing that checks",
    h1Accent: "what an EV actually needs.",
    intro:
      "Alongside charging and washing, Aayush EV carries out general vehicle checks and routine servicing at Medical Chowk, Ramdaiya Bhawadi-1 in Janakpur Dham. Work covers tyre pressure, brakes, coolant levels and a general condition inspection while your vehicle is already on the site.",
    facts: [
      { label: "Checks", value: "Tyre pressure, brakes, coolant level" },
      { label: "Inspection", value: "General condition and routine maintenance" },
      { label: "Good time to book", value: "During a DC fast charging session" },
      { label: "Pricing", value: "Call to confirm the work your vehicle needs" },
    ],
    blocks: [
      {
        heading: "Why EVs still need attention",
        body: "An electric car drops the engine service, but it keeps everything that wears out on the road. Tyres carry more torque and a heavier battery, so they wear faster. Brake components still see use through regenerative braking, and coolant and thermal systems still need their levels checked. A short inspection catches these before they become a roadside problem.",
      },
      {
        heading: "What we look at",
        body: "Our team checks tyre pressure and tread condition, brake performance, and coolant and fluid levels, then flags anything that needs a workshop rather than a quick fix. If your vehicle needs specialist electrical work, we will tell you that plainly instead of attempting it here.",
      },
      {
        heading: "Combined with charging",
        body: "Scheduling a check around a charging session is the easiest way to fit it in. The car is already lifted into position for the cable, and the wait that normally goes unused is the time the inspection takes.",
      },
    ],
    checklist: {
      title: "Bring to your service visit",
      items: [
        "Your registration certificate so the vehicle is recorded correctly",
        "Notes on any warning light, noise or handling change you have noticed",
        "The date of your last tyre or brake work, if you know it",
        "Your charging plan for the day so we can time the inspection",
      ],
    },
    faqs: [
      {
        q: "Do you service electric vehicles in Janakpur?",
        a: "Yes. Aayush EV in Janakpur Dham carries out EV servicing and general inspection covering tyre pressure, brakes, coolant levels and routine maintenance. Call to confirm what your vehicle needs.",
      },
      {
        q: "Can my car be checked while I wait for a fast charge?",
        a: "Yes. Many customers book an inspection around a DC fast charging session, since the vehicle is already on site for 30 to 45 minutes.",
      },
      {
        q: "Do you repair EV battery or motor problems?",
        a: "We handle general checks and routine maintenance here. Battery and drivetrain faults need specialist equipment, and we will tell you clearly when a problem belongs in that kind of workshop.",
      },
    ],
  },
} as const satisfies Record<string, ServicePageData>;

export type ServicePageSlug = keyof typeof servicePages;

export const servicePageList = Object.values(servicePages);
