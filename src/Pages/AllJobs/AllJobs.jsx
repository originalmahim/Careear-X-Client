import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaDollarSign, FaSearch } from 'react-icons/fa';
import { TbBrandOffice } from 'react-icons/tb';


const AllJobs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); 

          useEffect(() => {
          fetch(`http://localhost:5000/alljobs`)
          .then((res) => res.json())
          .then((data) => {
          setData(data);
          setLoading(false);
          })
          .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
          });
          }, []);

          if (loading) {
          return (
          <h1 className="flex my-40 items-center justify-center">
          <img
          className="w-80"
          src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/loading.gif"
          />
          </h1>
          );
          }
  return (
          <div className="max-w-6xl mx-auto my-12 px-3 lg:px-0 overflow-x-hidden" style={{ overflowX: 'hidden' }}>
          <div>
          <div className=" bg-violet-100 shadow-lg rounded-lg md:p-6">
          <div className="md:flex md:space-x-4">
          <div className="md:w-5/12">
          <div className="mb-4">
          <div className="relative">

          <input
          type="text"
          className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:outline-none"
          placeholder="Search by Job Title"
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <div className="absolute top-0 left-3 flex items-center h-full">
          <FaSearch className="text-gray-400" />
          </div>
          </div>
          </div>
          </div>
          <div className="md:w-7/12">
          <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mt-4 md:mt-0">
          <button
          className="w-full md:w-auto bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 focus:outline-none"
          >
          Find Now
          </button>
          </div>
          </div>
          </div>
          </div>
          </div>
          {data
          .filter((job) =>
          job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((job, index) => (
          <div key={index}>
          <div className="bg-white my-4 p-4 rounded-lg shadow-lg hover:shadow-xl transform transition-transform hover:-translate-y-2 animate__animated animate__fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
          <div className="sm:flex md:flex lg:flex xl:flex items-center justify-between">
          <div className="flex items-center">
          <div className="mr-4">
          <img src={job.brandImg} className="w-16 h-16 rounded-full border-none" alt="Brand Logo" />
          </div>
          <div>
          <h6 className="text-xl font-bold">
          {job?.jobTitle}
          </h6>
          <div className="text-gray-600 text-sm">
          <h1 className="text-violet-400">{job.employer}</h1>
          </div>
          </div>
          </div>
          <div className="mt-4 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 text-xl text-blue-500">
          <FaDollarSign className="inline" />{job.salary}/month
          </div>
          </div>
          <div className="sm:flex md:flex lg:flex xl:flex justify-between">
          <div className="mt-4 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 text-xl">
          <div className="text-gray-600">
          <FaClock className="inline mr-2" />Posted: {job.postingDate} Days ago
          </div>
          <div className="text-gray-600">
          <TbBrandOffice className="inline mr-2" /> Job Offered By: {job.postedBy} 
          </div>
          <div className="text-gray-600">
          <FaCalendarAlt className="inline mr-2" /> {job.deadline}
          </div>
          </div>
          <div className="mt-4 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0">
          <div className="flex flex-col">
          <button className="btn mb-1 btn-small bg-green-600 text-white mr-2">{job.jobType}</button>
          <Link to={`/details/${job._id}`} className="btn mb-1 btn-small bg-violet-500 text-white mr-2">
          View Details
          </Link>
          </div>
          </div>
          </div>
          </div>
          </div>
          ))}
          </div>
          </div>
          );
          };

export default AllJobs;
