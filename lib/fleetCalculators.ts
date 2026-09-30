/**
 * Fleet Solutions — calculator definitions.
 *
 * Field structure is translated from the supplied National Motors calculator
 * workbooks (user-input cells only). Calculated / output cells are intentionally
 * excluded. This is a LEAD-GENERATION experience: the site never computes or
 * shows a result — submitted fleet information is reviewed by the Farizon Egypt
 * sales team, who follow up. No spreadsheet filenames, formulas or confidential
 * references are exposed.
 */

export type FieldType = "text" | "number" | "percent" | "date" | "select" | "toggle";

export interface Field {
  id: string;
  label: string;
  type: FieldType;
  unit?: string;
  hint?: string;
  options?: string[];
  required?: boolean;
  placeholder?: string;
  /** Renders two inputs (e.g. Diesel vs Farizon) sharing one label. */
  dual?: boolean;
  cols?: [string, string];
}

export interface Step {
  id: string;
  title: string;
  intro?: string;
  fields?: Field[];
  /** A step whose content is a list of repeatable groups (e.g. carbon fleet groups). */
  repeatable?: { itemLabel: string; addLabel: string; min: number; fields: Field[] };
}

export type CalculatorId = "tco" | "diesel-ev" | "five-year" | "carbon";
export type VisualKind = "tco" | "energy" | "timeline" | "carbon";

export interface Calculator {
  id: CalculatorId;
  tab: string;
  title: string;
  subtitle: string;
  description: string;
  submitCta: string;
  visual: VisualKind;
  /** Optional note shown in the shell (e.g. which data Farizon applies). */
  note?: string;
  steps: Step[];
}

// Shared option sets (values observed in the supplied workbooks) ------------
const CHARGING_METHOD = [
  "Company premises — low-voltage, other uses",
  "Public charging",
  "Mixed / to be confirmed with Farizon",
];
const CHARGER_TYPES = ["Level 2", "Level 3 (public)", "Level 3 (private)"];
const ICE_FUEL = ["Diesel", "Petrol", "CNG"];
const YESNO = ["Yes", "No"];
const DIESEL_COMPARATORS = [
  "Diesel cargo van comparator",
  "Diesel passenger van comparator",
  "Diesel mini-truck comparator",
  "Diesel light-truck comparator",
];
const FARIZON_MODELS = ["Farizon V6E", "Farizon SV Passenger", "Farizon F1E", "Farizon H8E"];
const VEHICLE_TYPES = ["Cargo van", "Car", "Passenger van/bus", "Other"];
const CONTROL = ["Company-owned or operationally controlled", "Third-party / outsourced"];
const ENERGY_SOURCE = ["Diesel", "Petrol", "Electricity", "CNG"];
const FUEL_UNIT = ["L", "m³", "kWh"];
const DATA_BASIS = ["Measured", "Estimated"];
const AFTERSALES_TIER = ["Tier 1", "Tier 2", "Tier 3"];

const DIESEL_FARIZON: [string, string] = ["Diesel", "Farizon"];

export const SUCCESS = {
  heading: "Request submitted successfully",
  primary: "Thank you for sharing your fleet information.",
  body: "A Farizon Egypt sales representative will review your request and contact you shortly to discuss your fleet requirements.",
  secondary: "Your information has been successfully submitted to the Farizon Egypt team.",
};

export const REVIEW_STATEMENT =
  "By submitting this information, you are requesting a fleet assessment from Farizon Egypt. This is not a calculated result — a Farizon Egypt sales representative will review your information and follow up.";

export const calculators: Calculator[] = [
  // 01 — TCO ---------------------------------------------------------------
  {
    id: "tco",
    tab: "TCO",
    title: "Fleet Total Cost of Ownership Calculator",
    subtitle: "Look Beyond the Initial Purchase Price",
    description:
      "The purchase price of a commercial vehicle represents only one part of its financial impact. The Fleet Total Cost of Ownership Calculator helps businesses estimate and compare the costs associated with operating diesel and electric commercial vehicles over a selected ownership period.",
    submitCta: "Request TCO assessment",
    visual: "tco",
    steps: [
      {
        id: "vehicles",
        title: "Vehicles",
        intro: "Tell us about the vehicles you are comparing.",
        fields: [
          { id: "numVehicles", label: "Number of vehicles", type: "number", unit: "vehicles", required: true },
          { id: "lifetime", label: "Vehicle lifetime", type: "number", unit: "years", hint: "Expected ownership / operating life" },
          { id: "purchasePrice", label: "Purchase price", type: "number", unit: "EGP", dual: true, cols: DIESEL_FARIZON, required: true },
          { id: "iceFuel", label: "Diesel / ICE fuel type", type: "select", options: ICE_FUEL, required: true },
        ],
      },
      {
        id: "usage",
        title: "Usage & energy",
        intro: "How the fleet is used and how much energy it consumes.",
        fields: [
          { id: "annualDistance", label: "Annual distance travelled", type: "number", unit: "km", required: true },
          { id: "kmDay", label: "Km per day per vehicle", type: "number", unit: "km/day" },
          { id: "daysYear", label: "Operating days per year", type: "number", unit: "days" },
          { id: "efficiency", label: "Fuel efficiency", type: "number", dual: true, cols: DIESEL_FARIZON, hint: "km/litre (diesel) or km/kWh (electric)" },
        ],
      },
      {
        id: "charging",
        title: "Charging",
        intro: "Charging hardware and how daily charging is split.",
        fields: [
          { id: "charger1Type", label: "Charger 1 — type", type: "select", options: CHARGER_TYPES },
          { id: "charger1Price", label: "Charger 1 — price per unit", type: "number", unit: "EGP" },
          { id: "charger1Count", label: "Charger 1 — number of chargers", type: "number" },
          { id: "charger2Type", label: "Charger 2 — type", type: "select", options: CHARGER_TYPES },
          { id: "charger2Price", label: "Charger 2 — price per unit", type: "number", unit: "EGP" },
          { id: "charger2Count", label: "Charger 2 — number of chargers", type: "number" },
          { id: "shareL2", label: "Level 2 — share of daily charging", type: "percent" },
          { id: "shareL3pub", label: "Level 3 (public) — share of daily charging", type: "percent" },
          { id: "shareL3priv", label: "Level 3 (private) — share of daily charging", type: "percent" },
        ],
      },
      {
        id: "financing",
        title: "Financing & taxes",
        intro: "Optional financial assumptions. Leave blank if not applicable.",
        fields: [
          { id: "vehicleFinancing", label: "Vehicle financing", type: "toggle", options: YESNO },
          { id: "chargingFinancing", label: "Charging financing", type: "toggle", options: YESNO },
          { id: "loanYears", label: "Loan tenure", type: "number", unit: "years" },
          { id: "downPayment", label: "Down payment", type: "percent" },
          { id: "interestRate", label: "Interest rate", type: "percent" },
          { id: "salesTax", label: "Sales tax (% of list price)", type: "percent" },
          { id: "importTax", label: "Import tax (% of list price)", type: "percent", dual: true, cols: DIESEL_FARIZON },
          { id: "registrationTax", label: "Registration tax (% of list price)", type: "percent", dual: true, cols: DIESEL_FARIZON },
          { id: "bevIncentive", label: "Electric-vehicle incentive (% of list price)", type: "percent" },
          { id: "discountRate", label: "Discount rate", type: "percent" },
        ],
      },
      {
        id: "maintenance",
        title: "Maintenance & insurance",
        intro: "Optional maintenance and insurance assumptions.",
        fields: [
          { id: "annualInsurance", label: "Annual insurance payment", type: "number", unit: "EGP", dual: true, cols: DIESEL_FARIZON },
          { id: "insuranceCagr", label: "Insurance annual increase (CAGR)", type: "percent", dual: true, cols: DIESEL_FARIZON },
          { id: "maintenancePackage", label: "Maintenance package", type: "toggle", options: YESNO },
          { id: "aftersalesTier", label: "After-sales tier", type: "select", options: AFTERSALES_TIER },
          { id: "maintenanceCagr", label: "Maintenance annual increase (CAGR)", type: "percent", dual: true, cols: DIESEL_FARIZON },
          { id: "avgMaintenance", label: "Average annual maintenance cost", type: "number", unit: "EGP", dual: true, cols: DIESEL_FARIZON },
        ],
      },
    ],
  },

  // 02 — Diesel vs EV energy ----------------------------------------------
  {
    id: "diesel-ev",
    tab: "Energy",
    title: "Diesel vs EV Fleet Energy Cost Calculator",
    subtitle: "Compare Fuel and Charging Costs Using Your Fleet Data",
    description:
      "Estimate the difference between the cost of fueling a diesel fleet and charging an equivalent electric fleet over the same operating period. This calculator compares energy expenditure only. It does not calculate the complete total cost of owning or operating a vehicle.",
    submitCta: "Request energy comparison",
    visual: "energy",
    note: "Diesel and electricity prices are applied by the Farizon Egypt team from designated Egyptian sources — you do not need to enter them.",
    steps: [
      {
        id: "fleet",
        title: "Fleet & operation",
        intro: "Define the fleet and the operating period to compare.",
        fields: [
          { id: "periodLabel", label: "Comparison period label", type: "text", placeholder: "e.g. 5 working days", required: true },
          { id: "operatingDays", label: "Operating days in period", type: "number", unit: "days", required: true },
          { id: "numVehicles", label: "Number of vehicles", type: "number", unit: "vehicles", required: true },
          { id: "kmDay", label: "Average km per vehicle per day", type: "number", unit: "km/veh/day", required: true },
        ],
      },
      {
        id: "consumption",
        title: "Consumption & charging",
        intro: "How much energy the vehicles use and how they charge.",
        fields: [
          { id: "dieselConsumption", label: "Diesel consumption", type: "number", unit: "L/100 km", required: true },
          { id: "evConsumption", label: "EV energy consumption", type: "number", unit: "kWh/100 km", required: true },
          { id: "chargingLosses", label: "Charging losses", type: "percent", hint: "% of battery energy" },
          { id: "chargingMethod", label: "Charging method", type: "select", options: CHARGING_METHOD, required: true },
        ],
      },
    ],
  },

  // 03 — Five-year comparison ---------------------------------------------
  {
    id: "five-year",
    tab: "5-Year",
    title: "Five-Year Diesel vs Farizon Cost Comparison",
    subtitle: "Compare Selected Vehicles Across Five Years",
    description:
      "The Five-Year Diesel vs Farizon Cost Comparison provides a focused assessment of the principal costs associated with selected diesel commercial vehicles and comparable Farizon electric vehicles over five years.",
    submitCta: "Request 5-year comparison",
    visual: "timeline",
    steps: [
      {
        id: "vehicles",
        title: "Vehicles to compare",
        intro: "Compare vehicles with reasonably similar payload, cargo, passenger and operational capabilities.",
        fields: [
          { id: "dieselComparator", label: "Diesel comparator", type: "select", options: DIESEL_COMPARATORS, required: true },
          { id: "farizonModel", label: "Farizon model", type: "select", options: FARIZON_MODELS, required: true },
          { id: "chargingMethod", label: "Charging method", type: "select", options: CHARGING_METHOD, required: true },
        ],
      },
      {
        id: "assumptions",
        title: "Fleet & assumptions",
        intro: "Your fleet quantity, mileage and optional escalation assumptions.",
        fields: [
          { id: "fleetQuantity", label: "Fleet quantity", type: "number", unit: "vehicles", required: true },
          { id: "annualKm", label: "Annual km per vehicle", type: "number", unit: "km/veh/year", required: true },
          { id: "dieselEscalation", label: "Diesel-price escalation (annual)", type: "percent" },
          { id: "elecEscalation", label: "Electricity-price escalation (annual)", type: "percent" },
          { id: "chargingLoss", label: "Charging loss", type: "percent", hint: "Grid-to-battery energy loss" },
          { id: "scenarioLabel", label: "Scenario label", type: "text", placeholder: "e.g. Illustrative base case" },
        ],
      },
    ],
  },

  // 04 — Carbon footprint --------------------------------------------------
  {
    id: "carbon",
    tab: "Carbon",
    title: "Fleet Carbon Footprint Calculator",
    subtitle: "Estimate the Operational Emissions of Your Fleet",
    description:
      "The Fleet Carbon Footprint Calculator helps businesses estimate the greenhouse-gas emissions associated with their commercial-vehicle operations over a selected period. It can be used for diesel fleets, electric fleets or mixed fleets containing both conventional and electrified vehicles.",
    submitCta: "Request carbon estimate",
    visual: "carbon",
    steps: [
      {
        id: "period",
        title: "Reporting period",
        intro: "Use a period that represents normal routes, loads, traffic and seasonality.",
        fields: [
          { id: "periodName", label: "Period name", type: "text", placeholder: "e.g. 5 working days", required: true },
          { id: "startDate", label: "Start date", type: "date" },
          { id: "endDate", label: "End date", type: "date" },
          { id: "workingDays", label: "Working days in period", type: "number", unit: "days", required: true },
          { id: "annualWorkingDays", label: "Annual working days", type: "number", unit: "days", required: true },
        ],
      },
      {
        id: "scenario",
        title: "Electrification scenario",
        intro: "Optional — model part of the fleet distance as electric.",
        fields: [
          { id: "fuelDistanceReplace", label: "Fuel-powered distance to replace", type: "percent" },
          { id: "evEnergyUse", label: "Expected EV energy use", type: "number", unit: "kWh/100 km", hint: "Use expected real-route consumption" },
          { id: "scenarioLabel", label: "Scenario label", type: "text", placeholder: "e.g. 50% of fleet distance modelled as electric" },
        ],
      },
      {
        id: "groups",
        title: "Fleet groups",
        intro: "Add each group of vehicles in your fleet.",
        repeatable: {
          itemLabel: "Fleet group",
          addLabel: "Add fleet group",
          min: 1,
          fields: [
            { id: "name", label: "Fleet group name", type: "text", placeholder: "e.g. Diesel delivery vans", required: true },
            { id: "vehicleType", label: "Vehicle type", type: "select", options: VEHICLE_TYPES, required: true },
            { id: "controls", label: "Who controls the vehicles?", type: "select", options: CONTROL },
            { id: "energySource", label: "Energy source", type: "select", options: ENERGY_SOURCE, required: true },
            { id: "vehicles", label: "Number of vehicles", type: "number", unit: "vehicles", required: true },
            { id: "distance", label: "Distance in period", type: "number", unit: "km", required: true },
            { id: "fuelUsed", label: "Fuel used", type: "number" },
            { id: "fuelUnit", label: "Fuel unit", type: "select", options: FUEL_UNIT },
            { id: "electricityUsed", label: "Electricity used", type: "number", unit: "kWh" },
            { id: "payload", label: "Avg cargo payload", type: "number", unit: "kg" },
            { id: "passengers", label: "Avg passengers", type: "number" },
            { id: "dataBasis", label: "Data basis", type: "select", options: DATA_BASIS },
          ],
        },
      },
    ],
  },
];

export const getCalculator = (id: string) => calculators.find((c) => c.id === id);
