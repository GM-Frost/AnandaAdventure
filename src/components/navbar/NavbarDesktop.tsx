import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavbarDesktop = ({ menuItems, scrolled, logoImg }) => {
  const location = useLocation();

  return (
    <div className="hidden md:flex gap-6 items-center">
      {menuItems.map(item => {
        const isActive = location.pathname === item.to;
        const hasChildren = !!item.children;
        return (
          <div key={item.name} className="relative group">
            <Link
              to={item.to}
              className={`
                px-2 py-1 font-medium transition-colors border-b-2
                ${
                  isActive
                    ? scrolled
                      ? 'text-primary border-primary'
                      : 'text-white border-white'
                    : scrolled
                      ? 'text-gray-900 hover:text-primary border-transparent'
                      : 'text-white hover:text-secondary border-transparent'
                }
                ${hasChildren ? 'cursor-pointer' : ''}
              `}
            >
              {item.name}
            </Link>
            {hasChildren && (
              <div
                className={`
                  absolute left-0 top-full min-w-[180px] rounded-xl bg-white shadow-xl
                  opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto
                  transition-all duration-200 z-50
                `}
              >
                <ul className="py-2">
                  {item.children.map(child => (
                    <li key={child.name}>
                      <Link
                        to={child.to}
                        className={`
                          block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary
                          whitespace-nowrap text-sm
                        `}
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NavbarDesktop;
