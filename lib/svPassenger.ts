/**
 * Farizon SV Passenger — product content.
 * All client-facing strings are reproduced EXACTLY from the supplied PPTX
 * (slides 26–30). No specifications, descriptions or claims are invented.
 * Colour swatches follow the approved SV colour reference (project requirement).
 */

export const svSpecs = [
  { value: "7", unit: "", label: "Seats" },
  { value: "36", unit: "min", label: "20–80% charging" },
  { value: "170", unit: "kW", label: "231 PS" },
  { value: "336", unit: "Nm", label: "Torque" },
];

export interface Hotspot {
  id: string;
  name: string;
  x: number; // % of stage width
  y: number; // % of stage height
}

/** Slide 30 — feature names only ("a sign of the name of the feature appears"). */
export const svHotspots: Hotspot[] = [
  { id: "colors", name: "Available colors", x: 24, y: 27 },
  { id: "seats", name: "7 seats", x: 55, y: 55 },
  { id: "charging", name: "Fast charging", x: 90, y: 50 },
  { id: "performance", name: "High performance", x: 84, y: 80 },
  { id: "range", name: "Impressive range", x: 40, y: 74 },
];

export const svColors = [
  { name: "Black", hex: "#251A17" },
  { name: "Beige", hex: "#DECC97" },
  { name: "White", hex: "#F4F4F4" },
  { name: "Grey", hex: "#9BA1A3" },
  { name: "Blue", hex: "#74A0CD" },
  { name: "Green", hex: "#A9C1B1" },
];

/** Slide 26 — Safety (exact wording). */
export const svSafety = [
  {
    n: "01",
    title: "For Passengers",
    body: "Maximum safety for all passengers, reduced risk of injury in the event of a collision and improved overall passenger safety.",
  },
  {
    n: "02",
    title: "Highway",
    body: "It automatically adjusts speed and maintains a safe distance, for stress-free highway driving.",
  },
  {
    n: "03",
    title: "Brakes",
    body: "Farizon SuperVan uses autonomous emergency braking system which is a technology that originally was developed for industrial robots to be able to operate safely with humans. Its mechanism is a system of avoiding collision. This helps drivers react promptly in crowded roads and changing traffic conditions",
  },
  {
    n: "04",
    title: "For Longer Journeys",
    body: "It warns the driver of unintentional lane changes and helps prevent accidents caused by distraction or fatigue.",
  },
  {
    n: "05",
    title: "When Reversing",
    body: "It warns of oncoming vehicles when reversing and can automatically brake to avoid collisions.",
  },
  {
    n: "06",
    title: "Safer Nighttime Routes",
    body: "automatically adjusts the headlights for optimal road illumination and clear visibility at night, without blinding other drivers.",
  },
];

/** Slide 26 — Comfort (exact wording). */
export const svComfort = [
  {
    title: "Improved Visibility",
    body: "increased safety and easier driving in fog, heavy rain or snow.",
  },
  {
    title: "Comfortable Ride",
    body: "Reduces fatigue and improves concentration and alertness during cold weather.",
  },
  {
    title: "360 Degree View",
    body: "Easier and safer parking, maneuvering and navigating in tight spaces.",
  },
];

/** Slide 29 — Driving technology (exact wording). */
export const svTech = [
  {
    n: "01",
    key: "suspension",
    icon: "/sv-passenger/icons/suspension.svg",
    title: "Independent dual-wishbone suspension",
    body: "Farizon vans bring all the comfort and handling characteristics of an electric car to your business. The Farizon SV is the world’s first electric van with independent dual-wishbone suspension for car-like handling.",
  },
  {
    n: "02",
    key: "fast-charging",
    icon: "/sv-passenger/icons/fast-charging.svg",
    title: "Fast-charging capabilities",
    body: "Charging is super-smart and super easy. Charge from 20-80% in just 36 minutes. And with vehicle-to-load (V2L) charging, you can even use and charge power tools via three European-standard three-pin plug sockets.",
  },
  {
    n: "03",
    key: "drive-by-wire",
    icon: "/sv-passenger/icons/drive-by-wire.svg",
    title: "Drive-by-wire",
    body: "With drive-by-wire steering architecture, the Farizon SV offers better response times and energy recovery for improved driving characteristics",
  },
  {
    n: "04",
    key: "high-performance",
    icon: "/sv-passenger/icons/high-performance.svg",
    title: "High performance",
    body: "170kW (231PS) of power and 336Nm of torque ensure smooth and responsive driving, even when fully loaded.",
  },
  {
    n: "05",
    key: "agile",
    icon: "/sv-passenger/icons/agile.svg",
    title: "Agile and comfortable",
    body: "With a world-first use of an independent dual-wishbone front-suspension system on an electric van, the SV provides the comfort and handling of a car",
  },
];

/** Slide 28 — Features (exact wording, used as photo captions). */
export const svInterior = [
  {
    image: "/sv-passenger/interior-ergonomic.jpg",
    label: "Ergonomic driver cabin",
    body: "Ergonomic driver cabin for long working hours",
  },
  {
    image: "/sv-passenger/interior-dashboard.jpg",
    label: "Dashboard layout",
    body: "Dashboard layout allows easy access key controls",
  },
  {
    image: "/sv-passenger/interior-materials.jpg",
    label: "Durable interior materials",
    body: "Durable interior materials designed for everyday requirements",
  },
  {
    image: "/sv-passenger/interior-brand.jpg",
    label: "Brand details",
    body: "Brand logo on the interior details creates distinctive and modern brand signature",
  },
];

/** Slide 28 — OTA upgradable-feature categories. */
export const svOtaAreas = [
  "Intelligent Driving",
  "Performance Optimization",
  "Infotainment & Connectivity",
  "Safety & Maintenance",
];

export const svGallery = [
  { src: "/sv-passenger/lifestyle-4.jpg", alt: "Farizon SV Passenger" },
  { src: "/sv-passenger/lifestyle-1.jpg", alt: "Farizon SV Passenger" },
  { src: "/sv-passenger/lifestyle-2.jpg", alt: "Farizon SV Passenger" },
  { src: "/sv-passenger/lifestyle-5.jpg", alt: "Farizon SV Passenger" },
  { src: "/sv-passenger/lifestyle-6.jpg", alt: "Farizon SV Passenger" },
];
