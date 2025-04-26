'use client';
import { Playfair } from '@/utils/fonts';
import { useSelector } from 'react-redux';

export default function Page() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div
      className={`flex-grow flex flex-col items-start px-6 sm:px-12 md:px-32 lg:px-48 xl:px-60 py-10 transition-colors duration-300 h-full ${
        isDark ? 'bg-gray-950 text-slate-300' : 'bg-gray-300 text-gray-800'
      }`}
    >
      {/* Page Heading */}
      <h1 className={`text-4xl sm:text-5xl font-bold mb-6 text-blue-500 ${Playfair.className}`}>About MYO</h1>

      {/* Introduction */}
      <p className="text-lg sm:text-xl leading-relaxed mb-8">
        MYO is a cutting-edge office workflow management platform designed to help businesses optimize productivity, streamline operations,
        and improve team collaboration. Our goal is to make work seamless, efficient, and stress-free by providing intuitive tools that
        integrate effortlessly into your daily workflow.
      </p>

      {/* Mission Statement */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">Our Mission</h2>
      <p className="text-base leading-relaxed mb-6">
        Our mission is to empower teams and businesses with smart, AI-driven solutions that minimize manual work, automate repetitive tasks,
        and enhance workplace efficiency. By leveraging innovative technology, we aim to create a seamless work environment where
        productivity flourishes.
      </p>

      {/* Vision */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">Our Vision</h2>
      <p className="text-base leading-relaxed mb-6">
        We envision a world where every business, from startups to enterprises, has access to intelligent workflow automation that allows
        them to focus on meaningful work rather than administrative overhead. By continuously evolving, we strive to be the global leader in
        workplace efficiency solutions.
      </p>

      {/* Why Choose Us */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">Why Choose MYO?</h2>
      <p className="text-base leading-relaxed mb-4">
        Our platform is built with a deep understanding of the challenges businesses face daily. We provide:
      </p>
      <ul className="list-disc list-inside text-base leading-relaxed mb-6">
        <li>
          <span className="font-semibold">AI-Powered Automation</span> – Eliminate repetitive tasks and boost efficiency.
        </li>
        <li>
          <span className="font-semibold">Seamless Collaboration</span> – Keep teams connected and projects on track.
        </li>
        <li>
          <span className="font-semibold">Enterprise-Grade Security</span> – Protect sensitive data with top-tier security measures.
        </li>
      </ul>

      {/* Trusted by Companies */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">Trusted by Industry Leaders</h2>
      <p className="text-base leading-relaxed mb-8">
        Thousands of businesses, including Fortune 500 companies, rely on MYO to manage their workflow efficiently. We work with some of the
        most respected organizations in the world to drive workplace transformation.
      </p>

      {/* Closing Statement */}
      <p className="text-base leading-relaxed">
        At MYO, we are committed to innovation, efficiency, and excellence. Join us in redefining the future of office workflow management.
      </p>
    </div>
  );
}
