import { ArrowRight, Package, BookOpen, MapPin, Mail } from 'lucide-react';

const ctaCards = [
  {
    icon: Package,
    title: 'Request a Sample Kit',
    description: 'Get physical samples of timber, cladding, and flooring products delivered free to your door.',
    cta: 'Order Samples',
    bg: 'bg-stone-50',
    border: 'border-stone-200',
    iconBg: 'bg-stone-100 text-stone-700',
  },
  {
    icon: BookOpen,
    title: 'Technical Resources',
    description: 'Access installation guides, spec sheets, CAD drawings, and engineering certifications.',
    cta: 'Browse Resources',
    bg: 'bg-forest-50',
    border: 'border-forest-100',
    iconBg: 'bg-forest-100 text-forest-600',
  },
  {
    icon: MapPin,
    title: 'Find a Branch',
    description: 'Visit one of our 15 locations across Australia — our team is ready to help you on site.',
    cta: 'Find Nearest Branch',
    bg: 'bg-charcoal-50',
    border: 'border-charcoal-100',
    iconBg: 'bg-charcoal-100 text-charcoal-700',
  },
];

export default function CTASection() {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-stone-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Get Started</span>
            <h2 className="font-heading font-bold text-charcoal-900 text-4xl md:text-5xl leading-tight">
              How Can We Help?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {ctaCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`${card.bg} border ${card.border} rounded-2xl p-8 flex flex-col group hover:shadow-lg transition-all duration-300`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${card.iconBg}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-charcoal-900 text-xl mb-3">{card.title}</h3>
                  <p className="text-charcoal-500 text-sm leading-relaxed mb-6 flex-1">{card.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-charcoal-800 font-semibold text-sm hover:gap-3 transition-all duration-200 group/link"
                  >
                    {card.cta}
                    <ArrowRight size={15} className="transition-transform group-hover/link:translate-x-0.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-700 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail size={24} className="text-white" />
          </div>
          <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-4 leading-tight">
            Stay Ahead of the Build
          </h2>
          <p className="text-stone-300 text-lg mb-10 max-w-xl mx-auto">
            Sign up for product updates, exclusive trade pricing, project inspiration, and industry news — delivered monthly.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your work email"
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-white text-charcoal-900 font-semibold rounded-xl hover:bg-stone-100 transition-colors text-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-stone-500 text-xs mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  );
}
