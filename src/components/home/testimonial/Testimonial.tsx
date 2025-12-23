import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Peter',
    title: 'Business Owner | LA',
    text: `Ananda Adventure made my trip unforgettable. From the well-planned itinerary to the friendly guides, everything was perfect. The experiences were authentic, and I felt immersed in the local culture. My accommodations were comfortable, and the activities were thrilling. Thank you Ananda Adventure for an amazing journey!`,
    avatar:
      'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=500&auto=format&fit=crop&q=60',
    mainImages: [
      'https://images.unsplash.com/photo-1513683040737-f4cc811285f7?q=80&w=721&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1643637200739-91b446b0e4e5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    name: 'Sophia',
    title: 'Photographer | Toronto',
    text: `Every detail was taken care of. I never had to worry about anything. Highly recommended if you want a real adventure and some of the best memories!`,
    avatar:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60',
    mainImages: [
      'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=721&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=764&auto=format&fit=crop',
    ],
  },
  {
    name: 'Raj',
    title: 'Engineer | Sydney',
    text: `Wonderful support and top notch experience. Would travel again!`,
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60',
    mainImages: [
      'https://images.unsplash.com/photo-1513683040737-f4cc811285f7?q=80&w=721&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1643637200739-91b446b0e4e5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
];

const avatars = testimonials.map(t => t.avatar);

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const INTERVAL = 4000;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[index];

  const variants = {
    initial: { x: 120, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -120, opacity: 0 },
  };

  return (
    <section className="bg-[#fff2de] py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-sm sm:text-lg md:text-md font-semibold text-secondary-dark text-center mb-1 sm:mb-2 md:mb-3 uppercase tracking-wider">
          Testimonial
        </h2>

        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 capitalize max-w-3xl px-2  text-shadow-md/10">
          Voices of our happy{' '}
          <span className="text-secondary-dark italic">travelers</span>
        </h1>

        <div className="w-full flex flex-col sm:flex-row gap-8 items-center sm:items-start justify-center px-2">
          <div className="relative w-full sm:w-auto flex-shrink-0 flex justify-center items-center min-h-[180px] sm:min-w-[220px]">
            {t.mainImages?.map((src, i) => (
              <img
                key={src}
                src={src}
                className={`absolute ${
                  i === 0
                    ? 'top-8 left-1/2 -translate-x-1/2 w-40 h-40 sm:top-10 sm:left-12 sm:translate-x-0 sm:w-48 sm:h-48 rotate-[12deg] sm:rotate-[6deg]'
                    : 'top-0 left-1/3 -translate-x-1/2 w-40 h-40 sm:top-0 sm:-left-16 sm:translate-x-0 sm:w-48 sm:h-48 -rotate-[12deg] sm:-rotate-8'
                } object-cover rounded-xl shadow-xl border-4 border-white`}
                alt={`traveler ${i + 1}`}
              />
            ))}
          </div>

          <div className="relative overflow-hidden flex flex-col p-4 sm:p-5 md:ml-6 max-w-full sm:max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                layout
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ type: 'spring', duration: 0.6 }}
                className="flex flex-col"
              >
                <div className="font-bold text-lg text-center sm:text-left">
                  {t.name}{' '}
                  <span className="text-xs text-gray-500 font-normal ml-2">
                    {t.title}
                  </span>
                </div>

                <div className="my-4">
                  <div className="text-gray-700 text-sm sm:text-base leading-relaxed h-[150px] sm:h-[120px] md:h-[200px] overflow-y-auto pr-2">
                    {t.text.length > 400 ? t.text.slice(0, 397) + '…' : t.text}
                    <span className="font-semibold">
                      {' '}
                      I highly recommend it!
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              {avatars.map((src, idx) => (
                <Avatar
                  key={src}
                  alt={`Testimonial User ${idx + 1}`}
                  src={src}
                  sx={{
                    width: { xs: 36, md: 36 },
                    height: { xs: 36, md: 36 },
                    border:
                      idx === index ? '3px solid #f97316' : '2px solid #d1d5db',
                    boxShadow: idx === index ? '0 0 0 2px #f97316' : 'none',
                  }}
                />
              ))}

              <span
                className="ml-auto flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-amber-50 text-secondary-dark rounded-md"
                aria-hidden="true"
              >
                <span className="leading-none text-2xl sm:text-4xl">❞</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
