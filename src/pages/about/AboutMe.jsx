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
import { motion } from "framer-motion";

const AboutUs = () => {
  const companyImages = [
    "https://8upload.com/image/67a7f2e935ad6/Projects_1.jpg",
    "https://8upload.com/image/67a7f2e90b2d7/Project_2.jpg",
    "https://8upload.com/image/67a7f2e8d7637/Projects_3.jpg",
    "https://8upload.com/image/67a7f2e8b0782/Projects_4.jpg",
  ];

  const brandingColor = "#003B73";
  const accentColor = "#FFD700";

  return (
    <div>
    <PageTitle title="About Us | AZLAAN CONTRACTING W.L.L | Interior & Event Solutions in Qatar"  />
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[brandingColor]">AZLAAN CONTRACTING W.L.L</h1>
          <p className="text-xl text-gray-600 mt-4">عز لان للمقاولات ززمزم</p>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            Your partner in precision flooring, fit-out, and architectural contracting. Serving excellence across Qatar.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {["Mission", "Vision", "Values"].map((title, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4"
              style={{ borderColor: brandingColor }}
            >
              <div className="text-4xl text-[brandingColor] mb-4">
                {title === "Mission" && <FaBuilding />}
                {title === "Vision" && <FaHandshake />}
                {title === "Values" && <FaTools />}
              </div>
              <h3 className="text-xl font-bold mb-2">Our {title}</h3>
              <p className="text-gray-600">
                {title === "Mission" && "To provide unparalleled contracting services grounded in craftsmanship, innovation, and client satisfaction."}
                {title === "Vision" && "To be a leader in construction excellence, shaping sustainable and intelligent spaces in Qatar."}
                {title === "Values" && "Integrity, Quality, Innovation, and Commitment to building trust and delivering excellence."}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Services */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[brandingColor] mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            We deliver bespoke contracting solutions tailored for commercial, residential, and institutional clients.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {["Flooring Solutions", "Interior Fit-Outs", "Kiosks & Exhibitions"].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white border rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="text-4xl text-[brandingColor] mb-4">
                  {service === "Flooring Solutions" && <FaChair />}
                  {service === "Interior Fit-Outs" && <FaRuler />}
                  {service === "Kiosks & Exhibitions" && <FaCouch />}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600">
                  {service === "Flooring Solutions" && "From hardwood to vinyl, we provide premium surface solutions for all environments."}
                  {service === "Interior Fit-Outs" && "We shape stunning interiors with high-precision wall, ceiling, and partition work."}
                  {service === "Kiosks & Exhibitions" && "Striking, functional, and brand-driven kiosks and displays that captivate."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[brandingColor] text-center mb-8">Our Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {companyImages.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`AZLAAN Project ${i + 1}`}
                className="rounded-xl shadow-md object-cover w-full h-52"
                whileHover={{ scale: 1.03 }}
              />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[brandingColor] mb-4">Let’s Connect</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Reach out for collaboration or consultation. Our team is ready to support your project from concept to completion.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[brandingColor] text-base">
            <a href="mailto:azlaancontracting@gmail.com" className="flex items-center gap-2 hover:text-[accentColor]">
              <FaEnvelope /> azlaancontracting@gmail.com
            </a>
            <a href="tel:+97450183025" className="flex items-center gap-2 hover:text-[accentColor]">
              <FaPhone /> +974 50183025
            </a>
            <a href="tel:+97433600350" className="flex items-center gap-2 hover:text-[accentColor]">
              <FaPhone /> +974 33600350
            </a>
            <a href="tel:+97460005351" className="flex items-center gap-2 hover:text-[accentColor]">
              <FaPhone /> +974 60005351
            </a>
            <a href="https://wa.me/+97450183025" target="_blank" className="flex items-center gap-2 hover:text-[accentColor]">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
          <div className="mt-6 text-gray-700">
            <strong>Office Address:</strong> Bank Street, West Bay Area, 4th Floor, Office No (12/4), Doha, Qatar
          </div>
          <div className="mt-2 text-sm text-gray-500">CR No.: 170827</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
