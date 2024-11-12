// components/Gallery.js
"use client";
import React from 'react';

export default function Gallery() {
  return (
    <section className="bg-gray-100 py-12 md:py-20 px-4 md:px-10 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">Gallery of Our Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Image 1 */}
        <div className="w-full">
          <img
            src="/gallery-image-1.jpg"
            alt="Gallery Image 1"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        {/* Image 2 */}
        <div className="w-full">
          <img
            src="/gallery-image-2.jpg"
            alt="Gallery Image 2"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        {/* Video 1 */}
        <div className="w-full">
          <video
            controls
            className="w-full rounded shadow-lg"
          >
            <source src="/gallery-video-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Image 3 */}
        <div className="w-full">
          <img
            src="/gallery-image-3.jpg"
            alt="Gallery Image 3"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        {/* Video 2 */}
        <div className="w-full">
          <video
            controls
            className="w-full rounded shadow-lg"
          >
            <source src="/gallery-video-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Image 4 */}
        <div className="w-full">
          <img
            src="/gallery-image-4.jpg"
            alt="Gallery Image 4"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
