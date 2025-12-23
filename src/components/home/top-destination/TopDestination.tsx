import { useEffect, useRef, useState } from 'react';
import { topDestinationTabs } from '@/components/data/topDestinations';
import { doodleImg2 } from '@/assets/images/images';
import TopDestinationSlider from './TopDestinationSlider';
import { ChevronRightIcon, DoubleArrowIcon } from '@/components/icons';

const TopDestination = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  const tabs = topDestinationTabs;
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (tabRefs.current[currentTab]) {
      const el = tabRefs.current[currentTab];
      setPillStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [currentTab, tabs.length]);

  return (
    <div className="relative mx-auto w-full min-h-[700px] max-h-max pb-15">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${doodleImg2})` }}
      >
        <div className="absolute inset-0 bg-orange-50/90" />
      </div>
      {/* Tab bar Title*/}
      <div className="relative flex flex-col items-center z-10">
        <div className="top-destination-txt flex flex-col items-center text-center w-full px-4 py-5">
          <h2 className="text-primary font-subheading text-xl sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-3 md:py-4 text-shadow-md/10">
            Top Destinations
          </h2>
          <span className="font-heading font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight text-shadow-md/10">
            Our Handpicked <span className="text-secondary">Tour</span> Packages
          </span>
        </div>
        {/* Tabs */}
        <div
          className=" w-full max-w-7xl flex items-center
    overflow-x-auto
    scrollbar-hide
    rounded-full bg-white/90 shadow-lg
    mt-10 px-2 gap-2
    sm:w-[95%] sm:mx-auto
    sm:justify-between
    relative"
          ref={scrollRef}
        >
          <span
            className="hidden sm:block absolute top-0 h-full bg-primary rounded-full z-0 transition-all duration-300"
            style={{
              left: pillStyle.left,
              width: pillStyle.width,
              pointerEvents: 'none',
            }}
          />
          {tabs.map((tab, index) => (
            <button
              ref={el => (tabRefs.current[index] = el)}
              key={index}
              className={`
      flex-shrink-0 relative py-3 px-4 text-xs sm:text-sm font-semibold transition-colors z-10
      ${
        index === currentTab
          ? 'text-white bg-primary sm:bg-transparent sm:text-white'
          : 'text-gray-800 hover:text-primary-light hover:cursor-pointer bg-transparent'
      }
      rounded-full

    `}
              onClick={() => setCurrentTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Pill indicator (desktop only) */}
        <div className="relative w-full sm:w-[80%] mt-[-20px] pointer-events-none hidden sm:block">
          <div
            style={{
              width: `calc(100% / ${tabs.length})`,
              transform: `translateX(${currentTab * 100}%)`,
            }}
          />
        </div>
        {/* Tab Content */}
        <div className="w-[90vw] sm:w-[80%] max-w-7xl px-4 sm:px-8 py-6 rounded-xl overflow-y-auto">
          <TopDestinationSlider category={tabs[currentTab].label} />
        </div>
        {/* View Tours Button */}
        <button
          className="group flex items-center gap-1 bg-primary text-white px-5 py-2 rounded-md text-xs sm:text-sm hover:bg-primary-dark hover:cursor-pointer transition-colors font-semibold overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            /* Add your navigation logic here */
          }}
        >
          <span className="group-hover:translate-x-1 transition-transform duration-300 uppercase">
            View All Tour
          </span>
          <span
            className={`transform transition-all duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`}
          >
            {isHovered ? (
              <DoubleArrowIcon className="w-4 h-4" />
            ) : (
              <ChevronRightIcon className="w-4 h-4" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default TopDestination;
