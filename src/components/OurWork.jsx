import React from "react";

const OurWork = () => {
  return (
    <div id="ourwork" className="mx-auto container mt-12">
      <h1 className="text-center mb-2 md:mb-6 font-extrabold text-primary text-2xl">
        Our Work
      </h1>
      <div className="flex flex-wrap">
        <div className="w-1/2 sm:w-1/3 md:w-1/4 px-4 my-3">
          <div className="relative hover:scale-105 transition duration-300">
            <img
              className="w-full h-auto rounded-lg"
              src="https://placehold.co/600x600/174A7E/FFFFFF.png"
              alt="Image 1"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <p className="text-sm">UI/UX Design</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 px-4 my-3 ">
          <div className="relative hover:scale-105 transition duration-300">
            <img
              className="w-full h-auto rounded-lg "
              src="https://placehold.co/600x600/174A7E/FFFFFF.png"
              alt="Image 2"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <p className="text-sm">Web Development</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 px-4 my-3 ">
          <div className="relative hover:scale-105 transition duration-300">
            <img
              className="w-full h-auto rounded-lg"
              src="https://placehold.co/600x600/174A7E/FFFFFF.png"
              alt="Image 3"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <p className="text-sm">Mobile App</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 px-4 my-3 ">
          <div className="relative hover:scale-105 transition duration-300">
            <img
              className="w-full h-auto rounded-lg"
              src="https://placehold.co/600x600/174A7E/FFFFFF.png"
              alt="Image 4"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <p className="text-sm">Digital Marketing</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-4 mt-6 text-slate-500">
        <div className="w-full lg:w-1/2 mr-8 md:mr-0">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            illum omnis ipsam, accusantium consectetur at! Lorem ipsum dolor sit
            voluptatum praesentium, soluta sit!
          </p>
        </div>
        <div>
          <button className="border border-slate-400 hover:border-primary hover:text-primary px-4 py-2 rounded-lg">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
