import "react-alice-carousel/lib/alice-carousel.css";

import AliceCarousel from "react-alice-carousel";
import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      image: "https://8upload.com/image/67a01a1ccc5a5/Ahmed_Al-Ansari.jpg",
      quote: "LuxeFurnish exceeded my expectations with their custom furniture and professional service.",
      name: "Ahmed Al-Ansari",
      title: "Business Owner, Doha",
    },
    {
      image: "https://8upload.com/image/67a01a1ca7613/Noor_Fatima.jpg",
      quote: "Their expertise in interior design transformed our home into a modern masterpiece.",
      name: "Noor Fatima",
      title: "HR Manager, Qatar Tech Solutions",
    },
    {
      image: "https://8upload.com/image/67a01a1c849be/Mohammed_Khalifa.jpg",
      quote: "Reliable, efficient, and high-quality craftsmanship. Highly recommend LuxeFurnish.",
      name: "Mohammed Khalifa",
      title: "CEO, Khalifa Enterprises",
    },
    {
      image: "https://8upload.com/image/67a01a1c6130d/Sara_Ibrahim.jpg",
      quote: "Top-notch furniture and excellent attention to detail!",
      name: "Sara Ibrahim",
      title: "Entrepreneur, Doha",
    },
  ];

  const items = reviews.map((review, index) => (
    <div
      key={index}
      className="flex flex-col items-center p-8 mx-4 bg-white dark:bg-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-[1.05]"
    >
      <img
        src={review.image}
        alt={review.name}
        className="w-28 h-28 rounded-full object-cover border-4 border-[#8B6B47] mb-6 transition-transform duration-300 hover:scale-110"
      />
      <p className="text-lg italic text-gray-800 dark:text-gray-200 text-center leading-relaxed mb-6 max-w-xs">
        “{review.quote}”
      </p>
      <div className="text-center">
        <p className="text-[#8B6B47] dark:text-[#d1bfa7] font-semibold text-xl">{review.name}</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{review.title}</p>
      </div>
    </div>
  ));

  return (
    <section className="py-20 bg-gradient-to-br from-[#faf6f0] to-[#e8e1d6] dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-[#8B6B47] dark:text-white mb-4 tracking-wide">
            What Our Customers Say
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Hear directly from clients who trusted LuxeFurnish for exceptional interior design and custom craftsmanship.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            autoPlayInterval={4500}
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
