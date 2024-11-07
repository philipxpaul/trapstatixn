// pages/about.js
import Head from 'next/head';

export default function AboutUs() {
  return (
    <div className="bg-white">
      <Head>
        <title>TrapStation - About Us</title>
        <meta name="description" content="Learn more about the founders of TrapStation, Wilson Paul and Philips Paul, and their journey in the music and tech industry." />
      </Head>

      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-32 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500">About Us</h1>
        <p className="text-base md:text-lg mt-6 max-w-xl mx-auto px-4">
          Meet the creative minds behind TrapStation, Wilson Paul and Philips Paul, as they combine their expertise in music and technology to empower artists and build brands.
        </p>
      </section>

      {/* Founders Section */}
      <section className="py-12 md:py-20 px-4 md:px-10 lg:px-20 space-y-12">
        {/* Wilson Paul */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-6 lg:space-y-0">
          <img src="/wilson.png" alt="Wilson Paul" className="lg:w-1/3 w-full rounded shadow-lg" />
          <div className="lg:w-2/3 text-center lg:text-left px-4 lg:px-0">
            <h2 className="text-3xl md:text-4xl font-bold">Wilson Paul</h2>
            <p className="mt-4 text-gray-700 text-base md:text-lg">
              Wilson Paul is a professional dread artist with over 8 years of experience. He has transformed the hair of countless clients, creating unique and stylish locs that express individuality. Beyond his passion for dreadlocks, Wilson is also a talented dancer who has successfully won numerous dance battles, showcasing his creativity and dedication to the art.
            </p>
          </div>
        </div>

        {/* Philips Paul */}
        <div className="flex flex-col lg:flex-row-reverse items-center space-y-6 lg:space-y-0">
          <img
            src="/Philips.jpeg"
            alt="Philips Paul"
            className="lg:w-1/3 w-full rounded shadow-lg"
          />
          <div className="lg:w-2/3 text-center lg:text-left px-4 lg:px-0 lg:ml-8">
            <h2 className="text-3xl md:text-4xl font-bold">Philips Paul</h2>
            <p className="mt-4 text-gray-700 text-base md:text-lg">
              Philips Paul is a tech engineer with 8 years of experience in the tech
              industry. He is also the owner of Luink, a social media platform that
              blends creativity and networking. Philips is passionate about
              leveraging technology to create opportunities for artists and
              entrepreneurs, helping them connect and grow in the digital space.
            </p>
          </div>
        </div>

      </section>

      {/* Vision Section */}
      <section className="bg-gray-100 py-12 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
        <p className="mt-4 text-gray-700 text-base md:text-lg max-w-2xl mx-auto px-4">
          At TrapStation, our vision is to empower artists by providing them with the tools and opportunities they need to build their brands, express themselves, and reach a global audience. We believe in the power of creativity and technology to transform lives, and we are committed to supporting artists in every way possible.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-20 px-4 md:px-10 lg:px-20 space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Our Story</h2>
        <p className="mt-4 text-gray-700 text-base md:text-lg max-w-3xl mx-auto px-4 text-center">
          TrapStation was born out of a shared passion for art, music, and technology. Wilson and Philips Paul, two brothers with diverse talents, combined their skills to create a platform that supports artists in their journey. With Wilson&aposs expertise in dreadlock artistry and Philips&apos background in technology, they built TrapStation to be a space where creativity and innovation come together.
        </p>
      </section>
    </div>
  );
}

