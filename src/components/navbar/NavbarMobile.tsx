import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavbarMobile = ({ menuItems, menuOpen, setMenuOpen }) => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const location = useLocation();
  const menuRef = useRef(null);

  const toggleDropdown = name => {
    setOpenDropdowns(prev => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // Reset dropdowns on menu close
  useEffect(() => {
    if (!menuOpen) setOpenDropdowns({});
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <div
      ref={menuRef}
      className={`
        absolute top-16 left-0 w-full bg-white shadow-md md:hidden
        transition-all duration-200
        ${menuOpen ? 'block' : 'hidden'}
      `}
    >
      <div className="flex flex-col px-4 py-2">
        {menuItems.map(item => {
          const hasChildren = !!item.children;
          const isDropdownOpen = openDropdowns[item.name];
          return (
            <div key={item.name}>
              <div className="flex items-center">
                <Link
                  to={item.to}
                  className={`
                    flex-1 py-2 text-base border-b last:border-none
                    ${location.pathname === item.to ? 'text-primary font-bold' : 'text-gray-700'}
                  `}
                  onClick={e => {
                    if (hasChildren) {
                      e.preventDefault();
                      toggleDropdown(item.name);
                    } else {
                      setMenuOpen(false);
                    }
                  }}
                >
                  {item.name}
                </Link>
                {hasChildren && (
                  <button
                    className="ml-2 p-1 focus:outline-none"
                    onClick={() => toggleDropdown(item.name)}
                    aria-label={
                      isDropdownOpen ? 'Collapse submenu' : 'Expand submenu'
                    }
                    tabIndex={0}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-90' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
              </div>
              {hasChildren && isDropdownOpen && (
                <div className="ml-4">
                  {item.children.map(child => (
                    <Link
                      key={child.name}
                      to={child.to}
                      className="block py-1 text-sm text-gray-600 hover:text-primary"
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavbarMobile;
