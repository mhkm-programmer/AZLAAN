import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyChoose = () => {
  const cards = [
    {
      icon: "https://8upload.com/image/67a000235804f/Premium_Furniture.jpg",
      titleEn: "Tailored Flooring",
      titleAr: "أرضيات مصممة خصيصاً",
      descEn: "Precision-installed laminate, SPC, and parquet floors to enhance every environment.",
      descAr: "تركيب احترافي للأرضيات اللامينيت وSPC والباركيه بأسلوب راقٍ.",
    },
    {
      icon: "https://8upload.com/image/67a000233869c/Skilled_Upholstery.jpg",
      titleEn: "Elegant Curtains",
      titleAr: "ستائر أنيقة",
      descEn: "Custom curtain solutions with premium fabrics and stylish finishes.",
      descAr: "تصاميم ستائر مخصصة بأقمشة فاخرة وتفاصيل أنيقة.",
    },
    {
      icon: "https://8upload.com/image/67a0002314733/Modern_Interior_Design.jpg",
      titleEn: "Exhibition Kiosks",
      titleAr: "أكشاك المعارض",
      descEn: "Visually striking and durable kiosks for exhibitions and promotional events.",
      descAr: "أكشاك عرض متينة ومبتكرة للمناسبات والمعارض.",
    },
    {
      icon: "https://8upload.com/image/67a00022e0e7f/Affordable_Pricing.jpg",
      titleEn: "Affordable Excellence",
      titleAr: "جودة بأسعار مناسبة",
      descEn: "Exceptional craftsmanship with competitive pricing to suit all budgets.",
      descAr: "حرفية عالية بأسعار مناسبة تلائم جميع الميزانيات.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
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
    <section className="bg-[#FAF9F7] py-20 px-4 md:px-10 lg:px-16 font-inter">
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-10">
          <img
            src="https://8upload.com/image/67a01c3b4ad22/Al-FWZ.jpg"
            alt="AZLAAN Logo"
            className="h-24 w-24 mx-auto rounded-full border border-gray-300 shadow-md"
          />
        </div>

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
          Why Choose <span className="text-amber-700">AZLAAN Contracting W.L.L</span>
        </h2>
        <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto mb-14">
          Trusted across Qatar for flooring, curtains, kiosks, and luxury exhibition solutions.
        </p>

        {/* Auto-Sliding Cards */}
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 group h-full">
                <div className="w-20 h-20 mx-auto mb-6 rounded-xl bg-gray-100 shadow-inner flex items-center justify-center">
                  <img
                    src={card.icon}
                    alt={card.titleEn}
                    className="h-16 w-16 object-contain group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-1">{card.titleEn}</h3>
                <p className="text-sm text-amber-700 font-medium mb-2">{card.titleAr}</p>
                <p className="text-sm text-neutral-600">{card.descEn}</p>
                <p className="text-xs text-neutral-400 mt-1">{card.descAr}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WhyChoose;
