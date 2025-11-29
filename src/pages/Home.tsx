import { CarouselWithThumbs } from '@/components/carousel/CarouselWithThumbs';
import { slides } from '@/components/data/slides';

import AboutSection from '@/components/home/section-top/AboutSection';
import '@/assets/css/Home.css';
import MountainDivider from '@/components/divider/MountainDivider';
import TopDestination from '@/components/home/top-destination/TopDestination';
import ActivitySection from '@/components/home/activity-section/ActivitySection';
import AchievementBanner from '@/components/home/achievement-banner/AchievementBanner';
import ExploreSection from '@/components/home/explore-section/ExploreSection';

const Home = () => {
  return (
    <>
      <div className="relative">
        <CarouselWithThumbs slides={slides} />
        <MountainDivider />
      </div>
      <AboutSection />
      <TopDestination />
      <ActivitySection />
      <AchievementBanner />
      <ExploreSection />
    </>
  );
};

export default Home;
