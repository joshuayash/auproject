import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, MapPin, LogIn, LogOut, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const childRoutes: Record<string, string> = {
  'Roofing': '/products/roofing',
};

const navLinks = [
  {
    label: 'Products',
    children: [
      'Structural Timber',
      'Cladding & Facades',
      'Roofing',
      'Flooring',
      'Brick & Masonry',
      'Steel & Metal',
      'Insulation',
      'Concrete & Aggregates',
    ],
  },
  { label: 'Projects', children: null },
  { label: 'Resources', children: ['Technical Guides', 'Installation Manuals', 'Sample Kits', 'Calculators'] },
  { label: 'About', children: null },
  { label: 'Contact', children: null },
];

export default function Navbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  async function handleSignOut() {
    await signOut();
    navigate('/');
  }

  return (
    <>
      <div className="bg-charcoal-800 text-charcoal-200 text-sm py-2 px-6 hidden md:flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Phone size={13} />
            1800 BUILD CO (1800 284 532)
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} />
            15 branch locations across Australia
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors">Trade Accounts</a>
          <span className="text-charcoal-600">|</span>
          <a href="#" className="hover:text-white transition-colors">Request a Quote</a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md border-b border-stone-100'
            : 'bg-white border-b border-stone-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18 py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-charcoal-800 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm tracking-tight">BC</span>
            </div>
            <div>
              <span className="text-charcoal-900 font-bold text-xl tracking-tight">BuildersCo</span>
              <span className="text-stone-500 text-xs block leading-none -mt-0.5">Premium Building Materials</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="#"
                  className="flex items-center gap-1 px-4 py-2 text-charcoal-700 hover:text-charcoal-900 font-medium text-sm transition-colors rounded-md hover:bg-stone-50"
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                </a>
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-xl border border-stone-100 py-2 z-50">
                    {link.children.map((child) => (
                      childRoutes[child] ? (
                        <Link
                          key={child}
                          to={childRoutes[child]}
                          className="block px-4 py-2 text-sm text-charcoal-600 hover:text-charcoal-900 hover:bg-stone-50 transition-colors"
                        >
                          {child}
                        </Link>
                      ) : (
                        <a
                          key={child}
                          href="#"
                          className="block px-4 py-2 text-sm text-charcoal-600 hover:text-charcoal-900 hover:bg-stone-50 transition-colors"
                        >
                          {child}
                        </a>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-charcoal-700 border border-charcoal-200 rounded-lg hover:border-charcoal-400 transition-colors"
            >
              View Catalogue
            </a>
            {user ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-2 text-sm text-charcoal-600 bg-stone-50 rounded-lg border border-stone-200">
                  <User size={13} className="text-charcoal-500" />
                  <span className="max-w-[120px] truncate text-xs font-medium">{user.email}</span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-charcoal-700 border border-charcoal-200 rounded-lg hover:border-charcoal-400 hover:bg-stone-50 transition-colors"
                >
                  <LogOut size={14} />
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-charcoal-800 text-white rounded-lg hover:bg-charcoal-900 transition-colors"
              >
                <LogIn size={14} />
                Sign In
              </Link>
            )}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-charcoal-700 hover:bg-stone-50"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-stone-100 py-4 px-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                  className="w-full flex items-center justify-between py-2.5 text-charcoal-700 font-medium text-sm"
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                </button>
                {link.children && activeDropdown === link.label && (
                  <div className="pl-4 space-y-1 mb-2">
                    {link.children.map((child) => (
                      <a key={child} href="#" className="block py-2 text-sm text-charcoal-500 hover:text-charcoal-800">
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <a href="#" className="w-full text-center py-2.5 text-sm font-medium border border-charcoal-200 rounded-lg text-charcoal-700">
                View Catalogue
              </a>
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold border border-charcoal-200 rounded-lg text-charcoal-700"
                >
                  <LogOut size={14} />
                  Sign Out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold bg-charcoal-800 text-white rounded-lg"
                >
                  <LogIn size={14} />
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
