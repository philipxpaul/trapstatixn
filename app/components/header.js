// pages/index.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white py-4 px-6 md:px-10 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link href="/" className="hover:text-yellow-500">
          <img src="/logo.png" alt="TrapStation Logo" className="w-auto md:w-auto" />
        </Link>
      </div>
      <nav className="hidden md:flex space-x-6 text-sm">
        <Link href="/" className="hover:text-yellow-500 text-xl">
          Home
        </Link>
        <Link href="/dreads" className="hover:text-yellow-500 text-xl">
          Dreads Style
        </Link>
        <Link href="/music" className="hover:text-yellow-500 text-xl">
          Music Production
        </Link>
        {/* Uncomment if needed */}
        {/* <Link href="/digital" className="hover:text-yellow-500 text-xl">
          Music Distribution
        </Link> */}
        <Link href="/about" className="hover:text-yellow-500 text-xl">
          About Us
        </Link>
        {/* Uncomment if needed */}
        {/* <Link href="/contact" className="hover:text-yellow-500 text-xl">
          Contact Us
        </Link> */}
      </nav>
    </header>
  );
}
