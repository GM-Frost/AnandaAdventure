import React, { useEffect, useState } from 'react';

const destinations = [
  {
    name: 'Eastern Nepal',
    tours: 3,
    img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600',
  },
  {
    name: 'Mid Nepal',
    tours: 7,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600',
  },
  {
    name: 'Western Nepal',
    tours: 9,
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600',
  },
  {
    name: 'Bhutan',
    tours: 4,
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600',
  },
  {
    name: 'India',
    tours: 3,
    img: 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0?w=600',
  },
  {
    name: 'Singapore',
    tours: 3,
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600',
  },
  {
    name: 'Hongkong',
    tours: 4,
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600',
  },
  {
    name: 'Sri Lanka',
    tours: 3,
    img: 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0?w=600',
  },
  {
    name: 'Thailand',
    tours: 5,
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600',
  },
];

const ChevronLeftIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const ArrowRightAltIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>(
    'desktop',
  );

  useEffect(() => {
    function onResize() {
      if (window.innerWidth < 640) {
        setBreakpoint('mobile');
      } else if (window.innerWidth < 1024) {
        setBreakpoint('tablet');
      } else {
        setBreakpoint('desktop');
      }
    }
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return breakpoint;
}

const ExploreSection = () => {
  const breakpoint = useBreakpoint();
  const pageSize =
    breakpoint === 'mobile' ? 1 : breakpoint === 'tablet' ? 4 : 6;
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(destinations.length / pageSize);

  useEffect(() => {
    setPage(0);
  }, [pageSize]);

  const pagedDestinations = destinations.slice(
    page * pageSize,
    (page + 1) * pageSize,
  );

  // Fill empty slots to maintain consistent grid height
  const filledDestinations = [...pagedDestinations];
  while (filledDestinations.length < pageSize) {
    filledDestinations.push(null);
  }

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <div className="flex items-center justify-center mb-6">
        <h2 className="text-accent uppercase font-subheading text-sm tracking-wide">
          Explore More
        </h2>
      </div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-extras text-center flex-1 text-shadow-md/10">
          Top{' '}
          <span className="text-secondary-dark font-subheading">
            Destinations
          </span>{' '}
          To Explore
        </h2>
        {pageCount > 1 && breakpoint !== 'mobile' && (
          <div className="flex gap-2 ml-4">
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className={`rounded-full cursor-pointer p-1 border border-gray-400 ${page === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-100 hover:border-secondary-dark hover:text-secondary-dark'}`}
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={() => setPage(p => Math.min(pageCount - 1, p + 1))}
              disabled={page === pageCount - 1}
              className={`rounded-full cursor-pointer p-1 border text-gray-400 border-gray-400 ${page === pageCount - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-100 hover:border-secondary-dark hover:text-secondary-dark'}`}
            >
              <ChevronRightIcon />
            </button>
          </div>
        )}
      </div>

      {/* Fixed height container to prevent layout shift */}
      <div
        className="relative"
        style={{
          minHeight:
            breakpoint === 'mobile'
              ? '380px'
              : breakpoint === 'tablet'
                ? '580px'
                : '580px',
        }}
      >
        <div
          className={
            breakpoint === 'mobile'
              ? 'grid grid-cols-1 gap-6'
              : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
          }
        >
          {filledDestinations.map((dest, i) =>
            dest ? (
              <div key={i} className="overflow-hidden relative">
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={dest.img}
                    alt={dest.name}
                    className="h-64 w-full object-cover rounded-lg"
                  />

                  {/* TOURS BADGE */}
                  <span className="absolute top-3 right-3 bg-secondary-dark text-white text-xs font-bold px-3 py-1 rounded-md shadow">
                    {dest.tours} TOURS
                  </span>

                  <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 w-[85%]">
                    <div className="flex h-8 w-full rounded-t-xl overflow-hidden">
                      <div className="flex-1 bg-secondary-dark text-white flex items-center pl-4 pr-2 font-semibold text-sm h-full whitespace-nowrap overflow-hidden text-ellipsis">
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

                    <div className="bg-white px-4 py-3 rounded-b-xl shadow-md flex items-center justify-between hover:shadow-lg transition-shadow duration-200">
                      <span className="text-xs font-bold text-gray-700">
                        View all tours
                      </span>

                      <ArrowRightAltIcon className="text-orange-600 bg-gray-100 rounded-full p-1" />
                    </div>
                  </div>
                </div>
                <div className="h-14"></div>
              </div>
            ) : (
              <div key={`empty-${i}`} className="invisible h-0" />
            ),
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {pageCount > 1 && breakpoint === 'mobile' && (
        <div className="flex justify-center items-center gap-3 mt-6">
          <button
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            className={`rounded-full p-1 border ${
              page === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
          >
            <ChevronLeftIcon />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: pageCount }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === page ? 'w-8 bg-orange-600' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage(p => Math.min(pageCount - 1, p + 1))}
            disabled={page === pageCount - 1}
            className={`rounded-full p-1 border ${
              page === pageCount - 1
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:bg-gray-100'
            }`}
          >
            <ChevronRightIcon />
          </button>
        </div>
      )}
    </section>
  );
};

export default ExploreSection;
