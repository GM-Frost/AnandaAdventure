import React from 'react';
import { Button } from '@mui/material';

import {
  HikingIcon,
  VolunteerActivismIcon,
  TwoWheelerIcon,
  LandscapeIcon,
} from '@components/icons';

import { TourGuide } from '@/assets/logo/images';
import { exploreDivider } from '@/assets/images/images';

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
    <>
      <section className="relative">
        {/* Top torn divider */}
        <img
          src={exploreDivider}
          alt=""
          style={{
            filter:
              'drop-shadow(0 -5px 6px rgba(0, 0, 0, 0.25)) drop-shadow(0 5px 6px rgba(0, 0, 0, 0.25))',
          }}
          className="hidden md:block absolute top-2 left-0 w-full -translate-y-1/2 pointer-events-none"
        />

        {/* Banner */}
        <div
          className="
          bg-primary-dark text-white
          px-6 md:px-12
          pt-14 pb-32
          md:h-[340px]
          flex flex-col md:flex-row
          md:items-center md:justify-evenly
          gap-10
        "
        >
          {/* Left content */}
          <div className="flex gap-5 items-start max-w-xl">
            <LandscapeIcon className="text-4xl md:text-6xl shrink-0" />

            <div>
              <h2 className="text-2xl md:text-3xl font-heading leading-snug text-shadow-md">
                I'm Ready to Explore and <br /> Enjoy The Beauty of Nature.
              </h2>

              <p className="mt-3 text-sm md:text-base max-w-md text-shadow-md">
                Decide on the destination that offers the type of experience
                you're seeking
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="md:self-start md:pt-6">
            <Button
              variant="contained"
              disableElevation
              className="
    bg-white !text-primary-dark font-bold
    rounded-xl px-8 py-3
    shadow-lg whitespace-nowrap
  "
            >
              BOOK NOW
            </Button>
          </div>
        </div>

        {/* Bottom torn divider */}
        <img
          style={{
            filter:
              'drop-shadow(0 -5px 6px rgba(0, 0, 0, 0.25)) drop-shadow(0 5px 6px rgba(0, 0, 0, 0.25))',
          }}
          src={exploreDivider}
          alt=""
          className="
          hidden md:block
    absolute -bottom-2 left-0 w-full
    translate-y-1/2
    pointer-events-none z-20
  "
        />
      </section>
      {/* Achievement cards */}
      <div className="relative -mt-24 md:-mt-20 z-30">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white rounded-2xl
                  shadow-xl
                  px-6 py-6
                  flex flex-col items-center text-center
                "
              >
                <span className="text-primary-dark text-3xl mb-3">
                  {item.icon}
                </span>

                <p className="text-xl font-bold text-secondary">{item.count}</p>

                <p className="text-sm font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AchievementBanner;
