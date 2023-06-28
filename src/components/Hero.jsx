import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full px-6 mb-12">
        <div className="relative rounded-lg bg-primary container mx-auto flex flex-col items-center justify-items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48">
          <div className="w-11/12 sm:w-1/2 mb-5 sm:mb-10 ">
            <p className="mt-5 sm:mb-8 text-gray-300 font-normal text-center text-sm sm:text-lg">
              We thrive to be
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">
              Your powerhouse digital partner
            </h1>
          </div>
          <div className="flex justify-center items-center mb-10 sm:mb-20">
            <button className="text-white hover:bg-primary lg:text-lg hover:border-white hover:border bg-secondary transition duration-150 ease-in-out rounded-lg px-4 sm:px-8 py-1 sm:py-3 text-sm">
              Start project with us
            </button>
            <button className="hover:bg-white lg:text-xl hover:border-white ml-3 sm:ml-6 transition duration-150 ease-in-out hover:bg-indigo-700-800 rounded-lg hover:border text-slate-700 bg-slate-300 px-4 sm:px-8 py-1 sm:py-3 text-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
