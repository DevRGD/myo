'use client';
import { Playfair } from '@/utils/fonts';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function PrivacyPolicy() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div
      className={`flex-grow flex flex-col items-start px-6 sm:px-12 md:px-32 lg:px-48 xl:px-60 py-10 transition-colors duration-300 h-full ${
        isDark ? 'bg-gray-950 text-slate-300' : 'bg-gray-300 text-gray-800'
      }`}
    >
      {/* Page Heading */}
      <h1 className={`text-4xl sm:text-5xl font-bold mb-6 text-blue-500 ${Playfair.className}`}>Privacy Policy</h1>

      {/* Introduction */}
      <p className="text-lg sm:text-xl leading-relaxed mb-8">
        At MYO, your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect your personal information when
        you use our services.
      </p>

      {/* Information We Collect */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">Information We Collect</h2>
      <p className="text-base leading-relaxed mb-6">
        We collect information that you provide directly to us, such as when you create an account, use our services, or contact support.
        This includes your name, email, company name, usage data, and any files you upload.
      </p>

      {/* How We Use Information */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">How We Use Your Information</h2>
      <p className="text-base leading-relaxed mb-6">
        We use your information to provide, maintain, and improve our services. This includes personalizing your experience, offering
        customer support, and improving security and system performance.
      </p>

      {/* Sharing of Information */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">Sharing of Information</h2>
      <p className="text-base leading-relaxed mb-6">
        We do not sell your data. We may share it with third-party service providers who assist in running our platform, but only under
        strict confidentiality agreements and only for service-related purposes.
      </p>

      {/* Data Security */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">Data Security</h2>
      <p className="text-base leading-relaxed mb-6">
        Your data is protected by robust encryption, firewalls, and access controls. We continuously monitor for vulnerabilities and apply
        industry-standard practices to ensure your information stays safe.
      </p>

      {/* Cookies and Tracking */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">Cookies and Tracking Technologies</h2>
      <p className="text-base leading-relaxed mb-6">
        We use cookies to personalize content, analyze usage, and enhance user experience. You can manage cookie preferences through your
        browser settings.
      </p>

      {/* Your Rights */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">Your Rights</h2>
      <p className="text-base leading-relaxed mb-6">
        You have the right to access, update, or delete your personal data. Contact us at any time to make a request or raise a concern
        regarding your privacy.
      </p>

      {/* Changes to This Policy */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">Changes to This Policy</h2>
      <p className="text-base leading-relaxed mb-6">
        We may update this policy occasionally to reflect changes in laws or services. When we do, we’ll notify users by updating the date
        at the top of this page.
      </p>

      {/* Contact Info */}
      <p className="text-base leading-relaxed">
        For questions or concerns regarding our privacy practices, please contact our support team at{' '}
        <a href="mailto:support@myoapp.com" className="font-semibold text-blue-500">
          support@myoapp.com
        </a>
        .
      </p>
    </div>
  );
}
