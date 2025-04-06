import React from "react";
import banner from "../../assets/banner_2.jpg";
const Banner = () => {
  return (
    <div
      className="hero min-h-[65vh] "
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl px-4">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white font-cinzel drop-shadow-md">
            Join the Movement for a Greener Future 🌿
          </h1>
          <p className="mb-6 text-lg md:text-xl text-white/90">
            Volunteer with us, support eco-projects, and make an impact. Together, we can protect our planet—one action at a time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-85  font-semibold  transition ease-in-out duration-300">
              Become a Volunteer
            </button>
             {/* <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-green-700 transition font-semibold">
              Become a Volunteer
            </button> */}
            <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-primary transition font-semibold hover:border-white ease-in-out duration-300">
              Donate Now
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Banner;
