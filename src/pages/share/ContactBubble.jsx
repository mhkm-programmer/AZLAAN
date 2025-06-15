import React, { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const ContactBubble = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToBottom = () =>
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });

  const iconSize = isMobile ? 20 : 24;
  const bubbleBase =
    "p-3 rounded-full shadow-md text-white transition-transform duration-300 hover:scale-110";

  const contactLinks = [
    {
      href: "https://wa.me/97450183025",
      icon: <FaWhatsapp size={iconSize} />,
      bg: "bg-green-500 hover:bg-green-600",
      label: "Chat on WhatsApp",
    },
    {
      href: "tel:+97450183025",
      icon: <FaPhoneAlt size={iconSize} />,
      bg: "bg-sky-600 hover:bg-sky-700",
      label: "Call Us",
    },
    {
      href: "mailto:azlaancontracting@gmail.com",
      icon: <FaEnvelope size={iconSize} />,
      bg: "bg-amber-600 hover:bg-amber-700",
      label: "Send Email",
    },
    {
      href: "https://www.instagram.com/azlaancontracting/",
      icon: <FaInstagram size={iconSize} />,
      bg: "bg-pink-500 hover:bg-pink-600",
      label: "Visit Instagram",
    },
    {
      href: "https://www.facebook.com/azlaan.contracting",
      icon: <FaFacebook size={iconSize} />,
      bg: "bg-indigo-700 hover:bg-indigo-800",
      label: "Visit Facebook",
    },
  ];

  return (
    <>
      {/* Contact & Social Icons */}
      <div className="fixed bottom-32 right-5 z-50 flex flex-col items-center space-y-3">
        {contactLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            title={item.label}
            className={`${bubbleBase} ${item.bg}`}
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to Top"
          className="fixed bottom-16 right-5 bg-neutral-800 hover:bg-neutral-900 mb-2 text-white p-3 rounded-full shadow-md transition"
        >
          <FaArrowUp size={24} />
        </button>
      )}

      {/* Scroll to Bottom */}
      {showScrollBottom && (
        <button
          onClick={scrollToBottom}
          aria-label="Scroll to bottom"
          title="Scroll to Bottom"
          className="fixed bottom-5 right-5 bg-neutral-800 hover:bg-neutral-900 text-white p-3 rounded-full shadow-md transition"
        >
          <FaArrowDown size={24} />
        </button>
      )}
    </>
  );
};

export default ContactBubble;
