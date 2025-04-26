'use client';
import { Playfair } from '@/utils/fonts';
import { useSelector } from 'react-redux';

export default function Page() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div
      className={`flex-grow flex flex-col justify-center items-center px-6 sm:px-12 md:px-32 lg:px-48 xl:px-60 py-12 transition-colors duration-300 min-h-screen ${
        isDark ? 'bg-gray-950 text-slate-200' : 'bg-gray-300 text-slate-800'
      }`}
    >
      <h1 className={`text-4xl sm:text-5xl font-bold mb-6 ${Playfair.className} text-left w-full max-w-6xl`}>
        Choose the Best Plan for You
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 w-full max-w-7xl">
        {[
          { plan: 'Basic', price: '$9/mo', features: ['Task Management', 'Time Tracking', 'Basic Reports'] },
          { plan: 'Pro', price: '$19/mo', features: ['Everything in Basic', 'Advanced Reports', 'Collaboration Tools'] },
          { plan: 'Enterprise', price: 'Custom', features: ['Everything in Pro', 'Unlimited Users', '24/7 Support'] },
        ].map((tier, index) => (
          <div
            key={index}
            className={`flex flex-col rounded-sm border p-6 transition-all duration-300 backdrop-blur-md shadow-2xs shadow-blue-800 ${
              isDark
                ? 'bg-gray-900 border-gray-800 text-slate-200 hover:border-blue-400'
                : 'bg-gray-200 border-gray-100 text-slate-800 hover:border-blue-500'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-3 text-blue-500">{tier.plan}</h3>
            <p className="text-3xl font-bold mb-4">{tier.price}</p>
            <ul className="text-sm space-y-2">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-5 h-5 mr-2 text-blue-500"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
