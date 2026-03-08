export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  badge?: string;
  specs?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  location: string;
}

export const categories: Category[] = [
  {
    id: 'timber',
    name: 'Structural Timber',
    description: 'Premium hardwood and softwood for framing, decking, and feature applications',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 48,
    icon: 'TreePine',
  },
  {
    id: 'cladding',
    name: 'Cladding & Facades',
    description: 'Weatherproof exterior cladding systems built for Australian conditions',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 35,
    icon: 'Layers',
  },
  {
    id: 'roofing',
    name: 'Roofing',
    description: 'Durable roofing solutions from corrugated steel to slate and concrete tiles',
    image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 42,
    icon: 'Home',
  },
  {
    id: 'flooring',
    name: 'Flooring',
    description: 'Hardwood, composite, and stone flooring for every residential and commercial space',
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 61,
    icon: 'Grid',
  },
  {
    id: 'masonry',
    name: 'Brick & Masonry',
    description: 'Australian-made bricks, blocks, and stonework for lasting construction',
    image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 29,
    icon: 'Square',
  },
  {
    id: 'steel',
    name: 'Steel & Metal',
    description: 'Structural steel, purlins, and metal fabrication products for any build',
    image: 'https://images.pexels.com/photos/162568/factory-steel-iron-industrial-162568.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 37,
    icon: 'Wrench',
  },
  {
    id: 'insulation',
    name: 'Insulation & Acoustics',
    description: 'Thermal and acoustic insulation solutions for energy-efficient buildings',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 24,
    icon: 'Shield',
  },
  {
    id: 'concrete',
    name: 'Concrete & Aggregates',
    description: 'Ready-mix concrete, pavers, and aggregate products for foundations and paths',
    image: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 33,
    icon: 'Mountain',
  },
];

export const featuredProducts: Product[] = [
  {
    id: 'p1',
    name: 'Spotted Gum Decking',
    category: 'Structural Timber',
    description: 'A quintessential Australian hardwood celebrated for its durability and stunning natural grain. Ideal for decks, pergolas, and feature walls.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Best Seller',
    specs: ['Janka Hardness: 11kN', 'Durability Class 1', 'Available 70x19mm to 140x38mm'],
  },
  {
    id: 'p2',
    name: 'Hebel PowerPanel XL',
    category: 'Cladding & Facades',
    description: 'Lightweight autoclaved aerated concrete panels offering superior thermal performance and fire resistance for exterior walls.',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'New Arrival',
    specs: ['BAL-FZ rated', 'R-value 1.2', 'Spans to 6m'],
  },
  {
    id: 'p3',
    name: 'Colorbond Ultra Steel Roofing',
    category: 'Roofing',
    description: 'The iconic Australian roofing steel with enhanced Thermatech solar reflectance technology, engineered for extreme heat and coastal conditions.',
    image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Top Rated',
    specs: ['30+ colour options', '0.42mm\u20130.6mm BMT', '50-year warranty'],
  },
  {
    id: 'p4',
    name: 'Blackbutt Engineered Flooring',
    category: 'Flooring',
    description: 'Sustainably sourced NSW Blackbutt timber over a stable plywood base. A premium flooring choice for open-plan homes and commercial spaces.',
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['190mm wide boards', '14mm total depth', 'Pre-finished with UV lacquer'],
  },
  {
    id: 'p5',
    name: 'Austral Brick Select Range',
    category: 'Brick & Masonry',
    description: 'Handcrafted clay bricks in earthy Australian tones. Perfect for residential facades, boundary walls, and landscaping.',
    image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Local',
    specs: ['40+ colour options', 'Durability Class 1', 'BCA compliant'],
  },
  {
    id: 'p6',
    name: 'Bradford Gold Batts',
    category: 'Insulation & Acoustics',
    description: 'Australia\'s most trusted glasswool insulation. Delivers consistent thermal performance across diverse Australian climate zones.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['R2.5\u2013R6.0 available', 'NCC compliant', 'GreenTag certified'],
  },
];

export const projects = [
  {
    id: 'proj1',
    title: 'Coastal Family Home \u2014 Mornington Peninsula',
    type: 'Residential',
    materials: ['Spotted Gum Decking', 'Colorbond Roofing', 'Hebel Cladding'],
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'proj2',
    title: 'Mixed-Use Development \u2014 Surry Hills',
    type: 'Commercial',
    materials: ['Structural Steel', 'Brick Select Range', 'Engineered Flooring'],
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'proj3',
    title: 'Bushland Retreat \u2014 Blue Mountains',
    type: 'Residential',
    materials: ['Timber Cladding', 'Stone Masonry', 'Bradford Insulation'],
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'James Whitfield',
    role: 'Director',
    company: 'Whitfield Building Group',
    content: 'BuildersCo has been our go-to supplier for over a decade. Their timber range is second to none, and the technical support team always go above and beyond. We wouldn\'t build without them.',
    rating: 5,
    location: 'Brisbane, QLD',
  },
  {
    id: 't2',
    name: 'Sarah McAllister',
    role: 'Principal Architect',
    company: 'Studio Coastal',
    content: 'The breadth of product knowledge at BuildersCo is remarkable. As a designer pushing the boundaries of sustainable architecture, I rely on their team to source materials that meet both aesthetic and environmental standards.',
    rating: 5,
    location: 'Sydney, NSW',
  },
  {
    id: 't3',
    name: 'Dave Nguyen',
    role: 'Owner',
    company: 'Nguyen Constructions',
    content: 'Reliable delivery, competitive pricing, and quality you can count on. I\'ve recommended BuildersCo to every tradesman I know. They stock everything from structural steel to decorative timber \u2014 one account, sorted.',
    rating: 5,
    location: 'Melbourne, VIC',
  },
  {
    id: 't4',
    name: 'Fiona Baxter',
    role: 'Project Manager',
    company: 'Baxter Developments',
    content: 'Managing a portfolio of builds across three states, I need a supplier I can trust for consistency. BuildersCo delivers every time. Their online ordering system makes procurement genuinely painless.',
    rating: 4,
    location: 'Perth, WA',
  },
];
