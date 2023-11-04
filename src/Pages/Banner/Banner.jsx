
const Banner = () => {
  return (
    <div className="bg-violet-200">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-wrap justify-center lg:justify-between">
            <div className="mt-44 w-full lg:w-7/12 md:w-full mb-4 lg:mb-0 lg:pr-5">
              <h2 className="text-xl">We have 150,000+ live jobs</h2>
              <h1 className="text-3xl lg:text-5xl text-black font-semibold mb-3 text-center lg:text-left">
                Find your jobs <br /> with <span className="text-violet-500 font-bold">Career X</span>
              </h1>
              <p className="text-xl text-gray-900 mb-0 text-center lg:text-left">
                Find jobs, create trackable resumes and enrich your applications. <br /> Carefully crafted after analyzing the needs of different industries.
              </p>
            </div>

            <div className="w-full lg:w-5/12 md:w-full mt-5 lg:mt-24">
              <img className="hidden lg:flex" src="https://i.ibb.co/nkhhB0C/banner-1.png"  />
              

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
