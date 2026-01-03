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
    <div className="relative mx-auto w-full py-16">
      {/* Background - Fixed positioning prevents shifting */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${doodleImg2})` }}
      >
        <div className="absolute inset-0 bg-orange-50/90" />
      </div>

      {/* Content Container with fixed min-height */}
      <div className="relative flex flex-col items-center z-10">
        {/* Title Section */}
        <div className="top-destination-txt flex flex-col items-center text-center w-full px-4 py-1 mb-6">
          <h2 className="text-primary font-subheading text-xl sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-1 md:py-2 text-shadow-md/10">
            Top Destinations
          </h2>
          <span className="font-heading font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight text-shadow-md/10">
            Our Handpicked <span className="text-secondary">Tour</span> Packages
          </span>
        </div>

        {/* Tabs */}
        <div
          className="relative w-full max-w-8xl mt-1 mb-2
            flex items-center gap-1
            overflow-x-auto scrollbar-hide
            px-1 py-1
            sm:justify-center
            snap-x snap-mandatory"
          ref={scrollRef}
        >
          {tabs.map((tab, index) => {
            const isActive = index === currentTab;
            return (
              <button
                key={tab.id}
                ref={el => (tabRefs.current[index] = el)}
                onClick={() => setCurrentTab(index)}
                className={`snap-start flex-shrink-0
                  px-5 py-2.5 text-xs sm:text-sm font-semibold
                  whitespace-nowrap rounded-full
                  transition-all duration-200
                  z-10
                  cursor-pointer
                  ${
                    isActive
                      ? 'bg-primary-dark text-white shadow-md scale-95'
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-primary-dark shadow-sm'
                  }
                `}
              >
                {tab.label}
              </button>
            );
          })}
          <span
            className="hidden lg:block absolute top-2 bottom-2 rounded-full transition-all duration-300 z-0"
            style={{
              left: pillStyle.left,
              width: pillStyle.width,
            }}
          />
        </div>
        {/* Tab Content with fixed minimum height to prevent layout shift */}
        <div className="w-full cursor-pointer" style={{ minHeight: '380px' }}>
          <TopDestinationSlider category={tabs[currentTab].label} />
        </div>
        {/* View Tours Button */}
        <button
          className="group flex items-center gap-2 bg-primary-dark text-white px-2 py-2 rounded-lg text-xs sm:text-sm hover:bg-primary transition-all duration-300 font-semibold shadow-md hover:shadow-lg mt-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            /* Add your navigation logic here */
          }}
        >
          <span className="group-hover:translate-x-1 transition-transform duration-300 uppercase cursor-pointer">
            View All Tours
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
