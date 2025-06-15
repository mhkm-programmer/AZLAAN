import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top section: Brand & Info */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo and Company Info */}
          <div className="md:w-1/3">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                <img
                  src="https://8upload.com/image/6830a9e51b351/Azlaan_Logo_Black.png"
                  alt="AZLAAN Logo"
                  className="w-10 h-10 object-contain rounded-full"
                />
              </div>
              <div>
                <h2 className="text-white text-xl font-semibold leading-snug">
                  AZLAAN CONTRACTING W.L.L
                </h2>
                <p className="text-sm text-violet-400">
                  Event Management & Interior Solutions
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-2">
              عز لان للمقاولات ززمزم
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              CR No.: 170827 <br />
              Bank Street, West Bay Area,<br />
              4th Floor, Office No (12/4), Doha, Qatar
            </p>
          </div>

          {/* Contact & Socials */}
          <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Quick Links */}
            <div>
              <h4 className="text-white text-base font-semibold mb-3">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
  <li><NavLink to="/" className="hover:text-violet-400">Home</NavLink></li>
  <li><NavLink to="/about" className="hover:text-violet-400">Profile</NavLink></li>
  <li><NavLink to="/service" className="hover:text-violet-400">Services</NavLink></li>
</ul>
            </div>

            

            {/* Contact Info */}
            <div>
              <h4 className="text-white text-base font-semibold mb-3">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:+97450183025" className="hover:text-violet-400">+974 5018 3025</a></li>
                <li><a href="mailto:azlaancontracting@gmail.com" className="hover:text-violet-400">azlaancontracting@gmail.com</a></li>
              </ul>
            </div>

            {/* Social Icons */}
            <div>
              <h4 className="text-white text-base font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4 mt-2">
                <a href="tel:+97450183025" className="text-gray-400 hover:text-violet-400">
                  <FaPhoneAlt size={18} />
                </a>
                <a href="https://wa.me/97450183025" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400">
                  <FaWhatsapp size={18} />
                </a>
                <a href="mailto:azlaancontracting@gmail.com" className="text-gray-400 hover:text-violet-400">
                  <FaGoogle size={18} />
                </a>
                <a href="https://www.facebook.com/azlaan.contracting" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400">
                  <FaFacebook size={18} />
                </a>
                <a href="https://www.instagram.com/azlaancontracting/?igsh=MWp6YWtyYXZvM2hzbA==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400">
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} AZLAAN CONTRACTING W.L.L. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
