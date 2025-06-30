// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import type { Slide } from "components/types/Slide";
// import type { Swiper as SwiperClass } from "swiper";
// import {
//   Navigation,
//   Pagination,
//   Autoplay,
//   EffectCoverflow,
// } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// type Props = { slides: Slide[] };
// const Carousel: React.FC<Props> = ({ slides }) => {
//   const onInit = (swiper: SwiperClass) => {
//     /* … */
//   };
//   const onRealIndexChange = (swiper: SwiperClass) => {
//     /* … */
//   };

//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       slidesPerView={3.5} // typo fixed
//       spaceBetween={25} // typo fixed
//       loop={true}
//       speed={1000}
//       simulateTouch={false}
//       autoplay={{ delay: 1000 }}
//       navigation
//       pagination={{ clickable: true }}
//       onInit={onInit}
//       onRealIndexChange={onRealIndexChange}
//       breakpoints={{
//         // when window width >= …
//         320: { slidesPerView: 1, spaceBetween: 10 },
//         640: { slidesPerView: 2, spaceBetween: 15 },
//         1024: { slidesPerView: 3.5, spaceBetween: 25 },
//       }}
//       className="my-swiper h-96"
//     >
//       {slides.map((slide) => (
//         <Swiper
//           effect={"coverflow"}
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={"auto"}
//           coverflowEffect={{
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           pagination={true}
//           modules={[EffectCoverflow, Pagination]}
//           className="mySwiper"
//         >
//           <SwiperSlide key={slide.id}>
//             <div className="relative w-full h-full">
//               <img
//                 src={slide.imageUrl}
//                 alt={slide.title}
//                 className="object-cover w-full h-full rounded-lg"
//               />
//               <div className="absolute bottom-5 left-5 text-white">
//                 <h2 className="text-2xl font-bold">{slide.title}</h2>
//                 {slide.categories && (
//                   <p className="text-sm">{slide.categories.join(", ")}</p>
//                 )}
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       ))}
//     </Swiper>
//   );
// };

// export default Carousel;
