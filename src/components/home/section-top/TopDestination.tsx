import {
  doodleImg1,
  doodleImg2,
  doodleImg3,
  trekImg,
} from '@/assets/images/images';
import { useEffect, useRef, useState } from 'react';
import { TabsWithScrollButtons } from '@/components/sliders/TabsWithScrollButtons';

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

const TopDestination = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  // Check if we need to show scroll buttons
  const updateButtons = () => {
    const el = scrollRef.current;
    if (el) {
      setShowLeft(el.scrollLeft > 0);
      setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2); // -2 for rounding
    }
  };

  useEffect(() => {
    updateButtons();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);
    return () => {
      el.removeEventListener('scroll', updateButtons);
      window.removeEventListener('resize', updateButtons);
    };
  }, []);

  const scrollBy = (delta: number) => {
    scrollRef.current?.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <div className="relative mx-auto w-full h-[500px]">
      {/* Background image with opacity overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${doodleImg2})` }}
      >
        <div className="absolute inset-0 bg-orange-50/90" />{' '}
        {/* opacity overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 items-center justify-center h-full flex flex-col gap-2">
        <h2 className="text-secondary-light text-xl sm:text-2xl md:text-3xl font-bold font-extras">
          Top Destinations
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
          Our Handpicked{' '}
          <span className="text-primary font-heading">Top Tours</span> packages
        </p>

        <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center">
          {/* Pills Tabs - responsive, horizontal scrollable */}
          <TabsWithScrollButtons
            tabs={tabs}
            activeIdx={activeIdx}
            setActiveIdx={setActiveIdx}
          />

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow p-4 sm:p-6 min-h-[180px] sm:min-h-[220px] md:min-h-[260px] w-full">
            {tabs[activeIdx]?.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestination;
