import { ArrowRight, TreePine, Layers, Home, Grid3x3 as Grid3X3, Square, Wrench, Shield, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';

const categoryRoutes: Record<string, string> = {
  roofing: '/products/roofing',
};

const iconMap: Record<string, React.ElementType> = {
  TreePine,
  Layers,
  Home,
  Grid: Grid3X3,
  Square,
  Wrench,
  Shield,
  Mountain,
};

export default function ProductCategories() {
  return (
    <section id="products" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-stone-500 text-sm font-semibold tracking-widest uppercase mb-3 block">Our Range</span>
            <h2 className="font-heading font-bold text-charcoal-900 text-4xl md:text-5xl leading-tight">
              Shop by Category
            </h2>
            <p className="text-charcoal-500 mt-4 text-lg max-w-xl">
              Over 2,500 products across eight core categories, stocked at our 15 branches nationwide.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-charcoal-700 font-semibold hover:text-charcoal-900 transition-colors group shrink-0"
          >
            View all products
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {categories.map((cat, index) => {
            const Icon = iconMap[cat.icon] || Square;
            const route = categoryRoutes[cat.id];
            const Tag = route ? Link : 'a';
            const linkProps = route ? { to: route } : { href: '#' };
            return (
              <Tag
                key={cat.id}
                {...(linkProps as Record<string, string>)}
                className="group relative rounded-xl overflow-hidden aspect-square cursor-pointer"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/30 to-transparent" />
                <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/15 transition-colors duration-300" />

                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <Icon size={14} className="text-white" />
                    </div>
                    <span className="text-white/70 text-xs font-medium">{cat.productCount} products</span>
                  </div>
                  <h3 className="text-white font-bold text-base leading-snug">{cat.name}</h3>
                  <p className="text-white/70 text-xs mt-1 leading-relaxed line-clamp-2 hidden group-hover:block transition-all">
                    {cat.description}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-stone-300 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Browse range <ArrowRight size={12} />
                  </div>
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
