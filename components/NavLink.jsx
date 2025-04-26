import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function NavLink({ href, label }) {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <Link
      href={href}
      className={`relative capitalize transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
        after:transition-all after:duration-300 hover:after:w-full pb-1 ${
          isDark ? 'after:bg-slate-200 text-slate-200' : 'after:bg-slate-400 text-slate-800'
        }`}
    >
      {label}
    </Link>
  );
}
