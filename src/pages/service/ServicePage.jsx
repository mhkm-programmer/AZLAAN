import PageTitle from "../reusable/PageTitle";
import ParallaxSection from "../reusable/Parallax";
import React from "react";
import RecentServiceCard from "./RecentServiceCard";

const ServicePage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Dynamic Page Metadata */}
      <PageTitle title="AZLAAN CONTRACTING W.L.L | Services" />

      {/* Hero Banner with Parallax */}
      <ParallaxSection
        imagePath="https://8upload.com/image/684dd189100df/Contact__1_.jpg"
        title=""
        subTitle=""
      />

      {/* Introduction Section */}
      <section className="text-center py-20 px-6 md:px-24 bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#003B73] tracking-tight mb-6">
          What We Offer
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          AZLAAN CONTRACTING W.L.L is committed to providing premium installation and interior design services tailored for commercial, residential, and event-focused spaces. Our solutions blend aesthetics with functionality, delivering excellence at every step.
        </p>
        <div className="mt-6 h-1 w-20 mx-auto bg-[#FFD700] rounded-full shadow-md"></div>
      </section>

      {/* Services Grid Section */}
      <section className="bg-white py-14 px-6 md:px-16">
        <RecentServiceCard />
      </section>

      {/* Call to Action Section */}
      <section className="text-center bg-[#003B73] text-white py-16 px-6 md:px-20">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Elevate Your Space?
        </h3>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Let our experts transform your interiors or events with customized, innovative solutions.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#FFD700] text-[#003B73] font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
};

export default ServicePage;
