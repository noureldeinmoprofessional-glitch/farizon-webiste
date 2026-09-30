/** Primary navigation + mega-menu information architecture. */

export interface NavLink {
  label: string;
  href: string;
  hint?: string;
  image?: string;
}

export interface NavColumn {
  title: string;
  href?: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  /** When present, the item opens a mega-menu panel. */
  columns?: NavColumn[];
  /** Optional feature rail shown at the side of the mega menu. */
  feature?: {
    eyebrow: string;
    title: string;
    body: string;
    href: string;
    cta: string;
    image?: string;
  };
}

export const primaryNav: NavItem[] = [
  {
    label: "Vehicles",
    href: "/vehicles",
    columns: [
      {
        title: "LCV",
        href: "/vehicles",
        links: [
          { label: "Farizon V6E", href: "/vehicles/v6e", hint: "Electric cargo van", image: "/vehicles/v6e.png" },
          { label: "Farizon SV Passenger", href: "/vehicles/sv-passenger", hint: "SuperVan passenger", image: "/vehicles/sv-passenger.png" },
        ],
      },
      {
        title: "Mini Trucks",
        href: "/vehicles",
        links: [{ label: "Farizon F1E", href: "/vehicles/f1e", hint: "Ultra-stable body", image: "/vehicles/f1e.png" }],
      },
      {
        title: "Light Trucks",
        href: "/vehicles",
        links: [{ label: "Farizon H8E", href: "/vehicles/h8e", hint: "Higher capacity", image: "/vehicles/h8e.png" }],
      },
    ],
    feature: {
      eyebrow: "The lineup",
      title: "Explore the full range",
      body: "A purpose-built electric range for commercial work — vans to light trucks.",
      href: "/vehicles",
      cta: "View all vehicles",
      image: "/vehicles/v6e.png",
    },
  },
  {
    label: "Why Farizon",
    href: "/why-farizon",
  },
  {
    label: "Fleet Solutions",
    href: "/fleet-solutions",
    columns: [
      {
        title: "Fleet Economics",
        href: "/fleet-solutions",
        links: [
          { label: "Fleet Economics Toolkit", href: "/fleet-solutions" },
          { label: "TCO Calculator", href: "/fleet-solutions#tco" },
          { label: "Diesel vs EV Calculator", href: "/fleet-solutions#diesel-ev" },
          { label: "5-Year Cost Comparison", href: "/fleet-solutions#five-year" },
          { label: "Carbon Footprint Calculator", href: "/fleet-solutions#carbon" },
        ],
      },
    ],
    feature: {
      eyebrow: "Decision support",
      title: "Make better fleet decisions",
      body: "Practical calculators for cost, energy and emissions. Results are indicative.",
      href: "/fleet-solutions",
      cta: "Explore Fleet Economics",
    },
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

/** Flat index used to power the demo search. */
export const searchIndex: { title: string; category: string; href: string; keywords: string }[] = [
  { title: "Farizon V6E", category: "Vehicle · LCV", href: "/vehicles/v6e", keywords: "cargo van electric 300km 1150kg 5.9 payload cargo" },
  { title: "Farizon SV Passenger", category: "Vehicle · LCV", href: "/vehicles/sv-passenger", keywords: "supervan passenger 7 seats van suspension" },
  { title: "Farizon F1E", category: "Vehicle · Mini Truck", href: "/vehicles/f1e", keywords: "mini truck load bearing payload 1460 stable" },
  { title: "Farizon H8E", category: "Vehicle · Light Truck", href: "/vehicles/h8e", keywords: "light truck heavy capacity" },
  { title: "Why Farizon", category: "Discover", href: "/why-farizon", keywords: "ecological benefits technology ota advantages" },
  { title: "Technological Advancements", category: "Why Farizon", href: "/why-farizon#technology", keywords: "geely r&d ota over the air updates vehicle intelligence born electric" },
  { title: "Fleet Economics Toolkit", category: "Fleet Solutions", href: "/fleet-solutions", keywords: "calculator tco diesel ev carbon footprint cost comparison savings" },
  { title: "TCO Calculator", category: "Fleet Solutions", href: "/fleet-solutions#tco", keywords: "total cost ownership calculator" },
  { title: "Diesel vs EV Cost Calculator", category: "Fleet Solutions", href: "/fleet-solutions#diesel-ev", keywords: "energy cost fuel charging comparison" },
  { title: "Carbon Footprint Calculator", category: "Fleet Solutions", href: "/fleet-solutions#carbon", keywords: "co2 emissions carbon footprint" },
  { title: "After-Sales Excellence", category: "Support", href: "/#after-sales", keywords: "service spare parts mobile maintenance warranty national motors" },
  { title: "FAQ", category: "Support", href: "/faq", keywords: "faq questions answers charging range drivers troubleshooting buying help support" },
  { title: "Farizon Insights", category: "Articles", href: "/articles", keywords: "articles insights knowledge editorial electric mobility fleet sustainability technology" },
  { title: "About Farizon", category: "Company", href: "/about", keywords: "geely 2014 new energy commercial history national motors egypt" },
  { title: "Contact Us", category: "Company", href: "/contact", keywords: "contact email phone whatsapp message support get in touch location map" },
  { title: "Book a Test Drive", category: "Action", href: "#test-drive", keywords: "test drive demo try" },
  { title: "Request a Fleet Quote", category: "Action", href: "#quote", keywords: "quote fleet pricing request transform" },
];
