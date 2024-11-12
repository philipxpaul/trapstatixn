// pages/dreadlocks.js
"use client";
import Head from 'next/head';
import { useState } from 'react';
import GoogleLoginForm from '../components/googleLoginForm';
import Gallery from '../components/Gallery'; // Import the Gallery component

export default function Dreadlocks() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleBookNowClick = () => {
    setShowLoginForm(true);
  };

  return (
    <div className="bg-white">
      <Head>
        <title>TrapStation - Dreadlock Services</title>
        <meta name="description" content="Professional dreadlock services for unique styles. Choose from our range of dreadlock services tailored to your needs." />
      </Head>

      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-32 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500">Professional Dreadlock Services</h1>
        <p className="text-base md:text-lg mt-6 max-w-xl mx-auto px-4">
          Whether you&aposre looking to start your dreadlock journey or maintain your existing locs, our experienced stylists are here to help you every step of the way.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 px-4 md:px-10 lg:px-20 space-y-12">
        {/* Service 1 - Dreadlock Installation */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-6 lg:space-y-0">
          <img src="/dreads-01.png" alt="Dreadlock Installation" className="lg:w-1/2 w-full rounded shadow-lg" />
          <div className="lg:w-1/2 text-center lg:text-left px-4 lg:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Dreadlock Installation</h2>
            <p className="mt-4 text-gray-700 text-base md:text-lg">
              Get professionally installed dreadlocks using premium quality materials. Our expert stylists ensure that your new locs are perfectly tailored to your desired thickness, length, and style.
            </p>
            <p className="mt-4 text-yellow-500 text-lg font-semibold">Starting from ₹10,000 depending upon hair length</p>
            <button onClick={handleBookNowClick} className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded">Book Now</button>
          </div>
        </div>

        {/* Other Services */}
        {/* ... (you can keep the other services as they are) */}
      </section>

      {/* Gallery Section */}
      <Gallery /> {/* Use the Gallery component here */}

      {/* Booking Section */}
      {/* (Keep your booking section code as it is) */}

      {/* Booking Form Section */}
      {showLoginForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
            <GoogleLoginForm />
            <button onClick={() => setShowLoginForm(false)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
