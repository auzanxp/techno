import React from "react";

const OurWork = () => {
  return (
    <>
      <div className="text-center mb-6 font-extrabold text-primary text-2xl">Our Work</div>
      <div className="flex flex-wrap mx-auto container">
        <div className="w-1/2 sm:w-1/3 md:w-1/4 px-4 my-3">
          <div className="relative">
            <img
              className="w-full h-auto rounded-lg"
              src="https://placehold.co/600x600/174A7E/FFFFFF.png"
              alt="Image 1"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <p className="text-sm">Caption 1</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 px-4 my-3 ">
          <div className="relative">
            <img
              className="w-full h-auto rounded-lg "
              src="https://placehold.co/600x600/174A7E/FFFFFF.png"
              alt="Image 2"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <p className="text-sm">Caption 2</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 px-4 my-3 ">
          <div className="relative">
            <img
              className="w-full h-auto rounded-lg"
              src="https://placehold.co/600x600/174A7E/FFFFFF.png"
              alt="Image 3"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <p className="text-sm">Caption 3</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 px-4 my-3 ">
          <div className="relative">
            <img
              className="w-full h-auto rounded-lg"
              src="https://placehold.co/600x600/174A7E/FFFFFF.png"
              alt="Image 4"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <p className="text-sm">Caption 4</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWork;
