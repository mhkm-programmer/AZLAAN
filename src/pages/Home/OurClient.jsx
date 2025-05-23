import "react-alice-carousel/lib/alice-carousel.css";

import AliceCarousel from "react-alice-carousel";
import React from "react";

const OurClient = () => {
  const logos = [
    { src: "https://8upload.com/image/67a012759526a/logo1.png", alt: "عميل 1" },
    { src: "https://8upload.com/image/67a0127588f6f/logo2.png", alt: "عميل 2" },
    { src: "https://8upload.com/image/67a012757822f/logo3.png", alt: "عميل 3" },
    { src: "https://8upload.com/image/67a01275685b3/logo4.png", alt: "عميل 4" },
    { src: "https://8upload.com/image/67a012755c112/logo5.png", alt: "عميل 5" },
    { src: "https://8upload.com/image/67a012754d00c/logo6.png", alt: "عميل 6" },
    { src: "https://8upload.com/image/67a01275404f1/logo7.png", alt: "عميل 7" },
    { src: "https://8upload.com/image/67a012752aa7e/logo8.png", alt: "عميل 8" },
    { src: "https://8upload.com/image/67a012751e270/logo9.png", alt: "عميل 9" },
    { src: "https://8upload.com/image/67a012750d508/logo10.png", alt: "عميل 10" },
    { src: "https://8upload.com/image/67a013aaa8575/logo11.png", alt: "عميل 11" },
    { src: "https://8upload.com/image/67a013aa913da/logo12.png", alt: "عميل 12" },
    { src: "https://8upload.com/image/67a013aa84ff4/logo13.png", alt: "عميل 13" },
    { src: "https://8upload.com/image/67a013aa7a8ce/logo14.png", alt: "عميل 14" },
    { src: "https://8upload.com/image/67a013aa6d86e/logo15.png", alt: "عميل 15" },
  ];

  const items = logos.map((logo, index) => (
    <div key={index} className="flex justify-center items-center px-3">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-36 h-20 flex items-center justify-center">
        <img
          src={logo.src}
          alt={logo.alt}
          className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  ));

  return (
    <section className="py-20 bg-gradient-to-br from-[#f5f3ef] to-[#eee2d4] dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#6B4226] dark:text-white tracking-tight">
            Our Esteemed Clients
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We are proud to be a trusted partner of leading companies in Qatar’s interior design, contracting, and exhibition sectors.
          </p>
          <p className="mt-3 text-sm text-[#6B4226] font-medium max-w-3xl mx-auto text-right rtl">
            نفخر بكوننا الشريك الموثوق لأكبر الشركات الرائدة في مجالات التصميم الداخلي، المقاولات، وتنظيم المعارض في دولة قطر.
          </p>
        </div>

        <div className="carousel-container">
          <AliceCarousel
            autoPlay
            autoPlayInterval={2000}
            infinite
            disableButtonsControls
            disableDotsControls
            mouseTracking
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
