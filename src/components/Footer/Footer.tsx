import { Avatar } from '@mui/material';
import React from 'react';
import { logoImg, paperPlaneImg } from '@/assets/images/images';
import {
  FacebookIcon,
  InstagramIcon,
  MarkEmailReadIcon,
  PhoneInTalkIcon,
  PinDropIcon,
  WhatsAppIcon,
} from '@/components/icons';
import { NepalGovt, Nma, Ntb, Taan } from '@/assets/logo/images';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-100 pt-10 pb-4 px-4 md:px-10 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-8">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            {/* Replace with your SVG or Image logo */}
            <img
              src={logoImg}
              alt="Trekvista Logo"
              className="w-10 h-10 object-contain"
            />

            <span className="text-2xl font-extras text-shadow-lg/90">
              Ananda Adventures
            </span>
          </div>
          <div>
            <p className="text-sm text-neutral-400 mb-5 text-shadow-lg/90">
              Pack your bags for the ultimate adventure! Explore the world'’'s
              hidden gems, enjoy exhilarating experiences, and build memories
              that last a lifetime.
            </p>
          </div>
          <div className="flex flex-col text-shadow-lg/90">
            <div className="flex items-center gap-2">
              <MarkEmailReadIcon className="w-4 text-secondary" />
              <span className="text-sm text-neutral-400">
                Adventureananda@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneInTalkIcon className="w-4 text-secondary" />
              <span className="text-sm text-neutral-400">+977-1-4583408</span>
            </div>
            <div className="flex items-center gap-2">
              <PinDropIcon className="w-4 text-secondary" />
              <span className="text-sm text-neutral-400">
                Chabahil 07, Kathmandu, Nepal
              </span>
            </div>
          </div>
        </div>
        {/* Services Sections */}
        <div className="flex flex-col">
          <h3 className="text-lg font-subheading mb-4 text-shadow-lg/90">
            Services
          </h3>
          <ul className="space-y-2 text-sm text-neutral-400 font-subheading text-shadow-lg/90">
            <li>About Us</li>
            <li>FAQ</li>
            <li>Our Team</li>
            <li>Blog</li>
            <li>Get in Touch</li>
          </ul>
        </div>
        {/* Affiliations */}
        <div className="flex flex-col">
          <h3 className="text-lg font-subheading mb-4 text-shadow-lg/90">
            Gallery
          </h3>
          <div className="grid grid-cols-3 gap-1">
            <img
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Gallery Image 01"
              className="w-full h-auto object-cover rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Gallery Image 02"
              className="w-full h-auto object-cover rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1517934274943-d1749ff2d7a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Gallery Image 03"
              className="w-full h-auto object-cover rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1611154046036-cd91e50978be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Gallery Image 04"
              className="w-full h-auto object-cover rounded"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1676982101887-49bb12d8a104?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Gallery Image 05"
              className="w-full h-auto object-cover rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1566353820666-883ec100f41b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Gallery Image 06"
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <h3 className="text-lg font-subheading mb-4 mt-4 text-shadow-lg/90">
            Affiliated
          </h3>
          <div className="flex flex-wrap gap-2">
            <img
              src={Nma}
              alt="Affiliation 1"
              className="w-10 h-10 object-contain "
              loading="lazy"
            />
            <img
              alt="Affiliation 2"
              src={Ntb}
              className="w-10 h-10 object-contain"
              loading="lazy"
            />
            <img
              src={NepalGovt}
              alt="Affiliation 3"
              className="w-10 h-10 object-contain"
              loading="lazy"
            />
            <img
              src={Taan}
              alt="Affiliation 4"
              className="w-10 h-10 object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-subheading mb-4 text-shadow-lg/90">
            News Letter
          </h3>
          <p className="text-sm text-neutral-400 mb-4">
            Subscribe to our newsletter to get the latest updates and offers.
          </p>
          <form
            className="relative w-full"
            onSubmit={e => {
              e.preventDefault();
              /* handle submit */
            }}
          >
            <input
              type="email"
              name="email"
              aria-label="Email"
              placeholder="Enter your email"
              className="w-full pr-12 px-3 py-2 rounded-3xl border border-neutral-700 bg-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 bg-secondary-dark text-white rounded-2xl hover:bg-secondary-light transition-colors duration-300 flex cursor-pointer items-center justify-center"
            >
              <img
                src={paperPlaneImg}
                alt=""
                className="w-4 h-4 object-contain"
                aria-hidden="true"
              />
            </button>
          </form>
          <div className="md:col-span-4 flex flex-col justify-center mt-4 mb-2">
            <h3 className="font-subheading text-sm text-white text-center text-shadow-lg/90">
              Follow us on social media for more adventure inspiration!
            </h3>
            <div className="flex items-center justify-center mt-2">
              {/* Social Media Icons can be added here */}
              <FacebookIcon className="mx-1 w-8 h-8 cursor-pointer text-blue-500 hover:text-secondary-light" />
              <WhatsAppIcon className="mx-1 w-8 h-8 cursor-pointer text-green-500 hover:text-secondary-light" />
              <InstagramIcon className="mx-1 w-8 h-8 cursor-pointer text-pink-700 hover:text-secondary-light" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-800 pt-4">
        <div className="max-w-7xl mx-auto text-center text-sm text-neutral-400 text-shadow-lg/90">
          &copy; {new Date().getFullYear()} Ananda Adventure Treks. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
