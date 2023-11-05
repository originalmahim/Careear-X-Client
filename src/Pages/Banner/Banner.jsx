
import { BiSearch } from 'react-icons/bi';

const Banner = () => {
  return (
        <div className="bg-violet-200">
        <div className="max-w-7xl mx-auto">
        <div className="container">
        <div className="flex flex-wrap justify-center lg:justify-between">
        <div>
        <div className="lg:mt-44 mt-4 w-full lg:w-7/12 md:w-full mb-4 lg:mb-0 lg:pr-5">
        <h2 className="lg:text-xl text-2xl lg:text-left text-center">We have 150,000+ live jobs</h2>
        <h1 className="text-3xl lg:text-5xl text-black font-semibold mb-3 text-center lg:text-left">
        Find your jobs <br /> with <span className="text-violet-500 font-bold">Career X</span>
        </h1>
        <p className="text-xl text-gray-900 mb-0 text-center lg:text-left">
        Find jobs, create trackable resumes and enrich your applications. <br /> Carefully crafted after analyzing the needs of different industries.
        </p>
        </div>
        <div className="flex items-center mt-4 justify-center lg:justify-start">
      <form className="flex lg:flex-row flex-col items-center bg-white p-4 rounded-lg shadow-lg">
        <div className="flex items-center  lg:border-none border rounded-lg p-2">
          <BiSearch className="text-2xl" />
          <input
            type="text"
            id="username"
            placeholder="Search for a job"
            required
            className="p-2 BiSearch rounded"
          />
          <h1 className='hidden lg:grid text-3xl'>|</h1>
        </div>
        <div className="flex items-center lg:border-none border rounded-lg p-2 w-full mt-4 lg:mt-0 space-x-4 file: ">
          <select className="p-2 border-none rounded">
            <option value="0">Job Category..</option>
            <option value="1">Bangladesh</option>
            <option value="2">India</option>
            <option value="3">America</option>
            <option value="4">Canada</option>
          </select>
        </div>
        <button type="submit" className=" w-full lg:w-auto flex items-center gap-1 btn bg-blue-500 mt-3 lg:mt-0 text-white rounded-lg ml-2">
          <BiSearch className='text-xl'></BiSearch>Find
        </button>
      </form>
    </div>
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
