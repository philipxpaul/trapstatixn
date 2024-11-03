// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <Head>
        <title>TrapStation - Dreadlock Services</title>
        <meta name="description" content="Professional dreadlock services for your unique style" />
      </Head>
      <div className="bg-black bg-opacity-60 w-full h-full flex flex-col lg:flex-row items-center justify-between p-4 lg:p-20 gap-10">
        
        {/* Left Section - Heading */}
        <div className="text-white max-w-md text-center lg:text-left">
          <img src="/path-to-your-logo.png" alt="TrapStation Logo" className="mb-4 mx-auto lg:mx-0" width={100} />
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Professional Dreadlock Services for Your Unique Style</h1>
          <p className="text-lg mb-6">Contact Us Today to Start Your Dreadlock Journey or Maintain Your Locs with Our Expert Stylists</p>
          <button className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200">Book Now</button>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white bg-opacity-90 p-8 rounded-lg w-full max-w-md shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Fill your details for booking</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input type="text" className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300" placeholder="Name" required />
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input type="email" className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300" placeholder="Email Address" required />
            </div>
            <div>
              <label className="block text-gray-700">WhatsApp Number</label>
              <input type="text" className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300" placeholder="WhatsApp Number" required />
            </div>
            <button type="submit" className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-gray-800">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
