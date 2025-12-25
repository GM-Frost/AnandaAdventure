import { NavLink } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { CloseIcon, MenuIcon } from '@/components/icons';
import { navMenuItems as menuItems } from '@/components/navbar/NavLinks';
import { logoImg } from '@/assets/images/images';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  backdropVariants,
  drawerVariants,
} from '../../utils/framerMotion/framerMotion';

import { languages, LanguageCode } from '@/components/navbar/Languages';

interface Props {
  isTransparent: boolean;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  language: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
}

const MobileNav = ({
  isTransparent,
  isOpen,
  onClose,
  onOpen,
  language,
  onLanguageChange,
}: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return (
    <div className="md:hidden">
      {/*Top Nav Bar*/}

      <div className="flex h-16 items-center justify-between px-6">
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
        <button
          onClick={onOpen}
          className={`transition ${isTransparent ? 'text-white' : 'text-gray-800'}`}
          aria-label="Open menu"
        >
          <MenuIcon fontSize="large" />
        </button>
      </div>
      {/* Overlay */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-nav-backdrop"
              className="fixed inset-0 z-[999] bg-black/50"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={onClose}
            >
              <motion.div
                key="mobile-nav-drawer"
                className="absolute right-0 top-0 h-screen w-72 bg-white shadow-lg"
                variants={drawerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ ease: 'easeOut', duration: 0.3 }}
                onClick={e => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex flex-col items-center px-6 py-4 border-b border-gray-200 gap-5">
                  <div className="flex w-full justify-end">
                    <button onClick={onClose} aria-label="Close menu">
                      <CloseIcon />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 font-semibold text-lg text-primary-dark">
                    <img src={logoImg} alt="Ananda Adventure" className="h-8" />
                    Ananda Adventure
                  </div>
                </div>

                {/* Menu */}
                <ul className="flex flex-col gap-6 px-6 py-8 text-lg font-medium">
                  {menuItems.map(item => (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        onClick={onClose}
                        className={({ isActive }) =>
                          isActive
                            ? 'text-secondary-dark font-semibold'
                            : 'text-gray-800 hover:text-secondary-dark'
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                {/* Language selector */}
                <div className="px-6 py-4 border-t border-gray-200">
                  <div className="flex gap-2">
                    {languages.map(l => (
                      <button
                        key={l.code}
                        onClick={() => onLanguageChange(l.code)}
                        className={`px-3 py-1 rounded text-sm border cursor-pointer ${
                          language === l.code
                            ? 'bg-accent/20 text-primary-dark border-white'
                            : 'text-gray-700 border-gray-200'
                        }`}
                      >
                        <img src={l.icon} alt={l.label} className="h-4 w-4" />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.getElementById('overlay-root')!,
      )}
    </div>
  );
};

export default MobileNav;
