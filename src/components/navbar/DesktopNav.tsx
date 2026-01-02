import { NavLink } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { logoImg } from '@/assets/images/images';
import { navMenuItems as menuItems } from './NavLinks';
import { LanguageCode, languages } from '@components/navbar/Languages';
import { LanguageIcon } from '@components/icons';
import { megaMenuData } from '@/components/navbar/MegaMenuData';
import MegaMenu from '@/components/navbar/MegaMenu';

type Props = {
  isTransparent: boolean;
  language: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
};

const DesktopNav = ({ isTransparent, language, onLanguageChange }: Props) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [activeMega, setActiveMega] = useState<
    null | keyof typeof megaMenuData
  >(null);

  // Language dropdown outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsLangOpen(false);
      }
    };

    if (isLangOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangOpen]);

  return (
    <>
      <nav className="mx-auto hidden h-16 max-w-7xl items-center justify-between px-6 py-2 md:flex">
        {/* Logo */}
        <NavLink
          to="/"
          className={`flex items-center gap-3 text-lg font-semibold ${
            isTransparent ? 'text-white' : 'text-primary-dark'
          }`}
        >
          <img src={logoImg} className="h-10 w-auto" />
          Ananda Adventure
        </NavLink>

        {/* Right section */}
        <div className="flex items-center gap-8">
          {/* Links */}
          <ul className="flex items-center gap-8 text-md font-medium">
            {menuItems.map(item => {
              const hasMega = item.key && megaMenuData[item.key];

              return (
                <li
                  key={item.path}
                  onMouseEnter={() =>
                    hasMega &&
                    setActiveMega(item.key as keyof typeof megaMenuData)
                  }
                  className={activeMega === item.key ? 'relative' : ''}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `pb-1 transition ${
                        isTransparent
                          ? activeMega === item.key || isActive
                            ? 'text-white border-b-2 border-secondary-dark'
                            : 'text-white hover:text-secondary-light'
                          : isActive
                            ? 'text-secondary-dark border-b-2 border-secondary-dark'
                            : 'text-gray-800 hover:text-secondary-dark'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <span
            className={`flex items-center text-sm ${
              isTransparent ? 'text-white' : 'text-gray-800'
            }`}
          >
            |
          </span>

          {/* Language dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLangOpen(v => !v)}
              className={`flex items-center gap-1 text-sm ${
                isTransparent ? 'text-white' : 'text-gray-800'
              }`}
            >
              <LanguageIcon fontSize="small" />
              {language.toUpperCase()}
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-md">
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => {
                      onLanguageChange(l.code);
                      setIsLangOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-gray-100 ${
                      language === l.code
                        ? 'font-semibold text-secondary-dark'
                        : 'text-gray-700'
                    }`}
                  >
                    {l.label}
                    <img src={l.icon} alt={l.label} className="h-4 w-4" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mega Menu (single, stable hover zone) */}
      {activeMega &&
        createPortal(
          <div
            className="fixed left-0 right-0 top-16 z-40 px-4"
            onMouseLeave={() => setActiveMega(null)}
          >
            <MegaMenu sections={megaMenuData[activeMega].sections} />
          </div>,
          document.body,
        )}
    </>
  );
};

export default DesktopNav;
