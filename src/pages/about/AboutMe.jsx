import React, { useState } from "react";
import {
  FaBuilding,
  FaChair,
  FaCouch,
  FaEnvelope,
  FaFacebook,
  FaHandshake,
  FaInstagram,
  FaPhone,
  FaRuler,
  FaTools,
  FaWhatsapp,
} from "react-icons/fa";
import PageTitle from "../reusable/PageTitle";

const AboutUs = () => {
  const brandingColor = "#003B73";
  const accentColor = "#FFD700";

  const services = [
    "Supply and installation of carpets",
    "Parquet and laminate flooring solutions",
    "Hospital-grade vinyl flooring",
    "Mall kiosk design and construction",
    "Exhibition stand fabrication",
    "Curtain fabrics and installation",
    "Curtain fittings and accessories",
  ];

  const principles = [
    {
      title: "Our Mission",
      icon: <FaBuilding size={36} color={brandingColor} />,
      description:
        "Delivering creative, quality, and efficient design and execution solutions that exceed client expectations.",
    },
    {
      title: "Our Vision",
      icon: <FaHandshake size={36} color={brandingColor} />,
      description:
        "To be Qatar's premier integrated interior and event contracting services provider.",
    },
    {
      title: "Core Values",
      icon: <FaTools size={36} color={brandingColor} />,
      description:
        "Transparency, Commitment, Innovation, Sustainability, and Client-Centric Service.",
    },
  ];

  const getServiceIcon = (service) => {
    if (/flooring|vinyl/i.test(service)) return <FaChair size={28} color={accentColor} />;
    if (/curtain/i.test(service)) return <FaRuler size={28} color={accentColor} />;
    if (/kiosk|exhibition/i.test(service)) return <FaCouch size={28} color={accentColor} />;
    return <FaTools size={28} color={accentColor} />;
  };

 const projectData = [
  {
    image: "https://8upload.com/image/67a7f2e935ad6/Projects_1.jpg",
    caption: "Carpet Installation & Aluminum Door - Commercial Space",
    client: "Al Rayyan",
    location: "Doha, Qatar",
    date: "March 2025",
    description:
      "Successfully executed full carpet flooring and aluminum door installation for a high-traffic commercial environment. Used loop pile carpet tiles for durability, sound absorption, and a premium finish tailored to client specifications.",
  },
  {
    image: "https://8upload.com/image/684e8124edc3f/IMG-20250518-WA0034.jpg",
    caption: "Decoration Project - VIP Area",
    client: "Private Institute",
    location: "Doha",
    date: "April 2025",
    description:
      "Executed premium interior decoration with elegant curtain solutions for a VIP facility. Included motorized blackout drapes, custom curtain rods, and layered sheers—balancing luxury with functionality.",
  },
  {
    image: "https://8upload.com/image/684e812548d43/IMG-20250518-WA0039.jpg",
    caption: "Exhibition Stand Setup - Event Hall",
    client: "Qatar Trade Pair",
    location: "Doha Exhibition & Convention Center",
    date: "February 2025",
    description:
      "Designed and fabricated custom modular stands for an international exhibition. Integrated brand visuals, LED lighting, backdrops, and display racks for high visual impact and efficient assembly.",
  },
  {
    image: "https://8upload.com/image/684e81258ae1d/IMG-20250518-WA0040.jpg",
    caption: "Custom Kiosk Fabrication & Exhibition Setup - Mall",
    client: "AL FWZ Qatar",
    location: "Doha",
    date: "January 2025",
    description:
      "Delivered a turnkey mall kiosk solution with custom cabinetry, LED branding, integrated electrical systems, and retail-ready product displays. Built to maximize foot traffic and retail visibility.",
  },
  {
    image: "https://8upload.com/image/684e8125c8611/IMG-20250518-WA0043.jpg",
    caption: "Trade Fair Stall - Interior",
    client: "TechZone",
    location: "Lusail",
    date: "March 2025",
    description:
      "Installed premium laminate wood flooring and interior paneling for a trade fair exhibition. Included scratch-resistant surfaces, soundproof underlayment, and custom booth layout optimized for tech demonstrations.",
  },
  {
    image: "https://8upload.com/image/684e81260d7e2/IMG-20250518-WA0046.jpg",
    caption: "Carpet Flooring - Racing Exterior Project",
    client: "Doha Group",
    location: "Al Sadd",
    date: "December 2024",
    description:
      "Implemented specialized carpet flooring in a racing-themed outdoor zone. Materials were selected for outdoor endurance, anti-slip safety, and seamless integration with metal and wood finishings.",
  },
  {
    image: "https://8upload.com/image/684e812647434/IMG-20250518-WA0047.jpg",
    caption: "Modern Carpets Flooring - Outdoor Event",
    client: "Qatar Club",
    location: "Wakra",
    date: "February 2025",
    description:
      "Provided complete event flooring solutions with premium woven carpets, moisture-resistant backing, and swift modular deployment—enhancing event ambiance and foot comfort for guests.",
  },
  {
    image: "https://8upload.com/image/684e8126863a6/IMG-20250524-WA0010.jpg",
    caption: "Custom Booth Design - Product Launch",
    client: "Fashion Qatar",
    location: "Mall of Qatar",
    date: "April 2025",
    description:
      "Engineered a visually engaging product launch booth featuring LED-lit logo panels, stylish display counters, storage units, and interactive zones—delivering maximum brand exposure.",
  },
];



  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="font-sans text-gray-800">
      <PageTitle title="Company Profile | AZLAAN CONTRACTING W.L.L" />

      {/* Header */}
      <header
        className="bg-white shadow-sm py-12 text-center"
        style={{ borderBottom: `5px solid ${brandingColor}` }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: brandingColor }}>
          AZLAAN CONTRACTING W.L.L
        </h1>
        <p className="mt-2 text-lg text-gray-600 italic">عز لان للمقاولات ذ.م.م</p>
      </header>

      <main className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 space-y-20 my-16">
        {/* About */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-center" style={{ color: brandingColor }}>
            About Us
          </h2>
          <p className="leading-relaxed text-lg max-w-4xl mx-auto text-center">
            AZLAAN CONTRACTING W.L.L is a Qatar-based company specializing in event management
            and interior solutions. Our expertise lies in innovative design, flawless execution,
            and delivering world-class services tailored to commercial, residential, and
            institutional projects.
          </p>
        </section>

        {/* Principles */}
        <section>
          <h2 className="text-3xl font-semibold mb-10 text-center" style={{ color: brandingColor }}>
            Mission, Vision & Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {principles.map(({ title, icon, description }, idx) => (
              <div key={idx} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 flex justify-center">{icon}</div>
                <h3 className="text-xl font-semibold text-center mb-3">{title}</h3>
                <p className="text-gray-700 text-center">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center" style={{ color: brandingColor }}>
            Our Services
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <li
                key={idx}
                className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                {getServiceIcon(service)}
                <span className="text-gray-900 font-medium">{service}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Project Portfolio */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center" style={{ color: brandingColor }}>
            Project Portfolio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {projectData.map((project, idx) => (
              <div
                key={idx}
                className="relative group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.caption}
                  className="rounded-lg shadow-md object-cover w-full h-52 transition-transform transform hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm text-center py-1 px-2 rounded-b-lg">
                  {project.caption}
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
         {/* Modal */}
{selectedProject && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
    <div className="relative max-w-3xl w-full bg-white rounded-lg overflow-hidden shadow-xl">
      <button
        className="absolute top-2 right-2 text-red-500 text-3xl font-bold hover:text-red-600"
        onClick={() => setSelectedProject(null)}
      >
        ×
      </button>
      <img
        src={selectedProject.image}
        alt={selectedProject.caption}
        className="w-full max-h-[60vh] object-contain"
      />
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-gray-800">{selectedProject.caption}</h3>
        <p className="text-gray-700">{selectedProject.description}</p>
        <ul className="text-gray-600 text-sm space-y-1">
          <li><strong>Client:</strong> {selectedProject.client}</li>
          <li><strong>Location:</strong> {selectedProject.location}</li>
          <li><strong>Date:</strong> {selectedProject.date}</li>
        </ul>

        {/* WhatsApp Button */}
        <div className="pt-4 text-center">
          <a
            href="https://wa.me/97450183025"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
          >
            <FaWhatsapp size={20} /> Contact via WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
)}

        </section>

        {/* Contact */}
        <section className="bg-gray-100 rounded-lg p-10 text-center">
          <h2 className="text-3xl font-semibold mb-6" style={{ color: brandingColor }}>
            Contact Us
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-lg leading-relaxed text-gray-700">
            For inquiries, quotations, or consultations, please reach out to us. We
            look forward to collaborating on your next project.
          </p>
          <div className="flex flex-wrap justify-center gap-10 text-lg font-medium text-gray-900">
            <a href="mailto:azlaancontracting@gmail.com" className="flex items-center gap-2 hover:text-blue-700">
              <FaEnvelope size={20} /> azlaancontracting@gmail.com
            </a>
            <a href="tel:+97450183025" className="flex items-center gap-2 hover:text-blue-700">
              <FaPhone size={20} /> +974 50183025
            </a>
            <a href="https://wa.me/+97450183025" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-600">
              <FaWhatsapp size={20} /> WhatsApp
            </a>
            <a href="https://www.facebook.com/azlaan.contracting" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600">
              <FaFacebook size={20} /> Facebook
            </a>
            <a href="https://www.instagram.com/azlaancontracting" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-600">
              <FaInstagram size={20} /> Instagram
            </a>
          </div>
          <address className="mt-8 not-italic text-gray-600">
            <strong>Head Office:</strong> Bank Street, West Bay Area, 4th Floor, Office No (12/4), Doha, Qatar
            <br />
            <small>Commercial Registration No.: 170827</small>
          </address>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
