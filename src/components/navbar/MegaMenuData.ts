export const megaMenuData = {
  treks: {
    label: 'Treks',
    sections: [
      {
        title: 'Popular Regions',
        items: [
          { label: 'Everest Region', path: '/treks/everest' },
          { label: 'Annapurna Region', path: '/treks/annapurna' },
          { label: 'Langtang Region', path: '/treks/langtang' },
        ],
      },
      {
        title: 'Trek Style',
        items: [
          { label: 'Tea House Trek', path: '/treks/teahouse' },
          { label: 'Camping Trek', path: '/treks/camping' },
          { label: 'Luxury Trek', path: '/treks/luxury' },
        ],
      },
    ],
  },

  tours: {
    label: 'Tours',
    sections: [
      {
        title: 'Cultural',
        items: [
          { label: 'Kathmandu Valley', path: '/tours/kathmandu' },
          { label: 'Lumbini', path: '/tours/lumbini' },
        ],
      },
      {
        title: 'Adventure',
        items: [
          { label: 'Jungle Safari', path: '/tours/safari' },
          { label: 'Rafting', path: '/tours/rafting' },
        ],
      },
    ],
  },
};
