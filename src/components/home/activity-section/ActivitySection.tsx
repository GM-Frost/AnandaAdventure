import React from 'react';

import ActivityItem from '@/components/home/activity-section/ActivityItems';
import {
  CabinIcon,
  KayakingIcon,
  ParaglidingIcon,
  MapOutlinedIcon,
  SpaOutlinedIcon,
  CallMadeOutlinedIcon,
  TwoWheelerIcon,
} from '@/components/icons';
import { RockClimb, ZipLine } from '@/assets/logo/images';
import { ActivityBanner, AroundTheWorld } from '@/assets/images/images';

const activities = [
  { icon: <CabinIcon fontSize="large" />, label: 'Cabin/Camping' },
  {
    icon: <RockClimb className="w-12 h-12 fill-current" />,
    label: 'Rock Climbing',
  },
  { icon: <KayakingIcon fontSize="large" />, label: 'Rafting' },
  { icon: <ParaglidingIcon fontSize="large" />, label: 'Paragliding' },
  { icon: <ZipLine className="w-12 h-12 fill-current" />, label: 'Zipling' },
  { icon: <TwoWheelerIcon fontSize="large" />, label: 'Enfield Tours' },
];

const ActivitySection = () => {
  return (
    <div className="relative mx-auto w-full py-16">
      <div className="relative flex flex-col items-center z-10">
        <div className="flex flex-col items-center text-center w-full px-4 py-5">
          <h2 className="text-4xl md:text-5xl uppercase font-heading text-gray-400">
            Activities
          </h2>
          {/* Responsive Activities Grid */}
          <div
            className="
            grid
            gap-4
            text-sm
            md:text-md
            justify-center
            w-full
            mt-10
            px-4
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-3
            xl:grid-cols-6
            max-w-5xl
            mx-auto
            "
          >
            {activities.map((activity, index) => (
              <ActivityItem
                key={index}
                icon={activity.icon}
                label={activity.label}
              />
            ))}
          </div>
          <div className="relative w-full flex justify-center mt-10 mx-auto max-w-6xl">
            <div
              className="relative rounded-2xl bg-cover bg-center text-white px-6 py-10 md:px-16 md:py-14"
              style={{ backgroundImage: `url(${ActivityBanner})` }}
            >
              <div className="hidden md:block absolute left-[-60px] top-[52%] -translate-y-1/2 w-56 h-84 rounded-xl overflow-hidden shadow-xl">
                <img
                  src={AroundTheWorld}
                  alt="Adventure"
                  className="w-full h-full object-cover"
                  style={{
                    boxShadow: '0 10px 40px 0 rgba(0,0,0,0.15)',
                  }}
                />
              </div>
              <div className="flex flex-col gap-6 md:ml-32">
                <h1 className="font-extrabold text-xl md:text-3xl leading-snug max-w-3xl text-shadow-md/20">
                  Live Your Adventure with Ananda Adventure &amp; Explore your
                  Dream Destinations.
                </h1>
                <div className="flex flex-col sm:flex-row gap-4 text-sm opacity-90 items-center text-center sm:items-start sm:text-left md:gap-10">
                  <div className="flex items-center justify-center">
                    <MapOutlinedIcon fontSize="medium" />
                    <span className="ml-2 font-light">
                      Experience the True Adventure
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <SpaOutlinedIcon fontSize="medium" />
                    <span className="ml-2 font-light">
                      Comfort and Peace of Mind
                    </span>
                  </div>
                </div>
                <hr className="w-full border-gray-50/40" />
                <div className="flex items-center gap-5">
                  <button className="group items-center gap-4 rounded-full bg-white/10 px-6 py-4 font-semibold hover:bg-white/20 transition cursor-pointer hidden md:inline-flex">
                    <CallMadeOutlinedIcon className="transition group-hover:translate-x-1" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitySection;
