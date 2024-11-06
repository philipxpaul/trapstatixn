// pages/digitaldistribution.js
import Head from 'next/head';

export default function DigitalDistribution() {
  return (
    <div className="bg-white">
      <Head>
        <title>TrapStation - Digital Music Distribution</title>
        <meta name="description" content="Get your music on all major streaming platforms with our digital distribution services. We help you reach a global audience." />
      </Head>

      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-32 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500">Digital Music Distribution</h1>
        <p className="text-base md:text-lg mt-6 max-w-xl mx-auto px-4">
          Reach millions of listeners around the world. We distribute your music to all major streaming platforms, ensuring your audience can enjoy your music wherever they are.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 px-4 md:px-10 lg:px-20 space-y-12">
        {/* Service 1 - Platform Distribution */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-6 lg:space-y-0">
          <img src="/distribution-platforms.jpg" alt="Platform Distribution" className="lg:w-1/2 w-full rounded shadow-lg" />
          <div className="lg:w-1/2 text-center lg:text-left px-4 lg:px-0">
            <h2 className="text-3xl md:text-4xl font-bold">Platform Distribution</h2>
            <p className="mt-4 text-gray-700 text-base md:text-lg">
              We distribute your music to Spotify, Apple Music, Amazon Music, YouTube Music, and all major streaming services. Expand your reach and let your audience stream your music globally.
            </p>
            <p className="mt-4 text-yellow-500 text-lg font-semibold">Starting from $50 per release</p>
            <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded">Distribute Now</button>
          </div>
        </div>

        {/* Service 2 - Royalty Management */}
        <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-12 space-y-6 lg:space-y-0">
          <img src="/royalty-management.jpg" alt="Royalty Management" className="lg:w-1/2 w-full rounded shadow-lg" />
          <div className="lg:w-1/2 text-center lg:text-left px-4 lg:px-0">
            <h2 className="text-3xl md:text-4xl font-bold">Royalty Management</h2>
            <p className="mt-4 text-gray-700 text-base md:text-lg">
              Track your royalties with ease. Our royalty management services ensure you get paid for every stream, download, and purchase of your music across platforms.
            </p>
            <p className="mt-4 text-yellow-500 text-lg font-semibold">Starting from $30 per release</p>
            <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded">Get Started</button>
          </div>
        </div>

        {/* Service 3 - Analytics & Reporting */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-6 lg:space-y-0">
          <img src="/music-analytics.jpg" alt="Music Analytics" className="lg:w-1/2 w-full rounded shadow-lg" />
          <div className="lg:w-1/2 text-center lg:text-left px-4 lg:px-0">
            <h2 className="text-3xl md:text-4xl font-bold">Analytics & Reporting</h2>
            <p className="mt-4 text-gray-700 text-base md:text-lg">
              Understand your audience with detailed analytics. Get insights on where your music is being streamed, who your listeners are, and how to grow your fan base.
            </p>
            <p className="mt-4 text-yellow-500 text-lg font-semibold">Starting from $20 per release</p>
            <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded">View Reports</button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-100 py-12 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Digital Distribution Pricing</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Platform Distribution</h3>
            <p className="text-gray-700 mb-4">Starting at $50 per release</p>
            <p className="text-sm text-gray-500">Distribute your music to all major streaming platforms like Spotify, Apple Music, and Amazon Music.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Royalty Management</h3>
            <p className="text-gray-700 mb-4">Starting at $30 per release</p>
            <p className="text-sm text-gray-500">Ensure you get paid for every stream, download, and purchase with our detailed royalty tracking services.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Analytics & Reporting</h3>
            <p className="text-gray-700 mb-4">Starting at $20 per release</p>
            <p className="text-sm text-gray-500">Gain valuable insights into your audience and their listening habits with detailed reports.</p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Distribute Your Music Today</h2>
        <p className="mt-4 text-gray-700 text-base md:text-lg max-w-2xl mx-auto px-4">
          Ready to share your music with the world? Our digital distribution services make it easy to reach millions of listeners. Get started today!
        </p>
        <button className="mt-8 bg-yellow-500 text-white px-8 py-3 rounded font-semibold">Get Started</button>
      </section>
    </div>
  );
}

