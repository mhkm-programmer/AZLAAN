import "react-alice-carousel/lib/alice-carousel.css";

import AliceCarousel from "react-alice-carousel";
import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      image: "https://8upload.com/image/67a01a1ccc5a5/Ahmed_Al-Ansari.jpg",
      quoteEn: "LuxeFurnish exceeded my expectations with their custom furniture and professional service.",
      quoteAr: "لقد فاق فريق لوكس فرنيش توقعاتي بالأثاث المصمم والخدمة الاحترافية.",
      name: "Ahmed Al-Ansari",
      title: "Business Owner, Doha",
    },
    {
      image: "https://8upload.com/image/67a01a1ca7613/Noor_Fatima.jpg",
      quoteEn: "Their expertise in interior design transformed our home into a modern masterpiece.",
      quoteAr: "خبرتهم في التصميم الداخلي حولت منزلنا إلى تحفة فنية عصرية.",
      name: "Noor Fatima",
      title: "HR Manager, Qatar Tech Solutions",
    },
    {
      image: "https://8upload.com/image/67a01a1c849be/Mohammed_Khalifa.jpg",
     
    },
    {
      image: "https://8upload.com/image/67a01a1c6130d/Sara_Ibrahim.jpg",
      quoteEn: "Top-notch furniture and excellent attention to detail!",
      quoteAr: "أثاث راقٍ واهتمام رائع بالتفاصيل!",
      name: "Sara Ibrahim",
      title: "Entrepreneur, Doha",
    },
  ];

  const items = reviews.map((review, index) => (
    <div
      key={index}
      className="flex flex-col items-center p-8 mx-4 bg-white dark:bg-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-[1.03]"
    >
      <img
        src={review.image}
        alt={review.name}
        className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-[#8B6B47] mb-6"
      />
      <div className="text-center max-w-xs">
        <p className="text-gray-800 dark:text-gray-200 italic text-base leading-relaxed mb-3">
          “{review.quoteEn}”
        </p>
        <p dir="rtl" className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
          "{review.quoteAr}"
        </p>
        <p className="text-[#8B6B47] dark:text-[#d1bfa7] font-semibold text-lg">{review.name}</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{review.title}</p>
      </div>
    </div>
  ));

  return (
    <section className="py-20 bg-gradient-to-br from-[#fdf9f4] to-[#e8dfd4] dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-[#8B6B47] dark:text-white mb-4 tracking-wide">
            What Our Customers Say
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Hear directly from our valued clients.
          </p>
          <p className="text-[#8B6B47] text-sm mt-2" dir="rtl">
            استمع إلى آراء عملائنا الكرام حول خدماتنا المتميزة في التصميم والتنفيذ.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            autoPlayInterval={5000}
            infinite
            animationDuration={1000}
            disableButtonsControls
            disableDotsControls={false}
            responsive={{
              0: { items: 1 },
              768: { items: 2 },
              1024: { items: 3 },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
