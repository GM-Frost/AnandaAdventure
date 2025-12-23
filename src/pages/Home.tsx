import { CarouselWithThumbs } from '@/components/carousel/CarouselWithThumbs';
import { slides } from '@/components/data/slides';
import '@/assets/css/Home.css';
import MountainDivider from '@/components/divider/MountainDivider';
import {
  ActivitySection,
  ExploreSection,
  Testimonial,
  TopDestination,
  AchievementBanner,
  AboutSection,
  BlogSection,
} from '@/components/home';
import Footer from '@/components/Footer/Footer';

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
      <Testimonial />
      <BlogSection />
      <Footer />
    </>
  );
};

export default Home;
