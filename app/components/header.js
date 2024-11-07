// pages/index.js
"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons from 'react-icons/fi'

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-black text-white py-4 px-6 md:px-10 flex items-center justify-between relative">
      <div className="flex items-center space-x-4">
        <Link href="/" className="hover:text-yellow-500">
          <img src="/logo.png" alt="TrapStation Logo" className="w-auto md:w-auto" />
        </Link>
      </div>

      {/* Desktop Navigation */}
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
        <Link href="/about" className="hover:text-yellow-500 text-xl">
          About Us
        </Link>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={handleSidebarToggle} className="text-2xl">
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 p-6 flex flex-col space-y-6 text-xl text-white">
          <button onClick={handleSidebarToggle} className="self-end text-3xl">
            <FiX />
          </button>
          <nav className="flex flex-col space-y-6">
            <Link href="/" onClick={handleSidebarToggle} className="hover:text-yellow-500">
              Home
            </Link>
            <Link href="/dreads" onClick={handleSidebarToggle} className="hover:text-yellow-500">
              Dreads Style
            </Link>
            <Link href="/music" onClick={handleSidebarToggle} className="hover:text-yellow-500">
              Music Production
            </Link>
            <Link href="/about" onClick={handleSidebarToggle} className="hover:text-yellow-500">
              About Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
