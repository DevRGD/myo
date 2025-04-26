'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { GreatVibes, PlayfairItalic, Playfair } from '@/utils/fonts';

export default function Page() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div
      className={`flex-grow flex flex-col justify-center items-center min-w-full min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-gray-950' : 'bg-gray-300'
      }`}
    >
      {/* Home Content Box */}
      <div
        className={`w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl px-6 sm:px-12 md:px-32 lg:px-48 xl:px-60 py-10 text-center rounded-sm transition-colors duration-300 backdrop-blur-md shadow-2xs shadow-blue-800 ${
          isDark ? 'bg-gray-900 text-slate-200' : 'bg-gray-200 text-slate-800'
        }`}
      >
        {/* Heading */}
        <h1
          className={`text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold leading-snug transition-colors duration-300 text-left ${Playfair.className}`}
        >
          Effortlessly Manage Your
          <span className={`${GreatVibes.className} ${isDark ? 'text-blue-400' : 'text-blue-600'}`}> Office Work</span>
        </h1>

        {/* Description */}
        <p
          className={`text-base sm:text-lg md:text-xl tracking-wide my-10 leading-relaxed transition-colors duration-300 w-full text-justify ${PlayfairItalic.className}`}
        >
          Stay organized and efficient as an
          <span className={`mx-1 ${isDark ? 'text-blue-400' : 'text-blue-500'}`}> Employee,</span>
          <span className={`mx-1 ${isDark ? 'text-green-400' : 'text-green-500'}`}>Manager,</span> or
          <span className={`mx-1 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`}> CEO.</span> Sign up today and take control of your
          office workflow.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {/* Login Button */}
          <Link
            href="/login"
            className={`group relative px-5 sm:px-6 py-2 overflow-hidden text-sm sm:text-base font-semibold shadow-md transition-transform transform duration-300 ${
              isDark ? 'bg-gradient-to-r from-blue-600 to-teal-600' : 'bg-gray-700 text-slate-200'
            }`}
          >
            <span className="relative z-10">Login</span>
            <span
              className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${
                isDark ? 'bg-gradient-to-r from-blue-500 to-teal-500' : 'bg-gray-800'
              }`}
            ></span>
          </Link>

          {/* Sign Up Button */}
          <Link
            href="/signup"
            className={`group relative px-5 sm:px-6 py-2 overflow-hidden text-sm sm:text-base font-semibold shadow-md transition-transform transform duration-300 ${
              isDark ? 'bg-gradient-to-r from-teal-600 to-blue-600' : 'bg-blue-500 text-slate-200'
            }`}
          >
            <span className="relative z-10">Sign Up</span>
            <span
              className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${
                isDark ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-blue-600'
              }`}
            ></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
