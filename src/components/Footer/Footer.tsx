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
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8 pb-8">
        {/* Logo & Contact */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={logoImg}
              alt="Trekvista Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-extras tracking-tight text-shadow-lg/80">
              Ananda Adventures
            </span>
          </div>
          <p className="text-sm text-neutral-400 mb-5 text-shadow-lg/80">
            Pack your bags for the ultimate adventure! Explore the world’s
            hidden gems, enjoy exhilarating experiences, and build memories that
            last a lifetime.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-shadow-lg/90">
              <MarkEmailReadIcon className="w-4 text-secondary" />
              <a
                href="mailto:Adventureananda@gmail.com"
                className="text-sm text-neutral-400 hover:text-secondary transition"
              >
                Adventureananda@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <PhoneInTalkIcon className="w-4 text-secondary" />
              <a
                href="tel:+97714583408"
                className="text-sm text-neutral-400 hover:text-secondary transition"
              >
                +977-1-4583408
              </a>
            </div>
            <div className="flex items-center gap-2">
              <PinDropIcon className="w-4 text-secondary" />
              <span className="text-sm text-neutral-400">
                Chabahil 07, Kathmandu, Nepal
              </span>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="flex flex-col">
          <h3 className="text-lg font-subheading mb-4 tracking-wide text-shadow-lg/90">
            Services
          </h3>
          <ul className="space-y-2 text-sm text-neutral-400 text-shadow-lg/90">
            <li>
              <a href="/about" className="hover:text-secondary transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-secondary transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="/team" className="hover:text-secondary transition">
                Our Team
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-secondary transition">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-secondary transition">
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
        {/* Gallery & Affiliations */}
        <div className="flex flex-col">
          <h3 className="text-lg font-subheading mb-4 tracking-wide text-shadow-lg/80">
            Gallery
          </h3>
          <div className="grid grid-cols-3 gap-1 mb-4">
            {/* You can use aspect-square for perfect squares */}
            {[
              'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1170&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1074&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1517934274943-d1749ff2d7a8?q=80&w=1170&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1611154046036-cd91e50978be?q=80&w=1170&auto=format&fit=crop',
              'https://plus.unsplash.com/premium_photo-1676982101887-49bb12d8a104?q=80&w=1169&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1566353820666-883ec100f41b?q=80&w=1170&auto=format&fit=crop',
            ].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full aspect-square object-cover rounded"
                loading="lazy"
              />
            ))}
          </div>
          <h3 className="text-lg font-subheading mb-2 mt-4 tracking-wide text-shadow-lg/90">
            Affiliated
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              { src: Nma, alt: 'NMA' },
              { src: Ntb, alt: 'NTB' },
              { src: NepalGovt, alt: 'Nepal Govt' },
              { src: Taan, alt: 'TAAN' },
            ].map(({ src, alt }) => (
              <img
                key={alt}
                src={src}
                alt={alt}
                className="w-10 h-10 object-contain"
                loading="lazy"
              />
            ))}
          </div>
        </div>
        {/* Newsletter & Social */}
        <div className="flex flex-col">
          <h3 className="text-lg font-subheading mb-4 tracking-wide text-shadow-lg/90">
            Newsletter
          </h3>
          <p className="text-sm text-neutral-400 mb-4">
            Subscribe to our newsletter to get the latest updates and offers.
          </p>
          <form className="relative w-full" onSubmit={e => e.preventDefault()}>
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
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 bg-secondary-dark text-white rounded-full hover:bg-secondary-light transition-colors flex items-center justify-center"
            >
              <img
                src={paperPlaneImg}
                alt="Send"
                className="w-4 h-4 object-contain"
              />
            </button>
          </form>
          <div className="flex flex-col items-center mt-5">
            <h3 className="font-semibold text-sm text-white mb-2 text-shadow-lg/90">
              Follow us on social media
            </h3>
            <div className="flex gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-8 h-8 text-blue-500 hover:text-secondary-light transition" />
              </a>
              <a
                href="https://wa.me/yourwhatsapplink"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-8 h-8 text-green-500 hover:text-secondary-light transition" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-8 h-8 text-pink-700 hover:text-secondary-light transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="border-t border-neutral-800 pt-4 mt-2">
        <div className="max-w-7xl mx-auto text-center text-sm text-neutral-400 text-shadow-lg/90">
          &copy; {new Date().getFullYear()} Ananda Adventure Treks. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
