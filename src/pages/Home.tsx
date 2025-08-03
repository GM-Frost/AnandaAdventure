import { CarouselWithThumbs } from '@/components/carousel/CarouselWithThumbs';
import { slides } from '@/components/data/slides';

import AboutSection from '../components/home/section-top/AboutSection';
import '@/assets/css/Home.css';

const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      <AboutSection />
      <CarouselWithThumbs slides={slides} />
    </div>
  );
};

export default Home;
