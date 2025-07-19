import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import {
  Navigation,
  Autoplay,
  Thumbs,
  EffectCoverflow,
  FreeMode,
  EffectFade,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "@/assets/css/Carousel.css";

import type { Slide } from "@/components/types/Slide";
import {
  motion,
  Variants,
  AnimatePresence,
  useAnimation,
  delay,
  useInView,
} from "framer-motion";

import "swiper/css/effect-fade";

type Props = {
  slides: Slide[];
};

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

export const CarouselWithThumbs: React.FC<Props> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const thumbSwiperRef = useRef<SwiperClass | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const totalSlide = slides.length;

  const handlePrev = () => setCurrent((c) => (c - 1 + totalSlide) % totalSlide);
  const handleNext = () => setCurrent((c) => (c + 1) % totalSlide);

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
            style={{
              backgroundImage: `url(${slides[current].imageUrl})`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.7, bounce: 0 },
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
                  transition={{ duration: 1.0, ease: "anticipate" }}
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
            onSwiper={(s) => (thumbSwiperRef.current = s)}
            onRealIndexChange={(s) => setCurrent(s.realIndex)}
            modules={[Autoplay, FreeMode, Navigation]}
            spaceBetween={10}
            slidesPerView={5}
            loop={true}
            freeMode={true}
            watchSlidesProgress={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            allowTouchMove={false}
            simulateTouch={false}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide
                key={slide.id}
                className={` ${
                  idx === current || idx + 1 === current ? "invisible" : ""
                }
              sepia-40
                `}
              >
                <div className="thumb-swiper-img mb-3 rounded-lg ">
                  <img
                    src={slide.imageUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-24  md:h-45 object-cover rounded-lg"
                  />

                  <AnimatePresence>
                    <motion.div
                      key={slide.id}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={textVariants}
                      transition={{ duration: 0.5, ease: "easeOut" }}
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
                      <div className="leading-tight text-sm">
                        {slide.subtitle}
                      </div>
                      <div className="font-semibold mt-0.5 text-xl">
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
        <div className="thumb-footer-content flex w-full items-center justify-end p-4 flex-grow">
          <div className="thumb-contents flex w-full max-w-xl items-center justify-between z-10">
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
            <div className="slide-progress-container flex-grow mx-4 max-w-lg">
              <div className="relative h-[2px] bg-gray-300 rounded overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-amber-400 rounded transition-all duration-600"
                  style={{ width: `${((current + 1) / totalSlide) * 100}%` }}
                />
              </div>
            </div>
            <div className="slide-counter text-white font-bold text-4xl flex-shrink-0">
              {String(current + 1).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
