import {
  ArrowRightAltIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@/components/icons';
import React, { useEffect, useState } from 'react';

const destinations = [
  {
    name: 'Eastern Nepal',
    tours: 3,
    img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
  },
  {
    name: 'Mid Nepal',
    tours: 7,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  },
  {
    name: 'Western Nepal',
    tours: 9,
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
  },
  {
    name: 'Bhutan',
    tours: 4,
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  },
  {
    name: 'India',
    tours: 3,
    img: 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0',
  },
  {
    name: 'Singapore',
    tours: 3,
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
  },
  {
    name: 'Hongkong',
    tours: 4,
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  },
  {
    name: 'Sri Lanka',
    tours: 3,
    img: 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0',
  },
  {
    name: 'Singapore',
    tours: 3,
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
  },
];

const pageSize = 6;

function useBreakpoint() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth < 640);
    }
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return isMobile;
}

const ExploreSection = () => {
  const isMobile = useBreakpoint();
  const pageSize = isMobile ? 1 : 6;
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(destinations.length / pageSize);

  useEffect(() => {
    setPage(0);
  }, [pageSize]);

  const pagedDestinations = destinations.slice(
    page * pageSize,
    (page + 1) * pageSize,
  );

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <div className="flex items-center justify-center mb-6">
        <h2 className="text-accent uppercase font-subheading text-md">
          Explore More
        </h2>
      </div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-extras text-center flex-1">
          Top{' '}
          <span className="text-secondary-dark font-subheading">
            Destinations
          </span>{' '}
          To Explore
        </h2>
        {pageCount > 1 && (
          <div className="flex gap-2 ml-4">
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className={`rounded-full cursor-pointer p-1 border ${page === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={() => setPage(p => Math.min(pageCount - 1, p + 1))}
              disabled={page === pageCount - 1}
              className={`rounded-full cursor-pointer p-1 border ${page === pageCount - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            >
              <ChevronRightIcon />
            </button>
          </div>
        )}
      </div>

      <div
        className={
          isMobile
            ? 'grid grid-cols-1 gap-6'
            : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
        }
      >
        {pagedDestinations.map((dest, i) => (
          <div key={i} className="overflow-hidden relative">
            {/* IMAGE */}
            <div className="relative">
              <img
                src={dest.img}
                alt={dest.name}
                className="h-48 w-full object-cover"
              />

              {/* TOURS BADGE */}
              <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-extras px-3 py-1 rounded-md shadow">
                {dest.tours} TOURS
              </span>

              <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 w-[85%]">
                <div className="flex h-8 w-full rounded-t-xl overflow-hidden">
                  <div className="flex-1 bg-secondary-dark text-white flex items-center pl-4 pr-2 font-heading text-sm h-full whitespace-nowrap overflow-hidden text-ellipsis">
                    {dest.name}
                  </div>

                  <div
                    className="w-16 h-full -ml-6 flex-shrink-0"
                    style={{
                      background: 'white',
                      clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 0 100%)',
                    }}
                  />
                </div>

                <div className="bg-white px-4 py-3 rounded-b-xl shadow-md flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-700">
                    View all tours
                  </span>

                  <ArrowRightAltIcon className="text-primary bg-gray-100 rounded-full p-1" />
                </div>
              </div>
            </div>
            <div className="h-14"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreSection;
