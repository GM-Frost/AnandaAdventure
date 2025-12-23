import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { CalendarMonthIcon, ForumTwoToneIcon } from '@/components/icons';
import { Button } from '@mui/material';

const blogs = [
  {
    category: 'TRAVELING',
    image:
      'https://images.unsplash.com/photo-1520645521318-f03a712f0e67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fFRSQVZFTElOR3xlbnwwfHwwfHx8MA%3D%3D',
    date: '02 Apr 2021',
    comments: 3,
    title: 'The 8 best things about Touristy',
    excerpt:
      'Touristy places often feature iconic landmarks that are well-known globally.',
    link: '#',
  },
  {
    category: 'BUSINESS',
    categoryColor: 'bg-blue-500',
    image:
      'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VFJBVkVMSU5HfGVufDB8fDB8fHww',
    date: '02 Apr 2021',
    comments: 3,
    title: "Cultural Kaleidoscope: Japan's Six Wonders",
    excerpt:
      'Mount Fuji is Japan’s highest peak and an iconic symbol of the country.',
    link: '#',
  },
  {
    category: 'TRIP',
    image:
      'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fFRSQVZFTElOR3xlbnwwfHwwfHx8MA%3D%3D',
    date: '02 Apr 2021',
    comments: 3,
    title: "Ephemeral Beauty: Srilanka's Hidden Charms",
    excerpt:
      'The central highlands of Sri Lanka are covered in lush, green tea plantations.',
    link: '#',
  },
  {
    category: 'TRAVELING',
    image:
      'https://images.unsplash.com/photo-1534777367038-9404f45b869a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFRSQVZFTElOR3xlbnwwfHwwfHx8MA%3D%3D',
    date: '02 Apr 2021',
    comments: 3,
    title: 'The 8 best things about Touristy',
    excerpt:
      'Touristy places often feature iconic landmarks that are well-known globally.',
    link: '#',
  },
  {
    category: 'BUSINESS',
    image:
      'https://plus.unsplash.com/premium_photo-1661293924422-b1436fd57080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fFRSQVZFTElOR3xlbnwwfHwwfHx8MA%3D%3D',
    date: '02 Apr 2021',
    comments: 3,
    title: "Cultural Kaleidoscope: Japan's Six Wonders",
    excerpt:
      'Mount Fuji is Japan’s highest peak and an iconic symbol of the country.',
    link: '#',
  },
  {
    category: 'CAVESSE',
    image:
      'https://images.unsplash.com/photo-1507671280192-5900ae887d3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fFRSQVZFTElOR3xlbnwwfHwwfHx8MA%3D%3D',
    date: '02 Apr 2021',
    comments: 3,
    title: "Ephemeral Beauty: Srilanka's Hidden Charms",
    excerpt:
      'The central highlands of Sri Lanka are covered in lush, green tea plantations.',
    link: '#',
  },
];

const SLIDE_INTERVAL = 9000; // ms

const BlogSection = () => {
  const [startIdx, setStartIdx] = useState(0);

  // Loop every SLIDE_INTERVAL
  useEffect(() => {
    const id = setInterval(() => {
      setStartIdx(prev => (prev + 3) % blogs.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  // Get current 3 cards, wrapping if needed
  const cards = [];
  for (let i = 0; i < 3; i++) {
    cards.push(blogs[(startIdx + i) % blogs.length]);
  }

  return (
    <div className="mx-auto justify-center items-center flex flex-col max-w-7xl py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      <h2 className="text-sm sm:text-lg md:text-md font-semibold text-secondary-dark text-center mb-1 sm:mb-2 md:mb-3 uppercase tracking-wider">
        Blog
      </h2>
      <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 capitalize max-w-3xl px-2  text-shadow-md/10">
        Insightful{' '}
        <span className="text-secondary-dark italic">Articles & Stories</span>
      </h1>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl overflow-x-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={startIdx}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {cards.map((blog, idx) => (
                <div
                  key={idx + startIdx}
                  className="bg-white rounded-lg shadow p-4 pb-6 flex flex-col h-full transition hover:shadow-lg"
                >
                  <div className="relative">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="rounded-md h-44 w-full object-cover"
                    />
                    <span
                      className={`absolute left-0 bottom-0 px-4 py-1 text-xs text-white font-semibold bg-primary-dark`}
                    >
                      {blog.category}
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-gray-400 gap-2 mt-3">
                    <span className="flex items-center gap-1">
                      <CalendarMonthIcon className="text-secondary-dark w-3" />
                      {blog.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <ForumTwoToneIcon className="text-secondary-dark w-3" />
                      Comments({blog.comments.toString().padStart(2, '0')})
                    </span>
                  </div>
                  <div className="mt-2 font-bold text-lg leading-snug">
                    {blog.title}
                  </div>
                  <div className="text-gray-500 text-sm mt-2 flex-1">
                    {blog.excerpt}
                  </div>
                  <a
                    href={blog.link}
                    className="text-secondary-dark font-semibold mt-4 text-sm flex items-center hover:underline"
                  >
                    READ MORE
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-end items-center mt-4">
            <Button
              variant="contained"
              className="bg-primary-dark text-white font-bold rounded-xl shadow-md shadow-black/20 px-4 py-2 w-full sm:w-auto text-sm hover:bg-secondary-dark"
            >
              View All Blogs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
