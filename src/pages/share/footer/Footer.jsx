import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

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
                  src="https://8upload.com/image/67979661192f3/AL-FWZ_Tradign_Contracting_Logo.png"
                  alt="AZLAAN Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h2 className="text-white text-xl font-semibold leading-snug">
                  AZLAAN CONTRACTING W.L.L
                </h2>
                <p className="text-sm text-violet-400">Event Management & Interior Solutions</p>
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
            {/* Links */}
            <div>
              <h4 className="text-white text-base font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-violet-400">Home</a></li>
                <li><a href="/about" className="hover:text-violet-400">About Us</a></li>
                <li><a href="/service" className="hover:text-violet-400">Services</a></li>
                {/* <li><a href="/projects" className="hover:text-violet-400">Projects</a></li> */}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white text-base font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/faq" className="hover:text-violet-400">FAQs</a></li>
                <li><a href="/contact" className="hover:text-violet-400">Contact</a></li>
                <li><a href="/terms" className="hover:text-violet-400">Terms & Policies</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white text-base font-semibold mb-3">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="hover:text-violet-400">+974 5018 3025</span></li>
                <li><span className="hover:text-violet-400">+974 3360 0350</span></li>
                <li><span className="hover:text-violet-400">+974 6000 5351</span></li>
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
                <a href="https://wa.me/+97450183025" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400">
                  <FaWhatsapp size={18} />
                </a>
                <a href="mailto:azlaancontracting@gmail.com" className="text-gray-400 hover:text-violet-400">
                  <FaGoogle size={18} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61573137238181" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400">
                  <FaFacebook size={18} />
                </a>
                <a href="https://www.instagram.com/rokibwin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400">
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        {/* <div className="mt-10">
          <h4 className="text-white text-base font-semibold mb-3">Our Services</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400 list-disc list-inside">
            <li>Supply and installation of carpets</li>
            <li>Parquet flooring installation</li>
            <li>Hospital vinyl flooring supply & installation</li>
            <li>Custom mall kiosk design and build</li>
            <li>Exhibition stand design & fabrication</li>
            <li>Curtains fabrics, fittings, and accessories</li>
          </ul>
        </div> */}

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} AZLAAN CONTRACTING W.L.L. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
