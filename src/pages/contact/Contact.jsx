import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa';
import {
  MdAccessTime,
  MdEmail,
  MdLocationOn,
  MdPhone
} from 'react-icons/md';
import React, { useState } from 'react';

import PageTitle from '../reusable/PageTitle';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div>
      <PageTitle title="Contact Us | AZLAAN CONTRACTING W.L.L | Interior & Event Solutions in Qatar" />
      <section className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-20 px-6 md:px-24 font-sans">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-[#003B73] text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Get in Touch with AZLAAN CONTRACTING W.L.L
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
            عز لان للمقاولات ززمزم | Event Management & Interior Designer - Office & Home
          </p>
          <div className="h-1 w-24 mx-auto bg-[#FFD700] mt-6 rounded-full shadow-md shadow-[#FFD700]" />
        </div>

        {/* Main Contact Card */}
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg shadow-slate-300 p-12 md:p-16 flex flex-col md:flex-row gap-16">
          {/* Left - Info */}
          <div className="flex-1 space-y-10">
            <h2 className="text-3xl font-bold text-slate-900">Company Details</h2>

            {[{
              icon: <MdLocationOn size={32} className="text-[#003B73]" />,
              title: 'Head Office',
              info: 'Doha, Qatar'
            }, {
              icon: <MdEmail size={32} className="text-[#003B73]" />,
              title: 'Email Address',
              info: 'azlaancontracting@gmail.com'
            }, {
              icon: <MdPhone size={32} className="text-[#003B73]" />,
              title: 'Contact Number',
              info: '+974 5018 3025'
            }, {
              icon: <MdAccessTime size={32} className="text-[#003B73]" />,
              title: 'Working Hours',
              info: (
                <>
                  <p className="leading-snug">Sat–Thu: 8AM–1PM, 3:30PM–10PM</p>
                  <p className="leading-snug">Fri: 3:30PM–10PM</p>
                </>
              )
            }].map(({ icon, title, info }, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="p-3 rounded-xl bg-[#E6F0FA] shadow-md">
                  {icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">{title}</h3>
                  <div className="text-slate-600 text-base">{info}</div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="flex gap-8 pt-4">
              <a
                href="https://www.facebook.com/azlaan.contracting"
                className="text-[#003B73] hover:text-indigo-900 transition transform hover:scale-110"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={28} />
              </a>
              <a
                href="https://www.instagram.com/azlaancontracting"
                className="text-pink-500 hover:text-pink-700 transition transform hover:scale-110"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://wa.me/97450183025"
                className="text-green-600 hover:text-green-800 transition transform hover:scale-110"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={28} />
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 bg-[#E6F0FA] rounded-3xl p-10 shadow-lg flex flex-col gap-6"
            noValidate
          >
            <h3 className="text-2xl font-bold text-[#003B73] mb-2">Send a Message</h3>

            {['name', 'email', 'subject'].map((field, i) => (
              <input
                key={i}
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                value={formData[field]}
                onChange={handleChange}
                required
                autoComplete={field}
                className="w-full px-5 py-4 rounded-xl border border-indigo-300 bg-white text-[#003B73] placeholder-indigo-400 focus:outline-none focus:ring-3 focus:ring-indigo-300 focus:border-indigo-500 shadow-sm transition"
              />
            ))}

            <textarea
              name="message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-5 py-4 rounded-xl border border-indigo-300 bg-white text-[#003B73] placeholder-indigo-400 focus:outline-none focus:ring-3 focus:ring-indigo-300 focus:border-indigo-500 shadow-sm transition resize-none"
            />

            <button
              type="submit"
              className="self-start bg-[#003B73] text-white text-lg font-semibold px-10 py-4 rounded-2xl shadow-md hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-400 active:scale-95 transition-transform duration-150"
            >
              Send Message
            </button>

            {status && <p className="text-green-600 font-semibold mt-4">{status}</p>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
