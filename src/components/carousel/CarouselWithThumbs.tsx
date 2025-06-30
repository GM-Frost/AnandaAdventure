import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import {
  Navigation,
  Autoplay,
  Thumbs,
  EffectCoverflow,
  FreeMode,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/thumbs";
import "@/assets/css/Carousel.css";

import type { Slide } from "@/components/types/Slide";

type Props = {
  slides: Slide[];
};

export const CarouselWithThumbs: React.FC<Props> = ({ slides }) => {
  // holds the thumbnail swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className="carousel-container">
      {/* Main carousel */}
      <Swiper
        modules={[Navigation, Autoplay, Thumbs]}
        className="main-swiper"
        loop
        speed={1000}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="main-slide"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className="main-slide-text">
                <h2>{slide.title}</h2>
                {slide.subtitle && <p>{slide.subtitle}</p>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails carousel */}
      <Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs-swiper"
        onSwiper={setThumbsSwiper}
        spaceBetween={15}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={`thumb-${slide.id}`}>
            <div
              className="thumb-slide"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className="thumb-slide-text">
                <h4>{slide.title}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
