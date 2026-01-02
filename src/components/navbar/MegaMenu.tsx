import { NavLink } from 'react-router-dom';

type Section = {
  title: string;
  items: { label: string; path: string }[];
};

type Props = {
  sections: Section[];
};

const MegaMenu = ({ sections }: Props) => {
  return (
    <div className="bg-white border-t border-secondary-light shadow-lg rounded-b-md">
      <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-3 gap-8">
        {sections.map(section => (
          <div key={section.title}>
            <h4 className="mb-3 font-semibold text-gray-900">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.items.map(item => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className="text-sm text-gray-700 hover:text-secondary-dark"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
