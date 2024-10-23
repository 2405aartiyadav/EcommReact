import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Handle form submission here, like sending the data to a server
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 flex justify-center ">
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-700 mb-8">Get In Touch</h2>

        {/* Contact Info Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-semibold text-red-500 mb-2">Phone</div>
            <p className="text-gray-600 hover:text-white hover:underline">+1 (123) 456-7890</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-semibold text-red-500 mb-2">Email</div>
            <p className="text-gray-600  hover:text-white hover:underline">contact@company.com</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-semibold text-red-500 mb-2">Location</div>
            <p className="text-gray-600  hover:text-white hover:underline">123 Main St, Anytown, USA</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Subject */}
          <div className="mb-6">
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
