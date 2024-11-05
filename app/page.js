// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>TrapStation - Empowering Artists, Building Brands</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <meta name="description" content="TrapStation: The all-in-one platform for music production, dreadlocks styling, and digital distribution." />
      </Head>

      {/* Announcement Banner */}
      <div className="bg-yellow-500 text-white text-center py-2 text-xs md:text-sm ">
        70% off on all services
      </div>

      {/* Navbar */}
      <header className="bg-black text-white py-4 px-6 md:px-10 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="TrapStation Logo" className="w-auto md:w-auto" />
        </div>
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="hover:text-yellow-500 text-xl ">Home</a>
          <a href="#" className="hover:text-yellow-500 text-xl">Dreads Style</a>
          <a href="#" className="hover:text-yellow-500 text-xl">Music Distribution</a>
          <a href="#" className="hover:text-yellow-500 text-xl">About Us</a>
          <a href="#" className="hover:text-yellow-500 text-xl">Contact Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-32 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-500 leading-tight">Empowering Artists,</h2>
        <p className="text-3xl md:text-5xl font-extrabold mt-2 leading-tight">Building Brands</p>
        <p className="text-sm md:text-lg mt-6 max-w-xl mx-auto px-4">The all-in-one platform for music production, dreadlocks styling, and digital distribution.</p>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 px-4 md:px-10 lg:px-20 space-y-10 md:space-y-20">
        
        {/* Dreadlocks Styling */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-6 lg:space-y-0">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl md:text-4xl font-bold">Dreadlocks Styling</h3>
            <p className="mt-4 text-gray-700 text-sm md:text-lg">Custom dreadlocks installation, maintenance, and styling to create a unique look for artists.</p>
            <button className="mt-4 md:mt-6 bg-yellow-500 text-white px-4 md:px-6 py-2 md:py-3 rounded">Learn More</button>
          </div>
          <img src="/dreads.png" alt="Dreadlocks Styling" className="lg:w-1/2 w-full rounded " />
        </div>

        {/* Music Production */}
        <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x- space-y-6 lg:space-y-0">
          <div className="lg:w-1/2 text-center lg:text-left px-8">
            <h3 className="text-2xl md:text-4xl font-bold">Music Production</h3>
            <p className="mt-4 text-gray-700 text-sm md:text-lg">Professional recording, mixing, and mastering services to ensure high-quality music.</p>
            <button className="mt-4 md:mt-6 bg-yellow-500 text-white px-4 md:px-6 py-2 md:py-3 rounded">Learn More</button>
          </div>
          <img src="/music-production.png" alt="Music Production" className="lg:w-1/2 w-full rounded " />
        </div>

        {/* Digital Distribution */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-6 lg:space-y-0">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl md:text-4xl font-bold">Digital Distribution</h3>
            <p className="mt-4 text-gray-700 text-sm md:text-lg">Get your music on all major streaming platforms and track your earnings with ease.</p>
            <button className="mt-4 md:mt-6 bg-yellow-500 text-white px-4 md:px-6 py-2 md:py-3 rounded">Learn More</button>
          </div>
          <img src="/music-distribution.png" alt="Digital Distribution" className="lg:w-1/2 w-full rounded " />
        </div>
      </section>

      {/* Subscription Section */}
      <section className="bg-gray-100 py-12 md:py-20 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">Artists can subscribe for all latest updates</h3>
        <button className="mt-6 md:mt-8 bg-yellow-500 text-white px-6 md:px-8 py-2 md:py-3 rounded font-semibold">Subscribe</button>
      </section>

      {/* Footer */}

    </div>
  );
}