import { Slide } from "components/types/Slide";
import {
  hotAirImg,
  beachImg,
  dubaiImg,
  kathmanduImg,
  yosmiteImg,
  bhutanImg,
} from "@/assets/images/images";

export const slides: Slide[] = [
  {
    id: "Hot-Air",
    imageUrl: hotAirImg,
    title: "Myanmar Hot Air",
    subtitle: "Myanmar",
    description:
      "Known for its hot air ballon and temples, and historic charm, venice invites visiors...",
    categories: ["Travel", "ballon", "History"],
  },
  {
    id: "beach",
    imageUrl: beachImg,
    title: "Top 10 hidden beaches to visit",
    subtitle: "hidden-beach",
    description:
      "Discover secluded beaches with crystal-clear waters and breath taking",
    categories: ["Travel", "Adventure", "Nature"],
  },
  {
    id: "dubai",
    imageUrl: dubaiImg,
    subtitle: "dubai",
    title: "interactive Dubai",
    description: "Discover new world of dubai",
    categories: ["Travel", "Adventure", "city"],
  },
  {
    id: "kathmandu",
    imageUrl: kathmanduImg,
    subtitle: "kathmandu",
    title: "kathmandu Art",
    description: "Discover kathmandu",
    categories: ["Travel", "Adventure", "city"],
  },
  {
    id: "yosmite",
    imageUrl: yosmiteImg,
    subtitle: "yosmite national Park",
    title: "Yosmite National Park",
    description: "Discover Yosmite",
    categories: ["Travel", "Adventure", "Park"],
  },
  {
    id: "bhutan",
    imageUrl: bhutanImg,
    subtitle: "bhutan",
    title: "Bhutan Art",
    description: "Discover Bhutan",
    categories: ["Travel", "Adventure", "city"],
  },
];
