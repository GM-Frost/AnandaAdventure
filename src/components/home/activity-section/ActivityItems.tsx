import React from 'react';

interface ActivityItemsProps {
  icon: React.ReactNode;
  label: string;
}

const ActivityItems: React.FC<ActivityItemsProps> = ({ icon, label }) => {
  return (
    <div className="flex flex-col gap-2 hover:bg-primary-dark hover:border-primary-dark items-center border-2 border-gray-50 shadow-xl  p-2 justify-center text-center rounded-lg font-bold transition-colors duration-300 hover:text-white  cursor-pointer">
      {icon}
      {label}
    </div>
  );
};

export default ActivityItems;
