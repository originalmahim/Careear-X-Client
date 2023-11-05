import { BsBookmarkHeart } from 'react-icons/bs';
import { BiSolidShoppingBag, BiLocationPlus } from 'react-icons/bi';
const Featured = () => {
          return (
          <div className="max-w-7xl mx-auto">
          <div className="text-center items-center justify-center my-6">
          <h1 className="text-4xl font-semibold">Featured Jobs</h1>
          <h1 className="text-xl">The #1 Job Board for Hiring Creative Professionals</h1>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 px-3 lg:px-0">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transform transition-transform hover:-translate-y-2 animate__animated animate__fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
          <div className="flex items-center">
          <a href="employers-single.html" className="mr-4">
          <img src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/page/job/digital.png" alt="jobhub" className="w-16 h-16 rounded-full border-4 border-blue-light" />
          </a>
          <div>
          <h6 className="text-xl font-bold text-blue-dark">
          <a href="job-single.html">Digital Marketing Manager</a>
          </h6>
          <div className="text-gray-600 text-sm">
          <h1 className="text-violet-400">AliStudio, Inc</h1>
          <span className="text-sm ml-2 flex items-center gap-1"><BiLocationPlus></BiLocationPlus> New York</span>
          <span className="text-sm ml-2 flex gap-1 items-center"><BiSolidShoppingBag></BiSolidShoppingBag> Full time</span>
          </div>
          </div>
          </div>
          <div className="mt-4 text-gray-800">
          We are looking for a dynamic professional with 2-3 years of experience who can showcase a stellar portfolio.
          </div>
          <div className="mt-4">
          <div className="flex items-center">
          <div className="flex-grow">
          <button  className="btn btn-small bg-green-300 text-white mr-2">Urgent</button>
          <button href="job-grid-2.html" className="btn btn-small bg-blue-200 text-white mr-2">Senior</button>
          <button  className="btn btn-small bg-yellow-300 text-white">Full time</button>
          </div>
          <div className="pt-2">
          <button><BsBookmarkHeart className='text-xl'></BsBookmarkHeart></button>
          </div>
          </div>
          </div>
          </div>
          

          </div>
          </div>
          );
};

export default Featured;