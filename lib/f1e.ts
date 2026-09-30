/**
 * Farizon F1E — product content.
 * All client-facing strings are reproduced EXACTLY from the supplied PPTX.
 * No specifications, features or claims are invented. No F1E intro paragraph
 * is supplied by the PPTX, so the At-a-Glance section is visual-led.
 */

export interface F1EFeature {
  n: string;
  title: string;
  body: string;
  image: string;
}

/** Features 01–03 have dedicated visuals. Feature 04 has no image (see specs). */
export const f1eFeatures: F1EFeature[] = [
  {
    n: "01",
    title: "Ultra-Strong Load-Bearing, Ultra-Stable Body",
    body: "The loading mass is 30% higher than the competitors. The frame is designed with superior cross-sectional dimensions, which makes driving more stable.",
    image: "/f1e/feat-load.png",
  },
  {
    n: "02",
    title: "Strong Power, Super-Fast Charge",
    body: "It is built on Farizon GXA-M architecture and a fast recharge of as early as 30 minutes.",
    image: "/f1e/feat-power.png",
  },
  {
    n: "03",
    title: "Superior Cabin, Versatile Space",
    body: "It is designed with a light truck-grade wide-body cabin, with 13 storage spaces, full of details.",
    image: "/f1e/feat-cabin.png",
  },
];

/** Feature 04 — no dedicated image; integrated into the specifications section. */
export const f1eFeature04 = {
  n: "04",
  title: "Intelligent Control, Intelligent Upgrade, Reverse Power Supply",
  body: "The mobile “Farizon” APP supports the query of dealers, service stations, and repair stations, designed with an industry-leading reverse power supply.",
};

export const f1eSpecs = [
  { value: "CATL 41.86 kWh", label: "Battery Capacity" },
  { value: "Up to 90km/h", label: "Speed" },
  { value: "Up to 1460kg", label: "Payload capacity" },
  { value: "ABS & EBD & ASR", label: "Safety" },
];

export interface F1EConfig {
  id: string;
  name: string;
  images: string[];
}

export const f1eConfigs: F1EConfig[] = [
  { id: "box", name: "Box", images: ["/f1e/box-1.jpg", "/f1e/box-2.jpg"] },
  { id: "fridge", name: "Fridge", images: ["/f1e/fridge-1.jpg", "/f1e/fridge-2.jpg"] },
  { id: "stake", name: "Stake", images: ["/f1e/stake-1.jpg", "/f1e/stake-2.jpg"] },
];
