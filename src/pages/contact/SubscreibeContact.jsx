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
      .sendForm(
        "service_7b92lcx",
        "template_k6p49ij",
        e.target,
        "wqQwMjjepKRfJ6ah-"
      )
      .then(() => {
        setStatus("✅ Message sent successfully! / تم إرسال الرسالة بنجاح");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("❌ Failed to send message. Please try again. / فشل في إرسال الرسالة");
      });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-16 px-4 font-sans">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Contact Us <span className="text-orange-500">/ تواصل معنا</span>
        </h1>
        <p className="text-gray-600 leading-relaxed">
          AZLAAN CONTRACTING W.L.L provides premium flooring, curtains, kiosks & exhibition solutions in Qatar.
        </p>
        <p className="text-gray-600 mt-2" dir="rtl">
          أزلان للمقاولات تقدم حلول الأرضيات والستائر والأكشاك والمعارض بجودة عالية في قطر.
        </p>
      </motion.div>

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">
        {/* Left Panel - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 rounded-xl shadow-md space-y-6"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Contact Details / تفاصيل التواصل
          </h2>
          <ul className="text-gray-700 text-sm space-y-4">
            <li><strong>Address:</strong> Zone 26, Street 850, Building 30, Al Mansoura, Doha</li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:azlaancontracting@gmail.com" className="text-orange-600 underline">
                azlaancontracting@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+97450183025" className="text-orange-600 underline">
                +974 5018 3025
              </a>
            </li>
            <li><strong>Hours:</strong> Sat–Thu: 8 AM–1 PM, 3:30 PM–10 PM | Fri: 3:30 PM–10 PM</li>
          </ul>

          <div className="flex gap-4 mt-6 justify-center">
            <a href="tel:+97450183025" aria-label="Phone" className="text-orange-500 text-xl"><FaPhoneAlt /></a>
            <a href="https://wa.me/97450183025" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-orange-500 text-xl"><FaWhatsapp /></a>
            <a href="https://www.facebook.com/azlaan.contracting" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-orange-500 text-xl"><FaFacebook /></a>
            <a href="https://www.instagram.com/azlaancontracting/?igsh=MWp6YWtyYXZvM2hzbA%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-orange-500 text-xl"><FaInstagram /></a>
          </div>
        </motion.div>

        {/* Right Panel - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white p-8 rounded-xl shadow-md"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Message Form / نموذج الرسالة
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-600">Full Name / الاسم الكامل</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-orange-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-600">Email / البريد الإلكتروني</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-orange-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-600">Message / الرسالة</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-orange-400 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition"
            >
              Send Message / إرسال الرسالة
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
