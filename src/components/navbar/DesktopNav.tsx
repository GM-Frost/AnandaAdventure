import { NavLink } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { logoImg } from '@/assets/images/images';
import { navMenuItems as menuItems } from './NavLinks';
import { LanguageCode, languages } from '@components/navbar/Languages';
import { LanguageIcon } from '@components/icons';

type Props = {
  isTransparent: boolean;
  language: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
};

const DesktopNav = ({ isTransparent, language, onLanguageChange }: Props) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
          {menuItems.map(item => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `pb-1 transition ${
                    isTransparent
                      ? isActive
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
          ))}
        </ul>
        <span
          className={`flex items-center gap-1 text-sm ${
            isTransparent ? 'text-white' : 'text-gray-800'
          }`}
        >
          &#124;
        </span>
        {/* Language dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsLangOpen(v => !v)}
            className={`flex items-center gap-1 text-sm ${
              isTransparent ? 'text-white' : 'text-gray-800'
            }`}
            aria-haspopup="menu"
            aria-expanded={isLangOpen}
          >
            <LanguageIcon fontSize="small" />
            {language.toUpperCase()}
          </button>

          {isLangOpen && (
            <div className="absolute right-0 mt-2 w-32 rounded-sm bg-white shadow-md border border-none">
              {languages.map(l => (
                <button
                  key={l.code}
                  onClick={() => {
                    onLanguageChange(l.code);
                    setIsLangOpen(false);
                  }}
                  className={`flex w-full px-4 py-2 text-left rounded-sm border-none text-sm hover:bg-gray-100 items-center justify-around cursor-pointer ${
                    language === l.code
                      ? 'font-semibold text-secondary-dark'
                      : 'text-gray-700'
                  }`}
                >
                  {l.label}
                  <img src={l.icon} alt={l.label} className="ml-2 h-4 w-4" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
