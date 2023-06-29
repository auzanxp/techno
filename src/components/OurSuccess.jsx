const OurSuccess = () => {
  return (
    <section
      id="oursuccess"
      className="w-full container mx-auto mt-12 px-6 flex flex-col justify-center items-center"
    >
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
      <article className="flex w-full xl:w-4/6 h-auto justify-center items-center bg-primary rounded-lg py-2">
        <div className="flex flex-wrap lg:flex-no-wrap w-full text-white">
          <div className="w-1/2 md:w-1/4 p-4">
            <h3 className="text-center font-bold text-3xl">15 +</h3>
            <p className="text-center text-slate-300">Team member</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-4">
            <h3 className="text-center font-bold text-3xl">500 +</h3>
            <p className="text-center text-slate-300">Client</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-4">
            <h3 className="text-center font-bold text-3xl">1000 +</h3>
            <p className="text-center text-slate-300">Projects</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-4">
            <h3 className="text-center font-bold text-3xl">A Coupel</h3>
            <p className="text-center text-slate-300">Successfull products</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default OurSuccess;
