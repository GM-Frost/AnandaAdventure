import {
  AdventureSports1,
  AdventureSports2,
  AdventureSports3,
  cultural1,
  cultural2,
  cultural3,
  customTour1,
  customTour2,
  doodleImg1,
  doodleImg2,
  doodleImg3,
  jungleSafari1,
  jungleSafari2,
  jungleSafari3,
  pilgrimage1,
  pilgrimage2,
  pilgrimage3,
  senicFlights1,
  senicFlights2,
  senicFlights3,
  trekImg,
  trekking1,
  trekking2,
  trekking3,
} from '@/assets/images/images';
import { useEffect, useRef, useState } from 'react';
import { TabsWithScrollButtons } from '@/components/sliders/TabsWithScrollButtons';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StarIcon from '@mui/icons-material/Star';

type Tab = {
  label: string;
  content?: React.ReactNode;
};

interface TabsWithPillsProps {
  tabs: Tab[];
}

interface TabsWithScrollButtonsProps {
  tabs: Tab[];
  activeIdx: number;
  setActiveIdx: (idx: number) => void;
  pageSize?: number;
}

const tabs: Tab[] = [
  {
    label: 'City & Cultural Tours',
    content: (
      <p className="text-gray-700">
        Explore vibrant cities and immerse yourself in rich cultural experiences
        with our curated city and cultural tours. Kathmandu Valley Sightseeing
        Bhaktapur Valley Sightseeing Patan Valley Sightseeing Nagarkot
        Sightseeing Pokhara Tours Kathmandu Valley Day Tours Cultural Tours
        Eastern Nepal Tours Shamanic Groups Muktinath Temple Visit
      </p>
    ),
  },
  {
    label: 'Trekking & Adventure',
    content: (
      <p className="text-gray-700">
        Embark on unforgettable trekking and adventure journeys through Nepal's
        breathtaking landscapes. Everest Base Camp Trek Annapurna Circuit Trek
        Langtang Valley Trek Manaslu Circuit Trek Upper Mustang Trek
        Kanchenjunga Base Camp Trek Gokyo Lakes Trek Poon Hill Trek Annapurna
        Base Camp Trek Mardi Himal Trek Ghorepani Poon Hill Trek Dhaulagiri
        Circuit Trek
      </p>
    ),
  },
  {
    label: 'Wildlife & Jungle Safari',
    content: (
      <p className="text-gray-700">
        Experience the thrill of wildlife and jungle safaris in Nepal's diverse
        ecosystems. Chitwan National Park Safari Bardia National Park Safari
        Koshi Tappu Wildlife Reserve Safari Shuklaphanta Wildlife Reserve Safari
        Nagarjun Forest Reserve Safari Phulchoki Hill Jungle Trek
      </p>
    ),
  },
  {
    label: 'Scenic Flights',
    content: (
      <p className="text-gray-700">
        Soar above Nepal's majestic landscapes with our helicopter tours and
        scenic flights. Everest Helicopter Tour Annapurna Helicopter Tour
        Langtang Helicopter Tour Pokhara Helicopter Tour Kathmandu Valley
        Helicopter Tour
      </p>
    ),
  },
  {
    label: 'Adventure Sports & Activities',
    content: (
      <p className="text-gray-700">
        Get your adrenaline pumping with thrilling adventure sports and
        activities in Nepal. White Water Rafting Bungee Jumping Paragliding
        Mountain Biking Rock Climbing Zip Lining Canyoning Skydiving
      </p>
    ),
  },
  {
    label: 'Pilgrimage & Spiritual Tours',
    content: (
      <p className="text-gray-700">
        Discover sacred sites and spiritual journeys with our pilgrimage tours
        in Nepal. Lumbini Pilgrimage Tour Muktinath Pilgrimage Tour
        Pashupatinath Temple Visit Janaki Temple Visit Gosaikunda Pilgrimage
        Tour Kailash-Manasarovar Pilgrimage Tour
      </p>
    ),
  },
  {
    label: 'Custom & Group Tours',
    content: (
      <p className="text-gray-700">
        Tailor your travel experience with our custom and group tour options in
        Nepal. Custom Nepal Tours Group Nepal Tours Family Nepal Tours School
        Nepal Tours Corporate Nepal Tours Volunteer Nepal Tours Photography
        Tours
      </p>
    ),
  },
];

interface destinations {
  id: number;
  category: string;
  images: string[];
  title: string;
  reviews: number;
  reviewScore: number;
  days: number;
  nights: number;
  priceFrom: number;
  desc: string;
  isNew: boolean;
}

const topDestinationItems: destinations[] = [
  {
    id: 1,
    category: 'City & Cultural Tours',
    images: [cultural1],
    title: 'Kathmandu | 5 Days, 4 Nights',
    reviews: 3,
    reviewScore: 4.5,
    days: 5,
    nights: 4,
    priceFrom: 499,
    desc: 'Explore the vibrant culture and rich history of Kathmandu with our 5-day tour package.',
    isNew: true,
  },
  {
    id: 2,
    category: 'Trekking & Adventure',
    images: [trekking1, trekking2, trekking3],
    title: 'Everest Base Camp Trek | 14 Days, 13 Nights',
    reviews: 5,
    reviewScore: 4.8,
    days: 14,
    nights: 13,
    priceFrom: 1499,
    desc: "Embark on an unforgettable journey to the base of the world's highest peak.",
    isNew: true,
  },
  {
    id: 3,
    category: 'Wildlife & Jungle Safari',
    images: [jungleSafari1, jungleSafari2, jungleSafari3],
    title: 'Chitwan National Park Safari | 3 Days, 2 Nights',
    reviews: 4,
    reviewScore: 4.6,
    days: 3,
    nights: 2,
    priceFrom: 299,
    desc: "Experience the thrill of wildlife in the heart of Nepal's premier national park.",
    isNew: false,
  },
  {
    id: 4,
    category: 'Scenic Flights',
    images: [senicFlights1, senicFlights2, senicFlights3],
    title: 'Everest Helicopter Tour | 1 Day',
    reviews: 6,
    reviewScore: 4.9,
    days: 1,
    nights: 0,
    priceFrom: 899,
    desc: 'Soar above the Himalayas and witness breathtaking views of Mount Everest.',
    isNew: true,
  },
  {
    id: 5,
    category: 'Adventure Sports & Activities',
    images: [AdventureSports1, AdventureSports2, AdventureSports3],
    title: 'White Water Rafting | 2 Days, 1 Night',
    reviews: 2,
    reviewScore: 4.4,
    days: 2,
    nights: 1,
    priceFrom: 199,
    desc: 'Get your adrenaline pumping with an exciting white water rafting adventure.',
    isNew: true,
  },
  {
    id: 6,
    category: 'Pilgrimage & Spiritual Tours',
    images: [pilgrimage1, pilgrimage2, pilgrimage3],
    title: 'Lumbini Pilgrimage Tour | 4 Days, 3 Nights',
    reviews: 3,
    reviewScore: 4.7,
    days: 4,
    nights: 3,
    priceFrom: 399,
    desc: 'Visit the birthplace of Lord Buddha and explore sacred sites in Lumbini.',
    isNew: false,
  },
  {
    id: 7,
    category: 'Custom & Group Tours',
    images: [customTour1, customTour2],
    title: 'Custom Nepal Tour | Flexible Duration',
    reviews: 1,
    reviewScore: 4.3,
    days: 10,
    nights: 3,
    priceFrom: 1500,
    desc: 'Design your own Nepal adventure with our customizable tour packages.',
    isNew: true,
  },
  {
    id: 8,
    category: 'City & Cultural Tours',
    images: [cultural2, cultural3],
    title: 'Patan Valley Sightseeing | 2 Days, 1 Night',
    reviews: 2,
    reviewScore: 4.5,
    days: 2,
    nights: 1,
    priceFrom: 299,
    desc: 'Discover the ancient city of Patan and its rich cultural heritage.',
    isNew: false,
  },
  {
    id: 9,
    category: 'Trekking & Adventure',
    images: [trekking2],
    title: 'Annapurna Circuit Trek | 16 Days, 15 Nights',
    reviews: 7,
    reviewScore: 4.9,
    days: 16,
    nights: 15,
    priceFrom: 1599,
    desc: 'Trek through diverse landscapes and experience the beauty of the Annapurna region.',
    isNew: false,
  },
];

const TopDestination = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

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

  useEffect(() => {
    updateDestinationItems();
    window.addEventListener('resize', updateDestinationItems);
    return () => window.removeEventListener('resize', updateDestinationItems);
  }, []);

  const nextDestination = () => {
    setDestinationIndex(prevIndex =>
      prevIndex >= topDestinationItems.length - destinationItems
        ? 0
        : prevIndex + 1,
    );
  };

  const prevDestination = () => {
    setDestinationIndex(prevIndex =>
      prevIndex === 0
        ? topDestinationItems.length - destinationItems
        : prevIndex - 1,
    );
  };

  const visibleDestinations = topDestinationItems.slice(
    destinationIndex,
    destinationIndex + destinationItems,
  );

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
    <div className="relative mx-auto w-full h-[800px]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${doodleImg2})` }}
      >
        <div className="absolute inset-0 bg-orange-50/90" />
      </div>

      {/* Tab bar (responsive) */}
      <div className="absolute left-0 right-0 flex flex-col items-center z-10">
        <div className="top-destination-txt flex flex-col items-center text-center w-full px-4 py-5">
          <h2 className="text-primary font-subheading text-xl sm:text-xl md:text-2xl lg:text-3xl py-2 sm:py-3 md:py-4">
            Top Destinations
          </h2>
          <span className="font-heading font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight">
            Our Handpicked <span className="text-secondary">Tour</span> Packages
          </span>
        </div>

        <div
          className="
            w-full max-w-[90vw]
            md:min-w-[90vw]
            flex items-center
            overflow-x-auto
            scrollbar-hide
            rounded-full
            bg-white/90 shadow-lg
            mt-10 px-2
            gap-2
            sm:w-[80%] sm:justify-between sm:gap-0 sm:overflow-x-visible
            relative
          "
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
        <div className="relative w-full sm:w-[80%] mt-[-40px] pointer-events-none hidden sm:block">
          <div
            style={{
              width: `calc(100% / ${tabs.length})`,
              transform: `translateX(${currentTab * 100}%)`,
            }}
          />
        </div>
        {/* Tab Content */}
        <div className="w-[90vw] sm:w-[80%] max-w-7xl px-4 sm:px-8 py-6 rounded-xl mt-18 overflow-y-auto">
          <section className="relative w-full max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
            <div className="relative overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 sm:gap-6 transition-transform duration-300">
                {visibleDestinations.map(destination => (
                  <DestinationCard
                    key={destination.id}
                    destination={destination}
                  />
                ))}
              </div>
              {topDestinationItems.length > destinationItems && (
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
        </div>
      </div>
    </div>
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

export default TopDestination;
