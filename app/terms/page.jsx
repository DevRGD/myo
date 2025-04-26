'use client';
import { useSelector } from 'react-redux';
import { Playfair } from '@/utils/fonts';

export default function TermsOfService() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div
      className={`flex-grow flex flex-col items-start px-6 sm:px-12 md:px-32 lg:px-48 xl:px-60 py-10 transition-colors duration-300 h-full ${
        isDark ? 'bg-gray-950 text-slate-300' : 'bg-gray-300 text-gray-800'
      }`}
    >
      {/* Page Heading */}
      <h1 className={`text-4xl sm:text-5xl font-bold mb-6 text-blue-500 ${Playfair.className}`}>Terms of Service</h1>

      {/* Introduction */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">Introduction</h2>
      <p className="text-base leading-relaxed mb-6">
        These Terms of Service ("Terms") govern your access to and use of the MYO platform and services. By using our services, you agree to
        comply with these terms and all applicable laws and regulations.
      </p>

      {/* User Responsibilities */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">User Responsibilities</h2>
      <p className="text-base leading-relaxed mb-6">
        Users must provide accurate information during registration and are responsible for maintaining the confidentiality of their
        accounts. You agree to use the platform ethically and not to misuse the services, engage in unauthorized access, or infringe on the
        rights of others.
      </p>

      {/* Service Usage */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">Service Usage</h2>
      <p className="text-base leading-relaxed mb-6">
        MYO provides productivity tools designed to streamline business workflows. We reserve the right to modify or discontinue any feature
        at any time without notice. Continued use after changes signifies acceptance.
      </p>

      {/* Intellectual Property */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">Intellectual Property</h2>
      <p className="text-base leading-relaxed mb-6">
        All content, branding, and technology associated with MYO are the intellectual property of our company. You may not copy,
        distribute, or modify any part of the platform without prior written consent.
      </p>

      {/* Limitation of Liability */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">Limitation of Liability</h2>
      <p className="text-base leading-relaxed mb-6">
        MYO is not liable for any indirect, incidental, or consequential damages arising from your use of the platform. The service is
        provided "as-is" without warranties of any kind.
      </p>

      {/* Changes to Terms */}
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">Changes to Terms</h2>
      <p className="text-base leading-relaxed mb-6">
        We may update these Terms from time to time. Any changes will be posted on this page, and your continued use of MYO after updates
        constitutes your acceptance of the new terms.
      </p>

      {/* Contact */}
      <p className="text-base leading-relaxed">
        If you have any questions about these Terms, please contact us at{' '}
        <a href="mailto:support@myoapp.com" className="font-semibold text-blue-500">
          support@myoapp.com
        </a>
        .
      </p>
    </div>
  );
}
