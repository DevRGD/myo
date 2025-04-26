'use client';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import { useState } from 'react';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import { toggleTheme } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';
import { useSession } from 'next-auth/react';

export default function Header() {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { isDark } = useSelector((state) => state.theme);
  const { data: session } = useSession();
  const role = session?.user?.role;

  return (
    <header
      className={`w-full py-4 px-6 sm:px-12 flex justify-between items-center transition-colors duration-300 z-20 ${
        isDark ? 'bg-gray-950 text-slate-200' : 'bg-gray-300 text-slate-800'
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image
          src="/images/icons/logo.png"
          alt="MYO"
          width={30}
          height={30}
          priority
          className={`rounded-sm p-1 ${isDark ? 'bg-blue-100' : 'bg-blue-200'}`}
        />
        MYO
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-sm sm:text-base font-semibold">
        {[
          { href: '/', label: 'Home' },
          { href: '/login', label: 'Login' },
          { href: '/signup', label: 'Signup' },
        ].map((link, index) => (
          <NavLink key={index} href={link.href} label={link.label} />
        ))}

        {/* Render additional links if authenticated */}
        {session && role === 'employee' && (
          <>
            <NavLink href="/employee/dashboard" label="Dashboard" />
            <NavLink href="/employee/settings" label="Settings" />
          </>
        )}

        {session && role === 'manager' && (
          <>
            <NavLink href="/manager/dashboard" label="Manager Dashboard" />
            <NavLink href="/manager/settings" label="Settings" />
          </>
        )}

        {session && role === 'ceo' && (
          <>
            <NavLink href="/ceo/dashboard" label="CEO Dashboard" />
            <NavLink href="/ceo/settings" label="Settings" />
            <NavLink href="/admin" label="Admin" />
          </>
        )}

        {/* Theme Toggle Button */}
        <button
          onClick={() => dispatch(toggleTheme())}
          className={`transition duration-500 self-center ${isDark ? 'text-yellow-400 rotate-180' : 'text-slate-400 rotate-0'}`}
        >
          {isDark ? <FiSun size={20} /> : <FaMoon size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="md:hidden p-2 relative w-8 h-10 z-20" aria-label="Toggle menu">
        <div
          className={`absolute rounded-sm top-1/2 left-0 w-full h-1 transition duration-300 ease-in-out ${
            isDark ? 'bg-slate-200' : 'bg-slate-800'
          } ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}
        ></div>
        <div
          className={`absolute rounded-sm top-1/2 right-0 h-1 transition duration-300 ease-in-out ${
            isDark ? 'bg-slate-200' : 'bg-slate-800'
          } ${isMenuOpen ? '-rotate-45 translate-y-0 w-full' : 'translate-y-1.5 w-3/4'}`}
        ></div>
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-full bg-opacity-95 backdrop-blur-lg shadow-lg transition-transform duration-300 ${
          isDark ? 'bg-gray-900 text-slate-200' : 'bg-gray-200 text-slate-800'
        } ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Sidebar Links */}
        <nav className="flex flex-col items-center gap-10 text-2xl font-semibold mt-24">
          <button
            onClick={() => dispatch(toggleTheme())}
            className={`transition duration-500 self-center ${isDark ? 'text-yellow-400 rotate-180' : 'text-slate-400 rotate-0'}`}
          >
            {isDark ? <FiSun size={20} /> : <FaMoon size={20} />}
          </button>
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/contact" onClick={toggleMenu}>
            Contact
          </Link>

          {/* Render additional links based on authentication */}
          {session && role === 'employee' && (
            <>
              <Link href="/employee/dashboard" onClick={toggleMenu}>
                Dashboard
              </Link>
              <Link href="/employee/settings" onClick={toggleMenu}>
                Settings
              </Link>
            </>
          )}

          {session && role === 'manager' && (
            <>
              <Link href="/manager/dashboard" onClick={toggleMenu}>
                Manager Dashboard
              </Link>
              <Link href="/manager/settings" onClick={toggleMenu}>
                Settings
              </Link>
            </>
          )}

          {session && role === 'ceo' && (
            <>
              <Link href="/ceo/dashboard" onClick={toggleMenu}>
                CEO Dashboard
              </Link>
              <Link href="/ceo/settings" onClick={toggleMenu}>
                Settings
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
