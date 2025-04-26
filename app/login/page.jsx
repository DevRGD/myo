'use client';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { authenticateUser } from '@/actions/auth';
import { PlayfairItalic, Playfair } from '@/utils/fonts';

export default function Page() {
  const isDark = useSelector((state) => state.theme.isDark);
  const router = useRouter();
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleLogin = (formData) => {
    startTransition(async () => {
      const result = await authenticateUser(formData);
      if (result?.error) {
        setError(result.error);
      } else {
        router.push('/dashboard');
      }
    });
  };

  return (
    <div
      className={`flex-grow flex flex-col justify-center items-center min-w-full min-h-screen px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 transition-colors duration-300 ${
        isDark ? 'bg-gray-950' : 'bg-gray-300'
      }`}
    >
      <div
        className={`w-full max-w-md text-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 backdrop-blur-md rounded-sm shadow-2xs transition-colors duration-300 shadow-blue-800 ${
          isDark ? 'bg-gray-900 text-slate-200' : 'bg-gray-200 text-slate-800'
        }`}
      >
        <h1 className={`text-3xl sm:text-4xl font-bold ${Playfair.className}`}>Welcome Back</h1>

        {/* LOGIN FORM */}
        <form action={handleLogin} className="mt-8 flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className={`px-4 py-2 rounded-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
              isDark ? 'bg-gray-700 text-slate-200 border-blue-400' : 'bg-gray-100 text-slate-800 border-blue-300'
            }`}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className={`px-4 py-2 rounded-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
              isDark ? 'bg-gray-700 text-slate-200 border-blue-400' : 'bg-gray-100 text-slate-800 border-blue-300'
            }`}
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <button
            type="submit"
            disabled={isPending}
            className={`group relative sm:px-6 overflow-hidden sm:text-base px-5 py-2 rounded-sm text-lg font-semibold shadow-md transition-transform transform duration-300 ${
              isDark ? 'bg-gradient-to-r from-blue-600 to-teal-600' : 'bg-blue-500 text-slate-200'
            }`}
          >
            <span className="relative z-10">{isPending ? 'Logging in...' : 'Login'}</span>
            <span
              className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${
                isDark ? 'bg-gradient-to-r from-blue-500 to-teal-500' : 'bg-blue-600'
              }`}
            ></span>
          </button>
        </form>

        <p className="mt-6 text-sm">
          Don't have an account?{' '}
          <Link href="/signup" className={`text-blue-500 hover:text-blue-300 transition-colors ${PlayfairItalic.className}`}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
