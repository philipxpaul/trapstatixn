// pages/dreadlocks.js
import Head from 'next/head';
import { useState } from 'react';

export default function Dreadlocks() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Dreadlock Installation',
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('YOUR_GOOGLE_SCRIPT_WEB_APP_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Booking submitted successfully!');
        setShowForm(false);
        setFormData({ name: '', email: '', phone: '', service: 'Dreadlock Installation', date: '' });
      } else {
        alert('There was an error submitting your booking. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your booking. Please try again.');
    }
  };

  return (
    <div className="bg-white">
      <Head>
        <title>TrapStation - Dreadlock Services</title>
        <meta
          name="description"
          content="Professional dreadlock services for unique styles. Choose from our range of dreadlock services tailored to your needs."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-32 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500">Professional Dreadlock Services</h1>
        <p className="text-base md:text-lg mt-6 max-w-xl mx-auto px-4">
          Whether you're looking to start your dreadlock journey or maintain your existing locs, our experienced stylists are here to help you every step of the way.
        </p>
      </section>

      {/* Booking Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Book Your Appointment</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">Submit Booking</button>
              <button
                type="button"
                className="bg-gray-300 text-black px-4 py-2 rounded ml-4"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

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
            <button onClick={() => setShowForm(true)} className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded">Book Now</button>
          </div>
        </div>

        {/* Add other services as needed with similar book now buttons */}
      </section>
    </div>
  );
}
