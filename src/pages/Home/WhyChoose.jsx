import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyChoose = () => {
  const cards = [
    {
      icon: "https://8upload.com/image/67a000235804f/Premium_Furniture.jpg",
      title: "Tailored Flooring",
      desc: "Precision-installed laminate, SPC, and parquet floors to enhance every environment.",
    },
    {
      icon: "https://8upload.com/image/67a000233869c/Skilled_Upholstery.jpg",
      title: "Elegant Curtains",
      desc: "Custom curtain solutions with premium fabrics and stylish finishes.",
    },
    {
      icon: "https://8upload.com/image/67a0002314733/Modern_Interior_Design.jpg",
      title: "Exhibition Kiosks",
      desc: "Visually striking and durable kiosks for exhibitions and promotional events.",
    },
    {
      icon: "https://8upload.com/image/67a00022e0e7f/Affordable_Pricing.jpg",
      title: "Affordable Excellence",
      desc: "Exceptional craftsmanship with competitive pricing to suit all budgets.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    arrows: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#FDFBF9] py-20 px-4 sm:px-8 md:px-12 lg:px-20 font-inter">
      <div className="max-w-7xl mx-auto text-center">
    {/* Logo */}
<div className="mb-8 sm:mb-10">
  <img
    src="https://8upload.com/image/67a01c3b4ad22/Al-FWZ.jpg"
    alt="AZLAAN Logo"
    className="h-24 w-24 mx-auto rounded-full border-4 border-amber-700 shadow-lg"
  />
</div>

{/* Title */}
<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug mb-4">
  Why Choose <span className="text-amber-700">AZLAAN Contracting W.L.L</span>
</h2>

{/* Subheading */}
<p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto mb-12 sm:mb-14 px-2">
  AZLAAN is a trusted name across Qatar, specializing in high-quality flooring, elegant curtains,
  custom kiosks, and premium exhibition solutions designed to elevate your space.
</p>

        {/* Cards */}
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="px-3">
              <div className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full text-center">
                <div className="w-24 h-24 rounded-xl bg-gray-100 flex items-center justify-center mb-5 mx-auto overflow-hidden">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WhyChoose;
