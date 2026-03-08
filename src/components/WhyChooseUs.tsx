import { Truck, ShieldCheck, Users, Leaf, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'Fast, reliable delivery to every corner of Australia. Metro next-day, regional 2–3 days, with real-time tracking on all orders.',
    color: 'bg-charcoal-50 text-charcoal-700',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    description: 'Every product is independently tested and certified to Australian Standards. We back our range with a full quality guarantee.',
    color: 'bg-forest-50 text-forest-600',
  },
  {
    icon: Users,
    title: 'Trade Specialist Support',
    description: 'Dedicated account managers and in-house product specialists. We speak builder — no jargon, just straight answers.',
    color: 'bg-stone-100 text-stone-700',
  },
  {
    icon: Leaf,
    title: 'Sustainable Sourcing',
    description: 'Our timber is FSC-certified and we actively partner with suppliers reducing environmental impact across the supply chain.',
    color: 'bg-forest-50 text-forest-600',
  },
  {
    icon: Clock,
    title: 'In-Stock Availability',
    description: 'We hold substantial stock at all 15 locations to prevent project delays. Live inventory shown online, always accurate.',
    color: 'bg-ochre-50 text-ochre-600',
  },
  {
    icon: Award,
    title: '30 Years of Trust',
    description: 'Established in 1994, BuildersCo has been a trusted partner for Australia\'s leading builders, architects, and developers.',
    color: 'bg-charcoal-50 text-charcoal-700',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-stone-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Why BuildersCo</span>
            <h2 className="font-heading font-bold text-charcoal-900 text-4xl md:text-5xl leading-tight mb-6">
              Australia's Building<br />Industry Partner
            </h2>
            <p className="text-charcoal-500 text-lg leading-relaxed mb-8">
              For three decades, builders, architects, and developers across Australia have relied on BuildersCo for premium materials, expert advice, and dependable service. We're not just a supplier — we're your project partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-charcoal-800 text-white font-semibold rounded-lg hover:bg-charcoal-900 transition-colors"
              >
                Open a Trade Account
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-charcoal-200 text-charcoal-700 font-semibold rounded-lg hover:border-charcoal-400 transition-colors"
              >
                Download Catalogue
              </a>
            </div>

            <div className="mt-12 p-6 bg-stone-50 rounded-2xl border border-stone-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-charcoal-800 rounded-xl flex items-center justify-center shrink-0">
                  <Users size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal-900 mb-1">Join 8,000+ Trade Members</h4>
                  <p className="text-charcoal-500 text-sm leading-relaxed">
                    Trade account members enjoy exclusive pricing, priority stock allocation, extended payment terms, and a dedicated account manager.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl border border-stone-100 hover:border-stone-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-charcoal-900 mb-2 text-sm leading-snug">{feature.title}</h3>
                  <p className="text-charcoal-500 text-xs leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
