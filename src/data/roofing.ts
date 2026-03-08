export interface RoofingProduct {
  id: string;
  name: string;
  subcategory: string;
  description: string;
  longDescription: string;
  image: string;
  badge?: string;
  priceFrom?: string;
  specs: { label: string; value: string }[];
  features: string[];
  colors?: string[];
}

export interface RoofingSubcategory {
  id: string;
  name: string;
  description: string;
  productCount: number;
  image: string;
}

export const roofingSubcategories: RoofingSubcategory[] = [
  {
    id: 'metal-roofing',
    name: 'Metal Roofing',
    description: 'Corrugated, Trimdek, and Klip-Lok steel profiles in Colorbond and Zincalume',
    productCount: 18,
    image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'tiles',
    name: 'Roof Tiles',
    description: 'Concrete and terracotta tiles for traditional and contemporary homes',
    productCount: 12,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'guttering',
    name: 'Guttering & Downpipes',
    description: 'Complete rainwater management systems in matching Colorbond profiles',
    productCount: 9,
    image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'insulation',
    name: 'Roof Insulation',
    description: 'Sarking, blanket insulation, and foil systems for optimal thermal performance',
    productCount: 8,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'accessories',
    name: 'Flashings & Accessories',
    description: 'Ridge caps, valleys, flashings, screws, and sealants for complete installations',
    productCount: 24,
    image: 'https://images.pexels.com/photos/162568/factory-steel-iron-industrial-162568.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'skylights',
    name: 'Skylights & Vents',
    description: 'Fixed and opening skylights, solar-powered ventilation for energy efficiency',
    productCount: 7,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const roofingProducts: RoofingProduct[] = [
  {
    id: 'r1',
    name: 'Colorbond Ultra Steel Roofing',
    subcategory: 'Metal Roofing',
    description: 'The gold standard of Australian metal roofing. Engineered with Thermatech solar reflectance technology for superior heat management in harsh Australian conditions.',
    longDescription: `Colorbond Ultra is BlueScope's premium roofing steel, specifically engineered to withstand Australia's harshest environments. Its patented Thermatech technology reflects more of the sun's heat, making it up to 10% cooler than standard metal roofing — a significant advantage in QLD, WA, and NT climates.\n\nWith a full-steel substrate and multi-layer coating system, Colorbond Ultra provides unmatched resistance to corrosion, UV degradation, and chipping. Available in all 22 standard Colorbond colours plus the expanded Ultra range, it's the premium choice for coastal and high-UV environments.`,
    image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Best Seller',
    priceFrom: 'POA',
    specs: [
      { label: 'Material', value: 'High-strength steel with AZ200 coating' },
      { label: 'Thickness (BMT)', value: '0.42mm / 0.48mm / 0.55mm / 0.60mm' },
      { label: 'Profile', value: 'Corrugated, Trimdek, Klip-Lok 700' },
      { label: 'Colours', value: '22 standard + 8 Ultra exclusive' },
      { label: 'Warranty', value: '50 years (perforations), 36 years (paint)' },
      { label: 'Standard', value: 'AS 1562.1, NCC compliant' },
      { label: 'BAL Rating', value: 'Suitable for BAL-40 with correct installation' },
      { label: 'Thermatech', value: 'Solar Reflectance Index ≥ 32 (all colours)' },
    ],
    features: [
      'Thermatech technology keeps roofs significantly cooler',
      'Manufactured in Australia by BlueScope Steel',
      '50-year perforation warranty in standard environments',
      'Suitable for coastal environments within 100m of breaking surf',
      'Available in 22 Colorbond colours',
      'Lightweight — reduces structural load vs tiles',
      'Recyclable at end of life',
      'Compatible with rainwater harvesting systems',
    ],
    colors: ['Surfmist', 'Shale Grey', 'Woodland Grey', 'Basalt', 'Monument', 'Night Sky', 'Ironstone', 'Pale Eucalypt'],
  },
  {
    id: 'r2',
    name: 'Boral Concrete Roof Tiles',
    subcategory: 'Roof Tiles',
    description: 'Australia\'s most trusted concrete roof tile. Engineered for durability, thermal mass, and acoustic insulation across all Australian climate zones.',
    longDescription: `Boral concrete roof tiles have been protecting Australian homes for over 70 years. Their natural thermal mass helps moderate indoor temperatures, reducing heating and cooling loads — particularly valuable in temperate zones like Victoria, South Australia, and coastal NSW.\n\nThe modern acrylic coating provides excellent colour retention and resistance to moss and lichen growth. Available in a wide range of profiles from low-pitch contemporary to traditional heritage styles.`,
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Top Rated',
    priceFrom: 'POA',
    specs: [
      { label: 'Material', value: 'Extruded concrete with acrylic coating' },
      { label: 'Profile', value: 'Monier, Windsor, Marseille, Terracotta' },
      { label: 'Min. Pitch', value: '15° (profile dependent)' },
      { label: 'Colours', value: '30+ colour options' },
      { label: 'Weight', value: '40–48 kg/m²' },
      { label: 'Warranty', value: '50-year structural, 15-year coating' },
      { label: 'Standard', value: 'AS 2049, NCC compliant' },
      { label: 'Acoustic', value: 'Superior rain noise attenuation' },
    ],
    features: [
      'Exceptional thermal mass for year-round comfort',
      'Superior acoustic performance — quieter in rain',
      'Non-combustible — ideal for bushfire-prone areas',
      'Acrylic coating resists moss, algae, and lichen',
      'Available in heritage and contemporary profiles',
      'Compatible with solar panel installations',
      'Low maintenance over the product lifetime',
      'Made in Australia',
    ],
    colors: ['Paperbark', 'Charcoal', 'Terracotta', 'Ironstone', 'Slate', 'Heritage Red', 'Sandstone', 'Monument'],
  },
  {
    id: 'r3',
    name: 'Lysaght Klip-Lok 700 Hi-Strength',
    subcategory: 'Metal Roofing',
    description: 'A concealed-fix steel roofing system delivering a clean, contemporary profile for both residential and commercial applications. No exposed fasteners, no water ingress.',
    longDescription: `Klip-Lok 700 Hi-Strength is the premium concealed-fix roofing system for architects and builders demanding clean aesthetics and superior performance. The unique clip-lock design eliminates exposed fasteners, providing a sleek, uninterrupted surface and significantly reducing the risk of water infiltration.\n\nAvailable in the full Colorbond colour range and Zincalume, Klip-Lok suits low-pitch roofs from 1° and is a favourite for raked, skillion, and flat-ceiling modern homes.`,
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'New Arrival',
    priceFrom: 'POA',
    specs: [
      { label: 'Material', value: 'Hi-Strength steel, Colorbond/Zincalume' },
      { label: 'Cover Width', value: '700mm' },
      { label: 'Min. Pitch', value: '1°' },
      { label: 'BMT', value: '0.42mm / 0.48mm' },
      { label: 'Max. Span', value: 'Up to 2400mm (0.48mm BMT)' },
      { label: 'Fastening', value: 'Concealed klip system' },
      { label: 'Standard', value: 'AS 1562.1' },
      { label: 'Wind Rating', value: 'Tested to Cyclone Category N5' },
    ],
    features: [
      'Concealed fixings for a sleek, uninterrupted look',
      'Suitable for low-pitch roofs from 1°',
      'Hi-Strength steel reduces panel deflection',
      'Thermal movement accommodated by clip design',
      'Excellent wind uplift resistance',
      'Available in full Colorbond colour range',
      'Widely used on architectural and commercial buildings',
      'Compatible with standard guttering systems',
    ],
    colors: ['Surfmist', 'Shale Grey', 'Basalt', 'Monument', 'Woodland Grey', 'Night Sky', 'Zincalume'],
  },
  {
    id: 'r4',
    name: 'Velux Fixed Skylights',
    subcategory: 'Skylights & Vents',
    description: 'Denmark\'s leading skylight brand, engineered for Australian conditions. Triple-sealed, laminated glass for superior weather resistance and UV control.',
    longDescription: `Velux Fixed Skylights bring natural daylight deep into your home, reducing reliance on artificial lighting and improving occupant wellbeing. Built to withstand Australian hail, UV, and temperature extremes, each unit features laminated glass, triple weather seals, and a hidden drainage channel.\n\nAvailable in a wide range of sizes, including custom options, and compatible with both metal and tile roofing. Energy Star rated to help meet NCC energy efficiency requirements.`,
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1200',
    priceFrom: 'From $380',
    specs: [
      { label: 'Glazing', value: 'Laminated safety glass (standard)' },
      { label: 'Frame', value: 'Aluminium with factory-applied flashing' },
      { label: 'Sizes', value: '550×700 to 1140×1180mm' },
      { label: 'U-Value', value: '2.9 W/m²K (double glazed)' },
      { label: 'Hail Rating', value: 'Tested to 50mm hailstone impact' },
      { label: 'Warranty', value: '10-year product warranty' },
      { label: 'Standard', value: 'AS/NZS 4285, Energy Star rated' },
      { label: 'Roof Types', value: 'Metal, tile, flat (with adaptor)' },
    ],
    features: [
      'Brings natural daylight into interior spaces',
      'Laminated safety glass as standard',
      'Triple weather seal prevents water ingress',
      'Energy Star rated — meets NCC requirements',
      'Integral flashing system for metal and tile roofs',
      'Available with blinds and accessories',
      'Reduces artificial lighting requirements',
      '10-year product warranty',
    ],
  },
  {
    id: 'r5',
    name: 'Stratco Quad Guttering',
    subcategory: 'Guttering & Downpipes',
    description: 'Australia\'s most popular gutter profile. Robust, high-capacity quad guttering in Colorbond steel and Zincalume for residential and commercial applications.',
    longDescription: `Stratco Quad Guttering is the benchmark for Australian residential roofing. The broad, flat-based profile provides high water carrying capacity, reducing the risk of overflow in heavy downpours common in QLD and NSW summer storms.\n\nManufactured from BlueScope Colorbond steel, it matches seamlessly with Colorbond roofing and comes pre-painted in all standard Colorbond colours. All sections are roll-formed to length, minimising joints and potential leak points.`,
    image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=1200',
    priceFrom: 'From $12/lm',
    specs: [
      { label: 'Material', value: 'Colorbond steel / Zincalume' },
      { label: 'Profile', value: 'Quad, half-round, fascia' },
      { label: 'Size', value: '115mm, 150mm, 200mm' },
      { label: 'Thickness', value: '0.55mm BMT' },
      { label: 'Max. Length', value: 'Roll-formed to any length' },
      { label: 'Downpipe', value: '90×90mm, 75×50mm, 100×75mm' },
      { label: 'Standard', value: 'AS/NZS 3500.3 compliant' },
      { label: 'Colours', value: 'Full Colorbond range' },
    ],
    features: [
      'High-capacity profile handles heavy rainfall',
      'Roll-formed to length — minimal joints',
      'Matches all Colorbond roofing colours',
      'Includes brackets, joiners, and stopends',
      'Compatible with rainwater tank diverters',
      'Galvanised fascia brackets for long-term fixing',
      'Leaf guard accessories available',
      'Made in Australia',
    ],
    colors: ['Surfmist', 'Shale Grey', 'Basalt', 'Monument', 'Woodland Grey', 'Ironstone', 'Zincalume'],
  },
  {
    id: 'r6',
    name: 'Bradford Thermoseal Roof Sarking',
    subcategory: 'Roof Insulation',
    description: 'High-performance reflective roof sarking providing a vapour barrier and secondary weather protection layer under metal and tile roofing.',
    longDescription: `Bradford Thermoseal Roof Sarking is a multi-layer laminated foil sarking combining a reflective foil face, a reinforcing scrim, and a breathable membrane. It provides a secondary waterproofing layer immediately under the roofing, dramatically reducing the risk of water damage from wind-driven rain or condensation.\n\nThe reflective surface reflects radiant heat downward in summer, reducing attic temperature and improving air conditioning efficiency. In winter, it acts as a vapour barrier, reducing condensation on structural timbers.`,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
    priceFrom: 'From $0.85/m²',
    specs: [
      { label: 'Type', value: 'Reflective foil laminate (RFL)' },
      { label: 'R-Value', value: 'Up to R1.4 (installed in roof cavity)' },
      { label: 'Roll Width', value: '1350mm' },
      { label: 'Roll Length', value: '30m or 60m' },
      { label: 'Emissivity', value: '< 0.05 (low emissivity face)' },
      { label: 'Vapour Resistance', value: '>170 MNs/g' },
      { label: 'Standard', value: 'AS/NZS 4200.1, NCC compliant' },
      { label: 'Application', value: 'Metal and tile roofing, under battens' },
    ],
    features: [
      'Reflects radiant heat — cooler in summer',
      'Vapour barrier reduces condensation on timbers',
      'Secondary weather protection layer',
      'Lightweight and easy to install',
      'Foil face reduces attic air temperature',
      'Complements glasswool and bulk insulation',
      'NCC Section J compliant',
      'Tear-resistant laminated scrim reinforcement',
    ],
  },
];

export const roofingFaqs = [
  {
    question: 'What roofing type suits Australian conditions best?',
    answer: 'It depends on your climate zone, aesthetic preference, and budget. Colorbond steel is ideal for coastal and hot, sunny climates due to its Thermatech reflectance technology and corrosion resistance. Concrete tiles perform well in temperate zones, offering better acoustic and thermal mass. Our team can help select the right product for your specific location.',
  },
  {
    question: 'What is BAL and why does it matter?',
    answer: 'BAL stands for Bushfire Attack Level, rated from BAL-12.5 to BAL-FZ. If your property is in a designated bushfire-prone area, your roof must meet the BAL rating specified by your council or building certifier. We stock roofing products certified across all BAL ratings and can advise on the right specification.',
  },
  {
    question: 'Can I install solar panels on a Colorbond roof?',
    answer: 'Yes. Colorbond and most Klip-Lok profiles support solar panel mounting systems. We supply purpose-designed rail and fixing kits that do not void the roof warranty. Speak to your installer about load calculations and confirm compatibility with your specific roof profile.',
  },
  {
    question: 'Do you offer custom cut-to-length roofing?',
    answer: 'Yes. We offer roll-formed steel roofing cut to any length up to 30m, minimising on-site waste and reducing the number of end laps required. Custom lengths are available with 3–5 business days lead time. Contact your nearest branch for pricing.',
  },
  {
    question: 'What is the minimum pitch for metal roofing?',
    answer: 'Standard corrugated and Trimdek profiles require a minimum pitch of 5°. For lower-pitch applications (1°–5°), we recommend Klip-Lok 700 with sealed end laps and a premium sarking layer. Always consult the product technical manual and your building certifier.',
  },
];
