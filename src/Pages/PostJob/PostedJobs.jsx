import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaDollarSign,  } from 'react-icons/fa';
import { TbBrandOffice } from 'react-icons/tb';
import { useContext } from "react";
import { AuthContex } from './../../Provider/AuthProvider';
import axios from "axios";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../Hooks/UseAxiosSecure";

          const PostedJobs = () => {
          const [data, setData] = useState([]);
          const [loading, setLoading] = useState(true);
          const {user} = useContext(AuthContex)
          const axiosSecure = useAxiosSecure()
          const handleDelete = (id) => {
          Swal.fire({
                      title: 'Are you sure?',
                      text: "You won't be able to revert this!",
                      icon: 'warning',
                      showCancelButton: true,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33',
                      confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                      if (result.isConfirmed) {
                        axios.delete(`http://localhost:5000/alljobs/${user.email}/${id}`)
                        .then(() => {
                          const newdata = data.filter(job => job._id !== id)
                          setData(newdata)
                
                          Swal.fire(
                            'Deleted!',
                            'Your Job Post has been deleted.',
                            'success'
                          )
                
                        })
                        
                      }
                    })
                        
                  }
          const url = `/alljobs/${user.email}`;
          useEffect(() => {
            axiosSecure.get(url)
            .then(res => {
              setLoading(false)
              setData(res.data)
              
            })
    
        }, [url, axiosSecure]);
    

         if (loading) {
          return  <h1 className="flex my-40 items-center justify-center"><img className="w-80" src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/loading.gif" /></h1>
         }
          return (
          <div className="max-w-6xl mx-auto my-12 px-3 lg:px-0 overflow-x-hidden">
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
    
  </div>
  <div className="sm:flex md:flex lg:flex xl:flex justify-between">
    <div className="mt-4 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 text-xl">
    <div className="mt-4 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 text-xl text-blue-500">
      <FaDollarSign className="inline" />{job.salary}/month
    </div>
      <div className="text-gray-600">
        <FaClock className="inline mr-2" />Posted: {job.postingDate} Days ago
      </div>
      <div className="text-gray-600">
      <TbBrandOffice className="inline mr-2" /> Job Offered By: {job.postedBy} 
      </div>
      <div className="text-gray-600">
        <FaCalendarAlt className="inline mr-2" /> {job.deadline}
      </div>
      <div className="text-gray-600">
        Job-Type : {job.jobType}
      </div>
      
    </div>
    <div className="mt-4 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0">
      <div className="flex flex-col">
        <Link to={`/updatePost/${job._id}`} className="btn mb-1 btn-small bg-green-600 text-white mr-2" >
        Update Post
        </Link>
        <button onClick={() => handleDelete(job._id)} className="btn mb-1 btn-small bg-red-500 text-white mr-2">Delete Post</button>
        <Link to={`/details/${job._id}`} className="btn mb-1 btn-small bg-violet-500 text-white mr-2">
        View Details
        </Link>
        
      </div>
    </div>
  </div>
          </div>
          </div>)
          }
                             
          </div> : <div className="p-4">
          <div className="flex items-center justify-center">
          <img  src="https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228796-stock-illustration-online-registration-sign-login-account.jpg"  />
          </div>
           
          </div>}
          
          </div>
          );
};

export default PostedJobs;