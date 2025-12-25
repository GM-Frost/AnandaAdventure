import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logoImg } from '@/assets/images/images';
import NavbarMobile from './NavbarMobile';
import NavbarDesktop from './NavbarDesktop';

const menuItems = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  {
    name: 'Destinations',
    to: '/destinations',
    children: [
      { name: 'Everest Base Camp', to: '/destinations/everest-base-camp' },
      { name: 'Annapurna Circuit', to: '/destinations/annapurna-circuit' },
    ],
  },
  {
    name: 'Activities',
    to: '/activities',
    children: [
      { name: 'Trekking', to: '/activities/trekking' },
      { name: 'Rafting', to: '/activities/rafting' },
    ],
  },
  {
    name: 'Itineraries',
    to: '/itineraries',
    children: [
      { name: '7 Days Nepal', to: '/itineraries/7-days-nepal' },
      { name: 'Adventure Package', to: '/itineraries/adventure' },
    ],
  },
  { name: 'Blog', to: '/blog' },
  { name: 'Contact', to: '/contact' },
];

const TRANSPARENT_ROUTES = ['/'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isTransparentRoute = TRANSPARENT_ROUTES.includes(location.pathname);

  useEffect(() => {
    if (!isTransparentRoute) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isTransparentRoute]);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <nav
      className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? 'bg-white/90 backdrop-blur shadow' : 'bg-transparent'}
    `}
    >
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-16 bg-white  shadow-md md:hidden z-40" />
      )}
      <div className="relative z-50 mx-auto max-w-7xl px-4 sm:px-6 flex items-center h-16">
        <Link to="/" className="flex items-center gap-2">
          <span
            className={`flex items-center gap-2 font-subheading text-lg text-primary-dark transition-opacity duration-300
            ${scrolled || menuOpen ? 'opacity-100' : 'opacity-0'}
          `}
            style={{
              width: scrolled || menuOpen ? 'auto' : 0,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            <img src={logoImg} alt="Logo" className="h-10 w-auto" />
            Ananda Adventures
          </span>
        </Link>
        <div className="flex-1" />
        <NavbarDesktop
          menuItems={menuItems}
          scrolled={scrolled}
          logoImg={logoImg}
        />
        {/* Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle Menu"
        >
          <svg
            className={`w-6 h-6 ${menuOpen ? 'text-gray-600' : scrolled ? 'text-gray-900' : 'text-white'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 8h16M4 16h16'}
            />
          </svg>
        </button>
        <NavbarMobile
          menuItems={menuItems}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </div>
    </nav>
  );
};

export default Navbar;
