// pages/dreadlocks.js
"use client"
import Head from 'next/head';
// import Header from './components/header';
import { useState, useEffect } from 'react';
import GoogleLoginForm from '../components/googleLoginForm';

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
      {/* <Header/> */}
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
            <h2 className="text-3xl md:text-4xl font-bold">Dreadlock Installation</h2>
            <p className="mt-4 text-gray-700 text-base md:text-lg">
              Get professionally installed dreadlocks using premium quality materials. Our expert stylists ensure that your new locs are perfectly tailored to your desired thickness, length, and style.
            </p>
            <p className="mt-4 text-yellow-500 text-lg font-semibold">Starting from ₹10,000 depending upon hair length</p>
            <button onClick={handleBookNowClick} className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded">Book Now</button>
          </div>
        </div>

        {/* Service 2 - Dreadlock Maintenance */}
        <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-12 space-y-6 lg:space-y-0">
          <img src="/dreads-02.png" alt="Dreadlock Maintenance" className="lg:w-1/2 w-full rounded shadow-lg" />
          <div className="lg:w-1/2 text-center lg:text-left px-4 lg:px-0">
            <h2 className="text-3xl md:text-4xl font-bold">Dreadlock Maintenance</h2>
            <p className="mt-4 text-gray-700 text-base md:text-lg">
              Keep your locs looking fresh with our maintenance services. We offer retwisting, repair, and deep cleansing to keep your locs healthy and stylish.
            </p>
            <p className="mt-4 text-yellow-500 text-lg font-semibold">Starting from ₹1000 per session</p>
            <button onClick={handleBookNowClick} className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded">Book Now</button>
          </div>
        </div>

        {/* Service 3 - Dreadlock Styling */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-6 lg:space-y-0">
          <img src="/dreads-03.png" alt="Dreadlock Styling" className="lg:w-1/2 w-full rounded shadow-lg" />
          <div className="lg:w-1/2 text-center lg:text-left px-4 lg:px-0">
            <h2 className="text-3xl md:text-4xl font-bold">Dreadlock Styling</h2>
            <p className="mt-4 text-gray-700 text-base md:text-lg">
              Choose from a variety of styles, from intricate updos to simple, elegant looks. Our stylists are experienced in creating styles that suit your personality and occasion.
            </p>
            <p className="mt-4 text-yellow-500 text-lg font-semibold">Starting from ₹1500</p>
            <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded">Book Now</button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-100 py-12 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Dreadlock Services Pricing</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20">
          <div className="bg-white shadow-lg rounded-lg p-6 py-40">
            <h3 className="text-3xl font-bold mb-4">Dreadlock Installation</h3>
            <p className="text-gray-700 mb-4">Starting at ₹10,000</p>
            <p className="text-sm text-gray-500">Full installation for all hair types. Prices vary depending on length and style.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 py-40">
            <h3 className="text-3xl font-bold mb-4">Dreadlock Maintenance</h3>
            <p className="text-gray-700 mb-4">Starting at ₹1000</p>
            <p className="text-sm text-gray-500">Includes retwisting, repairs, and deep cleansing. Keep your locs healthy and stylish.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 py-40">
            <h3 className="text-3xl font-bold mb-4">Dreadlock Styling</h3>
            <p className="text-gray-700 mb-4">Starting at ₹1500</p>
            <p className="text-sm text-gray-500">From casual to formal styles, our professional stylists will make your locs look perfect for any occasion.</p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
        <p className="mt-4 text-gray-700 text-base md:text-lg max-w-2xl mx-auto px-4">
          Book your appointment today and let our experts help you achieve the perfect look. We can&apost wait to see you!
        </p>
        <button onClick={handleBookNowClick} className="mt-8 bg-yellow-500 text-white px-8 py-3 rounded font-semibold">Book Now</button>
      </section>
      {/* Booking Form Section */}
      {showLoginForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
            <GoogleLoginForm  />
            <button onClick={() => setShowLoginForm(false)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Close</button>
          </div>
        </div>
      )}

    </div>
  );
}

