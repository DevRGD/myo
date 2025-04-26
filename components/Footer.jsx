import Link from 'next/link';
import NavLink from './NavLink';
import { useSelector } from 'react-redux';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <footer
      className={`w-full pt-12 pb-6 sm:px-8 border-t transition-colors duration-300 ${
        isDark ? 'bg-gray-950 text-slate-300 border-gray-900' : 'bg-gray-300 text-gray-800 border-gray-200'
      }`}
    >
      <div className="mx-auto flex flex-wrap justify-around gap-6 sm:gap-8 lg:gap-12 w-full text-left">
        {/* Brand & About Section */}
        <div className="flex flex-col items-start w-[250px]">
          <h2 className="text-2xl font-bold tracking-wide text-blue-500">MYO</h2>
          <p className="text-sm mt-3 leading-relaxed text-left">
            Helping you manage office work efficiently with modern tools. Stay organized, increase productivity, and streamline your
            workflow.
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col items-start w-[250px]">
          <h2 className="text-lg font-semibold tracking-wide text-blue-500">Quick Links</h2>
          <ul className="mt-4 space-y-2  text-left">
            {[
              { href: '/about', label: 'About Us' },
              { href: '/blog', label: 'Read Blogs' },
              { href: '/contact', label: 'Contact Us' },
              { href: '/features', label: 'Features' },
              { href: '/pricing', label: 'Pricing' },
            ].map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
        </div>
        {/* Legal Section */}
        <div className="flex flex-col items-start w-[250px]">
          <h2 className="text-lg font-semibold tracking-wide text-blue-500">Legal</h2>
          <ul className="mt-4 space-y-2 text-left">
            {[
              { href: '/privacy-policy', label: 'Privacy Policy' },
              { href: '/terms', label: 'Terms of Service' },
            ].map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-start w-[250px]">
          <h2 className="text-lg font-semibold tracking-wide text-blue-500">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-left">
            <li className="flex gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>123 Business St, Suite 5B, Kolkata 70001</span>
            </li>
            <li className="flex gap-2">
              <FaPhoneAlt className="text-blue-500" />
              <span> +91 (123) 456-7890</span>
            </li>
            <li className="flex gap-2">
              <FaEnvelope className="text-blue-500" />
              <span> support@myoapp.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className={`mt-6 pt-4 flex flex-col-reverse md:flex-row items-center justify-between border-t text-xs sm:text-sm w-full ${
          isDark ? 'border-gray-900' : 'border-gray-200'
        }`}
      >
        {/* Copyright Text */}
        <p className="text-center md:text-left mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-blue-500">MYO</span>. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn].map((Icon, index) => (
            <Link
              key={index}
              href="/"
              className={`group relative flex items-center justify-center w-6 h-6 p-4 rounded-sm shadow-md overflow-hidden transition-all duration-300 ${
                isDark ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            >
              <span className="relative z-10">
                <Icon size={16} className={isDark ? 'text-slate-300' : 'text-gray-800'} />
              </span>
              <span
                className={`absolute inset-0 -rotate-45 scale-y-150 scale-x-0 group-hover:scale-x-200 transition-transform duration-300 origin-center ${
                  isDark ? 'bg-gray-700' : 'bg-gray-200'
                }`}
              ></span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
