import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Download,
  Phone,
  Package,
  Star,
  X,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  roofingProducts,
  roofingSubcategories,
  roofingFaqs,
  type RoofingProduct,
} from '../data/roofing';

const badgeColors: Record<string, string> = {
  'Best Seller': 'bg-ochre-500 text-white',
  'New Arrival': 'bg-forest-500 text-white',
  'Top Rated': 'bg-charcoal-700 text-white',
};

function ProductModal({ product, onClose }: { product: RoofingProduct; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-charcoal-900/70 backdrop-blur-sm overflow-y-auto py-8 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 bg-stone-100 hover:bg-stone-200 rounded-full flex items-center justify-center text-charcoal-600 z-10 transition-colors"
        >
          <X size={16} />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative rounded-l-2xl overflow-hidden aspect-square md:aspect-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 to-transparent" />
            {product.badge && (
              <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full ${badgeColors[product.badge] || 'bg-charcoal-700 text-white'}`}>
                {product.badge}
              </span>
            )}
          </div>

          <div className="p-8 overflow-y-auto max-h-[80vh] md:max-h-none">
            <span className="text-stone-500 text-xs font-semibold tracking-wider uppercase">{product.subcategory}</span>
            <h2 className="font-heading font-bold text-charcoal-900 text-2xl mt-1.5 mb-4">{product.name}</h2>

            {product.priceFrom && (
              <div className="inline-block bg-stone-50 border border-stone-200 rounded-lg px-4 py-2 mb-5">
                <span className="text-xs text-charcoal-500 font-medium">Starting from</span>
                <div className="text-charcoal-900 font-bold text-lg">{product.priceFrom}</div>
              </div>
            )}

            <div className="text-charcoal-600 text-sm leading-relaxed mb-6 whitespace-pre-line">
              {product.longDescription}
            </div>

            {product.colors && (
              <div className="mb-6">
                <h4 className="text-charcoal-900 font-semibold text-sm mb-2">Available Colours</h4>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <span key={color} className="text-xs bg-stone-100 text-charcoal-700 px-3 py-1 rounded-full border border-stone-200">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6">
              <h4 className="text-charcoal-900 font-semibold text-sm mb-3">Key Features</h4>
              <div className="space-y-2">
                {product.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-sm text-charcoal-600">
                    <CheckCircle size={14} className="text-forest-500 mt-0.5 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-charcoal-900 font-semibold text-sm mb-3">Technical Specifications</h4>
              <div className="rounded-xl border border-stone-100 overflow-hidden">
                {product.specs.map((spec, i) => (
                  <div key={spec.label} className={`flex justify-between px-4 py-2.5 text-sm ${i % 2 === 0 ? 'bg-stone-50' : 'bg-white'}`}>
                    <span className="text-charcoal-500 font-medium">{spec.label}</span>
                    <span className="text-charcoal-800 font-semibold text-right max-w-[55%]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-charcoal-800 text-white font-semibold rounded-xl hover:bg-charcoal-900 transition-colors text-sm"
              >
                <Phone size={14} />
                Request a Quote
              </a>
              <a
                href="#"
                className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-charcoal-200 text-charcoal-700 font-semibold rounded-xl hover:border-charcoal-400 transition-colors text-sm"
              >
                <Download size={14} />
                Download Spec Sheet
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RoofingPage() {
  const [activeSubcat, setActiveSubcat] = useState<string>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<RoofingProduct | null>(null);

  const filtered = activeSubcat === 'all'
    ? roofingProducts
    : roofingProducts.filter((p) => p.subcategory.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === activeSubcat);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Roofing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/80 via-charcoal-900/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <nav className="flex items-center gap-2 text-sm text-charcoal-300 mb-5">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={13} className="text-charcoal-500" />
              <Link to="/" className="hover:text-white transition-colors">Products</Link>
              <ChevronRight size={13} className="text-charcoal-500" />
              <span className="text-white font-medium">Roofing</span>
            </nav>
            <h1 className="font-heading font-bold text-white text-5xl md:text-6xl leading-tight mb-4">
              Roofing
            </h1>
            <p className="text-stone-200 text-lg max-w-xl mb-6">
              Complete roofing systems built for Australia \u2014 from metal sheets and concrete tiles to guttering, sarking, and skylights.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal-900 font-semibold rounded-lg hover:bg-stone-100 transition-colors text-sm group">
                Browse Products <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm">
                Download Catalogue
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
            <button
              onClick={() => setActiveSubcat('all')}
              className={`shrink-0 px-5 py-3.5 text-sm font-semibold transition-all border-b-2 ${
                activeSubcat === 'all'
                  ? 'text-charcoal-900 border-charcoal-900'
                  : 'text-charcoal-500 border-transparent hover:text-charcoal-800'
              }`}
            >
              All Products ({roofingProducts.length})
            </button>
            {roofingSubcategories.map((sub) => {
              const key = sub.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
              const count = roofingProducts.filter(
                (p) => p.subcategory.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === key
              ).length;
              if (count === 0) return null;
              return (
                <button
                  key={key}
                  onClick={() => setActiveSubcat(key)}
                  className={`shrink-0 px-5 py-3.5 text-sm font-semibold transition-all border-b-2 ${
                    activeSubcat === key
                      ? 'text-charcoal-900 border-charcoal-900'
                      : 'text-charcoal-500 border-transparent hover:text-charcoal-800'
                  }`}
                >
                  {sub.name} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-xl hover:border-stone-200 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {product.badge && (
                    <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full ${badgeColors[product.badge] || 'bg-charcoal-700 text-white'}`}>
                      {product.badge}
                    </span>
                  )}
                  {product.priceFrom && (
                    <span className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-charcoal-800 text-xs font-bold px-3 py-1 rounded-lg">
                      {product.priceFrom}
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <span className="text-stone-500 text-xs font-semibold tracking-wider uppercase">{product.subcategory}</span>
                  <h3 className="text-charcoal-900 font-bold text-lg mt-1.5 mb-3">{product.name}</h3>
                  <p className="text-charcoal-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">{product.description}</p>

                  <div className="space-y-1.5 mb-5">
                    {product.specs.slice(0, 3).map((spec) => (
                      <div key={spec.label} className="flex items-center justify-between text-xs">
                        <span className="text-charcoal-400">{spec.label}</span>
                        <span className="text-charcoal-700 font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex-1 py-2.5 bg-charcoal-800 text-white text-sm font-semibold rounded-lg hover:bg-charcoal-900 transition-colors"
                    >
                      View Details
                    </button>
                    <a
                      href="#"
                      className="flex items-center gap-1.5 text-sm text-charcoal-600 font-medium hover:text-charcoal-900 transition-colors border border-stone-200 px-3 py-2.5 rounded-lg hover:border-stone-300"
                    >
                      <Download size={13} />
                      Spec
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-charcoal-400">
              <Package size={40} className="mx-auto mb-4 opacity-40" />
              <p className="text-lg font-medium">No products in this category yet.</p>
              <p className="text-sm mt-1">Contact us for availability.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-stone-500 text-sm font-semibold tracking-widest uppercase mb-3 block">Complete Range</span>
            <h2 className="font-heading font-bold text-charcoal-900 text-4xl leading-tight">
              Everything Your Roof Needs
            </h2>
            <p className="text-charcoal-500 mt-3 text-lg max-w-xl mx-auto">
              We stock all six roofing subcategories so you can source everything from one account.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {roofingSubcategories.map((sub) => (
              <div
                key={sub.id}
                className="group bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-lg hover:border-stone-200 transition-all duration-300 cursor-pointer"
                onClick={() => setActiveSubcat(sub.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'))}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={sub.image}
                    alt={sub.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal-900/30 group-hover:bg-charcoal-900/40 transition-colors" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-charcoal-900 text-base">{sub.name}</h3>
                    <span className="text-xs text-charcoal-400 shrink-0 mt-0.5">{sub.productCount} items</span>
                  </div>
                  <p className="text-charcoal-500 text-xs leading-relaxed">{sub.description}</p>
                  <div className="flex items-center gap-1 mt-3 text-charcoal-700 text-xs font-semibold group-hover:text-charcoal-900 transition-colors">
                    Browse <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-800 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <img
            src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-charcoal-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Why BuildersCo Roofing</span>
            <h2 className="font-heading font-bold text-white text-4xl leading-tight mb-6">
              The Right Roof for Every Australian Climate
            </h2>
            <p className="text-charcoal-300 text-base leading-relaxed mb-8">
              Australia's climate diversity demands roofing that performs across tropical cyclone zones, arid interiors, temperate coastlines, and alpine conditions. Our team carries the product knowledge to specify the right system for every environment, BAL rating, and council requirement.
            </p>
            <div className="space-y-4">
              {[
                { title: 'Climate-Specific Advice', desc: 'Recommendations tailored to your postcode\'s climate zone and BAL rating' },
                { title: 'Certified Products', desc: 'All products meet AS and NCC requirements \u2014 we\'ll confirm compliance for your application' },
                { title: 'Trade Pricing', desc: 'Open a trade account for exclusive pricing, credit terms, and priority stock' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Star size={14} className="text-stone-300" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.title}</div>
                    <div className="text-charcoal-400 text-xs mt-0.5 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Talk to a Roofing Specialist</div>
                <div className="text-charcoal-400 text-xs mt-0.5">1800 BUILD CO \u2014 Mon\u2013Fri 7am\u20135pm</div>
              </div>
              <ArrowRight size={15} className="text-charcoal-500 ml-auto group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#"
              className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                <Package size={18} className="text-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Order a Sample Kit</div>
                <div className="text-charcoal-400 text-xs mt-0.5">Colour samples and material swatches \u2014 free delivery</div>
              </div>
              <ArrowRight size={15} className="text-charcoal-500 ml-auto group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#"
              className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                <Download size={18} className="text-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Download the Roofing Catalogue</div>
                <div className="text-charcoal-400 text-xs mt-0.5">Full product range, specs, and installation guides (PDF)</div>
              </div>
              <ArrowRight size={15} className="text-charcoal-500 ml-auto group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-stone-500 text-sm font-semibold tracking-widest uppercase mb-3 block">FAQs</span>
            <h2 className="font-heading font-bold text-charcoal-900 text-4xl leading-tight">
              Common Roofing Questions
            </h2>
          </div>
          <div className="space-y-3">
            {roofingFaqs.map((faq, index) => (
              <div
                key={index}
                className="border border-stone-200 rounded-xl overflow-hidden hover:border-stone-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-charcoal-900 text-sm leading-relaxed">{faq.question}</span>
                  {openFaq === index
                    ? <ChevronUp size={16} className="text-charcoal-500 shrink-0 mt-0.5" />
                    : <ChevronDown size={16} className="text-charcoal-500 shrink-0 mt-0.5" />
                  }
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-charcoal-500 text-sm leading-relaxed border-t border-stone-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-heading font-bold text-charcoal-900 text-2xl mb-2">Ready to Get Started?</h3>
            <p className="text-charcoal-500">Talk to our roofing specialists or visit your nearest branch today.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-charcoal-800 text-white font-semibold rounded-xl hover:bg-charcoal-900 transition-colors"
            >
              <Phone size={15} />
              Call Us Now
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-charcoal-200 text-charcoal-700 font-semibold rounded-xl hover:border-charcoal-400 transition-colors"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
