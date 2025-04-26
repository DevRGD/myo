'use client';
import { useSelector } from 'react-redux';
import { PlayfairItalic, Playfair } from '@/utils/fonts';

export default function Page() {
  const isDark = useSelector((state) => state.theme.isDark);

  const features = [
    {
      title: 'Task Management',
      description: 'Organize tasks efficiently with a structured approach.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-12 h-12 text-slate-200"
        >
          <path d="M4 3v18h16V3H4zM6 5h12v14H6V5z" />
        </svg>
      ),
    },
    {
      title: 'Time Tracking',
      description: 'Monitor work hours with detailed reports.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-12 h-12 text-slate-200"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6h4" />
        </svg>
      ),
    },
    {
      title: 'Collaboration',
      description: 'Team up in real time, no matter where you are.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-12 h-12 text-slate-200"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M14 10l-4 4-4-4" />
        </svg>
      ),
    },
    {
      title: 'Cloud Storage',
      description: 'Access your files anytime, anywhere.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-12 h-12 text-slate-200"
        >
          <path d="M6 3v18h12V3H6z" />
          <path d="M6 12h12M6 16h12" />
        </svg>
      ),
    },
    {
      title: 'Custom Workflows',
      description: 'Automate repetitive tasks effortlessly.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-12 h-12 text-slate-200"
        >
          <path d="M3 12h18" />
          <path d="M9 6l3 3-3 3" />
        </svg>
      ),
    },
    {
      title: 'Security & Privacy',
      description: 'Top-notch security to keep your data safe.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-12 h-12 text-slate-200"
        >
          <path d="M12 2L9 5h6L12 2z" />
          <path d="M4 12h16" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className={`flex-grow flex flex-col px-6 sm:px-12 md:px-32 lg:px-48 xl:px-60 py-10 transition-colors duration-300 min-h-screen ${
        isDark ? 'bg-gray-950 text-slate-200' : 'bg-gray-300 text-slate-800'
      }`}
    >
      <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-blue-500 text-left ${Playfair.className}`}>
        Powerful Features for Seamless Workflows
      </h1>
      <p className="text-lg sm:text-xl leading-relaxed mb-8 pt-5">
        Discover the latest strategies and trends for
        <span className={`mx-1 ${PlayfairItalic.className} ${isDark ? 'text-blue-400' : 'text-blue-500'}`}> Productivity,</span>
        <span className={`mx-1 ${PlayfairItalic.className} ${isDark ? 'text-green-400' : 'text-green-500'}`}>Collaboration,</span> and
        <span className={`mx-1 ${PlayfairItalic.className} ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`}> Remote Work. </span>
        Stay ahead in the ever-changing business world.
      </p>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col rounded-sm border transition-all duration-300 backdrop-blur-md shadow-2xs shadow-blue-800 ${
              isDark
                ? 'bg-gray-900 border-gray-800 text-slate-200 hover:border-blue-400'
                : 'bg-gray-200 border-gray-100 text-slate-800 hover:border-blue-500'
            }`}
          >
            {/* Icon with Background and Top Margin */}
            <div className={`mt-6 p-4 flex justify-center items-center bg-blue-500 rounded-full mb-4 mx-auto`}>{feature.icon}</div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3 text-blue-500">{feature.title}</h3>
              <p className="text-base flex-grow">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
