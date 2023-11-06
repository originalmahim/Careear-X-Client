import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaDollarSign,  } from 'react-icons/fa';
import { TbBrandOffice } from 'react-icons/tb';
import { useContext } from "react";
import { AuthContex } from './../../Provider/AuthProvider';

          const PostedJobs = () => {
          const [data, setData] = useState([]);
          const [loading, setLoading] = useState(true);
          const {user} = useContext(AuthContex) 

          useEffect(() => {
          fetch(`http://localhost:5000/alljobs/${user.email}`)
          .then(res => res.json())
          .then(data => {
          setData(data);
          setLoading(false); 
          })
          .catch(error => {
          console.error("Error fetching data:", error);
          setLoading(false); 
          });
          }, [user.email]);

         if (loading) {
          return  <h1 className="flex my-40 items-center justify-center"><img className="w-80" src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/loading.gif" /></h1>
         }
          return (
          <div className="max-w-6xl mx-auto my-12">
          <div>
          { data.length > 0 ? <div><h1 className="text-center text-2xl font-bold">Your Posted All Jobs Are Here</h1></div> : <div><h1 className="text-center text-2xl font-bold">You did Not Post Any Job Yet</h1></div>
          }
          </div>
          
          { data.length > 0 ?
          <div >
          { data.map((job, index) => <div key={index}>
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
      {/* <div className="text-gray-600">
        <FaUser className="inline mr-2" /> {job.applicantsNumber} Applicants
      </div> */}
    </div>
    <div className="mt-4 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0">
      <div className="flex flex-col">
        <button className="btn mb-1 btn-small bg-green-600 text-white mr-2">{job.jobType}</button>
        <Link to="/login">
          <button className="btn btn-small bg-violet-600 text-white mr-2">View Details</button>
        </Link>
      </div>
    </div>
  </div>
          </div>
          </div>)
          }
                             
          </div> : <div className="p-4">
          <div className="flex items-center justify-center">
          <img src="https://img.freepik.com/premium-vector/employees-looking-job-employees-using-magnifying-glass-searching-job-search-bar_70921-1842.jpg"  />
          </div>
           
          </div>}
          
          </div>
          );
};

export default PostedJobs;