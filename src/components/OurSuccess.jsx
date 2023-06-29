import React from "react";

const OurSuccess = () => {
  return (
    <div className="w-full container mx-auto mb-12 px-6 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-items-center items-center px-4 md:px-0 mb-10">
        <h1 className="text-center mb-4 font-extrabold text-primary text-2xl">
          Our Success by the number
        </h1>
        <p className="text-center w-full lg:w-1/2 text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          deleniti ipsam alias obcaecati id optio voluptates debitis facilis
          minima illo. Lorem ipsum. Obcaecati ad est beatae quo architecto
          accusantium?
        </p>
      </div>
      <div className="flex w-full xl:w-4/6 h-auto justify-center items-center bg-primary rounded-lg py-2">
        <div className="flex flex-wrap lg:flex-no-wrap w-full text-white">
          <div className="w-1/2 md:w-1/4 p-4">
            <div className="text-center font-bold text-3xl">15 +</div>
            <div className="text-center text-slate-300">Team member</div>
          </div>
          <div className="w-1/2 md:w-1/4 p-4">
            <div className="text-center font-bold text-3xl">500 +</div>
            <div className="text-center text-slate-300">Client</div>
          </div>
          <div className="w-1/2 md:w-1/4 p-4">
            <div className="text-center font-bold text-3xl">1000 +</div>
            <div className="text-center text-slate-300">Projects</div>
          </div>
          <div className="w-1/2 md:w-1/4 p-4">
            <div className="text-center font-bold text-3xl">A Coupel</div>
            <div className="text-center text-slate-300">
              Successfull products
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSuccess;
