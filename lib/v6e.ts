/**
 * Farizon V6E — product content.
 * ALL client-facing strings are reproduced EXACTLY from the supplied PPTX,
 * including unusual spacing, punctuation and incomplete vehicle references.
 * Do not "fix" these strings — the content is locked.
 */

export const v6eHero = {
  name: "Farizon V6E Electric Cargo Van",
  tagline: "Move more, operate smarter and take greater control of your working day.",
  body: "The Farizon V6E is a purpose-built electric cargo van engineered for modern delivery, distribution and fleet operations. It combines up to 300 km of CLTC range with a 1,150 kg payload, 5.9 m³ of cargo capacity and rapid DC charging—giving your business the practical capability it needs without depending on conventional fuel.",
  body2:
    "Test drives are available, and the V6E can be ordered in any quantity your business requires—from one vehicle to a complete fleet.",
};

/** Exact spec strings. First four are the dominant block. */
export const v6eSpecsPrimary = [
  "Up to 300 km CLTC driving range",
  "5.9 m³ cargo capacity",
  "Up to 1,150 kg payload",
  "41.86 kWh CATL LFP battery",
];
export const v6eSpecsSecondary = [
  "100 kW maximum power output",
  "229 Nm maximum torque",
  "DC charging from 10% to 80% in up to 30 minutes",
  "Five-year or 200,000 km warranty",
  "Rear-wheel drive",
  "Two seats",
];

export interface V6EHotspot {
  id: string;
  name: string;
  x: number;
  y: number;
}
/** Feature names EXACT. Positions are over interactive.png (side profile). */
export const v6eHotspots: V6EHotspot[] = [
  { id: "range", name: "Impressive range", x: 40, y: 74 },
  { id: "performance", name: "High performance", x: 80, y: 80 },
  { id: "built", name: "Built different. Built better", x: 30, y: 30 },
  { id: "steering", name: "Heated multi-function steering wheel", x: 70, y: 40 },
  { id: "driver", name: "Driver-centric design", x: 77, y: 58 },
  { id: "touchscreen", name: "Floating touchscreen", x: 85, y: 45 },
  { id: "charging", name: "Fast charging", x: 90, y: 62 },
];

export const v6eBusiness = {
  heading: "Your Business Should Move Forward—not Be Held Back by Fuel Costs",
  body: [
    "For a commercial operation, every kilometer matters. Fuel-price changes, maintenance requirements and vehicle downtime can make operating costs more difficult to control.",
    "The fully electric Farizon V6E helps businesses reduce their dependence on fuel and plan their daily mobility around electric energy. Its purpose-built electric platform is designed specifically for commercial work, delivering responsive performance, practical loading capability and zero tailpipe emissions.",
    "This is more than a change in power source. It is a smarter way to approach everyday business mobility.",
  ],
};

export const v6eCargo = {
  heading: "Make More Room for Business",
  body: [
    "The V6E provides up to 5.9 m³ of cargo capacity and a payload of up to 1,150 kg, helping businesses transport more goods, equipment and supplies in every journey.",
    "A wide side sliding door and double rear doors that open up to 270 degrees support efficient loading and unloading. The cargo compartment also includes a sealed partition, a practical PP floor, cargo tie rings and compartment lighting.",
    "Whether you operate in retail distribution, e-commerce, FMCG, pharmaceuticals, maintenance services or last-mile delivery, the V6E gives you the space to work with confidence.",
  ],
};

/** Cargo Highlights — first four are dimension figures, then four detail items. */
export const v6eCargoHighlightsFigures = [
  "Internal cargo length of up to 2,800 mm",
  "Internal cargo width of 1,600 mm",
  "Up to 5.9 m³ of usable cargo volume",
  "Up to 1,150 kg payload",
];
export const v6eCargoHighlightsDetails = [
  "Side sliding cargo door",
  "270-degree double rear doors",
  "Cargo tie rings",
  "Compartment lighting",
];

/** High Performance — each string kept whole; UI bolds the lead label before the first colon. */
export const v6ePerformance = [
  "Independently Developed Technology: Farizon  represents a revolutionary upgrade of Farzon's VAN technology, which enables lower energy consumption and higher performance.",
  "Long Range: Top-tier brand batteries enable fast charging from 20% to 80% in less than 50 minutes, with more than 260km range. The EIC system and core components have a 6-year 300,000km warranty.",
  "Energy Efficient: Equipped with Bluetooth, ECO switch and multi-state gliding energy recovery switch, Farizon  can support multiple energy recovery modes to save energy and improve range.",
  "KMVSS & EMARK Certified: Meets stringent criteria to achieve global standards.",
  "Convenience: The 4:6 double-door tailgates can be opened on both sides ( 270° ) to satisfy freight handling needs in various distribution scenarios. The cargo platform is 540mm* above the ground.",
];

export const v6eDurability = [
  "Humanized design: 13 storage spaces and 500mm-width of the driver's seat make the driving experience pleasurable.",
  "Solid Endurance: With over 5800 test runs of more than 1 million kilometres, the vehicle is capable of performing all driving functions in high temperatures, high humidity, high altitude and extreme cold, and is also corrosion resistant.",
];

export const v6eExtraSpace = [
  "6Mp Cargo Space: With the cube shape design and an inner width of 1600mm, the 6m³ cargo capacity is 10% larger than products of the same class.",
  "Bearing Capacity: The vehicle body adopts a cage structure, and the roof can withstand a maximum pressure of 7.5T.",
  "Large Capacity: The high-strength steel floor allows a load capacity of 1.5T, which is 260kg more than products of the same size.",
];

/** Two blocks, both titled "Increased Load Capacity" — incomplete references preserved. */
export const v6eLoadCapacity = [
  "Engineered with a reinforced chassis, the  supports increased payload capacity, making it well-suited for heavier commercial applications while maintaining stability and performance.",
  "The vehicle’s modular architecture simplifies maintenance and servicing processes, allowing for quicker diagnostics and repairs while minimizing operational disruption.",
];

export const v6eInterior =
  "The cabin features ergonomically engineered seating with multiple adjustment options, combined with durable, high-quality materials to ensure comfort and support during extended driving periods.";

export const v6eModular =
  "The intelligently designed cargo area offers high flexibility, enabling seamless integration of various configurations, including cooling systems and specialized modules. This makes the  suitable for multiple commercial applications while maintaining optimal space utilization.";
