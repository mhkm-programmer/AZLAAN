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

  const services = [
    "Supply and installation of carpets",
    "Parquet and laminate flooring solutions",
    "Hospital-grade vinyl flooring",
    "Mall kiosk design and construction",
    "Exhibition stand fabrication",
    "Curtain fabrics and installation",
    "Curtain fittings and accessories"
  ];

  return (
    <div>
      <PageTitle title="Company Profile | AZLAAN CONTRACTING W.L.L" />
      <div className="bg-white py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* Company Overview */}
          <section className="text-center">
            <h1 className="text-5xl font-extrabold tracking-tight" style={{ color: brandingColor }}>AZLAAN CONTRACTING W.L.L</h1>
            <p className="text-lg text-gray-600 mt-2">عز لان للمقاولات ذ.م.م</p>
            <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
              AZLAAN CONTRACTING W.L.L is a Qatar-based company specializing in Event Management and Interior Solutions. We bring innovative design, seamless execution, and world-class service to commercial, residential, and institutional projects.
            </p>
          </section>

          {/* Company Principles */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: "Our Mission",
              icon: <FaBuilding />,
              desc: "To exceed client expectations by delivering design and execution solutions built on creativity, quality, and efficiency."
            }, {
              title: "Our Vision",
              icon: <FaHandshake />,
              desc: "To be recognized as a leading provider of integrated interior and event contracting services in Qatar."
            }, {
              title: "Core Values",
              icon: <FaTools />,
              desc: "Transparency, Commitment, Innovation, Sustainability, and Client-Centric Service."
            }].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 border-t-4 rounded-xl p-6 text-center shadow-md"
                style={{ borderColor: brandingColor }}
              >
                <div className="text-4xl mb-3" style={{ color: brandingColor }}>{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </section>

          {/* Services */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: brandingColor }}>Our Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              We offer a comprehensive range of services including floor coverings, window solutions, modular setups, and event installations — customized to meet your specific project requirements.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border rounded-xl p-6 shadow-sm text-center"
                >
                  <div className="text-4xl mb-4" style={{ color: brandingColor }}>
                    {(service.includes("flooring") || service.includes("vinyl")) && <FaChair />} 
                    {service.includes("curtain") && <FaRuler />} 
                    {(service.includes("kiosk") || service.includes("exhibition")) && <FaCouch />}
                  </div>
                  <p className="text-base font-medium text-gray-800">{service}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Project Gallery */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-10" style={{ color: brandingColor }}>Project Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {companyImages.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={`Project ${i + 1}`}
                  className="rounded-lg shadow-sm object-cover w-full h-52"
                  whileHover={{ scale: 1.03 }}
                />
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ color: brandingColor }}>Get In Touch</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Reach out for inquiries, quotations, or consultations. We look forward to collaborating on your next project.
            </p>
            <div className="flex flex-wrap justify-center gap-5 text-base">
              <a href="mailto:azlaancontracting@gmail.com" className="flex items-center gap-2" style={{ color: brandingColor }}>
                <FaEnvelope /> azlaancontracting@gmail.com
              </a>
              <a href="tel:+97450183025" className="flex items-center gap-2" style={{ color: brandingColor }}>
                <FaPhone /> +974 50183025
              </a>
              <a href="https://wa.me/+97450183025" target="_blank" className="flex items-center gap-2" style={{ color: brandingColor }}>
                <FaWhatsapp /> WhatsApp
              </a>
              <a href="https://www.facebook.com/azlaan.contracting" target="_blank" className="flex items-center gap-2" style={{ color: brandingColor }}>
                <FaFacebook /> Facebook
              </a>
              <a href="https://www.instagram.com/azlaancontracting" target="_blank" className="flex items-center gap-2" style={{ color: brandingColor }}>
                <FaInstagram /> Instagram
              </a>
            </div>
            <div className="mt-6 text-gray-700">
              <strong>Head Office:</strong> Bank Street, West Bay Area, 4th Floor, Office No (12/4), Doha, Qatar
            </div>
            <div className="mt-1 text-sm text-gray-500">Commercial Registration No.: 170827</div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
