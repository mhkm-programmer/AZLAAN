import React from "react";
import PageTitle from "../reusable/PageTitle";
import ParallaxSection from "../reusable/Parallax";
import RecentServiceCard from "./RecentServiceCard";

const ServicePage = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Page Metadata */}
      <PageTitle title="AZLAAN CONTRACTING W.L.L | Professional Interior & Event Solutions in Qatar" />

      {/* Hero Banner with Parallax Effect */}
      <ParallaxSection
        imagePath="https://8upload.com/image/684dd189100df/Contact__1_.jpg"
        title=""
        subTitle=""
      />

      {/* Introduction Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#003B73] mb-6 tracking-tight">
          Comprehensive Services Tailored for Your Needs
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed">
          At AZLAAN CONTRACTING W.L.L, we pride ourselves on delivering premium interior design and installation services across commercial, residential, and event spaces. Our expert team combines creativity and precision to ensure every project reflects excellence and sophistication.
        </p>
        <div className="mt-6 mx-auto w-20 h-1 rounded-full bg-[#FFD700] shadow-md"></div>
      </section>

      {/* Services Overview Section */}
      <section className="py-14 px-6 md:px-16 bg-white">
        <RecentServiceCard />
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#003B73] text-white text-center py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Space?
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
          Contact our team of experts today for personalized solutions that elevate your interiors and events to the highest standards of quality and style.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#FFD700] text-[#003B73] font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
          aria-label="Contact AZLAAN CONTRACTING W.L.L"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default ServicePage;
