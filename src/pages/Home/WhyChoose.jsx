import React from "react";

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

  return (
    <section className="bg-[#E9DED3] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="https://8upload.com/image/67a01c3b4ad22/Al-FWZ.jpg"
            alt="AZLAAN Logo"
            className="h-24 w-24 mx-auto rounded-full shadow-lg"
          />
        </div>

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] mb-4">
          Why Choose <span className="text-[#6B4226]">AZLAAN Contracting W.L.L</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-14">
          Trusted across Qatar for custom flooring, luxurious curtains, modern kiosks, and exhibition stands.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#F6EFE6] flex items-center justify-center">
                <img
                  src={card.icon}
                  alt={card.titleEn}
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#4A342E]">{card.titleEn}</h3>
              <p className="text-sm text-[#6B4226] mb-2">{card.titleAr}</p>
              <p className="text-sm text-gray-700">{card.descEn}</p>
              <p className="text-xs text-gray-500 mt-1">{card.descAr}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
