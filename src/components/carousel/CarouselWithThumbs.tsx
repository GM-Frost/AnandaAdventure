import React, { useEffect, useRef, useState } from 'react';
import type { Swiper as SwiperClass } from 'swiper';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import '@/assets/css/Carousel.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import type { Slide } from '@/components/types/Slide';
import { AnimatePresence, motion, useInView, Variants } from 'framer-motion';
import { tilakImg } from '@/assets/images/images';
import { Button, IconButton } from '@mui/material';
import 'swiper/css/effect-fade';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

type Props = {
  slides: Slide[];
};

const textVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.9,
      ease: 'easeOut',
    },
  },
};

const slideAnim = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
};

const pullupVariant = {
  initial: { y: 20, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const headingVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const flipFromBottomVariant: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: 90, transformOrigin: 'bottom center' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
  exit: { opacity: 0, y: 0, rotateX: 0 },
};

export const CarouselWithThumbs: React.FC<Props> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const thumbSwiperRef = useRef<SwiperClass | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
  });
  const totalSlide = slides.length;

  const handlePrev = () => setCurrent(c => (c - 1 + totalSlide) % totalSlide);
  const handleNext = () => setCurrent(c => (c + 1) % totalSlide);

  useEffect(() => {
    const swiper = thumbSwiperRef.current;
    if (swiper) {
      swiper.slideToLoop(current, 3000);
    }
  }, [current]);
  return (
    <div
      ref={containerRef}
      className="main-carousel relative h-[70vh] w-full overflow-hidden bg-black"
    >
      <AnimatePresence mode="wait">
        {isInView && (
          <motion.div
            key={slides[current].id}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute bottom-20 sm:bottom-24 md:bottom-28 lg:bottom-32 left-4 sm:left-8 lg:left-12 z-30 flex flex-col gap-2 sm:gap-3 lg:gap-5 text-white"
          >
            <motion.div custom={0} variants={flipFromBottomVariant}>
              <img
                src={tilakImg}
                className="min-w-16 sm:min-w-20 h-2 sm:h-3 object-cover"
              />
            </motion.div>

            <motion.div custom={1} variants={flipFromBottomVariant}>
              <h2 className="font-subheading text-lg sm:text-xl lg:text-2xl">
                {slides[current].subtitle}
              </h2>
            </motion.div>

            <motion.div custom={2} variants={flipFromBottomVariant}>
              <h1 className="font-bold text-2xl sm:text-4xl lg:text-6xl 2xl:text-7xl text-white leading-tight">
                {slides[current].title}
              </h1>
            </motion.div>

            <motion.div custom={3} variants={flipFromBottomVariant}>
              <p className="text-sm sm:text-md lg:text-lg max-w-[90vw] sm:max-w-[80vw] md:max-w-[600px]">
                {slides[current].description}
              </p>
            </motion.div>

            <motion.div
              custom={4}
              variants={flipFromBottomVariant}
              className="flex gap-3 sm:gap-5 w-full mt-4 sm:mt-5"
            >
              <IconButton
                aria-label="fingerprint"
                color="info"
                size="large"
                className="bg-secondary-light w-10 h-10 rounded-full" // Tailwind sizing + shape
              >
                <BookmarkAddIcon />
              </IconButton>
              <Button
                variant="outlined"
                className="border-white bg-transparent rounded-2xl border-2 text-xs sm:text-sm md:text-base font-semibold w-32 sm:w-40 md:w-52 hover:bg-secondary-light hover:border-secondary-light transition-colors duration-200"
              >
                Discover More...
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ——— Progress bar ——— */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20 z-20">
        <motion.div
          key={current}
          className="h-full bg-secondary-light"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{
            duration: 4,
            ease: 'linear',
          }}
        />
      </div>
      {/* --- Main carousel, purely Framer Motion --- */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            className="relative w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[current].imageUrl})`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: {
                type: 'spring',
                visualDuration: 0.7,
                bounce: 0,
              },
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 top-1/2 left-5 max-w-[40%] transform -translate-y-1/2 text-white">
              <AnimatePresence>
                <motion.div
                  key={slides[current].id}
                  initial="initial"
                  animate="visible"
                  variants={pullupVariant}
                  transition={{
                    duration: 1.0,
                    ease: 'anticipate',
                  }}
                  className="
                    absolute
                    bottom-3
                    bg-full
                    text-white
                    text-xs md:text-sm lg:text-base
                    px-2 md:px-3
                    py-1 md:py-1.5
                    rounded
                    flex
                    flex-col
                    gap-4
                  "
                >
                  {slides[current].subtitle && (
                    <p className="mt-2 text-base sm:text-lg md:text-xl">
                      {slides[current].subtitle}
                    </p>
                  )}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                    {slides[current].title}
                  </h2>
                  {slides[current].description}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- Thumbnails + progress + counter --- */}
      <div className="thumbs-container absolute inset-x-0 bottom-[2%] w-full flex py-2 flex-col items-end">
        {/* ——— Thumb Slider Start ——— */}
        <div className="thumb-slider basis-[80%] w-1/2 items-center justify-end">
          <Swiper
            onSwiper={s => (thumbSwiperRef.current = s)}
            onRealIndexChange={s => setCurrent(s.realIndex)}
            modules={[Autoplay, FreeMode, Navigation]}
            spaceBetween={10}
            slidesPerView={5}
            loop={true}
            freeMode={true}
            watchSlidesProgress={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            simulateTouch={false}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide
                key={slide.id}
                className={` ${
                  idx === current || idx + 1 === current ? 'invisible' : ''
                }
              sepia-40
                `}
              >
                <div className="thumb-swiper-img mb-3 rounded-lg ">
                  <img
                    src={slide.imageUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-24  md:h-56 object-cover rounded-lg"
                  />

                  <AnimatePresence>
                    <motion.div
                      key={slide.id}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={textVariants}
                      transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                      }}
                      className="
                    absolute
                    bottom-3
                    bg-full
                    text-white
                    text-xs md:text-sm lg:text-base
                    px-2 md:px-3
                    py-1 md:py-1.5
                    rounded
                    flex
                    flex-col
                    gap-4
                  "
                    >
                      <div className="thumb-subtitle leading-tight font-extras">
                        {slide.subtitle}
                      </div>
                      <div className="thumb-title leading-tight font-heading font-semibold mt-0.5">
                        {slide.title}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ——— Thumb Slider Ends ——— */}
        <div className="thumb-footer-content flex w-full items-center justify-end p-2 sm:p-4 flex-grow">
          <div className="thumb-contents flex w-full max-w-xs sm:max-w-xl items-center justify-between z-10">
            <div className="nav-buttons flex gap-2 sm:gap-4">
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
            <div className="slide-progress-container flex-grow mx-2 sm:mx-4 max-w-xs sm:max-w-lg">
              <div className="relative h-[2px] bg-gray-300 rounded overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-secondary-light rounded transition-all duration-600"
                  style={{
                    width: `${((current + 1) / totalSlide) * 100}%`,
                  }}
                />
              </div>
            </div>
            <div className="font-extras slide-counter text-white font-bold text-2xl sm:text-4xl flex-shrink-0">
              {String(current + 1).padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
