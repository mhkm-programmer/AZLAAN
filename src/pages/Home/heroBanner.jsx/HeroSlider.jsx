import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import React, { useState } from "react";

import Slider from "react-slick";
import useThemeSwitcher from "../../../hooks/useThemeSwitcher";

const HeroSlider = () => {
  const [, setTheme] = useThemeSwitcher(); // Ignore theme here as we fix background
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

  const colors = {
    background: "#F2EDE6", // Services section background
    primaryText: "#2E2E2E",
    accent: "#8C6239",
    buttonBase: "#4A342E",
    buttonHover: "#5A4035",
    subtitle: "#6B6B6B",
  };

  return (
    <div
      className="mx-auto overflow-hidden py-16 px-5 md:px-12 lg:flex items-center justify-between gap-12"
      style={{
        backgroundColor: colors.background,
        color: colors.primaryText,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Left Content */}
      <div className="flex-1 max-w-xl space-y-6 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Transforming Spaces, Creating Experiences
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: colors.subtitle }}>
          <strong>AZLAAN CONTRACTING W.L.L</strong> brings your vision to life through{" "}
          <strong>event planning</strong> and <strong>luxury interior design</strong> solutions for both{" "}
          <strong>offices</strong> and <strong>homes</strong>. We craft elegance and functionality in every project.
        </p>

        {/* Action Buttons */}
        <div className="mt-6">
          {!showOptions ? (
            <button
              onClick={handleShowOptions}
              className="bg-[#4A342E] hover:bg-[#5A4035] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300"
            >
              Get a Free Consultation
            </button>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://www.google.com/maps?q=Azlaan+Contracting+Qatar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#4A342E] hover:bg-[#5A4035] text-white px-5 py-3 rounded-lg font-medium transition duration-300"
              >
                <FaMapMarkerAlt /> Visit Our Office
              </a>
              <a
                href="https://wa.me/+97455760872"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-5 py-3 rounded-lg font-medium transition duration-300"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Right Slider */}
      <div className="flex-1 mt-12 lg:mt-0 max-w-xl w-full">
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="rounded-2xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-[1.01]"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSlider;
