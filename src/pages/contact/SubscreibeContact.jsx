import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const SubscribeContact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_7b92lcx", "template_k6p49ij", e.target, "wqQwMjjepKRfJ6ah-")
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("❌ Failed to send message. Please try again.");
      });
  };

  return (
    <div className="bg-[#F9F8F6] min-h-screen flex flex-col items-center justify-center py-20 px-4 font-sans">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mb-12"
      >
        <h1 className="text-4xl font-bold text-[#4A342E] mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          AZLAAN CONTRACTING W.L.L provides premium flooring, curtains, kiosks, and exhibition solutions in Qatar.
        </p>
      </motion.div>

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >
          <h2 className="text-2xl font-semibold text-[#4A342E] mb-4">Contact Details</h2>
          <ul className="text-gray-700 text-base space-y-3">
            <li><strong>📍 Address:</strong> Zone 26, Street 850, Building 30, Al Mansoura, Doha</li>
            <li>
              <strong>📧 Email:</strong>{" "}
              <a href="mailto:azlaancontracting@gmail.com" className="text-[#4A342E] underline">
                azlaancontracting@gmail.com
              </a>
            </li>
            <li>
              <strong>📞 Phone:</strong>{" "}
              <a href="tel:+97450183025" className="text-[#4A342E] underline">
                +974 5018 3025
              </a>
            </li>
            <li><strong>🕒 Hours:</strong> Sat–Thu: 8 AM–1 PM, 3:30 PM–10 PM | Fri: 3:30 PM–10 PM</li>
          </ul>

          <div className="flex gap-5 mt-6 justify-center text-[#4A342E] text-xl">
            <a href="tel:+97450183025" aria-label="Phone"><FaPhoneAlt /></a>
            <a href="https://wa.me/97450183025" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="https://www.facebook.com/azlaan.contracting" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://www.instagram.com/azlaancontracting" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-[#4A342E] mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-[#4A342E] text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-[#4A342E] text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-[#4A342E] resize-none text-gray-800"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#4A342E] hover:bg-[#3A2A24] text-white font-semibold py-3 rounded-md transition"
            >
              Send Message
            </button>
            {status && (
              <p className={`text-sm font-medium text-center ${status.includes("✅") ? "text-green-600" : "text-red-600"}`}>
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SubscribeContact;
