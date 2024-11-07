// pages/musicproduction.js
import Head from 'next/head';

export default function MusicProduction() {
  return (
    <div className="bg-white">
      <Head>
        <title>TrapStation - Music Production Services</title>
        <meta name="description" content="Professional music production services for all genres. From recording to mastering, our team is here to help you create high-quality music." />
      </Head>

      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-32 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500">Professional Music Production</h1>
        <p className="text-base md:text-lg mt-6 max-w-xl mx-auto px-4">
          Create high-quality music with our professional production services. We offer recording, mixing, and mastering services for artists of all levels.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 px-4 md:px-10 lg:px-20 space-y-12">
        {/* Service 1 - Recording */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-6 lg:space-y-0">
          <img src="/recording.jpg" alt="Music Recording" className="lg:w-1/2 w-full rounded shadow-lg" />
          <div className="lg:w-1/2 text-center lg:text-left px-4 lg:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Recording Services</h2>
            <p className="mt-4 text-gray-700 text-base md:text-lg">
              Our state-of-the-art recording studio is equipped with high-quality gear and experienced engineers to capture your music in its purest form.
            </p>
            <p className="mt-4 text-yellow-500 text-lg font-semibold">Starting from $150 per session</p>
            <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded">coming soon</button>
          </div>
        </div>

        {/* Service 2 - Mixing */}
        <div className="flex flex-col lg:flex-row-reverse items-center  lg:space-y-0">
          <img src="/mixing.jpg" alt="Music Mixing" className="lg:w-1/2 w-full rounded shadow-lg" />
          <div className="lg:w-2/3 text-center lg:text-left px-4 lg:px-0 lg:ml-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Mixing Services</h2>
            <p className="mt-4 text-gray-700 text-base md:text-lg">
              Our mixing services will give your music the balance it needs to shine. We use the latest techniques to ensure your music sounds amazing across all devices.
            </p>
            <p className="mt-4 text-yellow-500 text-lg font-semibold">Starting from $200 per track</p>
            <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded">coming soon</button>
          </div>
        </div>

        {/* Service 3 - Mastering */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-6 lg:space-y-0">
          <img src="/mastering.jpg" alt="Music Mastering" className="lg:w-1/2 w-full rounded shadow-lg" />
          <div className="lg:w-1/2 text-center lg:text-left px-4 lg:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Mastering Services</h2>
            <p className="mt-4 text-gray-700 text-base md:text-lg">
              Our mastering services will put the final touches on your track, making it ready for streaming, radio, and distribution with pristine quality.
            </p>
            <p className="mt-4 text-yellow-500 text-lg font-semibold">Starting from $100 per track</p>
            <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded">coming soon </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-100 py-12 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Music Production Pricing</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-black">Recording Services</h3>
            <p className="text-gray-700 mb-4">Starting at $150 per session</p>
            <p className="text-sm text-gray-500">Includes professional recording with experienced engineers in a high-quality studio environment.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-black">Mixing Services</h3>
            <p className="text-gray-700 mb-4">Starting at $200 per track</p>
            <p className="text-sm text-gray-500">Professional mixing to balance instruments, vocals, and effects to perfection.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-black">Mastering Services</h3>
            <p className="text-gray-700 mb-4">Starting at $100 per track</p>
            <p className="text-sm text-gray-500">Final polish for your music to ensure it sounds great on every platform.</p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Take Your Music to the Next Level</h2>
        <p className="mt-4 text-gray-700 text-base md:text-lg max-w-2xl mx-auto px-4">
          Book your session today and work with our experienced team to produce the high-quality music you deserve. We can&apost wait to hear what you create!
        </p>
        <button className="mt-8 bg-yellow-500 text-white px-8 py-3 rounded font-semibold">Book Now</button>
      </section>
    </div>
  );
}

