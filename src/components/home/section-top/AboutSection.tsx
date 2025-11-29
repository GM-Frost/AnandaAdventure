import {
  aboutImg,
  aboutImg2,
  aboutSectionImg,
  blackBorderImg,
  blackTilakImg,
  ceoImg,
  logoImg,
} from '@/assets/images/images';
import { Avatar, Button } from '@mui/material';

const AboutSection = () => {
  return (
    <>
      <section className="about-section container mx-auto sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-1 lg:order-1 flex items-center justify-center">
            <img
              src={aboutSectionImg}
              loading="lazy"
              className="w-full max-w-[320px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] aspect-square object-cover"
            />
          </div>
          <div className="order-2 lg:order-2 p-4">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-4xl">
                About
              </h2>
              <img
                src={blackBorderImg}
                alt="section divider"
                className="mt-2 w-20 sm:w-28 md:w-36 h-2 object-contain"
                loading="lazy"
              />
            </div>
            <div className="mt-6 sm:mt-7">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extras leading-snug">
                Hike the <span className="text-secondary">Mountains,</span>
                <br className="hidden sm:block" /> without the hassle
              </h3>

              <p className="mt-4 text-sm sm:text-base font-body text-gray-700 leading-relaxed">
                Venture into the heart of the Himalayas in Ananda, where every
                step is a journey of bliss. Bring a thrill into your life with
                our curated trekking experiences, designed for both seasoned
                adventurers and those seeking a new challenge.
              </p>
            </div>
            {/* FEATURES */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <i
                  className="fi fi-sr-leadership text-3xl sm:text-4xl text-primary-dark"
                  aria-hidden="true"
                ></i>
                <h4 className="font-extras font-bold text-base sm:text-lg">
                  Trusted Travel Guide
                </h4>
                <p className="font-body text-sm sm:text-base text-gray-700">
                  Our experienced guides ensure a safe and enriching journey.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <i
                  className="fi fi-sr-journey text-3xl sm:text-4xl text-primary-dark"
                  aria-hidden="true"
                ></i>
                <h4 className="font-extras font-bold text-base sm:text-lg">
                  Personalized Trips
                </h4>
                <p className="font-body text-sm sm:text-base text-gray-700">
                  Let us tailor your adventure to match your interests and pace.
                </p>
              </div>
            </div>

            {/* CTA + CEO */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
              <div className="flex sm:justify-start justify-center">
                <Button
                  variant="contained"
                  className="bg-secondary-dark hover:bg-secondary text-white font-bold rounded-xl shadow-md shadow-black/20 px-5 sm:px-6 py-2 sm:py-2.5 w-[250px] sm:w-auto"
                  size="medium"
                >
                  More about us
                </Button>
              </div>
              <div className="flex items-center gap-3 sm:justify-start justify-center">
                <Avatar
                  alt="Hemraj Bastola (Tara)"
                  src={ceoImg}
                  sx={{ width: 44, height: 44 }}
                  className="border-2 border-gray-300"
                />
                <div className="flex flex-col min-w-0">
                  <h5 className="text-sm sm:text-base truncate">
                    Hemraj Bastola (Tara)
                  </h5>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <span className="truncate">
                      Founder & CEO, Ananda Adventure
                    </span>
                    <Avatar
                      src={logoImg}
                      alt="Ananda Adventure"
                      sx={{ width: 18, height: 18 }}
                      variant="square"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* FOOTER TAGLINE */}
            <div className="mt-8 sm:mt-8 flex items-center gap-3 text-primary-dark">
              <i
                className="fi fi-sr-map-location-track text-3xl sm:text-sm"
                aria-hidden="true"
              ></i>
              <p className="text-sm sm:text-base">
                <span className="font-bold">
                  Discover the World's Stunning Destinations
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
