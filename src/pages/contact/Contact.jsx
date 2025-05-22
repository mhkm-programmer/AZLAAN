import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdAccessTime, MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MdLocationOn size={24} className="text-blue-600" />
              <div>
                <p className="font-semibold">Our Address</p>
                <p>Doha, Qatar</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MdEmail size={24} className="text-blue-600" />
              <div>
                <p className="font-semibold">Email Us</p>
                <p>azlaan.qa@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MdPhone size={24} className="text-blue-600" />
              <div>
                <p className="font-semibold">Call Us</p>
                <p>+974 5576 0872</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MdAccessTime size={24} className="text-blue-600" />
              <div>
                <p className="font-semibold">Business Hours</p>
                <p>Sat–Thu: 8AM–1PM, 3:30PM–10PM</p>
                <p>Fri: 3:30PM–10PM</p>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com/azlaan.qa" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={24} className="text-blue-800" />
              </a>
              <a href="https://instagram.com/azlaan.qa" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} className="text-pink-500" />
              </a>
              <a href="https://wa.me/97455760872" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={24} className="text-green-500" />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
            {status && <p className="text-green-600 font-medium">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;