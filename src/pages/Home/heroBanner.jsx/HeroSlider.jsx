import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import React, { useState } from "react";

import Slider from "react-slick";
import useThemeSwitcher from "../../../hooks/useThemeSwitcher";

const HeroSlider = () => {
  const [activeTheme] = useThemeSwitcher();
  const [showOptions, setShowOptions] = useState(false);

  const handleShowOptions = () => setShowOptions(true);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    adaptiveHeight: true,
  };

  const images = [
    "https://8upload.com/image/679ab81322a48/IMG-20250113-WA0033.jpg",
    "https://8upload.com/image/679abe281ed2b/office-furniture__1_.jpg",
    "https://8upload.com/image/679ab8ae708ea/IMG-20250112-WA0458.jpg",
  ];

  return (
    <div
      className={`mx-auto items-center justify-between overflow-hidden pt-8 pb-12 md:flex md:px-12 ${
        activeTheme === "dark" ? "text-white bg-neutral-900" : "text-neutral-900 bg-gray-50"
      }`}
    >
      {/* Left Content */}
      <div className="flex-1 max-w-xl space-y-6 px-5 md:px-0">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3A2F27] dark:text-white">
            Elevate Every Interior with AZLAAN CONTRACTING W.L.L
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            We specialize in high-quality <strong>flooring solutions</strong>, stylish <strong>curtain installations</strong>, and custom <strong>kiosk & exhibition stand</strong> setups. AZLAAN delivers innovation, elegance, and durability — all tailored to your space.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          {!showOptions ? (
            <button
              onClick={handleShowOptions}
              className="bg-[#3A2F27] hover:bg-[#574134] text-white font-medium px-6 py-3 rounded-xl shadow-md transition duration-300"
            >
              Request Quote or Book Consultation
            </button>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.google.com/maps?q=Azlaan+Contracting+Qatar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#3A2F27] hover:bg-[#574134] text-white font-medium px-5 py-3 rounded-lg transition duration-300"
              >
                <FaMapMarkerAlt /> Visit Our Office
              </a>
              <a
                href="https://wa.me/+97455760872"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-medium px-5 py-3 rounded-lg transition duration-300"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Right Carousel */}
      <div className="flex-1 mt-10 md:mt-0 md:ml-10 max-w-xl w-full">
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="rounded-2xl shadow-xl w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSlider;
