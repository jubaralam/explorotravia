// import React from 'react'

import bgVideo from "../assets/exploroTriviaBg.mp4";
const HeroSection = () => {
  return (
    <div>
      <div className="relative h-[90vh] w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          {/* Hero Text */}
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
            Explore the World with Us
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mt-4 drop-shadow-lg">
            Discover breathtaking destinations and thrilling adventures.
          </p>
          {/* Action Button */}

          <button className="btn mt-6">Book Your Trips Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
