import React from 'react';

import ActivityItem from '@/components/home/activity-section/ActivityItems';
import CabinIcon from '@mui/icons-material/Cabin';
import HikingIcon from '@mui/icons-material/Hiking';
import KayakingIcon from '@mui/icons-material/Kayaking';
import ParaglidingIcon from '@mui/icons-material/Paragliding';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import { RockClimb, ZipLine } from '../../../assets/logo/images';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import { ActivityBanner, AroundTheWorld } from '../../../assets/images/images';

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
    <div className="relative mx-auto w-full min-h-[500px] max-h-max pb-15">
      <div className="relative flex flex-col items-center z-10">
        <div className="flex flex-col items-center text-center w-full px-4 py-5">
          <span className="text-6xl uppercase font-heading text-gray-400">
            Activities
          </span>
          {/* Responsive Activities Grid */}
          <div
            className="
            activities-tab
            grid
            gap-4
            justify-center
            w-full
            mt-10
            px-4
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-6
            max-w-6xl
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
          <div className="relative w-full flex justify-center mt-10">
            <div
              className="relative bg-primary-dark w-full max-w-6xl rounded-xl flex flex-col md:flex-row items-center md:items-stretch px-4 md:pl-55 py-8 text-white shadow-xl overflow-visible min-h-[360px]"
              style={{
                backgroundImage: `url(${ActivityBanner})`,
                objectFit: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <img
                src={AroundTheWorld}
                alt="Around-the-World"
                className="
                  rounded-lg
                  object-cover
                  w-50 h-60
                  mb-4
                  mx-auto
                  md:mb-5
                  md:w-70 md:h-90
                  md:absolute
                  md:left-0
                  md:bottom-10
                  md:translate-x-[-30%]
                  md:translate-y-[20%]
                  shadow-2xl
                  z-10
                "
                style={{
                  boxShadow: '0 10px 40px 0 rgba(0,0,0,0.15)',
                }}
              />
              <div className="flex-1 flex flex-col justify-center text-center md:text-left items-center md:items-start z-20">
                <h1 className="font-extrabold text-lg md:text-2xl mb-4 md:mb-12">
                  Live Your Adventure with Ananda Adventure &amp; Explore your
                  Dream Destinations.
                </h1>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full md:justify-start mb-4">
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
                <hr className="w-full border-gray-50/40 mb-12" />
                <div className="flex items-center gap-5">
                  <button className="bg-gray-700/30 rounded-full p-5 flex font-bold hover:bg-gray-800/50 transition-colors duration-300 cursor-pointer text-white">
                    <CallMadeOutlinedIcon />
                  </button>
                  <span className="text-lg">Book Now!</span>
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
