import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  Products: [
    'Structural Timber',
    'Cladding & Facades',
    'Roofing',
    'Flooring',
    'Brick & Masonry',
    'Steel & Metal',
    'Insulation',
    'Concrete & Aggregates',
  ],
  Resources: [
    'Technical Guides',
    'Installation Manuals',
    'CAD Drawings',
    'Product Certifications',
    'Sample Kits',
    'Material Calculators',
    'Project Gallery',
    'Blog & News',
  ],
  Company: [
    'About Us',
    'Our Team',
    'Sustainability',
    'Trade Accounts',
    'Careers',
    'Media Centre',
    'Find a Branch',
    'Contact Us',
  ],
};

const branches = [
  { city: 'Sydney', address: '42 Industrial Ave, Alexandria NSW 2015' },
  { city: 'Melbourne', address: '18 Trade St, Laverton VIC 3028' },
  { city: 'Brisbane', address: '88 Commerce Dr, Larapinta QLD 4110' },
  { city: 'Perth', address: '55 Fabrication Rd, Welshpool WA 6106' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-charcoal-300">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid lg:grid-cols-5 gap-12 mb-14">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-white/10 rounded flex items-center justify-center border border-white/10">
                <span className="text-white font-bold text-sm tracking-tight">BC</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl tracking-tight">BuildersCo</span>
                <span className="text-charcoal-500 text-xs block leading-none -mt-0.5">Premium Building Materials</span>
              </div>
            </div>

            <p className="text-charcoal-400 text-sm leading-relaxed mb-7 max-w-xs">
              Australia's trusted partner for premium building materials since 1994. Serving builders, architects, and developers from 15 locations nationwide.
            </p>

            <div className="space-y-3 mb-8">
              <a href="tel:1800284532" className="flex items-center gap-3 text-sm text-charcoal-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-charcoal-800 border border-charcoal-700 flex items-center justify-center group-hover:border-charcoal-500 transition-colors">
                  <Phone size={13} />
                </div>
                1800 BUILD CO (1800 284 532)
              </a>
              <a href="mailto:info@buildersco.com.au" className="flex items-center gap-3 text-sm text-charcoal-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-charcoal-800 border border-charcoal-700 flex items-center justify-center group-hover:border-charcoal-500 transition-colors">
                  <Mail size={13} />
                </div>
                info@buildersco.com.au
              </a>
            </div>

            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-charcoal-400 hover:text-white hover:border-charcoal-500 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-5">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-charcoal-400 text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-charcoal-800 pt-10 mb-10">
          <div className="flex items-center gap-2 mb-5">
            <MapPin size={14} className="text-charcoal-500" />
            <h4 className="text-white font-semibold text-sm">Key Branch Locations</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {branches.map((branch) => (
              <div key={branch.city} className="p-4 rounded-xl bg-charcoal-800 border border-charcoal-700 hover:border-charcoal-600 transition-colors cursor-pointer">
                <div className="text-white font-semibold text-sm mb-1">{branch.city}</div>
                <div className="text-charcoal-500 text-xs leading-relaxed">{branch.address}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-charcoal-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-500 text-sm">
            &copy; {new Date().getFullYear()} BuildersCo Pty Ltd. All rights reserved. ABN 42 123 456 789
          </p>
          <div className="flex items-center gap-6 text-charcoal-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
