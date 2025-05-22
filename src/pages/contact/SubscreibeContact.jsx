import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import React, { useState } from "react";

import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

const SubscribeContact = () => {
  const [activeTheme] = useThemeSwitcher();
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
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  // Define colors based on theme for consistent branding
  const primaryColor = activeTheme === "dark" ? "#4F46E5" : "#3B82F6"; // Indigo-600 and Blue-500
  const accentColor = activeTheme === "dark" ? "#9333EA" : "#8B5CF6"; // Purple-600 and Purple-500
  const mutedText = activeTheme === "dark" ? "text-gray-300" : "text-gray-700";
  const bgSecondary = activeTheme === "dark" ? "bg-gray-800" : "bg-gray-100";
  const bgPrimary = activeTheme === "dark" ? "bg-gray-900" : "bg-white";

  return (
    <div className={`container mx-auto py-16 px-6 max-w-7xl`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-16"
      >
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: primaryColor }}
        >
          Get in Touch
        </h1>
        <p
          className={`text-lg md:text-xl max-w-3xl mx-auto ${mutedText}`}
          style={{ lineHeight: "1.6" }}
        >
          AZLAAN CONTRACTING W.L.L specializes in premium flooring, curtain
          solutions, kiosk & exhibition stand services across Qatar. Reach out
          for project consultations or service inquiries.
        </p>
      </motion.div>

      <section className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`${bgSecondary} p-8 rounded-2xl shadow-lg`}
        >
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: primaryColor }}
          >
            Contact Information
          </h2>
          <div className={`space-y-4 ${mutedText} text-base leading-relaxed`}>
            <p>
              <strong>Address:</strong> Zone 26, Street 850, Building 30, Al
              Mansoura, Doha, Qatar
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:qatarwintrading@gmail.com"
                className="underline"
                style={{ color: primaryColor }}
              >
                qatarwintrading@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+97455760872"
                className="underline"
                style={{ color: primaryColor }}
              >
                +974 5576 0872
              </a>
            </p>
            <p>
              <strong>Hours:</strong>
              <br />
              Sat-Thu: 8:00 AM – 1:00 PM, 3:30 PM – 10:00 PM
              <br />
              Fri: 3:30 PM – 10:00 PM
            </p>
            <p>
              <strong>We’re here to discuss your next project!</strong>
            </p>
          </div>
          <div className="flex gap-6 text-3xl mt-8" style={{ color: primaryColor }}>
            <a
              href="tel:+97455760872"
              className="hover:text-purple-600 transition-colors duration-300"
              aria-label="Call us"
            >
              <FaPhoneAlt />
            </a>
            <a
              href="https://wa.me/+97455760872"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition-colors duration-300"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573137238181"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition-colors duration-300"
              aria-label="Facebook profile"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/rokibwin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition-colors duration-300"
              aria-label="Instagram profile"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={`${bgPrimary} p-8 rounded-2xl shadow-lg`}
        >
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: primaryColor }}
          >
            Send Us a Message
          </h2>
          <p className={`${mutedText} mb-6 text-base`}>
            We value your message. Fill out the form and our team will contact
            you shortly.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium mb-1 ${mutedText}`}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border rounded-xl focus:outline-none focus:ring-2`}
                style={{
                  borderColor: activeTheme === "dark" ? "#4B5563" : "#D1D5DB",
                  backgroundColor: activeTheme === "dark" ? "#1F2937" : "#FFFFFF",
                  color: activeTheme === "dark" ? "#F9FAFB" : "#111827",
                  transition: "border-color 0.3s ease",
                }}
                required
                aria-required="true"
                aria-describedby="nameHelp"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-1 ${mutedText}`}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-xl focus:outline-none focus:ring-2`}
                style={{
                  borderColor: activeTheme === "dark" ? "#4B5563" : "#D1D5DB",
                  backgroundColor: activeTheme === "dark" ? "#1F2937" : "#FFFFFF",
                  color: activeTheme === "dark" ? "#F9FAFB" : "#111827",
                  transition: "border-color 0.3s ease",
                }}
                required
                aria-required="true"
                aria-describedby="emailHelp"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium mb-1 ${mutedText}`}
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full p-3 border rounded-xl focus:outline-none focus:ring-2 resize-none`}
                style={{
                  borderColor: activeTheme === "dark" ? "#4B5563" : "#D1D5DB",
                  backgroundColor: activeTheme === "dark" ? "#1F2937" : "#FFFFFF",
                  color: activeTheme === "dark" ? "#F9FAFB" : "#111827",
                  transition: "border-color 0.3s ease",
                }}
                required
                aria-required="true"
                aria-describedby="messageHelp"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold transition-colors duration-300"
              style={{
                backgroundColor: primaryColor,
                color: "#fff",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = accentColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primaryColor)}
            >
              Send Message
            </button>
            {status && (
              <p
                className={`text-center mt-4 ${
                  status.includes("success") ? "text-green-600" : "text-red-600"
                } font-medium`}
                role="alert"
              >
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default SubscribeContact;
