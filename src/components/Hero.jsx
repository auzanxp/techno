const Hero = () => {
  return (
    <>
      <section id="hero" className="w-full px-6 mt-28">
        <div className="relative rounded-lg bg-primary container mx-auto flex flex-col items-center justify-items-center pt-12 sm:pt-24 pb-20 sm:pb-32 md:pb-48">
          <header className="w-11/12 sm:w-1/2 mb-5 sm:mb-10 ">
            <p className="mt-5 sm:mb-8 text-gray-300 font-normal text-center text-sm sm:text-lg">
              We thrive to be
            </p>
            <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">
              Your powerhouse digital partner
            </h1>
          </header>
          <div className="flex flex-col sm:flex-row justify-center items-center px-2 gap-2 w-full">
            <button className="w-full sm:w-fit text-white hover:bg-[#5D9CDF] lg:text-lg bg-secondary transition duration-300 ease-in-out rounded-lg px-4 sm:px-8 py-2 sm:py-3 text-sm">
              Start project with us
            </button>
            <button className="w-full sm:w-fit hover:bg-white lg:text-xl  transition duration-300 ease-in-out rounded-lg text-slate-700 bg-slate-300 px-4 sm:px-8 py-2 sm:py-3 text-sm">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
