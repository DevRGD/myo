'use client';
import { useSelector } from 'react-redux';

export default function Contact() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div
      className={`flex-grow flex flex-col px-6 sm:px-12 md:px-32 lg:px-48 xl:px-60 py-10 transition-colors duration-300 min-h-screen ${
        isDark ? 'bg-gray-950 text-slate-300' : 'bg-gray-300 text-gray-800'
      }`}
    >
      {/* Page Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-500">Contact Us</h1>

      {/* Introduction */}
      <p className="text-lg sm:text-xl leading-relaxed mb-8">
        Have questions or need assistance? We’re here to help! Reach out to us via the contact form or our provided details, and our team
        will get back to you as soon as possible.
      </p>

      {/* Contact Form (Left Column) */}
      <form className="w-full space-y-5">
        <div>
          <label className="block text-base font-semibold mb-1">Your Name</label>
          <input
            type="text"
            className={`w-full px-4 py-2 rounded-md text-base focus:ring-2 focus:ring-blue-500 transition duration-200 ${
              isDark ? 'bg-gray-800 border border-gray-700 text-slate-200' : 'bg-gray-100 border border-gray-300 text-gray-800'
            }`}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-base font-semibold mb-1">Email Address</label>
          <input
            type="email"
            className={`w-full px-4 py-2 rounded-md text-base focus:ring-2 focus:ring-blue-500 transition duration-200 ${
              isDark ? 'bg-gray-800 border border-gray-700 text-slate-200' : 'bg-gray-100 border border-gray-300 text-gray-800'
            }`}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-base font-semibold mb-1">Message</label>
          <textarea
            rows="4"
            className={`w-full px-4 py-2 rounded-md resize-none text-base focus:ring-2 focus:ring-blue-500 transition duration-200 ${
              isDark ? 'bg-gray-800 border border-gray-700 text-slate-200' : 'bg-gray-100 border border-gray-300 text-gray-800'
            }`}
            placeholder="Write your message..."
          ></textarea>
        </div>

        <button
          className={`w-full py-2 text-base rounded-md font-semibold text-white transition duration-300 group relative overflow-hidden ${
            isDark ? 'bg-gradient-to-r from-blue-600 to-teal-600' : 'bg-blue-500 text-slate-200'
          }`}
        >
          <span className="relative z-10">Send Message</span>
          <span
            className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${
              isDark ? 'bg-gradient-to-r from-blue-500 to-teal-500' : 'bg-blue-600'
            }`}
          ></span>
        </button>
      </form>
    </div>
  );
}
