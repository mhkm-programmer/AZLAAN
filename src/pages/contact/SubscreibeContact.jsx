import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import React, { useState } from "react";

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
      .then(
        () => {
          setStatus("✅ تم إرسال الرسالة بنجاح! / Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("❌ فشل في إرسال الرسالة، حاول مرة أخرى. / Failed to send message, please try again.");
        }
      );
  };

  // Colors & fonts
  const bgLight = "#F9FAFB";
  const primaryText = "#2C3E50";
  const accent = "#E67E22";
  const inputBg = "#FFFFFF";
  const inputBorder = "#CBD5E1";
  const mutedText = "#64748B"; // Slate 500
  const shadow = "0 6px 18px rgba(230, 126, 34, 0.15)"; // orange tinted shadow
  const fontFamily = "'Tajawal', sans-serif";

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16"
      style={{ backgroundColor: bgLight, fontFamily }}
    >
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full text-center mb-14"
      >
        <h1
          className="text-5xl font-extrabold mb-4"
          style={{ color: primaryText, lineHeight: 1.1 }}
        >
          Get in Touch <span style={{ color: accent }}>/ تواصل معنا</span>
        </h1>
        <p
          className="text-lg max-w-3xl mx-auto leading-relaxed"
          style={{ color: mutedText }}
        >
          AZLAAN CONTRACTING W.L.L offers premium flooring, curtains, kiosks, and exhibition stands across Qatar. <br />
          Reach out to discuss your project or for inquiries.
        </p>
        <p
          className="text-lg max-w-3xl mx-auto leading-relaxed mt-2"
          style={{ color: mutedText }}
          dir="rtl"
        >
          شركة أزلان للمقاولات المحدودة تقدم حلول أرضيات، ستائر، أكشاك وأجنحة معارض فاخرة في قطر. <br />
          تواصل معنا لمناقشة مشروعك أو للاستفسارات.
        </p>
      </motion.div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        {/* Left Card: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl p-12 shadow-lg flex flex-col justify-between"
          style={{ boxShadow: shadow }}
        >
          <div>
            <h2 className="text-3xl font-semibold mb-10" style={{ color: primaryText }}>
              Contact Information / معلومات التواصل
            </h2>

            <ul className="space-y-6 text-base" style={{ color: mutedText }}>
              <li>
                <strong>Address / العنوان:</strong>{" "}
                <span dir="ltr">Zone 26, Street 850, Building 30, Al Mansoura, Doha, Qatar</span>
              </li>
              <li>
                <strong>Email / البريد الإلكتروني:</strong>{" "}
                <a href="mailto:qatarwintrading@gmail.com" style={{ color: accent, textDecoration: "underline" }}>
                  qatarwintrading@gmail.com
                </a>
              </li>
              <li>
                <strong>Phone / الهاتف:</strong>{" "}
                <a href="tel:+97455760872" style={{ color: accent, textDecoration: "underline" }}>
                  +974 5576 0872
                </a>
              </li>
              <li>
                <strong>Working Hours / ساعات العمل:</strong>
                <br />
                Sat-Thu: 8:00 AM – 1:00 PM, 3:30 PM – 10:00 PM
                <br />
                Fri: 3:30 PM – 10:00 PM
              </li>
            </ul>
          </div>

          <p
            className="mt-10 font-semibold text-orange-500 text-center text-lg"
            dir="rtl"
            style={{ color: accent }}
          >
            نحن هنا لمناقشة مشروعك القادم!
          </p>

          <div className="flex justify-center space-x-8 mt-12">
            {[
              {
                href: "tel:+97455760872",
                label: "Call / اتصل",
                icon: <FaPhoneAlt />,
              },
              {
                href: "https://wa.me/+97455760872",
                label: "WhatsApp / واتساب",
                icon: <FaWhatsapp />,
                external: true,
              },
              {
                href: "https://www.facebook.com/profile.php?id=61573137238181",
                label: "Facebook / فيسبوك",
                icon: <FaFacebook />,
                external: true,
              },
              {
                href: "https://www.instagram.com/rokibwin",
                label: "Instagram / انستغرام",
                icon: <FaInstagram />,
                external: true,
              },
            ].map(({ href, label, icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  backgroundColor: "#FDEBD0",
                  color: accent,
                  boxShadow: `0 0 8px ${accent}50`,
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = accent;
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.boxShadow = `0 0 15px ${accent}`;
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FDEBD0";
                  e.currentTarget.style.color = accent;
                  e.currentTarget.style.boxShadow = `0 0 8px ${accent}50`;
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Card: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-3xl p-12 shadow-lg"
          style={{ boxShadow: shadow }}
        >
          <h2 className="text-3xl font-semibold mb-8" style={{ color: primaryText }}>
            Send Us a Message / أرسل لنا رسالة
          </h2>
          <p className="mb-8 text-base" style={{ color: mutedText }}>
            Fill out the form below and our team will get back to you shortly.
            <br />
            يرجى ملء النموذج أدناه وسيتواصل فريقنا معك قريبًا.
          </p>

          <form onSubmit={handleSubmit} noValidate style={{ fontFamily }}>
            {/* Name */}
            <div style={{ marginBottom: 24 }}>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  marginBottom: 8,
                  fontWeight: "600",
                  color: mutedText,
                  fontSize: 14,
                }}
              >
                Name / الاسم
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name / اسمك الكامل"
                style={{
                  width: "100%",
                  borderRadius: 12,
                  border: `1.5px solid ${inputBorder}`,
                  backgroundColor: inputBg,
                  padding: "12px 16px",
                  fontSize: 16,
                  color: primaryText,
                  outlineColor: accent,
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = accent;
                  e.target.style.boxShadow = `0 0 6px ${accent}`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = inputBorder;
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: 24 }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: 8,
                  fontWeight: "600",
                  color: mutedText,
                  fontSize: 14,
                }}
              >
                Email / البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                style={{
                  width: "100%",
                  borderRadius: 12,
                  border: `1.5px solid ${inputBorder}`,
                  backgroundColor: inputBg,
                  padding: "12px 16px",
                  fontSize: 16,
                  color: primaryText,
                  outlineColor: accent,
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = accent;
                  e.target.style.boxShadow = `0 0 6px ${accent}`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = inputBorder;
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Message */}
            <div style={{ marginBottom: 32 }}>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  marginBottom: 8,
                  fontWeight: "600",
                  color: mutedText,
                  fontSize: 14,
                }}
              >
                Message / الرسالة
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here... / اكتب رسالتك هنا..."
                style={{
                  width: "100%",
                  borderRadius: 12,
                  border: `1.5px solid ${inputBorder}`,
                  backgroundColor: inputBg,
                  padding: "12px 16px",
                  fontSize: 16,
                  color: primaryText,
                  resize: "none",
                  outlineColor: accent,
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = accent;
                  e.target.style.boxShadow = `0 0 6px ${accent}`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = inputBorder;
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px 0",
                borderRadius: 12,
                backgroundColor: accent,
                color: "#fff",
                fontSize: 18,
                fontWeight: "700",
                cursor: "pointer",
                transition: "background-color 0.3s, transform 0.2s",
                border: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#d76a1e";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = accent;
                e.currentTarget.style.transform = "none";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "scale(0.95)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Send Message / إرسال
            </button>

            {/* Status message */}
            {status && (
              <p
                className="mt-6 text-center font-semibold"
                style={{
                  color: status.includes("نجاح") ? "#27AE60" : "#C0392B",
                  fontSize: 16,
                }}
                dir={status.includes("نجاح") ? "rtl" : "ltr"}
              >
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
