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
    title: "Myanmar",
    subtitle: "Myanmar Hot Air",
    description:
      "Known for its hot air ballon and temples, and historic charm, venice invites visiors...",
    categories: ["Travel", "ballon", "History"],
  },
  {
    id: "Beach",
    imageUrl: beachImg,
    title: "Beaches",
    subtitle: "Top 10 hidden beaches to visit",
    description:
      "Discover secluded beaches with crystal-clear waters and breath taking",
    categories: ["Travel", "Adventure", "Nature"],
  },
  {
    id: "Dubai",
    imageUrl: dubaiImg,
    subtitle: "Interactive Dubai",
    title: "Dubai",
    description: "Discover new world of dubai",
    categories: ["Travel", "Adventure", "city"],
  },
  {
    id: "kathmandu",
    imageUrl: kathmanduImg,
    subtitle: "kathmandu Art",
    title: "Kathmandu",
    description: "Discover kathmandu",
    categories: ["Travel", "Adventure", "city"],
  },
  {
    id: "yosmite",
    imageUrl: yosmiteImg,
    subtitle: "yosmite national Park",
    title: "Yosmite",
    description: "Discover Yosmite",
    categories: ["Travel", "Adventure", "Park"],
  },
  {
    id: "bhutan",
    imageUrl: bhutanImg,
    subtitle: "Bhutan Art",
    title: "Bhutan",
    description: "Discover Bhutan",
    categories: ["Travel", "Adventure", "city"],
  },
];
