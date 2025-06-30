import "./App.css";

import { slides } from "components/data/slides";
import { CarouselWithThumbs } from "@/components/carousel/CarouselWithThumbs";

function App() {
  return <CarouselWithThumbs slides={slides} />;
}

export default App;
