import React from "react";

const WhyChoose = () => {
  return (
    <section className="bg-[#f9f9f6] dark:bg-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-6">
          <img
            src="https://8upload.com/image/67a01c3b4ad22/Al-FWZ.jpg"
            alt="AZLAAN Logo"
            className="h-20 w-20 mx-auto rounded-full shadow-md"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Why Choose <span className="text-[#6B4226]">AZLAAN Contracting W.L.L</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Your trusted partner in premium flooring, curtain, kiosk & exhibition stand solutions across Qatar.
        </p>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "https://8upload.com/image/67a000235804f/Premium_Furniture.jpg",
              titleEn: "Tailored Flooring",
              titleAr: "أرضيات مصممة خصيصاً",
              descEn: "Expertly installed laminate, SPC, and parquet floors that elevate your space.",
              descAr: "تركيب احترافي للأرضيات اللامينيت وSPC والباركيه لإضفاء لمسة فاخرة.",
            },
            {
              icon: "https://8upload.com/image/67a000233869c/Skilled_Upholstery.jpg",
              titleEn: "Elegant Curtains",
              titleAr: "ستائر أنيقة",
              descEn: "Custom-made curtain designs with quality fabrics and stylish fittings.",
              descAr: "تصاميم ستائر مخصصة بأقمشة فاخرة وتركيبات عصرية.",
            },
            {
              icon: "https://8upload.com/image/67a0002314733/Modern_Interior_Design.jpg",
              titleEn: "Exhibition Kiosks",
              titleAr: "أكشاك المعارض",
              descEn: "Modern, durable kiosks & stands built to impress at every event.",
              descAr: "أكشاك وحوامل متينة وعصرية لعرض أعمالكم بتميز في كل مناسبة.",
            },
            {
              icon: "https://8upload.com/image/67a00022e0e7f/Affordable_Pricing.jpg",
              titleEn: "Affordable Excellence",
              titleAr: "جودة بأسعار مناسبة",
              descEn: "Delivering top-tier craftsmanship without compromising your budget.",
              descAr: "نوفر أفضل جودة بأقل تكلفة، بما يناسب جميع الميزانيات.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow hover:shadow-xl transition duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#f1e7da] dark:bg-[#d35400] flex items-center justify-center">
                <img
                  src={card.icon}
                  alt={`${card.titleEn} Icon`}
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {card.titleEn}
              </h3>
              <p className="text-xs text-[#6B4226] mt-1">{card.titleAr}</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{card.descEn}</p>
              <p className="text-xs text-gray-500 mt-1">{card.descAr}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
