import {
  AdventureSports1,
  AdventureSports2,
  AdventureSports3,
  cultural1,
  cultural2,
  cultural3,
  customTour1,
  customTour2,
  jungleSafari1,
  jungleSafari2,
  jungleSafari3,
  pilgrimage1,
  pilgrimage2,
  pilgrimage3,
  senicFlights1,
  senicFlights2,
  senicFlights3,
  trekking1,
  trekking2,
  trekking3,
} from '@/assets/images/images';

interface DestinationTabs {
  id: number;
  label: string;
}

export interface destinations {
  id: number;
  category: string;
  images: string[];
  title: string;
  reviews: number;
  reviewScore: number;
  days: number;
  nights: number;
  priceFrom: number;
  desc: string;
  isNew: boolean;
}

export const topDestinationTabs: DestinationTabs[] = [
  {
    id: 1,
    label: 'City & Cultural Tours',
  },
  {
    id: 2,
    label: 'Trekking & Adventure',
  },
  {
    id: 3,
    label: 'Wildlife & Jungle Safari',
  },
  {
    id: 4,
    label: 'Scenic Flights',
  },
  {
    id: 5,
    label: 'Adventure Sports & Activities',
  },
  {
    id: 6,
    label: 'Pilgrimage & Spiritual Tours',
  },
  {
    id: 7,
    label: 'Custom & Group Tours',
  },
];

export const topDestinationItems: destinations[] = [
  {
    id: 1,
    category: 'City & Cultural Tours',
    images: [cultural1],
    title: 'Kathmandu | 5 Days, 4 Nights',
    reviews: 3,
    reviewScore: 4.5,
    days: 5,
    nights: 4,
    priceFrom: 499,
    desc: 'Explore the vibrant culture and rich history of Kathmandu with our 5-day tour package.',
    isNew: true,
  },
  {
    id: 2,
    category: 'Trekking & Adventure',
    images: [trekking1, trekking2, trekking3],
    title: 'Everest Base Camp Trek | 14 Days, 13 Nights',
    reviews: 5,
    reviewScore: 4.8,
    days: 14,
    nights: 13,
    priceFrom: 1499,
    desc: "Embark on an unforgettable journey to the base of the world's highest peak.",
    isNew: true,
  },
  {
    id: 3,
    category: 'Wildlife & Jungle Safari',
    images: [jungleSafari1, jungleSafari2, jungleSafari3],
    title: 'Chitwan National Park Safari | 3 Days, 2 Nights',
    reviews: 4,
    reviewScore: 4.6,
    days: 3,
    nights: 2,
    priceFrom: 299,
    desc: "Experience the thrill of wildlife in the heart of Nepal's premier national park.",
    isNew: false,
  },
  {
    id: 4,
    category: 'Scenic Flights',
    images: [senicFlights1, senicFlights2, senicFlights3],
    title: 'Everest Helicopter Tour | 1 Day',
    reviews: 6,
    reviewScore: 4.9,
    days: 1,
    nights: 0,
    priceFrom: 899,
    desc: 'Soar above the Himalayas and witness breathtaking views of Mount Everest.',
    isNew: true,
  },
  {
    id: 5,
    category: 'Adventure Sports & Activities',
    images: [AdventureSports1, AdventureSports2, AdventureSports3],
    title: 'White Water Rafting | 2 Days, 1 Night',
    reviews: 2,
    reviewScore: 4.4,
    days: 2,
    nights: 1,
    priceFrom: 199,
    desc: 'Get your adrenaline pumping with an exciting white water rafting adventure.',
    isNew: true,
  },
  {
    id: 6,
    category: 'Pilgrimage & Spiritual Tours',
    images: [pilgrimage1, pilgrimage2, pilgrimage3],
    title: 'Lumbini Pilgrimage Tour | 4 Days, 3 Nights',
    reviews: 3,
    reviewScore: 4.7,
    days: 4,
    nights: 3,
    priceFrom: 399,
    desc: 'Visit the birthplace of Lord Buddha and explore sacred sites in Lumbini.',
    isNew: false,
  },
  {
    id: 7,
    category: 'Custom & Group Tours',
    images: [customTour1, customTour2],
    title: 'Custom Nepal Tour | Flexible Duration',
    reviews: 1,
    reviewScore: 4.3,
    days: 10,
    nights: 3,
    priceFrom: 1500,
    desc: 'Design your own Nepal adventure with our customizable tour packages.',
    isNew: true,
  },
  {
    id: 8,
    category: 'City & Cultural Tours',
    images: [cultural2, cultural3],
    title: 'Patan Valley Sightseeing | 2 Days, 1 Night',
    reviews: 2,
    reviewScore: 4.5,
    days: 2,
    nights: 1,
    priceFrom: 299,
    desc: 'Discover the ancient city of Patan and its rich cultural heritage.',
    isNew: false,
  },
  {
    id: 9,
    category: 'Trekking & Adventure',
    images: [trekking2],
    title: 'Annapurna Circuit Trek | 16 Days, 15 Nights',
    reviews: 7,
    reviewScore: 4.9,
    days: 16,
    nights: 15,
    priceFrom: 1599,
    desc: 'Trek through diverse landscapes and experience the beauty of the Annapurna region.',
    isNew: false,
  },
];

export default [topDestinationItems, topDestinationTabs];
