import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    tagline: 'Built for Australia',
    headline: 'Premium Building\nMaterials for Every Build',
    subtext: 'From coastal retreats to urban developments — we supply the materials that shape Australia\'s built environment.',
    cta: 'Explore Products',
    ctaSecondary: 'Request a Quote',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overlay: 'from-charcoal-900/80 via-charcoal-900/40 to-transparent',
  },
  {
    id: 2,
    tagline: 'Timber Collection',
    headline: 'Australian Hardwood,\nBuilt to Last',
    subtext: 'Sustainably sourced native timbers including Spotted Gum, Blackbutt, and Ironbark — the best Australia has to offer.',
    cta: 'View Timber Range',
    ctaSecondary: 'Download Spec Sheet',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overlay: 'from-charcoal-900/75 via-charcoal-900/35 to-transparent',
  },
  {
    id: 3,
    tagline: 'Roofing & Cladding',
    headline: 'Weather the Elements\nWith Confidence',
    subtext: 'Trusted roofing and facade systems engineered for Australia\'s extreme UV, heat, and coastal conditions.',
    cta: 'Explore Roofing',
    ctaSecondary: 'Find a Branch',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overlay: 'from-charcoal-900/70 via-charcoal-900/30 to-transparent',
  },
];

const stats = [
  { value: '15+', label: 'Branch Locations' },
  { value: '2,500+', label: 'Products In-Stock' },
  { value: '30+', label: 'Years Experience' },
  { value: '98%', label: 'On-Time Delivery' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (indexOrFn: number | ((prev: number) => number)) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(typeof indexOrFn === 'function' ? indexOrFn(current) : indexOrFn);
    setTimeout(() => setAnimating(false), 600);
  };

  const slide = slides[current];

  return (
    <section className="relative">
      <div className="relative h-[92vh] min-h-[600px] overflow-hidden">
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: animating ? 0 : 1 }}
        >
          <img
            src={slide.image}
            alt={slide.headline}
            className="w-full h-full object-cover scale-105 animate-[kenBurns_10s_ease-out_forwards]"
            style={{ animation: 'scale 10s ease-out forwards' }}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className={`max-w-2xl transition-all duration-700 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <span className="inline-block text-stone-300 text-sm font-semibold tracking-widest uppercase mb-4 border border-stone-400/40 px-3 py-1 rounded-full">
                {slide.tagline}
              </span>
              <h1 className="text-white font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 whitespace-pre-line">
                {slide.headline}
              </h1>
              <p className="text-stone-200 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                {slide.subtext}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-charcoal-900 font-semibold rounded-lg hover:bg-stone-100 transition-all duration-200 hover:gap-3 group"
                >
                  {slide.cta}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border-2 border-white/70 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white transition-all duration-200"
                >
                  {slide.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo((current - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 hover:bg-white/25 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => goTo((current + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 hover:bg-white/25 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-charcoal-600/30">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-charcoal-800 px-8 py-6 text-center">
              <div className="text-white font-bold text-3xl md:text-4xl font-heading mb-1">{stat.value}</div>
              <div className="text-charcoal-300 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
