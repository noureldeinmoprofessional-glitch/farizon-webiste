/**
 * Vehicle data — sourced strictly from "Farizon website content (V02).pptx".
 * No specifications, claims or figures are invented. Where the source material
 * is insufficient (H8E), the record is intentionally minimal.
 */

export type VehicleCategoryId = "lcv" | "mini-truck" | "light-truck";

export interface Spec {
  value: string;
  label: string;
}

export interface Vehicle {
  id: string;
  name: string;
  categoryId: VehicleCategoryId;
  categoryLabel: string;
  /** Short editorial positioning line (from PPTX). */
  tagline: string;
  /** Supporting paragraph (from PPTX). */
  blurb: string;
  /** Teaser specs for the homepage — full specs live on the model page. */
  specs: Spec[];
  image: string;
  lifestyle: string;
  /** True when the source material supports a detailed presentation. */
  detailed: boolean;
  /** Optional note shown when detail is limited. */
  note?: string;
}

export interface VehicleCategory {
  id: VehicleCategoryId;
  label: string;
  /** One-line description of the category role. */
  summary: string;
}

export const categories: VehicleCategory[] = [
  {
    id: "lcv",
    label: "LCVs",
    summary: "Light commercial vans for delivery, distribution and passenger transport.",
  },
  {
    id: "mini-truck",
    label: "Mini Trucks",
    summary: "Compact, ultra-stable load carriers for dense urban logistics.",
  },
  {
    id: "light-truck",
    label: "Light Trucks",
    summary: "Higher-capacity electric platforms for heavier commercial duty.",
  },
];

export const vehicles: Vehicle[] = [
  {
    id: "v6e",
    name: "Farizon V6E",
    categoryId: "lcv",
    categoryLabel: "LCV · Electric Cargo Van",
    tagline: "Move more, operate smarter.",
    blurb:
      "A purpose-built electric cargo van engineered for modern delivery, distribution and fleet operations — practical capacity and dependable performance without depending on conventional fuel.",
    specs: [
      { value: "300 km", label: "CLTC range" },
      { value: "5.9 m³", label: "Cargo capacity" },
      { value: "1,150 kg", label: "Max payload" },
      { value: "30 min", label: "DC 10–80%" },
    ],
    image: "/vehicles/v6e.png",
    lifestyle: "/vehicles/lifestyle/v6e.png",
    detailed: true,
  },
  {
    id: "sv-passenger",
    name: "Farizon SV Passenger",
    categoryId: "lcv",
    categoryLabel: "LCV · SuperVan Passenger",
    tagline: "The largest van space in the LCV lineup.",
    blurb:
      "The SuperVan pairs a modular, no-B-pillar interior with the world-first independent dual-wishbone front suspension on an electric van — car-like comfort and handling for people-moving operations.",
    specs: [
      { value: "170 kW", label: "Max power" },
      { value: "336 Nm", label: "Torque" },
      { value: "7", label: "Seats" },
      { value: "36 min", label: "Charge 20–80%" },
    ],
    image: "/vehicles/sv-passenger.png",
    lifestyle: "/vehicles/lifestyle/sv-passenger.webp",
    detailed: true,
  },
  {
    id: "f1e",
    name: "Farizon F1E",
    categoryId: "mini-truck",
    categoryLabel: "Mini Truck",
    tagline: "Ultra-strong load-bearing, ultra-stable body.",
    blurb:
      "Built on the Farizon GXA-M architecture with a light-truck-grade wide-body cabin, 13 storage spaces and an industry-leading reverse power supply — engineered to stay stable under a heavier load.",
    specs: [
      { value: "1,460 kg", label: "Payload capacity" },
      { value: "41.86 kWh", label: "CATL battery" },
      { value: "90 km/h", label: "Top speed" },
      { value: "30 min", label: "Fast recharge" },
    ],
    image: "/vehicles/f1e.png",
    lifestyle: "/vehicles/lifestyle/f1e.png",
    detailed: true,
  },
  {
    id: "h8e",
    name: "Farizon H8E",
    categoryId: "light-truck",
    categoryLabel: "Light Truck",
    tagline: "Electric capability for heavier commercial duty.",
    blurb:
      "The Farizon light-truck platform extends the born-electric approach to higher-capacity commercial work. Full specifications are available on the model page.",
    specs: [],
    image: "/vehicles/h8e.png",
    lifestyle: "/vehicles/lifestyle/h8e.png",
    detailed: false,
    note: "Detailed specifications for the H8E will be published on its model page.",
  },
];

export const vehiclesByCategory = (id: VehicleCategoryId) =>
  vehicles.filter((v) => v.categoryId === id);
