import {
  FaArrowDown,
  FaArrowUp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import React, { useEffect, useState } from "react";

const ContactBubble = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      setShowScrollTop(scrollTop > 100);
      setShowScrollBottom(scrollTop + clientHeight < scrollHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });

  const iconSize = isMobile ? 20 : 26;
  const commonClasses =
    "p-3 rounded-full shadow-lg transition hover:scale-110 duration-300";

  return (
    <>
      {/* 🌐 Contact Shortcuts */}
      <div className="fixed bottom-32 right-5 flex flex-col items-center space-y-3 z-50">

        {/* WhatsApp */}
        <a
          href="https://wa.me/97450183025"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className={`${commonClasses} bg-green-500 text-white hover:bg-green-600`}
        >
          <FaWhatsapp size={iconSize} />
        </a>

        {/* Phone */}
        <a
          href="tel:+97450183025"
          title="Call Us"
          className={`${commonClasses} bg-sky-600 text-white hover:bg-sky-700`}
        >
          <FaPhoneAlt size={iconSize} />
        </a>

        {/* Email */}
        <a
          href="mailto:azlaancontracting@gmail.com"
          title="Send Email"
          className={`${commonClasses} bg-amber-600 text-white hover:bg-amber-700`}
        >
          <FaEnvelope size={iconSize} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/azlaancontracting/?igsh=MWp6YWtyYXZvM2hzbA=="
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          className={`${commonClasses} bg-pink-500 text-white hover:bg-pink-600`}
        >
          <FaInstagram size={iconSize} />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/azlaan.contracting"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook Page"
          className={`${commonClasses} bg-indigo-700 text-white hover:bg-indigo-800`}
        >
          <FaFacebook size={iconSize} />
        </a>
      </div>

      {/* 🔝 Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          title="Back to Top"
          className="fixed bottom-16 right-5 bg-neutral-800 text-white p-3 rounded-full shadow-lg hover:bg-neutral-900 transition"
        >
          <FaArrowUp size={24} />
        </button>
      )}

      {/* 🔚 Scroll to Bottom */}
      {showScrollBottom && (
        <button
          onClick={scrollToBottom}
          title="Scroll to Bottom"
          className="fixed bottom-5 right-5 bg-neutral-800 text-white p-3 rounded-full shadow-lg hover:bg-neutral-900 transition"
        >
          <FaArrowDown size={24} />
        </button>
      )}
    </>
  );
};

export default ContactBubble;
