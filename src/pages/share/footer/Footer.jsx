import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Branding Section */}
          <div className="w-full lg:w-1/3">
            <a href="/" className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img
                  src="https://8upload.com/image/67979661192f3/AL-FWZ_Tradign_Contracting_Logo.png"
                  alt="AZLAAN Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white tracking-wide">
                AZLAAN CONTRACTING W.L.L
              </span>
            </a>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Specialists in Flooring, Curtains, Kiosks, and Exhibition Stand Solutions in Qatar.
              Delivering excellence in design and execution for commercial and residential spaces.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 lg:mt-0">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:text-violet-400">Home</a>
                </li>
                <li>
                  <a href="/about" className="hover:text-violet-400">About Us</a>
                </li>
                <li>
                  <a href="/services" className="hover:text-violet-400">Our Services</a>
                </li>
                <li>
                  <a href="/projects" className="hover:text-violet-400">Projects</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/faq" className="hover:text-violet-400">FAQs</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-violet-400">Contact Us</a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-violet-400">Terms & Conditions</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-violet-400">Zone 26, St. 850, Bldg. 30, Doha - Qatar</li>
                <li className="hover:text-violet-400">+974 5576 0872</li>
                <li className="hover:text-violet-400">qatarwintrading@gmail.com</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4 mt-2">
                <a
                  href="tel:+97455760872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-400"
                >
                  <FaPhoneAlt size={20} />
                </a>
                <a
                  href="https://wa.me/+97455760872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-400"
                >
                  <FaWhatsapp size={20} />
                </a>
                <a
                  href="mailto:qatarwintrading@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-400"
                >
                  <FaGoogle size={20} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61573137238181"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-400"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/rokibwin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-400"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} AZLAAN CONTRACTING W.L.L. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
