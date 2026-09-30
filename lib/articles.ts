/**
 * Farizon Insights — DEMO editorial content for client presentation.
 *
 * These articles are demonstration content. They use conceptual, educational
 * language and must NOT be presented as officially published Farizon articles,
 * nor imply unsupported facts, statistics, savings or product claims.
 * Cover images use branded placeholders until approved assets are supplied —
 * set `coverImage` to a real asset path to replace a placeholder with no layout change.
 */

export type ArticleCategory =
  | "Electric Mobility"
  | "Fleet Operations"
  | "Business & Industry"
  | "Sustainability"
  | "Technology"
  | "Vehicles";

export const ARTICLE_CATEGORIES: ArticleCategory[] = [
  "Electric Mobility",
  "Fleet Operations",
  "Business & Industry",
  "Sustainability",
  "Technology",
  "Vehicles",
];

export type ArticleSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; title: string; items: { n: string; label: string; text: string }[] };

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: ArticleCategory;
  date: string;
  readTime: string;
  excerpt: string;
  coverImage: string; // "" → branded placeholder
  alt: string;
  tags: string[];
  featured?: boolean;
  content: ArticleSection[];
  keyTakeaways: string[];
}

/** Concise educational body used for the demo articles (topic-tailored, no claims). */
function body(intro: string, sections: { h: string; p: string[] }[]): ArticleSection[] {
  const out: ArticleSection[] = [{ type: "paragraph", text: intro }];
  for (const s of sections) {
    out.push({ type: "heading", level: 2, text: s.h });
    for (const p of s.p) out.push({ type: "paragraph", text: p });
  }
  return out;
}

export const articles: Article[] = [
  {
    id: "a01",
    slug: "the-business-case-for-going-electric",
    title: "The Business Case for Going Electric",
    category: "Electric Mobility",
    date: "08 SEP 2026",
    readTime: "6 MIN READ",
    excerpt:
      "Electric commercial vehicles are changing the way businesses think about transportation. From energy costs and maintenance to daily operating efficiency, the transition to electric mobility can become a strategic business decision—not simply a change in vehicle technology.",
    coverImage: "",
    alt: "Farizon electric commercial vehicles in an urban operating environment",
    tags: ["electric", "fleet", "business case", "operating cost", "efficiency"],
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "Electric commercial vehicles are no longer simply a technology decision.",
      },
      {
        type: "paragraph",
        text: "For businesses that rely on daily transportation, the more important question is how a vehicle performs across its entire working life—from energy consumption and maintenance to downtime, utilization and operating costs.",
      },
      {
        type: "paragraph",
        text: "That makes the transition to electric mobility a business decision as much as an automotive one.",
      },
      { type: "heading", level: 2, text: "Beyond the Purchase Price" },
      { type: "paragraph", text: "A commercial vehicle represents an ongoing operating cost." },
      {
        type: "paragraph",
        text: "Fuel or electricity, maintenance, downtime and daily utilization all contribute to the total cost of keeping a fleet moving.",
      },
      { type: "paragraph", text: "Electric vehicles introduce a different operating model." },
      {
        type: "paragraph",
        text: "With fewer moving parts and electric propulsion, businesses can approach energy and maintenance from a different perspective while planning around their specific routes and operating requirements.",
      },
      { type: "heading", level: 2, text: "Efficiency Starts With the Right Operation" },
      { type: "paragraph", text: "There is no single number that defines real-world efficiency." },
      {
        type: "paragraph",
        text: "Route length, traffic, payload, speed, temperature, air conditioning and driving behaviour can all influence energy consumption.",
      },
      {
        type: "paragraph",
        text: "For fleet operators, this means evaluating vehicles against the conditions they will actually experience.",
      },
      {
        type: "paragraph",
        text: "A route that works perfectly on paper may behave differently during summer traffic, a fully loaded delivery cycle or a high-speed journey.",
      },
      { type: "paragraph", text: "The best fleet decisions therefore begin with real operational data." },
      { type: "heading", level: 2, text: "Charging Is Part of the Business Plan" },
      {
        type: "paragraph",
        text: "An electric fleet needs a charging strategy that fits the way the business works.",
      },
      {
        type: "paragraph",
        text: "Depot charging can provide predictable access to energy during longer dwell periods, while compatible public charging can support routes and provide additional flexibility.",
      },
      { type: "paragraph", text: "The right approach depends on:" },
      {
        type: "list",
        items: [
          "daily vehicle mileage",
          "parking arrangements",
          "dwell time",
          "available site power",
          "route requirements",
          "vehicle charging capability",
        ],
      },
      {
        type: "paragraph",
        text: "Charging should therefore be considered alongside vehicle selection—not after it.",
      },
      { type: "heading", level: 2, text: "The Value of Intelligent Connectivity" },
      { type: "paragraph", text: "Electric mobility is also becoming increasingly connected." },
      {
        type: "paragraph",
        text: "Software and over-the-air technology can allow compatible vehicle systems to receive updates remotely, helping vehicles evolve throughout their lifecycle.",
      },
      {
        type: "paragraph",
        text: "For commercial operators, the broader opportunity is continuous improvement: better information, smarter systems and a closer connection between vehicles and the operations they support.",
      },
      {
        type: "callout",
        title: "What Should Businesses Evaluate?",
        items: [
          { n: "01", label: "Daily distance", text: "Understand how far vehicles actually travel during a normal working day." },
          { n: "02", label: "Payload", text: "Match vehicle capability to the loads and operating conditions the business requires." },
          { n: "03", label: "Charging", text: "Identify when and where vehicles can reliably charge." },
          { n: "04", label: "Operating cost", text: "Look beyond acquisition cost and evaluate the wider fleet economics." },
          { n: "05", label: "Real-world conditions", text: "Test assumptions against actual routes, climate, traffic and driver behaviour." },
        ],
      },
      { type: "heading", level: 2, text: "A Smarter Fleet Decision Starts With Better Information" },
      {
        type: "paragraph",
        text: "The transition to electric commercial mobility does not have to be treated as a leap into the unknown.",
      },
      {
        type: "paragraph",
        text: "By combining vehicle capability with real operational requirements, businesses can evaluate whether electric mobility makes sense for their fleet—and where it can create the greatest value.",
      },
      { type: "paragraph", text: "Farizon is built around this new generation of commercial mobility." },
    ],
    keyTakeaways: [
      "Look beyond purchase price.",
      "Evaluate real-world routes and operating conditions.",
      "Plan charging alongside vehicle selection.",
      "Consider the complete fleet operating model.",
      "Use data to support the transition to electric mobility.",
    ],
  },
  {
    id: "a02",
    slug: "understanding-total-cost-of-ownership-for-electric-fleets",
    title: "Understanding Total Cost of Ownership for Electric Fleets",
    category: "Fleet Operations",
    date: "04 SEP 2026",
    readTime: "7 MIN READ",
    excerpt:
      "The purchase price is only one part of the fleet equation. Understanding energy, maintenance, downtime and operational requirements provides a clearer picture of the long-term cost of running commercial vehicles.",
    coverImage: "",
    alt: "Commercial fleet operating cost planning",
    tags: ["tco", "fleet", "operating cost", "planning"],
    content: body(
      "Total cost of ownership looks at a vehicle across its entire working life, not just the day it is purchased.",
      [
        {
          h: "The Full Operating Picture",
          p: [
            "Acquisition, energy, maintenance, downtime and utilization each contribute to what a vehicle really costs to run.",
            "Viewing these together—rather than in isolation—helps operators compare options on a consistent basis.",
          ],
        },
        {
          h: "Why Assumptions Matter",
          p: [
            "Every input in a cost model depends on how a vehicle is actually used.",
            "Distance, load, route, climate and charging approach all shape the result, so assumptions should reflect the real operation.",
          ],
        },
        {
          h: "From Numbers to Decisions",
          p: [
            "A cost model is a planning tool, not a promise. It supports internal discussion and helps identify where electric mobility can create value.",
            "The most useful comparisons keep payload, route and operating conditions reasonably similar between the vehicles being assessed.",
          ],
        },
      ]
    ),
    keyTakeaways: [
      "Purchase price is one input among many.",
      "Model energy, maintenance, downtime and utilization together.",
      "Base assumptions on the real operation.",
      "Compare like-for-like vehicles and conditions.",
      "Use the model to support decisions, not to guarantee outcomes.",
    ],
  },
  {
    id: "a03",
    slug: "what-does-born-electric-mean-for-a-commercial-vehicle",
    title: "What Does “Born Electric” Mean for a Commercial Vehicle?",
    category: "Technology",
    date: "29 AUG 2026",
    readTime: "5 MIN READ",
    excerpt:
      "Purpose-built electric vehicles are designed around electric propulsion from the beginning. Explore what this approach means for efficiency, packaging, performance and the everyday demands of commercial transportation.",
    coverImage: "",
    alt: "Purpose-built electric commercial vehicle architecture",
    tags: ["born electric", "platform", "technology", "efficiency"],
    content: body(
      "A purpose-built electric vehicle is engineered around electric propulsion from the ground up rather than adapted from a combustion platform.",
      [
        {
          h: "Designed Around the Battery",
          p: [
            "When a vehicle is designed for electric power from the start, the battery, drive system and structure can be packaged to work together.",
            "This can influence how space, load area and proportions are organised for commercial use.",
          ],
        },
        {
          h: "Why the Approach Matters",
          p: [
            "Building for electric first means the everyday demands of commercial transport can be considered alongside efficiency and packaging.",
            "For operators, the goal is a vehicle that suits the work it is asked to do.",
          ],
        },
      ]
    ),
    keyTakeaways: [
      "“Born electric” means engineered for electric propulsion from the start.",
      "Battery, drive and structure can be packaged together.",
      "The approach considers real commercial demands, not just technology.",
    ],
  },
  {
    id: "a04",
    slug: "how-electric-vehicles-can-support-smarter-urban-logistics",
    title: "How Electric Vehicles Can Support Smarter Urban Logistics",
    category: "Electric Mobility",
    date: "24 AUG 2026",
    readTime: "6 MIN READ",
    excerpt:
      "Urban logistics is changing rapidly. Explore how electric commercial vehicles can support cleaner, quieter and more efficient movement of goods across increasingly demanding city environments.",
    coverImage: "",
    alt: "Electric commercial vehicle in a city logistics setting",
    tags: ["urban", "logistics", "last-mile", "electric"],
    content: body(
      "Cities are asking more of the vehicles that move goods through them, and electric commercial vehicles are part of that conversation.",
      [
        {
          h: "The Demands of the City",
          p: [
            "Dense routes, frequent stops and access restrictions shape how urban deliveries are planned.",
            "Electric vehicles can contribute to quieter, lower-emission operation in these environments.",
          ],
        },
        {
          h: "Operating Efficiently",
          p: [
            "Stop-start driving, dwell time and route design all influence how a vehicle performs in the city.",
            "Matching the vehicle and charging approach to the route is central to efficient urban logistics.",
          ],
        },
      ]
    ),
    keyTakeaways: [
      "Urban routes place specific demands on commercial vehicles.",
      "Electric vehicles can support cleaner, quieter operation.",
      "Efficiency depends on matching vehicle and route.",
    ],
  },
  {
    id: "a05",
    slug: "planning-the-right-charging-strategy-for-your-fleet",
    title: "Planning the Right Charging Strategy for Your Fleet",
    category: "Fleet Operations",
    date: "18 AUG 2026",
    readTime: "8 MIN READ",
    excerpt:
      "Charging is not simply about finding a charger. Fleet operators need to consider daily distance, vehicle usage, parking, dwell time, available site power and operational schedules when planning their charging approach.",
    coverImage: "",
    alt: "Fleet charging strategy planning",
    tags: ["charging", "depot", "strategy", "fleet"],
    content: body(
      "A charging strategy is part of how a fleet operates, and it works best when it is planned alongside the vehicles themselves.",
      [
        {
          h: "Start With the Operation",
          p: [
            "Daily distance, parking, dwell time and shift patterns determine when and where vehicles can charge.",
            "Understanding these first makes the charging approach far clearer.",
          ],
        },
        {
          h: "Depot and Public Charging",
          p: [
            "Depot charging can provide predictable access during longer dwell periods, while compatible public charging can support routes and add flexibility.",
            "Site power availability and vehicle charging capability both shape what is practical.",
          ],
        },
      ]
    ),
    keyTakeaways: [
      "Plan charging alongside vehicle selection.",
      "Base the approach on daily distance, dwell time and site power.",
      "Treat public charging as route support and flexibility.",
    ],
  },
  {
    id: "a06",
    slug: "ac-vs-dc-charging-what-fleet-operators-need-to-know",
    title: "AC vs DC Charging: What Fleet Operators Need to Know",
    category: "Technology",
    date: "12 AUG 2026",
    readTime: "5 MIN READ",
    excerpt:
      "AC and DC charging serve different operational needs. Understanding the difference can help businesses plan charging around vehicle dwell time, route requirements and turnaround expectations.",
    coverImage: "",
    alt: "AC and DC charging for commercial vehicles",
    tags: ["charging", "ac", "dc", "technology"],
    content: body(
      "AC and DC charging are two ways of delivering energy to a vehicle, and each suits different parts of a fleet operation.",
      [
        {
          h: "How They Differ",
          p: [
            "AC charging sends alternating current to the vehicle, whose onboard charger converts it for the battery.",
            "DC charging converts electricity in the charger and delivers it directly to the battery, allowing higher power on compatible vehicles.",
          ],
        },
        {
          h: "Matching Charging to Dwell Time",
          p: [
            "AC commonly suits longer depot dwell, while DC suits faster turnaround.",
            "Compatibility and the vehicle’s maximum acceptance rate should always be confirmed.",
          ],
        },
      ]
    ),
    keyTakeaways: [
      "AC converts on the vehicle; DC converts in the charger.",
      "AC suits longer dwell; DC suits faster turnaround.",
      "Always confirm compatibility and acceptance rate.",
    ],
  },
  {
    id: "a07",
    slug: "making-range-work-for-real-world-commercial-routes",
    title: "Making Range Work for Real-World Commercial Routes",
    category: "Fleet Operations",
    date: "06 AUG 2026",
    readTime: "7 MIN READ",
    excerpt:
      "Range is influenced by much more than the number shown on a specification sheet. Temperature, traffic, payload, speed, air conditioning and driving behaviour can all influence energy consumption.",
    coverImage: "",
    alt: "Real-world commercial route range planning",
    tags: ["range", "routes", "energy", "planning"],
    content: body(
      "The range figure on a specification sheet is a starting point, not a guarantee of what a route will use.",
      [
        {
          h: "What Influences Range",
          p: [
            "Temperature, traffic, payload, speed, air conditioning and driving behaviour all affect energy consumption.",
            "Because these vary, real routes should be measured rather than assumed.",
          ],
        },
        {
          h: "Planning With a Reserve",
          p: [
            "Many fleets plan a buffer rather than scheduling vehicles to arrive nearly empty.",
            "The appropriate reserve depends on route variability, charger reliability and the consequences of delay.",
          ],
        },
      ]
    ),
    keyTakeaways: [
      "Range depends on real conditions, not just the spec sheet.",
      "Measure energy use on actual routes.",
      "Plan and document a sensible reserve.",
    ],
  },
  {
    id: "a08",
    slug: "why-fleet-drivers-matter-in-the-ev-transition",
    title: "Why Fleet Drivers Matter in the EV Transition",
    category: "Business & Industry",
    date: "30 JUL 2026",
    readTime: "5 MIN READ",
    excerpt:
      "Technology is only one part of a successful electric-fleet transition. Driver familiarization, charging practices, route planning and efficient driving behaviour all contribute to effective day-to-day operation.",
    coverImage: "",
    alt: "Fleet drivers and the electric transition",
    tags: ["drivers", "training", "operations", "transition"],
    content: body(
      "A successful electric-fleet transition depends on people as much as on vehicles.",
      [
        {
          h: "Familiarization Matters",
          p: [
            "Drivers benefit from model-specific familiarization covering charging, range planning and regenerative braking.",
            "Confident, well-informed drivers help a fleet operate smoothly.",
          ],
        },
        {
          h: "Everyday Practice",
          p: [
            "Smooth driving, sensible use of climate control and following the charging plan all contribute to efficient operation.",
            "Safety and delivery requirements always take priority over energy saving.",
          ],
        },
      ]
    ),
    keyTakeaways: [
      "Drivers are central to a successful transition.",
      "Model-specific familiarization supports confident operation.",
      "Everyday practice shapes efficiency—safely.",
    ],
  },
  {
    id: "a09",
    slug: "ota-technology-keeping-commercial-vehicles-connected",
    title: "OTA Technology: Keeping Commercial Vehicles Connected",
    category: "Technology",
    date: "24 JUL 2026",
    readTime: "5 MIN READ",
    excerpt:
      "Connected commercial vehicles can continue improving after they leave the showroom. Over-the-air updates can allow compatible vehicle systems to receive software improvements remotely, reducing the need for some service-centre visits.",
    coverImage: "",
    alt: "Connected commercial vehicle receiving software updates",
    tags: ["ota", "connected", "software", "technology"],
    content: body(
      "A connected commercial vehicle can keep evolving throughout its lifecycle, supported by software and over-the-air technology.",
      [
        {
          h: "Software That Can Evolve",
          p: [
            "Over-the-air updates can allow compatible vehicle systems to receive software improvements remotely.",
            "This can reduce the need for some service-centre visits, depending on the vehicle and the update.",
          ],
        },
        {
          h: "The Broader Opportunity",
          p: [
            "For operators, the wider value is continuous improvement: better information and a closer connection between vehicles and operations.",
            "The specifics of what any update changes depend on the vehicle and its systems.",
          ],
        },
      ]
    ),
    keyTakeaways: [
      "Connected vehicles can keep improving after purchase.",
      "OTA updates can reach compatible systems remotely.",
      "The broader value is continuous improvement.",
    ],
  },
  {
    id: "a10",
    slug: "building-a-more-sustainable-commercial-fleet",
    title: "Building a More Sustainable Commercial Fleet",
    category: "Sustainability",
    date: "18 JUL 2026",
    readTime: "6 MIN READ",
    excerpt:
      "The move toward sustainable commercial transportation involves more than changing the powertrain. Businesses must consider energy, operations, vehicle utilization and long-term fleet planning as part of a broader transition.",
    coverImage: "",
    alt: "Building a sustainable commercial fleet",
    tags: ["sustainability", "fleet", "energy", "planning"],
    content: body(
      "Sustainability in commercial transport is a broad transition, not a single change to the vehicle.",
      [
        {
          h: "More Than the Powertrain",
          p: [
            "Energy, operations, utilization and long-term planning all form part of a more sustainable fleet.",
            "Considering these together helps a transition hold up over time.",
          ],
        },
        {
          h: "A Long-Term View",
          p: [
            "Sustainable operation benefits from planning around how vehicles are actually used.",
            "Utilization and route design are as relevant as vehicle choice.",
          ],
        },
      ]
    ),
    keyTakeaways: [
      "Sustainability is broader than the powertrain.",
      "Energy, operations and utilization all matter.",
      "Plan for the long term.",
    ],
  },
  {
    id: "a11",
    slug: "how-payload-and-vehicle-utilization-shape-fleet-efficiency",
    title: "How Payload and Vehicle Utilization Shape Fleet Efficiency",
    category: "Fleet Operations",
    date: "11 JUL 2026",
    readTime: "6 MIN READ",
    excerpt:
      "The right commercial vehicle needs to match the work it performs. Payload, cargo requirements, route characteristics and utilization all influence the efficiency of a fleet.",
    coverImage: "",
    alt: "Payload and utilization in fleet efficiency",
    tags: ["payload", "utilization", "efficiency", "fleet"],
    content: body(
      "A vehicle is efficient when it matches the work it is asked to do.",
      [
        {
          h: "Match the Vehicle to the Work",
          p: [
            "Payload, cargo requirements and route characteristics all influence which vehicle suits an operation.",
            "A mismatch between vehicle and task can undermine efficiency.",
          ],
        },
        {
          h: "Utilization Over Time",
          p: [
            "How often and how fully a vehicle is used shapes the efficiency of the whole fleet.",
            "Planning utilization is part of planning the fleet.",
          ],
        },
      ]
    ),
    keyTakeaways: [
      "Match vehicle capability to the work.",
      "Payload and route shape the right choice.",
      "Utilization drives fleet-level efficiency.",
    ],
  },
  {
    id: "a12",
    slug: "from-vehicle-selection-to-fleet-strategy",
    title: "From Vehicle Selection to Fleet Strategy",
    category: "Business & Industry",
    date: "04 JUL 2026",
    readTime: "7 MIN READ",
    excerpt:
      "Choosing an electric commercial vehicle is only the beginning. A successful transition considers vehicle requirements, charging, routes, drivers, operational schedules and long-term business objectives.",
    coverImage: "",
    alt: "From vehicle selection to fleet strategy",
    tags: ["strategy", "fleet", "transition", "planning"],
    content: body(
      "Selecting a vehicle is the start of a fleet strategy, not the end of the decision.",
      [
        {
          h: "The Wider Decision",
          p: [
            "Charging, routes, drivers and operational schedules all form part of a successful transition.",
            "Considering them together turns a vehicle choice into a strategy.",
          ],
        },
        {
          h: "Aligning With Objectives",
          p: [
            "A fleet strategy works best when it is aligned with long-term business objectives.",
            "That alignment helps a transition deliver value over time.",
          ],
        },
      ]
    ),
    keyTakeaways: [
      "Vehicle selection is the beginning, not the end.",
      "Charging, routes and drivers are part of the strategy.",
      "Align the fleet with business objectives.",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export const featuredArticle = articles.find((a) => a.featured) ?? articles[0];

/** Related = same category first (excluding self), then filled from the rest. */
export function relatedArticles(slug: string, count = 3): Article[] {
  const current = getArticle(slug);
  if (!current) return articles.slice(0, count);
  const sameCat = articles.filter((a) => a.slug !== slug && a.category === current.category);
  const others = articles.filter((a) => a.slug !== slug && a.category !== current.category);
  return [...sameCat, ...others].slice(0, count);
}
