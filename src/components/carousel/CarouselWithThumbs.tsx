import React, { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import {
  Navigation,
  Autoplay,
  Thumbs,
  EffectCoverflow,
  FreeMode,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "@/assets/css/Carousel.css";

import type { Slide } from "@/components/types/Slide";

import "swiper/css/effect-fade";

type Props = {
  slides: Slide[];
};
import { motion, Variants, AnimatePresence } from "framer-motion";

const textVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.9, ease: "easeOut" },
  },
};

const slideAnim = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
};

export const CarouselWithThumbs: React.FC<Props> = ({ slides }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [current, setCurrent] = useState(0);

  const handleNext = useCallback(() => {
    const nextIdx = (current + 1) % slides.length;
    setCurrent(nextIdx);
    if (thumbsSwiper) thumbsSwiper.slideNext(500);
  }, [current, slides.length, thumbsSwiper]);

  const handlePrev = useCallback(() => {
    const prevIdx = (current - 1 + slides.length) % slides.length;
    setCurrent(prevIdx);
    if (thumbsSwiper) thumbsSwiper.slidePrev(500);
  }, [current, slides.length, thumbsSwiper]);

  // Autoplay every 5s
  useEffect(() => {
    if (!thumbsSwiper) return;
    thumbsSwiper.slideNext(500);
  }, [current, thumbsSwiper]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div className="carousel-container bg-black">
      {/* ——— Progress bar ——— */}
      <div className="progress-track absolute top-0 left-0 w-full h-1 bg-white/20 z-20">
        <motion.div
          key={current} // remounts on slide change
          className="h-full bg-yellow-400"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 4, ease: "linear" }}
        />
      </div>
      {/* --- Main carousel, purely Framer Motion --- */}
      <div className="main-slider relative w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            className="main-slide relative"
            style={{ backgroundImage: `url(${slides[current].imageUrl})` }}
            variants={slideAnim}
            initial="initial"
            animate="animate"
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.7, bounce: 0 },
            }}
          >
            {/* <-- overlay: inset-0 covers the full area, bg-black with Opacity */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />

            {/* bring your text above the overlay */}
            <div className="main-slide-text relative z-10">
              <h2>{slides[current].title}</h2>
              {slides[current].subtitle && <p>{slides[current].subtitle}</p>}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- Thumbnails + progress + counter --- */}
      <div className="thumbs-nav-container">
        {/* 1) the Swiper strip */}
        <Swiper
          modules={[FreeMode]}
          className="thumbs-swiper"
          onSwiper={setThumbsSwiper}
          spaceBetween={15}
          slidesPerView={5}
          allowTouchMove={false}
          loop={true}
          centeredSlides={false}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={slide.id} onClick={() => setCurrent(idx)}>
              <div className="thumb-wrapper">
                <div
                  className="thumb-slide"
                  style={{ backgroundImage: `url(${slide.imageUrl})` }}
                />
                <div className="thumb-slide-text">
                  <h4>{slide.title}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 2) arrows + progress + counter */}
        <div className="thumb-contents z-10">
          <div className="nav-buttons">
            <button
              onClick={handlePrev}
              aria-label="Prev"
              className="swiper-button-prev"
            />
            <button
              onClick={handleNext}
              aria-label="Next"
              className="swiper-button-next"
            />
          </div>
          <div className="progress-bar">
            <div className="flex-1 h-[2px] bg-white/10 rounded overflow-hidden">
              <div
                className="h-full bg-yellow-400 transition-all duration-300"
                style={{
                  width: `${(current / slides.length) * 100}%`,
                }}
              />
            </div>
          </div>
          <div className="slide-counter text-white font-bold text-4xl flex-shrink-0">
            {String(current + 1).padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
};
