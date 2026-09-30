/**
 * FAQ content — sourced verbatim from "Farizon website content (V02).pptx"
 * (slides 44–62). Questions and answers are reproduced exactly, grouped by the
 * category labels supplied in the PPTX. Nothing is paraphrased or invented.
 */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  related?: string[];
}

export interface FaqCategory {
  id: string;
  title: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    id: "fundamentals",
    title: "Electric commercial vehicle fundamentals",
    items: [
      {
        id: "what-is-ecv",
        question: "What is an electric commercial vehicle?",
        answer:
          "An electric commercial vehicle is a van, pickup, truck, minibus or other work vehicle powered fully or partly by electricity. A battery-electric commercial vehicle has no combustion engine and produces zero emissions from its tailpipe. It is designed around business duties such as deliveries, service calls, cargo transport, staff movement or passenger operations.",
      },
      {
        id: "ecv-vs-car",
        question: "What is the difference between an electric commercial vehicle and an electric passenger car?",
        answer:
          "Both use electric motors and traction batteries, but a commercial vehicle is engineered for work. Buyers should assess payload, cargo volume, gross vehicle weight, body type, duty cycle, access doors, passenger capacity, charging window and uptime—not only range or cabin features.",
      },
      {
        id: "what-is-bev",
        question: "What does BEV mean in commercial vehicles?",
        answer:
          "BEV means battery-electric vehicle. A BEV uses electricity stored in a rechargeable traction battery and has no petrol or diesel engine. This is different from a hybrid, which combines an engine with an electric motor, and a plug-in hybrid, which can also be charged from an external source.",
      },
      {
        id: "hybrid-phev-bev",
        question: "What is the difference between a hybrid, plug-in hybrid and fully electric commercial vehicle?",
        answer:
          "A conventional hybrid charges its small battery through the engine and regenerative braking. A plug-in hybrid can be charged and can drive a limited distance electrically but still carries an engine. A fully electric vehicle uses only its battery and motor, so it has zero tailpipe emissions during operation, which supports sustainability and emitting no harmful gases.",
      },
      {
        id: "vans-suitable",
        question: "Are electric vans suitable for commercial work?",
        answer:
          "Yes, when the vehicle’s payload, cargo space, route length, charging time and local support match the duty cycle. Predictable urban and return-to-base routes are often particularly suitable because charging can be scheduled at a depot and regenerative braking can recover energy during frequent deceleration.",
      },
      {
        id: "trucks-suitable-egypt",
        question: "Are electric trucks suitable for Egyptian businesses?",
        answer:
          "They are, especially for planned routes, city distribution, municipal work and depot-based operations. The correct answer depends on vehicle class, loaded range, road conditions, body requirements, daily mileage, charging access, shift pattern and the availability of trained service support",
      },
      {
        id: "exhaust-emissions",
        question: "Do electric commercial vehicles produce exhaust emissions?",
        answer:
          "A fully electric commercial vehicle produces no tailpipe exhaust because it has no combustion engine. It can still have indirect emissions from electricity generation and manufacturing, and all road vehicles create some tyre and brake particulate emissions. Regenerative braking, which is a feature in Farizon lineup, reduce friction-brake use in many operating conditions",
      },
      {
        id: "regen-braking",
        question: "What is regenerative braking?",
        answer:
          "Regenerative braking uses the electric motor as a generator while the vehicle slows, returning some energy to the battery. It can improve efficiency and reduce use of the friction brakes, but it does not replace normal braking, and the amount of recovered energy varies with speed, battery state and the selected regeneration level",
      },
      {
        id: "kw-kwh",
        question: "What do kW and kWh mean on an electric commercial vehicle?",
        answer:
          "Kilowatts (kW) measure power: motor output or charging speed. Kilowatt-hours (kWh) measure energy: battery capacity or electricity consumed. A 50-kW charger can theoretically deliver 50 kWh in one hour, but the real amount is affected by the vehicle’s charge curve, losses, temperature and battery state of charge.",
      },
    ],
  },
  {
    id: "suitability",
    title: "Suitability and Egyptian business use cases",
    items: [
      {
        id: "which-businesses",
        question: "Which Egyptian businesses can benefit from electric commercial vehicles?",
        answer:
          "Potential users include e-commerce fleets, last-mile delivery, retail distribution, FMCG, pharmaceuticals, maintenance services, utilities, hotels, airports, schools, corporate shuttles, tourism operators and municipalities. Suitability should be confirmed from actual route and load data rather than sector name alone",
      },
      {
        id: "last-mile-cairo",
        question: "Are electric vans suitable for last-mile delivery in Cairo?",
        answer:
          "Often yes. Frequent stops, predictable urban routes and return-to-base parking can suit electric vans well. The fleet should still test loaded range in Cairo traffic, summer air-conditioning demand, depot electricity capacity, driver behavior and access to backup charging before a large rollout.",
      },
      {
        id: "alexandria-coastal",
        question: "Can electric commercial vehicles operate in Alexandria and coastal conditions?",
        answer:
          "Yes, subject to the manufacturer’s operating guidance and normal corrosion-prevention practices. Coastal fleets should pay attention to connector care, water ingress protection, salt exposure, parking conditions and regular inspection. Charging equipment should be correctly rated and installed for the site environment.",
      },
      {
        id: "intercity-routes",
        question: "Are electric vehicles suitable for routes between Cairo and other governorates?",
        answer:
          "They may be, but intercity suitability requires route-specific planning. Compare the loaded round-trip distance with a conservative usable-range assumption, confirm compatible chargers on the route, allow a reserve for diversions and delays, and verify that charging locations are operational when the vehicle will arrive.",
      },
      {
        id: "cold-chain",
        question: "Can electric vans be used for cold-chain or refrigerated delivery?",
        answer:
          "Yes, if the body conversion and auxiliary refrigeration system are engineered for the vehicle. Refrigeration consumes energy and may reduce driving range, so the fleet must model both traction and refrigeration loads, confirm payload after conversion and obtain written approval for the installation and warranty impact, which are all obtained by the by Farizon partners in Egypt.",
      },
      {
        id: "pharma",
        question: "Are electric commercial vehicles suitable for pharmaceutical distribution?",
        answer:
          "They can be suitable for controlled urban routes, particularly where quiet operation and zero tailpipe emissions are valued. Temperature-controlled operations must validate refrigeration energy use, monitoring, backup procedures, body certification, cleaning requirements and the effect of payload and ambient heat on range.",
      },
      {
        id: "hotels-resorts",
        question: "Can hotels and resorts use electric minibuses in Egypt?",
        answer:
          "Yes, for airport transfers, guest shuttles and planned local routes where passenger capacity, luggage, air-conditioning load, range and charging access align. Operators should trial the vehicle with realistic passenger and luggage loads in summer conditions before final fleet sizing.",
      },
      {
        id: "industrial-zones",
        question: "Are electric commercial vehicles suitable for industrial zones?",
        answer:
          "They can support employee transport, plant logistics, service work and fixed distribution routes. A site assessment should review road surfaces, gradients, shift changes, charging demand, electrical capacity, fire-safety procedures and whether vehicles return to a controlled parking area.",
      },
      {
        id: "multi-shift",
        question: "Can an electric commercial vehicle work more than one shift per day?",
        answer:
          "Yes, if energy use and charging windows are planned. Multi-shift fleets may need opportunity charging, higher-power chargers, spare vehicles or staggered schedules. The plan should use real telematics data and include charger downtime, unexpected mileage and seasonal energy demand",
      },
      {
        id: "which-routes-first",
        question: "Which fleet routes should be electrified first?",
        answer:
          "Start with routes that have predictable mileage, regular return-to-base parking, moderate payload, reliable dwell time and few unplanned diversions. These routes are easier to charge and measure. Keep long, highly variable or remote routes for later phases unless they have confirmed charging coverage",
      },
    ],
  },
  {
    id: "range-operation",
    title: "Range, energy consumption and daily operation",
    items: [
      {
        id: "how-far",
        question: "How far can an electric commercial vehicle travel on one charge?",
        answer:
          "Range depends on the model and test cycle, but the number that matters operationally is loaded real-world range. Payload, speed, traffic, road gradient, temperature, air conditioning, tyres, driving style and auxiliary equipment all affect it. Ask for the official test-cycle figure and validate it on your own routes.",
      },
      {
        id: "advertised-vs-real",
        question: "Is advertised electric-vehicle range the same as real-world range?",
        answer:
          "Advertised range is produced under a defined laboratory test cycle such as CLTC, WLTP or EPA. It is useful for comparison only when the test method is stated. Real range can be lower or higher depending on the route, load, climate, speed and vehicle condition.",
      },
      {
        id: "cltc",
        question: "What is CLTC range?",
        answer:
          "CLTC is a laboratory driving cycle used in China to estimate vehicle energy consumption and range. It is not a promise of distance in Egyptian use. Whenever a CLTC figure is published, keep the label beside the number and add a clear disclaimer explaining that actual range varies",
      },
      {
        id: "wltp",
        question: "What is WLTP range?",
        answer:
          "WLTP is a standardized laboratory test procedure used in many markets to estimate vehicle consumption and range. It supports comparisons between vehicles tested under the same procedure, but it does not reproduce every commercial route, payload or climate condition.",
      },
      {
        id: "payload-range",
        question: "How does payload affect electric-van range?",
        answer:
          "More payload usually increases the energy required to accelerate and climb, so range can decrease. The effect depends on route speed, stop frequency, gradients and aerodynamics. A fleet pilot should include typical and maximum legal loads, not an empty-vehicle test only.",
      },
      {
        id: "summer-heat",
        question: "How does summer heat in Egypt affect electric-vehicle range?",
        answer:
          "High temperature can increase battery-cooling and cabin air-conditioning demand, reducing available driving range. The impact varies by vehicle, route and thermal-management system. Test with realistic summer HVAC settings and avoid using a cool-weather result as the fleet’s planning number.",
      },
      {
        id: "cairo-traffic",
        question: "Does Cairo traffic reduce or improve electric-vehicle range?",
        answer:
          "Low-speed stop-start traffic can allow regenerative braking to recover energy, but congestion also keeps the air conditioning and auxiliary systems running for longer. The net result depends on time, speed, temperature, load and driver behavior, so measure kWh per kilometer on actual routes.",
      },
      {
        id: "high-speed",
        question: "Does driving at high speed reduce electric commercial-vehicle range?",
        answer:
          "Usually yes. Aerodynamic drag rises rapidly with speed, and tall vans or body conversions can be especially sensitive. Sustained high-speed driving can therefore use more energy per kilometer than an urban route, even with fewer stops.",
      },
      {
        id: "reserve-range",
        question: "How much reserve range should a fleet keep?",
        answer:
          "There is no universal percentage. Set a policy using route variability, charger reliability, weather, vehicle age and the consequences of delay. Many fleets plan a buffer rather than scheduling vehicles to arrive nearly empty; the appropriate reserve should be documented and tested.",
      },
      {
        id: "kwh-100km",
        question: "What is kWh per 100 km?",
        answer:
          "It is an electric vehicle’s energy-consumption rate. A result of 25 kWh/100 km means the vehicle used 25 kilowatt-hours to travel 100 kilometers under those conditions. Lower values normally mean greater efficiency, but comparisons must use similar vehicle size, load, route and climate.",
      },
    ],
  },
  {
    id: "charging",
    title: "Charging basics, connectors and charging time",
    items: [
      {
        id: "where-charge",
        question: "Where can electric commercial vehicles be charged in Egypt?",
        answer:
          "They can be charged at a business depot, workplace, approved private site or compatible public charging station. The best fleet model usually prioritizes reliable base charging and treats public charging as route support or backup. Always verify connector type, access hours, live status and payment method. Get to know about Farizon value-added services including providing the charging units for the vehicles. Call 16302 now.",
      },
      {
        id: "ac-dc",
        question: "What is the difference between AC and DC charging?",
        answer:
          "AC charging sends alternating current to the vehicle, whose onboard charger converts it to DC for the battery. DC charging converts the electricity in the charger and sends DC directly to the battery, allowing higher power on compatible vehicles. AC commonly suits longer depot dwell; DC suits faster turnaround",
      },
      {
        id: "ccs2",
        question: "What is CCS2 charging?",
        answer:
          "CCS2, or Combined Charging System Type 2, combines a Type 2-style AC interface with additional pins for DC fast charging. Compatibility must be confirmed for both the vehicle and charger; a matching physical connector does not mean every charger will deliver its maximum advertised power.",
      },
      {
        id: "any-charger",
        question: "Can any electric vehicle use any charger?",
        answer:
          "No. The connector, electrical standard, communication protocol, AC phase support, voltage and the vehicle’s maximum charge rate must be compatible. Check the vehicle manual and charger specification before installation or travel.",
      },
      {
        id: "charge-time",
        question: "How long does it take to charge an electric commercial vehicle?",
        answer:
          "Charging time depends on battery size, starting state of charge, charger power, the vehicle’s maximum acceptance rate, temperature and the charge curve. Quote times with a defined window—such as 10% to 80%—rather than saying only, ‘fast charging.’ check the products pages for Farizon models details about AC and DC charging.",
      },
      {
        id: "dc-80",
        question: "Why does DC fast charging always measured or stated till 80% only?",
        answer:
          "DC fast charging slows down after 80%. The battery-management system often reduces charging power as the battery becomes fuller to manage heat and protect the cells. For many routes, charging to the required level and departing can be faster than waiting for 100%, provided the remaining range is sufficient",
      },
      {
        id: "150kw",
        question: "Does a 150-kW charger always charge at 150 kW?",
        answer:
          "No. The actual rate is limited by the vehicle, charger, cable, battery temperature, state of charge, site power and the battery’s charge curve. Charging power can rise and fall during one session, so a peak figure is not an average.",
      },
      {
        id: "overnight",
        question: "Can an electric van be charged overnight?",
        answer:
          "Yes. Overnight AC charging is often practical for return-to-base fleets because the vehicle has several hours of dwell time. Charger size should be based on the energy that must be replaced before the next dispatch, not simply the highest power available.",
      },
      {
        id: "normal-socket",
        question: "Can an electric commercial vehicle use a normal electrical socket?",
        answer:
          "Only if the manufacturer supplies or approves suitable portable charging equipment and the circuit is professionally assessed. Commercial fleets should not rely on informal extensions or unknown sockets. A dedicated, correctly protected circuit and purpose-built EV charging equipment are safer and easier to manage.",
      },
      {
        id: "state-of-charge",
        question: "What is state of charge?",
        answer:
          "State of charge, or SOC, is the battery’s available energy expressed as a percentage. It is similar to a fuel gauge, although range at the same SOC can vary with load, speed, temperature and recent driving",
      },
      {
        id: "unplug-before-100",
        question: "Can drivers unplug an electric vehicle before it reaches 100%?",
        answer:
          "Yes, once the session is safely stopped and the connector is released according to the vehicle and charger instructions. Fleets should charge to the level needed for the route and reserve policy; 100% is not required for every duty cycle",
      },
      {
        id: "charge-in-rain",
        question: "Can a commercial EV be charged in the rain?",
        answer:
          "Purpose-built vehicles and chargers are designed with electrical protection for outdoor use, but equipment must be correctly installed, intact and rated for the environment. Do not use damaged connectors, standing-water installations or improvised cables; follow the manufacturer and site safety procedure.",
      },
    ],
  },
  {
    id: "depot",
    title: "Depot charging and site planning",
    items: [
      {
        id: "before-installing",
        question: "What does a business need before installing fleet chargers in Egypt?",
        answer:
          "Start with vehicle duty cycles, parking layout, charger quantity, power requirement, electrical capacity, ownership or landlord approval, fire and civil-defence considerations, cable routes, metering and future expansion. Use qualified designers and installers and confirm current utility and EgyptERA requirements before work begins. Farizon partners in Egypt provide site assessment including detailed quotations for the implant.",
      },
      {
        id: "load-study",
        question: "Does a depot need an electrical load study?",
        answer:
          "Usually yes. A load study helps determine how much spare capacity exists, what charging schedule the site can support and whether transformers, switchgear, protection or cabling need upgrading. It can prevent buying chargers that the site cannot operate simultaneously.",
      },
      {
        id: "how-many-chargers",
        question: "How many chargers does a fleet need?",
        answer:
          "Not necessarily one per vehicle. The answer depends on daily energy use, dwell time, dispatch sequence, charger sharing, parking movements and redundancy. A charging model can compare lower-power overnight charging with fewer high-power chargers and active load management.",
      },
      {
        id: "smart-charging",
        question: "What is smart charging?",
        answer:
          "Smart charging controls when and how quickly vehicles charge. It can prioritize vehicles by departure time, keep the site below an electrical limit, reduce simultaneous peaks and provide energy-use records. It does not create extra grid capacity, but it can use available capacity more effectively. All of Farizon vehicles are featured by smart charging.",
      },
      {
        id: "ac-or-dc-depot",
        question: "Should a fleet install AC or DC chargers at its depot?",
        answer:
          "Choose from operational need. AC is often cost-effective where vehicles park for many hours. DC may be justified for short dwell times, large batteries or multi-shift use, but it can require more electrical capacity and investment. Many depots use a mixed solution.",
      },
      {
        id: "solar",
        question: "Can solar panels charge a commercial EV fleet?",
        answer:
          "Solar generation can offset part of a fleet’s electricity use, especially when vehicles are parked during sunny hours or when solar is paired with site loads or storage. Output varies by time and weather, so the fleet still needs an energy balance and a reliable supply strategy.",
      },
    ],
  },
  {
    id: "cost-tco",
    title: "Electricity cost, TCO and return on investment",
    items: [
      {
        id: "cost-to-charge",
        question: "How much does it cost to charge an electric commercial vehicle in Egypt?",
        answer:
          "Multiply metered kWh by the applicable electricity or charging tariff, then add any session, parking or service fees. Home, business, depot and public-charging arrangements can be priced differently, and official rates can change. Use the current Egypt ERA tariff source when publishing a figure. Check the diesel versus electric cost calculator in the website.",
      },
      {
        id: "what-is-tco",
        question: "What is total cost of ownership for a commercial vehicle?",
        answer:
          "Total cost of ownership, or TCO, includes purchase or lease cost, financing, depreciation, energy or fuel, maintenance, tyres, insurance, taxes, charging infrastructure, downtime and expected resale value over a defined period. It is more useful than comparing purchase prices alone. Check the TCO calculator on the website.",
      },
      {
        id: "compare-ev-diesel",
        question: "How do I compare an electric van with a diesel van?",
        answer:
          "Use vehicles that can perform the same duty. Compare purchase cost, payload, cargo volume, annual kilometers, energy consumption, tariffs, fuel price, maintenance, infrastructure, financing, downtime and residual value. Run base, optimistic and conservative scenarios to expose the assumptions driving the decision.",
      },
      {
        id: "cost-per-km",
        question: "What is the electricity cost per kilometer?",
        answer:
          "Divide the metered charging cost by kilometers driven for the same period. A planning formula is kWh per kilometer × electricity price per kWh. Metered data is better because it includes charging losses and real operating behavior.",
      },
      {
        id: "payback",
        question: "How can a fleet calculate payback period?",
        answer:
          "Subtract the electric option’s expected annual operating cost from the comparable conventional vehicle’s annual operating cost, then divide the additional upfront investment by that annual saving. Include charging infrastructure and financing, and show that the result changes if mileage, tariffs, fuel price or resale value changes.",
      },
      {
        id: "lower-maintenance",
        question: "Do electric vehicles have lower maintenance costs?",
        answer:
          "Fully electric drivetrains have fewer moving parts, no engine oil and often less friction-brake use. Savings are not guaranteed: tyres, suspension, air conditioning, coolant circuits, 12-volt systems, body equipment and high-voltage diagnostics still require service.",
      },
    ],
  },
  {
    id: "battery",
    title: "Battery life, heat and safety",
    items: [
      {
        id: "battery-last",
        question: "How long does an electric commercial-vehicle battery last?",
        answer:
          "Battery life depends on chemistry, thermal management, use, temperature, depth of discharge, charging pattern and time. Buyers should review the manufacturer’s battery warranty, capacity-retention terms, exclusions and diagnostic process rather than relying on a single general lifespan claim.",
      },
      {
        id: "state-of-health",
        question: "What is battery state of health?",
        answer:
          "State of health is an estimate of how the battery’s current condition compares with its original condition. The exact method varies by manufacturer, so a percentage from one system may not be directly comparable with another. A formal diagnostic report is preferable for warranty or resale decisions.",
      },
      {
        id: "fast-charge-damage",
        question: "Does fast charging damage the battery?",
        answer:
          "Occasional compatible DC fast charging is part of normal vehicle use, but frequent high-power charging, high temperature and long periods at extreme states of charge can affect ageing depending on the battery design. Follow the manufacturer’s instructions and use AC charging where it comfortably fits the duty cycle.",
      },
      {
        id: "charge-hot-weather",
        question: "Is it safe to charge an electric vehicle in hot weather?",
        answer:
          "Yes, when the vehicle and charger are approved, undamaged and used within their operating limits. Thermal-management systems control battery temperature, but extreme heat can reduce charging power. Keep connectors clean, provide suitable ventilation or shade where specified and follow warnings on the vehicle or charger.",
      },
      {
        id: "lfp",
        question: "What is an LFP battery?",
        answer:
          "LFP means lithium iron phosphate, a lithium-ion battery chemistry used in some commercial vehicles. It is known for durability and thermal stability, but performance still depends on pack design, battery management, temperature control and correct use. Chemistry alone does not define total battery quality.",
      },
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance, warranty and uptime",
    items: [
      {
        id: "what-maintenance",
        question: "What maintenance does an electric commercial vehicle need?",
        answer:
          "It still needs scheduled inspections of tyres, brakes, steering, suspension, air conditioning, cabin filters, 12-volt battery, lights, wipers, body equipment and any battery-cooling circuit. It does not require engine oil changes; spark plugs or exhaust-system service. Farizon Egypt provides preventive maintenances for vehicles for better monitoring of the overall health of the vehicle and its battery, and avoid sudden, unplanned downtime.",
      },
      {
        id: "tire-wear",
        question: "Do electric vehicles wear tires faster?",
        answer:
          "Tire wear depends on vehicle mass, torque, alignment, inflation, route surface, driving style and load. Some EV fleets may see faster wear if drivers use instant torque aggressively or carry high loads. Correct commercial-rated tires, rotation and pressure control are important.",
      },
      {
        id: "regen-brake-pads",
        question: "Do regenerative brakes mean the brake pads never need replacing?",
        answer:
          "No. Regeneration can reduce friction-brake use, but pads, discs and hydraulic components still require inspection and can wear or corrode. The vehicle blends regenerative and friction braking according to speed, battery state, traction and driver demand.",
      },
      {
        id: "who-services",
        question: "Who should service an electric commercial vehicle?",
        answer:
          "Use technicians trained and authorized for the specific high-voltage system and model. Routine tyre or body work may be conventional, but high-voltage diagnosis and isolation require the correct tools, procedures and protective equipment. All National Motors technicians are well trained to work in Farizon lineup and understand everything about it.",
      },
      {
        id: "warranty-cover",
        question: "What should an electric-vehicle warranty cover?",
        answer:
          "Review the complete vehicle warranty and the battery warranty separately. Check duration, distance limit, capacity-retention threshold if any, commercial-use terms, charging requirements, exclusions, roadside assistance, authorized service locations and how downtime or replacement parts are handled. Get to know about Farizon warranty terms before taking the decision. Call 16302.",
      },
    ],
  },
  {
    id: "payload",
    title: "Payload, cargo, bodies and performance",
    items: [
      {
        id: "what-is-payload",
        question: "What is payload?",
        answer:
          "Payload is the maximum permitted weight of occupants, cargo and certain added equipment carried by the vehicle. It is not the same as cargo volume. Always confirm the payload of the exact configuration after body conversion, accessories and any local specification changes.",
      },
      {
        id: "gvw",
        question: "What is gross vehicle weight?",
        answer:
          "Gross vehicle weight is the maximum permitted total operating weight of the vehicle, including the vehicle itself, driver, passengers, cargo and installed equipment. Staying within it is a legal and safety requirement.",
      },
      {
        id: "battery-reduce-payload",
        question: "Does an electric-vehicle battery reduce payload?",
        answer:
          "A traction battery adds mass, but electric vehicles are engineered and homologated as complete vehicles. The relevant comparison is the published payload of each exact version, not battery weight alone. Body conversions and accessories can reduce remaining payload. That’s what differentiates the born-electric Farizon. Born electric vehicles are not affected or reduced by the battery, but rather, its battery is built within.",
      },
      {
        id: "volume-vs-payload",
        question: "Is cargo volume more important than payload?",
        answer:
          "They answer different questions. Cargo volume determines whether the goods physically fit; payload determines whether their weight is legal. A parcel fleet may run out of volume first, while bottled goods or equipment may reach the weight limit first.",
      },
      {
        id: "torque",
        question: "Do electric motors provide enough torque for commercial use?",
        answer:
          "Electric motors can deliver strong torque from low speed, which can suit urban work and loaded starts. Practical performance still depends on gearing, traction, cooling, gross weight, gradient and the manufacturer’s continuous—not only peak—power capability.",
      },
      {
        id: "cargo-door-access",
        question: "How should a fleet compare cargo-door access?",
        answer:
          "Measure the side and rear openings, step height, internal wheel-arch width, loading height, door angle and forklift or pallet access against real goods and handling equipment. A cubic-meter figure alone does not show whether the operation can load efficiently.",
      },
    ],
  },
  {
    id: "regulations",
    title: "Egypt regulations, licensing and public charging",
    items: [
      {
        id: "legal-egypt",
        question: "Are electric commercial vehicles legal to operate in Egypt?",
        answer:
          "Yes, electric vehicles can operate in Egypt when they meet applicable import, conformity, registration, licensing, insurance and road-use requirements for their vehicle category. The required documents depend on whether the vehicle is a van, truck, bus or passenger vehicle and on how it is used.",
      },
      {
        id: "special-license",
        question: "Does an electric commercial vehicle need a special driving license?",
        answer:
          "The driving-license requirement is generally determined by the vehicle’s legal class, gross weight, passenger capacity and commercial use—not simply by its electric powertrain. Confirm the exact requirement with the competent Egyptian traffic authority for the registered configuration.",
      },
      {
        id: "charger-license",
        question: "Does a company need a license to install a private fleet charger?",
        answer:
          "Requirements depend on whether the charger is for the company’s own use or for selling charging services, and on the connection and site. Egypt ERA’s framework regulates commercial charging activity; fleets should confirm the current permit, utility, metering and site-approval requirements before installation.",
      },
      {
        id: "charging-levels",
        question: "What are Egypt’s official EV charging levels?",
        answer:
          "Egypt ERA’s 2022 framework describes Level 1 as AC charging up to 7.2 kW, Level 2 as AC above 7.2 kW and up to 22 kW, and Level 3 as DC charging above 22 kW. Check the latest official version before using these definitions in contracts.",
      },
      {
        id: "public-24h",
        question: "Are all public charging stations in Egypt available 24 hours?",
        answer:
          "No. Access can depend on the host site, operator, parking rules, maintenance, network status and opening hours. Drivers should confirm live availability and access conditions through the operator before relying on a station for a time-critical route.",
      },
    ],
  },
  {
    id: "transition",
    title: "Fleet transition, procurement and pilot design",
    items: [
      {
        id: "how-start",
        question: "How should a company start electrifying its fleet?",
        answer:
          "Start with a data-led fleet assessment: vehicle inventory, routes, kilometers, dwell time, fuel use, payload, parking and site power. Select a small number of suitable routes, run a measured pilot, correct operational issues and scale in phases.",
      },
      {
        id: "assessment-data",
        question: "What data is needed for an electric-fleet assessment?",
        answer:
          "Collect at least daily distance, trip timing, parking location, payload, speed, idle time, fuel consumption, route variation, seasonal demand, vehicle replacement timing, maintenance cost and site electrical information. Vehicle-level telematics is better than fleet averages.",
      },
      {
        id: "all-at-once",
        question: "Should a fleet electrify all vehicles at once?",
        answer:
          "Usually, a phased transition is easier to control. It allows the business to validate routes, infrastructure, service support, costs and driver training before scaling. A faster rollout may be appropriate only when the duty cycle and supporting systems are already well proven.",
      },
    ],
  },
  {
    id: "carbon",
    title: "Carbon footprint, ESG and reporting",
    items: [
      {
        id: "zero-carbon",
        question: "Do electric commercial vehicles have zero carbon emissions?",
        answer:
          "They have zero tailpipe carbon dioxide emissions during driving, but not necessarily zero lifecycle emissions. Electricity generation, vehicle and battery production, maintenance and end-of-life treatment can all contribute. State clearly whether a claim covers tailpipe, well-to-wheel or full lifecycle emissions.",
      },
      {
        id: "emission-factor",
        question: "What is a vehicle emission factor?",
        answer:
          "An emission factor converts activity data into greenhouse-gas mass. Examples include kg CO2e per litre of fuel or kg CO2e per kWh of electricity. The factor must match the energy source, geography, reporting year, gas coverage and accounting boundary.",
      },
      {
        id: "iso-14083",
        question: "What is ISO 14083:2023?",
        answer:
          "ISO 14083:2023 establishes a common methodology for quantifying and reporting greenhouse-gas emissions from passenger and freight transport-chain operations. It is particularly relevant when businesses need consistent transport-service or logistics reporting beyond a simple fuel-saving estimate.",
      },
      {
        id: "carbon-neutral-claim",
        question: "Can a fleet claim its deliveries are carbon neutral after buying EVs?",
        answer:
          "Not without a defined, substantiated accounting basis. EVs remove tailpipe emissions but still use electricity and have lifecycle impacts. Any carbon-neutral claim should state its boundary, calculation method, residual emissions and credible treatment of those emissions, and should pass legal and marketing review.",
      },
    ],
  },
  {
    id: "drivers-training",
    title: "Drivers, training and daily operating practice",
    items: [
      {
        id: "driver-training",
        question: "Do drivers need special training for electric commercial vehicles?",
        answer:
          "They need model-specific familiarization even when no separate legal driving license is required. Training should cover charging, range planning, regenerative braking, warning lights, energy-efficient driving, high-voltage hazards, collision response, recovery and depot rules.",
      },
      {
        id: "improve-range",
        question: "How can a driver improve electric-vehicle range?",
        answer:
          "Use smooth acceleration, anticipate traffic, maintain safe speeds, keep tyres correctly inflated, avoid unnecessary load, use climate control sensibly and follow the route and charging plan. Safety and delivery requirements always take priority over energy saving.",
      },
      {
        id: "use-regen",
        question: "How should drivers use regenerative braking?",
        answer:
          "Select the level appropriate to traffic, road grip, load and manufacturer guidance. Strong regeneration can reduce brake-pedal use, but drivers must remain ready to use the normal brakes and should not rely on regeneration in every condition.",
      },
      {
        id: "plugged-overnight",
        question: "Should an EV be left plugged in overnight?",
        answer:
          "It can be when using approved charging equipment and the vehicle is scheduled to charge. Smart charging may delay or control the session. Follow site policy for connector checks, cable management and the target state of charge.",
      },
      {
        id: "pre-dispatch",
        question: "What should be checked before dispatching an electric commercial vehicle?",
        answer:
          "Check state of charge and predicted range, tyres, lights, warning messages, charge-port closure, load security, payload, route, planned charging and any auxiliary equipment. Confirm that the expected reserve remains after the assigned route.",
      },
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting and common concerns",
    items: [
      {
        id: "wont-charge",
        question: "Why will an electric vehicle not start charging?",
        answer:
          "Common causes include a connector that is not fully seated, an uncompleted payment or authorization step, a charger fault, a scheduled-charge setting, a full battery, temperature limits or a vehicle error. Follow the on-screen guidance, try the approved reset process and contact National Motors support if the fault remains.",
      },
      {
        id: "slow-charging",
        question: "Why is charging slower than expected or usual?",
        answer:
          "The vehicle may be limiting power because of battery temperature, high state of charge or its own maximum rate. The charger or site may also be sharing power or derated. Compare the actual kW with both vehicle and charger specifications across the full session.",
      },
      {
        id: "range-drop-load",
        question: "Why did the predicted range drop after loading the vehicle?",
        answer:
          "The range estimate responds to recent consumption and current conditions. Added weight, air conditioning, higher speed, hills or a different route can increase energy use. Treat the dashboard number as a changing estimate, not a fixed promise.",
      },
      {
        id: "charger-occupied",
        question: "What should a fleet do if a public charger is occupied or offline?",
        answer:
          "Use the pre-approved alternative in the route plan, preserve the energy reserve and inform dispatch early. Critical routes should never depend on a single public charger without a verified fallback.",
      },
    ],
  },
  {
    id: "buying-egypt",
    title: "Buying, support and Farizon Egypt enquiries",
    items: [
      {
        id: "test-drive-cargo",
        question: "Can I test-drive an electric commercial vehicle with cargo?",
        answer:
          "Ask the dealer whether a controlled payload demonstration can be arranged. A useful commercial evaluation should reproduce route, access, maneuvering and load conditions safely and legally, with the test plan agreed in advance.",
      },
      {
        id: "order-quantity",
        question: "Can I order one electric van or a complete fleet?",
        answer:
          "Order quantities depend on the model, allocation and delivery schedule. Farizon Egypt can assess requirements ranging from a single vehicle to a phased or larger fleet order and confirm current availability in a written quotation.",
      },
      {
        id: "assess-charging",
        question: "Does Farizon Egypt help assess fleet charging needs?",
        answer:
          "The fleet conversation should cover daily energy, parking, dwell time and available site power alongside vehicle selection. Confirm the exact assessment, charger supply, installation and support scope included in the current Farizon Egypt offer.",
      },
      {
        id: "request-assessment",
        question: "How can I request a Farizon Egypt fleet assessment?",
        answer:
          "Use the fleet-enquiry form and provide estimated daily distance, vehicle quantity, payload or passenger needs, operating area, shift pattern and charging access. A route-level discussion can then determine which vehicles and charging approach are worth testing.",
      },
    ],
  },
];

/** Flat lookup for search, related questions and deep links. */
export const faqIndex: (FaqItem & { categoryId: string; categoryTitle: string })[] =
  faqCategories.flatMap((c) =>
    c.items.map((it) => ({ ...it, categoryId: c.id, categoryTitle: c.title }))
  );
