import { useEffect, useRef, useState } from 'react';
import {
  destinations,
  topDestinationItems,
} from '@/components/data/topDestinations';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from '@/components/icons';

const TopDestinationSlider = ({ category }: { category: string }) => {
  // for destination carousel
  const [destinationIndex, setDestinationIndex] = useState(0);
  const [destinationItems, setDestinationItems] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const updateDestinationItems = () => {
    if (window.innerWidth >= 1024) {
      setDestinationItems(4);
    } else if (window.innerWidth >= 768) {
      setDestinationItems(3);
    } else if (window.innerWidth >= 640) {
      setDestinationItems(2);
    } else {
      setDestinationItems(1);
    }
  };

  const filteredDestinations = topDestinationItems.filter(
    item => item.category === category,
  );

  useEffect(() => {
    updateDestinationItems();
    window.addEventListener('resize', updateDestinationItems);
    return () => window.removeEventListener('resize', updateDestinationItems);
  }, []);

  const nextDestination = () => {
    setDestinationIndex(prevIndex =>
      prevIndex >= filteredDestinations.length - destinationItems
        ? 0
        : prevIndex + 1,
    );
  };

  const prevDestination = () => {
    setDestinationIndex(prevIndex =>
      prevIndex === 0
        ? filteredDestinations.length - destinationItems
        : prevIndex - 1,
    );
  };

  let visibleDestinations;
  if (filteredDestinations.length <= destinationItems) {
    visibleDestinations = filteredDestinations;
  } else {
    visibleDestinations = filteredDestinations.slice(
      destinationIndex,
      destinationIndex + destinationItems,
    );
  }

  useEffect(() => {
    setDestinationIndex(0);
  }, [category, destinationItems]);

  return (
    <section className="relative w-full max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
      <div className="relative" style={{ minHeight: '380px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {visibleDestinations.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
        {filteredDestinations.length > destinationItems && (
          <>
            <button
              onClick={prevDestination}
              disabled={isTransitioning}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white rounded-full shadow-lg p-2 sm:p-2.5 z-10 hover:bg-gray-50 transition-colors disabled:opacity-50"
              aria-label="Previous Destination"
            >
              <ChevronLeftIcon className="text-gray-700 w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextDestination}
              disabled={isTransitioning}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white rounded-full shadow-lg p-2 sm:p-2.5 z-10 hover:bg-gray-50 transition-colors disabled:opacity-50"
              aria-label="Next Destination"
            >
              <ChevronRightIcon className="text-gray-700 w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

const DestinationCard = ({ destination }: { destination: destinations }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      {/* Fixed aspect ratio image container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={destination.images[0]}
          alt={destination.title}
          className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {destination.isNew && (
          <span className="absolute top-3 right-3 bg-primary-light text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
            NEW
          </span>
        )}
      </div>

      {/* Fixed height content area */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-sm sm:text-base mb-2 line-clamp-2 min-h-[2.5rem]">
            {destination.title}
          </h3>
          <div className="flex items-center mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < destination.reviews
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                />
              ))}
            </div>
            <span className="text-gray-600 text-xs ml-1.5 font-medium">
              ({destination.reviewScore})
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          {destination.priceFrom && (
            <div className="flex flex-col">
              <span className="text-gray-500 text-xs">From</span>
              <span className="text-secondary-light font-bold text-base sm:text-lg">
                ${destination.priceFrom}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopDestinationSlider;
