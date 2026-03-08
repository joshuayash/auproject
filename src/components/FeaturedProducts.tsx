import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredProducts } from '../data/products';

const productRoutes: Record<string, string> = {
  p3: '/products/roofing',
};

const badgeColors: Record<string, string> = {
  'Best Seller': 'bg-ochre-500 text-white',
  'New Arrival': 'bg-forest-500 text-white',
  'Top Rated': 'bg-charcoal-700 text-white',
  'Local': 'bg-stone-500 text-white',
};

export default function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-stone-500 text-sm font-semibold tracking-widest uppercase mb-3 block">Featured Products</span>
            <h2 className="font-heading font-bold text-charcoal-900 text-4xl md:text-5xl leading-tight">
              Trusted by Builders<br />Across Australia
            </h2>
            <p className="text-charcoal-500 mt-4 text-lg max-w-xl">
              Our most-specified products, hand-picked for quality, availability, and value.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal-800 text-white font-semibold rounded-lg hover:bg-charcoal-900 transition-colors group shrink-0"
          >
            View full range
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-xl hover:border-stone-200 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-500 ${hoveredId === product.id ? 'scale-105' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {product.badge && (
                  <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full ${badgeColors[product.badge] || 'bg-charcoal-700 text-white'}`}>
                    {product.badge}
                  </span>
                )}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-stone-50 transition-colors">
                    <ArrowRight size={16} className="text-charcoal-800" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <span className="text-stone-500 text-xs font-semibold tracking-wider uppercase">{product.category}</span>
                <h3 className="text-charcoal-900 font-bold text-xl mt-1.5 mb-3 group-hover:text-charcoal-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed mb-5 line-clamp-2">
                  {product.description}
                </p>

                {product.specs && (
                  <div className="space-y-1.5 mb-5">
                    {product.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-xs text-charcoal-600">
                        <CheckCircle size={12} className="text-forest-500 shrink-0" />
                        {spec}
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                  {productRoutes[product.id] ? (
                    <Link to={productRoutes[product.id]} className="text-sm font-semibold text-charcoal-700 hover:text-charcoal-900 transition-colors flex items-center gap-1.5 group/link">
                      View details
                      <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  ) : (
                    <a href="#" className="text-sm font-semibold text-charcoal-700 hover:text-charcoal-900 transition-colors flex items-center gap-1.5 group/link">
                      View details
                      <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-0.5" />
                    </a>
                  )}
                  <a href="#" className="text-sm font-semibold text-white bg-charcoal-800 px-4 py-1.5 rounded-lg hover:bg-charcoal-900 transition-colors">
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
