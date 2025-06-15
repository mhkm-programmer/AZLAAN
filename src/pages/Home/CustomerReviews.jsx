import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const CustomerReviews = () => {
  const reviews = [
    {
      image: "https://8upload.com/image/683b19d4b15a3/Leonardo_Phoenix_10_AZLAAN_CONTRACTING_WLL_CR_No_170827azla_2.jpgz",
      quoteEn: "AZLAAN turned our vision into reality. Their execution was flawless, timely, and exceeded expectations.",
      name: "Khalid Al-Mansoori",
      title: "CEO, Elite Real Estate Qatar",
    },
    {
      image: "https://8upload.com/image/683b19d553549/Noor_.jpg",
      quoteEn: "The craftsmanship in their flooring and curtain solutions is unmatched. Highly recommended!",
      name: "Reem Abdulrahman",
      title: "Interior Consultant, Lusail Projects",
    },
    {
      image: "https://8upload.com/image/67a01a1c849be/Mohammed_Khalifa.jpg",
      quoteEn: "From kiosks to custom booths, their work stood out at every exhibition. Exceptional quality and detail.",
      name: "Mohammed Khalifa",
      title: "Events Manager, Vision Expo Qatar",
    },
    {
      image: "https://8upload.com/image/67a01a1c6130d/Sara_Ibrahim.jpg",
      quoteEn: "AZLAAN’s team delivered luxurious finishes and a smooth experience from start to finish.",
      name: "Sara Ibrahim",
      title: "Managing Director, DecoNest Interiors",
    },
  ];

  const responsive = {
    0: { items: 1 },
    640: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
  };

  const items = reviews.map((review, index) => (
    <div
      key={index}
      className="flex flex-col items-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 mx-4"
    >
      <img
        src={review.image}
        alt={review.name}
        className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-[#8B6B47] mb-5"
      />
      <div className="text-center max-w-xs">
        <p className="text-gray-800 dark:text-gray-200 italic text-base leading-relaxed mb-4">
          “{review.quoteEn}”
        </p>
        <p className="text-[#8B6B47] dark:text-[#e0c7a6] font-semibold text-lg">{review.name}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{review.title}</p>
      </div>
    </div>
  ));

  return (
    <section className="py-20 bg-gradient-to-br from-[#fdf9f4] to-[#e8dfd4] dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#8B6B47] dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Hear directly from our valued clients across Qatar’s construction and interior sectors.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            autoPlay
            infinite
            autoPlayInterval={4000}
            animationDuration={800}
            disableButtonsControls
            disableDotsControls={false}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
