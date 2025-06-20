import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import React from "react";

const OurClient = () => {
  const logos = [
    { src: "https://8upload.com/image/67a012759526a/logo1.png", alt: "Client 1" },
    { src: "https://8upload.com/image/67a0127588f6f/logo2.png", alt: "Client 2" },
    { src: "https://8upload.com/image/67a012757822f/logo3.png", alt: "Client 3" },
    { src: "https://8upload.com/image/67a01275685b3/logo4.png", alt: "Client 4" },
    { src: "https://8upload.com/image/67a012755c112/logo5.png", alt: "Client 5" },
    { src: "https://8upload.com/image/67a012754d00c/logo6.png", alt: "Client 6" },
    { src: "https://8upload.com/image/67a01275404f1/logo7.png", alt: "Client 7" },
    { src: "https://8upload.com/image/67a012752aa7e/logo8.png", alt: "Client 8" },
    { src: "https://8upload.com/image/67a012751e270/logo9.png", alt: "Client 9" },
    { src: "https://8upload.com/image/67a012750d508/logo10.png", alt: "Client 10" },
    { src: "https://8upload.com/image/67a013aaa8575/logo11.png", alt: "Client 11" },
    { src: "https://8upload.com/image/67a013aa913da/logo12.png", alt: "Client 12" },
    { src: "https://8upload.com/image/67a013aa84ff4/logo13.png", alt: "Client 13" },
    { src: "https://8upload.com/image/67a013aa7a8ce/logo14.png", alt: "Client 14" },
    { src: "https://8upload.com/image/67a013aa6d86e/logo15.png", alt: "Client 15" },
  ];

  const items = logos.map((logo, index) => (
    <div key={index} className="px-3">
      <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-32 h-20 mx-auto flex items-center justify-center">
        <img
          src={logo.src}
          alt={logo.alt}
          className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition duration-300"
        />
      </div>
    </div>
  ));

  return (
    <section className="py-20 bg-gradient-to-br from-[#f9f7f4] to-[#f1e9dd] dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3A2E28] dark:text-white">
            Our Clients
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Proud partners of Qatar’s leading companies in interior design, contracting, and
            exhibition services.
          </p>
        </div>

        {/* Carousel */}
        <div className="carousel-container">
          <AliceCarousel
            autoPlay
            infinite
            mouseTracking
            disableDotsControls
            disableButtonsControls
            autoPlayInterval={2000}
            animationDuration={1000}
            responsive={{
              0: { items: 2 },
              480: { items: 3 },
              768: { items: 4 },
              1024: { items: 5 },
              1280: { items: 6 },
            }}
            items={items}
          />
        </div>
      </div>
    </section>
  );
};

export default OurClient;
