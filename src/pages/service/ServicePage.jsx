import PageTitle from "../reusable/PageTitle";
import ParallaxSection from "../reusable/Parallax";
import React from "react";
import RecentServiceCard from "./RecentServiceCard";

const ServicePage = () => {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      {/* Dynamic Page Metadata */}
      <PageTitle title="Azlaan Contracting W.L.L | Services" />

      {/* Hero Banner with Parallax */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67a809e2eb5f0/Services.jpg"
        title="Our Services"
        subTitle="Crafted solutions in Flooring, Curtains, Kiosks, and Exhibition Booths"
      />

      {/* Section Heading */}
      <section className="text-center py-16 px-6 md:px-20 bg-white">
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 tracking-tight mb-4">
          What We Offer
        </h2>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          At Azlaan Contracting W.L.L, we deliver premium installation and interior solutions tailored for commercial, residential, and event-based environments.
        </p>
        <div className="mt-6 h-1 w-20 mx-auto bg-indigo-500 rounded-full shadow-md shadow-indigo-300"></div>
      </section>

      {/* Dynamic Service Cards Section */}
      <div className="pb-20">
        <RecentServiceCard />
      </div>
    </div>
  );
};

export default ServicePage;
