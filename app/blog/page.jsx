'use client';
import { Playfair, PlayfairItalic } from '@/utils/fonts';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';

export default function Page() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div
      className={`flex-grow flex flex-col px-6 sm:px-12 md:px-32 lg:px-48 xl:px-60 py-10 transition-colors duration-300 min-h-screen ${
        isDark ? 'bg-gray-950 text-slate-200' : 'bg-gray-300 text-slate-800'
      }`}
    >
      <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-blue-500 ${Playfair.className}`}>
        Stay Informed with Expert Insights
      </h1>
      <p className="text-lg sm:text-xl leading-relaxed mb-8 pt-5">
        Discover the latest strategies and trends for
        <span className={`mx-1 ${PlayfairItalic.className} ${isDark ? 'text-blue-400' : 'text-blue-500'}`}> Productivity,</span>
        <span className={`mx-1 ${PlayfairItalic.className} ${isDark ? 'text-green-400' : 'text-green-500'}`}>Collaboration,</span> and
        <span className={`mx-1 ${PlayfairItalic.className} ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`}> Remote Work. </span>
        Stay ahead in the ever-changing business world.
      </p>

      {/* Blog Card Section */}
      <div className="flex flex-wrap justify-between pt-10 gap-6 w-full">
        {[
          {
            title: 'Boost Your Productivity',
            desc: 'Master time management techniques to enhance efficiency.',
            img: '/images/pages/blog/productivity.jpg',
            color: isDark ? 'text-blue-400' : 'text-blue-500',
          },
          {
            title: 'Best Collaboration Tools',
            desc: 'Explore top tools for seamless teamwork and communication.',
            img: '/images/pages/blog/collaboration.jpg',
            color: isDark ? 'text-green-400' : 'text-green-500',
          },
          {
            title: 'The Future of Remote Work',
            desc: 'Stay ahead with trends shaping the workplace of tomorrow.',
            img: '/images/pages/blog/remote-work.jpg',
            color: isDark ? 'text-yellow-400' : 'text-yellow-500',
          },
        ].map((post, index) => (
          <Link
            href="/"
            key={index}
            className={`flex flex-col grow w-full sm:w-[48%] lg:w-[23%] rounded-sm overflow-hidden transition duration-300 backdrop-blur-md shadow-2xs shadow-blue-800 ${
              isDark ? 'bg-gray-900 border border-gray-800 text-slate-200' : 'bg-gray-200 border border-gray-100 text-slate-800'
            } hover:border-blue-500`}
          >
            <Image
              src={post.img}
              alt={post.title}
              width={500}
              height={300}
              className="w-full aspect-[4/3] object-cover block transition-opacity duration-500 ease-in-out"
              loading="lazy"
              placeholder="blur"
              blurDataURL={post.img}
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className={`text-xl font-semibold mb-3 ${post.color}`}>{post.title}</h3>
              <p className="text-base flex-grow">{post.desc}</p>
            </div>
          </Link>
        ))}

        {/* View More Card */}
        <Link
          href="/"
          className={`flex flex-col grow w-full sm:w-[48%] lg:w-[23%] rounded-sm border text-center cursor-pointer group overflow-hidden transition-transform duration-300
    ${isDark ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-slate-200' : 'bg-blue-500 text-slate-200'}
    hover:border-blue-500`}
        >
          <div className="relative flex flex-1 items-center justify-center p-6 text-sm sm:text-base font-semibold">
            <span className="relative z-10">View More Articles</span>
            <span
              className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center
        ${isDark ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-blue-600'}`}
            ></span>
          </div>
        </Link>
      </div>
    </div>
  );
}
