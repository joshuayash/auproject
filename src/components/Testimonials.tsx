import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/products';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="py-24 bg-charcoal-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-charcoal-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Testimonials</span>
          <h2 className="font-heading font-bold text-white text-4xl md:text-5xl leading-tight">
            Trusted by the Trades
          </h2>
          <p className="text-charcoal-400 mt-4 text-lg max-w-xl mx-auto">
            Don't take our word for it — here's what Australia's best builders have to say.
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {testimonials.map((t, index) => (
              <div
                key={t.id}
                className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  index === active
                    ? 'bg-stone-50 border-stone-200 shadow-lg scale-[1.01]'
                    : 'bg-charcoal-800/50 border-charcoal-700 hover:border-charcoal-500'
                }`}
                onClick={() => setActive(index)}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < t.rating ? 'text-ochre-400 fill-ochre-400' : 'text-charcoal-600'}
                      />
                    ))}
                  </div>
                  <Quote size={24} className={index === active ? 'text-stone-400' : 'text-charcoal-600'} />
                </div>

                <p className={`text-base leading-relaxed mb-6 ${index === active ? 'text-charcoal-700' : 'text-charcoal-400'}`}>
                  "{t.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm ${
                    index === active ? 'bg-charcoal-800 text-white' : 'bg-charcoal-700 text-charcoal-300'
                  }`}>
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className={`font-bold text-sm ${index === active ? 'text-charcoal-900' : 'text-white'}`}>
                      {t.name}
                    </div>
                    <div className={`text-xs ${index === active ? 'text-charcoal-500' : 'text-charcoal-500'}`}>
                      {t.role}, {t.company}
                    </div>
                    <div className={`text-xs mt-0.5 ${index === active ? 'text-stone-500' : 'text-charcoal-600'}`}>
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-charcoal-600 flex items-center justify-center text-charcoal-400 hover:border-charcoal-400 hover:text-white transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${i === active ? 'w-7 h-2 bg-stone-400' : 'w-2 h-2 bg-charcoal-600 hover:bg-charcoal-400'}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-charcoal-600 flex items-center justify-center text-charcoal-400 hover:border-charcoal-400 hover:text-white transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
