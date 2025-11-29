import React from 'react';
import { Button } from '@mui/material';

import {
  HikingIcon,
  VolunteerActivismIcon,
  TwoWheelerIcon,
  LandscapeIcon,
} from '@components/icons';

import { TourGuide } from '@/assets/logo/images';

const achievements = [
  {
    icon: <HikingIcon fontSize="large" />,
    count: '10k+',
    label: 'Happy Travellers',
  },

  {
    icon: <VolunteerActivismIcon fontSize="large" />,
    count: '98%',
    label: 'Positive Reviews',
  },
  {
    icon: <TourGuide className="w-9 h-9 fill-current" />,
    count: '200+',
    label: 'Tours Completed',
  },
  {
    icon: <TwoWheelerIcon fontSize="large" />,
    count: '30+',
    label: 'Destinations Covered',
  },
];

export const AchievementBanner = () => {
  return (
    <div className="relative w-full">
      {/* Banner */}
      <div
        className="w-full h-75 bg-primary-dark text-white
          flex flex-col md:flex-row items-center md:justify-between
          px-8 md:px-12 py-12 gap-8"
      >
        <div className="flex flex-row gap-6 items-start md:items-center">
          <LandscapeIcon className="text-5xl md:text-6xl" />

          <div className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading leading-snug">
              I'm Ready to Explore and <br /> Enjoy The Beauty of Nature.
            </h2>

            <p className="text-xs sm:text-sm md:text-base max-w-xs">
              Decide on the destination that offers the type of experience
              you're seeking
            </p>
          </div>
        </div>

        <Button
          variant="contained"
          className="bg-white text-primary-dark font-bold rounded-xl
            shadow-md shadow-black/20 px-6 py-3 w-50 sm:w-auto"
        >
          Book Now
        </Button>
      </div>

      <div className="relative w-full flex justify-center">
        <div className="grid grid-cols-4 gap-2 w-full max-w-4xl px-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-4 -mt-10 sm:-mt-12 z-10">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-1 sm:p-3 flex flex-col items-center border border-gray-200 border-dotted"
            >
              <span className="text-primary-dark text-lg sm:text-4xl">
                {item.icon}
              </span>
              <p className="text-xs font-bold text-secondary pb-1 sm:text-2xl sm:pb-2">
                {item.count}
              </p>
              <p className="text-[10px] font-bold sm:text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementBanner;
