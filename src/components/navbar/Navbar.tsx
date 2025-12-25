import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DesktopNav from '@/components/navbar/DesktopNav';
import MobileNav from '@/components/navbar/MobileNav';
import type { LanguageCode } from '@components/navbar/Languages';

const Navbar = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [language, setLanguage] = useState<LanguageCode>('en');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isHomePage]);

  const isTransparent = isHomePage && !isScrolled;

  return (
    <header
      className={[
        'top-0 left-0 z-50 w-full transition-all duration-300',
        isHomePage ? 'fixed' : 'sticky',
        isTransparent ? 'bg-transparent' : 'bg-white/90 backdrop-blur shadow',
      ].join(' ')}
    >
      {/* Desktop */}
      <DesktopNav
        isTransparent={isTransparent}
        language={language}
        onLanguageChange={setLanguage}
      />

      {/* Mobile */}
      <MobileNav
        isTransparent={isTransparent}
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onOpen={() => setIsMobileOpen(true)}
        language={language}
        onLanguageChange={setLanguage}
      />
    </header>
  );
};

export default Navbar;
