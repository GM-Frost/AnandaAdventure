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
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 sm:gap-6 transition-transform duration-300">
          {visibleDestinations.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
        {filteredDestinations.length > destinationItems && (
          <>
            <button
              onClick={prevDestination}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-1 sm:p-2 z-10 hover:bg-gray-100"
              aria-label="Previous Destination"
            >
              <ChevronLeftIcon className="text-gray-700 text-lg sm:text-xl" />
            </button>
            <button
              onClick={nextDestination}
              className="absolute -right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-1 sm:p-2 z-30 hover:bg-gray-100"
              aria-label="Next Destination"
            >
              <ChevronRightIcon className="text-gray-700 text-lg sm:text-xl" />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

const DestinationCard = ({ destination }: { destination: destinations }) => {
  const [mainIdx, setMainIdx] = useState(0);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all starting:opacity-0 starting:translate-y-60 duration-1000">
      <div className="relative pb-[100%] overflow-hidden">
        <img
          src={destination.images[0]}
          alt={destination.title}
          className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 sm:hover:scale-110 transition-transform duration-300"
        />
        {destination.isNew && (
          <span className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
            NEW
          </span>
        )}
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="font-semibold text-base sm:text-lg mb-1">
          {destination.title}
        </h3>
        <div className="flex items-center mb-1 sm:mb-2">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`w-3 h-3 ${
                i < destination.reviews ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill="currentColor"
            />
          ))}
          <span className="text-gray-600 text-xs ml-1">
            ({destination.reviewScore})
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            {destination.priceFrom && (
              <span className="text-gray-400  mr-1 sm:mr-2 text-xs sm:text-sm">
                From ${destination.priceFrom.toFixed(0)}+
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestinationSlider;
