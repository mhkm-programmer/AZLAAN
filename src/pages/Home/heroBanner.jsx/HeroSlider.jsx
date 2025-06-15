import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import React, { useState } from "react";
import Slider from "react-slick";
import useThemeSwitcher from "../../../hooks/useThemeSwitcher";

const HeroSlider = () => {
  const [, setTheme] = useThemeSwitcher();
  const [showOptions, setShowOptions] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    adaptiveHeight: true,
    pauseOnHover: false,
  };

  const slides = [
    { type: "image", src: "https://8upload.com/image/68337d45aa60e/IMG-20250518-WA0039.jpg" },
    { type: "video", videoType: "streamable", src: "https://streamable.com/e/md5pe4" },
    { type: "video", videoType: "streamable", src: "https://streamable.com/e/cxrr13" },
    { type: "video", videoType: "streamable", src: "https://streamable.com/e/a82dgf" },
    { type: "image", src: "https://8upload.com/image/68337cbb8461d/IMG-20250518-WA0006.jpg" },
  ];

  const colors = {
    background: "#f9f5f1",
    heading: "#1f2937",
    text: "#4b5563",
    accent: "#8C6239",
    buttonBase: "#4A342E",
    buttonHover: "#3A2A24",
    green: "#25D366",
    greenHover: "#1ebe5b",
  };

  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-20 py-16 flex flex-col-reverse lg:flex-row items-center gap-10"
      style={{ backgroundColor: colors.background, fontFamily: "'Inter', sans-serif" }}
    >
      {/* Text Content */}
      <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
          Transforming Spaces,<br className="hidden md:block" /> Creating Experiences
        </h1>
        <p className="text-lg text-gray-700">
          <strong className="text-gray-900">AZLAAN CONTRACTING W.L.L</strong> brings your vision to life through{" "}
          <strong>event planning</strong> and <strong>luxury interior design</strong> for{" "}
          <strong>homes</strong> and <strong>offices</strong>. We blend elegance with functionality to elevate your space.
        </p>

        {/* Action Buttons */}
        <div className="mt-6">
          {!showOptions ? (
            <button
              onClick={() => setShowOptions(true)}
              className="bg-[#4A342E] hover:bg-[#3A2A24] text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300"
            >
              Get a Free Consultation
            </button>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <a
                href="https://www.google.com/maps?q=Azlaan+Contracting+Qatar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#4A342E] hover:bg-[#3A2A24] text-white px-5 py-3 rounded-lg font-medium shadow transition"
              >
                <FaMapMarkerAlt /> Visit Our Office
              </a>
              <a
                href="https://wa.me/97450183025"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-5 py-3 rounded-lg font-medium shadow transition"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Image/Video Slider */}
      <div className="flex-1 w-full max-w-xl">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="px-2">
              {slide.type === "image" ? (
                <img
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[400px] sm:h-[500px] object-cover rounded-2xl shadow-xl"
                />
              ) : (
                <div className="w-full h-[400px] sm:h-[500px] overflow-hidden rounded-2xl shadow-xl">
                  <iframe
                    src={`${slide.src}?autoplay=1&muted=1`}
                    allow="fullscreen; autoplay"
                    allowFullScreen
                    title={`Streamable Video ${index + 1}`}
                    className="w-full h-full border-none"
                  />
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSlider;
