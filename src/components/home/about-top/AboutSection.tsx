import {
  aboutSectionImg,
  blackBorderImg,
  ceoImg,
  logoImg,
} from '@/assets/images/images';
import { Avatar, Button } from '@mui/material';

const AboutSection = () => {
  return (
    <>
      <section className="about-section w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image Section */}
            <div className="order-2 lg:order-1 flex items-center justify-center lg:justify-start">
              <div className="relative w-full max-w-md lg:max-w-none">
                <img
                  src={aboutSectionImg}
                  alt="Mountain hiking adventure"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                {/* Optional decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full opacity-20 blur-2xl -z-10" />
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-7">
              {/* Header */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className="font-heading text-4xl sm:text-5xl lg:text-4xl text-shadow-md/10  text-gray-900">
                  About
                </h2>
                <img
                  src={blackBorderImg}
                  alt="section divider"
                  className="w-24 sm:w-32 md:w-36 h-3 object-contain"
                  loading="lazy"
                />
              </div>

              {/* Main Content */}
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extras leading-tight text-gray-900 text-center lg:text-left">
                  Hike the <span className="text-secondary">Mountains,</span>
                  <br className="hidden sm:block" /> without the hassle
                </h3>

                <p className="text-base font-body sm:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                  Venture into the heart of the Himalayas in Ananda, where every
                  step is a journey of bliss. Bring a thrill into your life with
                  our curated trekking experiences, designed for both seasoned
                  adventurers and those seeking a new challenge.
                </p>
              </div>

              {/* FEATURES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-2">
                <div className="flex flex-col gap-3 text-center lg:text-left items-center lg:items-start">
                  <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
                    <i
                      className="fi fi-sr-leadership text-3xl sm:text-4xl text-primary-dark"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h4 className="font-extras text-lg sm:text-xl text-gray-900 mb-1">
                      Trusted Travel Guide
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 font-body ">
                      Our experienced guides ensure a safe and enriching
                      journey.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 text-center lg:text-left items-center lg:items-start">
                  <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
                    <i
                      className="fi fi-sr-journey text-3xl sm:text-4xl text-primary-dark"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h4 className="font-extras text-lg sm:text-xl text-gray-900 mb-">
                      Personalized Trips
                    </h4>
                    <p className="font-body text-sm sm:text-base text-gray-600">
                      Let us tailor your adventure to match your interests and
                      pace.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA + CEO */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
                <div className="flex sm:justify-start justify-center">
                  <Button
                    variant="contained"
                    className="bg-primary-dark hover:bg-secondary-dark text-white font-bold rounded-xl shadow-md shadow-black/20 px-5 sm:px-6 py-2 sm:py-2.5 w-[250px] sm:w-auto"
                    size="medium"
                  >
                    More about us
                  </Button>
                </div>
                {/* CEO Info */}
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <Avatar
                    alt="Hemraj Bastola (Tara)"
                    src={ceoImg}
                    sx={{ width: 56, height: 56 }}
                    className="border-2 border-gray-200 shadow-md"
                  />
                  <div className="flex flex-col min-w-0">
                    <h5 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                      Hemraj Bastola (Tara)
                    </h5>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                      <span className="truncate">Founder & CEO</span>
                      <Avatar
                        src={logoImg}
                        alt="Ananda Adventure"
                        sx={{ width: 20, height: 20 }}
                        variant="square"
                        className="flex-shrink-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* FOOTER TAGLINE */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-orange-600 bg-orange-50 rounded-lg px-4 py-3">
                <i
                  className="fi fi-sr-map-location-track text-3xl sm:text-sm"
                  aria-hidden="true"
                ></i>
                <p className="text-sm sm:text-base font-semibold">
                  Discover the World's Stunning Destinations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
