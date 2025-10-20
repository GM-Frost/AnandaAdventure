import { CarouselWithThumbs } from '@/components/carousel/CarouselWithThumbs';
import { slides } from '@/components/data/slides';

import AboutSection from '@/components/home/section-top/AboutSection';
import '@/assets/css/Home.css';
import MountainDivider from '@/components/divider/MountainDivider';
import TopDestination from '@/components/home/top-destination/TopDestination';

const Home = () => {
  return (
    <>
      <div className="relative">
        <CarouselWithThumbs slides={slides} />
        <MountainDivider />
      </div>
      <AboutSection />
      <TopDestination />
    </>
  );
};

export default Home;
