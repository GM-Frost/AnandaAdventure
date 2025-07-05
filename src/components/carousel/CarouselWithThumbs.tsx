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
  const [thumbCurrentSlide, setThumbCurrentSlide] = useState(current + 1);
  const total = slides.length;

  const handleNext = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!thumbsSwiper) return;
    const upcoming = (current + 1) % slides.length;
    // 600ms animation to slide the strip
    thumbsSwiper.slideToLoop(upcoming, 600);
  }, [current, thumbsSwiper, slides.length]);

  useEffect(() => {
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div className="main-carousel relative h-[70vh] w-full overflow-hidden bg-black">
      {/* ——— Progress bar ——— */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20 z-20">
        <motion.div
          key={current}
          className="h-full bg-amber-400"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 4, ease: "linear" }}
        />
      </div>
      {/* --- Main carousel, purely Framer Motion --- */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            className="relative w-full h-full bg-cover bg-center"
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
            <div className="absolute inset-0 bg-black/40" />
            {/* bring your text above the overlay */}
            <div className="relative z-10 top-1/2 left-5 max-w-[40%] transform -translate-y-1/2 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                {slides[current].title}
              </h2>
              {slides[current].subtitle && (
                <p className="mt-2 text-base sm:text-lg md:text-xl">
                  {slides[current].subtitle}
                </p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- Thumbnails + progress + counter --- */}
      <div className="thumbs-container absolute inset-x-0 bottom-[2%] w-full flex py-2 flex-col items-end">
        <div className="thumb-slider basis-[80%] w-1/2 items-center justify-end">
          <Swiper
            className="thumb-slider-img overflow-visible"
            modules={[FreeMode]}
            onSwiper={setThumbsSwiper}
            spaceBetween={15}
            slidesPerView={6}
            loop={true}
            allowTouchMove={false}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={slide.id} onClick={() => setCurrent(idx)}>
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="thumb-image w-full h-full object-cover rounded-sm"
                />
                <div className="thumb-image-text">
                  <h4>{slide.title}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="thumb-footer-content flex w-full items-center justify-end p-4 flex-grow">
          <div className="thumb-contents flex w-full max-w-xl items-center justify-between z-10">
            {/* ——— Navigation Buttons ——— */}
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
            {/* Progress Bar */}
            <div className="slide-progress-container flex-grow mx-4 max-w-lg">
              <div className="relative h-[2px] bg-gray-300 rounded overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-amber-400 rounded  transition-all duration-600"
                  style={{ width: `${((current + 1) / total) * 100}%` }}
                />
              </div>
            </div>

            {/* Slide Counter */}
            <div className="slide-counter text-white font-bold text-4xl flex-shrink-0">
              {String(current + 1).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
