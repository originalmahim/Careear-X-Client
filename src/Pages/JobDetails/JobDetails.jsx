
import { useContext } from "react";
import { FaGithub, FaDribbble, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { AuthContex } from './../../Provider/AuthProvider';
const MySwal = withReactContent(Swal);
import axios from 'axios';

const JobDetails = () => {
          const job = useLoaderData()
          const {user} = useContext(AuthContex);
          job.applicantEmail = user.email;

          const handleApply = () => {

            const formattedDeadline = job?.deadline.replace(/(\d+)(?:st|nd|rd|th)/, '$1');

            if (formattedDeadline) {
            const deadlineDate = new Date(formattedDeadline);
            const currentDate = new Date();

            if (currentDate >= deadlineDate) {
            if (currentDate.toDateString() !== deadlineDate.toDateString()) {
            Swal.fire('Submission Failed', 'Application Deadline Is Over', 'error');
            return;
            }
            }
            } else {
            console.error('Invalid deadline format');
            }
           
            if (job.postedPersonEmail === user.email) {
              return Swal.fire('Submission Failed', 'You Can Not Apply To your Won Posted Job', 'error');
            }
            
          
            MySwal.fire({
              title: 'Submit Application',
              html: (
                <form className="application-form">
                  <div className="form-group">
                    <label htmlFor="name">Name : </label>
                    <input
                      type="text"
                      value={user.displayName}
                      readOnly
                    />
                  </div>
                  <div className="form-group w-full ">
                    <label htmlFor="email">Email : </label>
                    <input className="w-2/4 "
                      type="email"
                      value={user.email}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="resumeLink">Resume Link : </label>
                    <input className=""
                      type="text"
                      id="resumeLink"
                      placeholder="Enter your resume link"
                    />
                  </div>
                </form>
              ),
              showCancelButton: true,
              confirmButtonText: 'Apply',
              preConfirm: async () => {
                // const resumeLink = document.getElementById('resumeLink').value;
                try {
                  const response = await axios.post('http://localhost:5000/appliedJob', job);
                  if (response.status === 200) {
                    Swal.fire('Successfully Submitted', '', 'success');
                  } else {
                    Swal.fire('Submission Failed', 'An error occurred.', 'error');
                  }
                } catch (error) {
                  Swal.fire('Submission Failed', error.message, 'error');
                }
              },
            })
            .then(() => {
              // Handle the result here if needed
            });
          }
         

  return (
          <div className="max-w-6xl lg:grid justify-center gap-10 lg:grid-cols-10 mx-auto my-8" style={{ overflowX: 'hidden' }} >
          <div className=" lg:col-span-7 shadow-lg  overflow-hidden">
          <div className=" p-4">
          <div>
          <div className="flex">
          <div className="w-8/12">
          <h5 className="mb-1 font-bold text-xl">{job?.jobTitle}</h5>
          <ul className="list-inside list-disc text-muted mb-0">
          <li><i className="mdi mdi-account"></i> {job?.totalVacancy} Vacancy</li>
          </ul>
          </div>
          <div className="w-4/12 text-right">
          <ul className="list-inline mb-0 mt-3 mt-lg-0">
          <li className="list-inline-item">
          <div className="favorite-icon">
          <a href="javascript:void(0)"><i className="uil uil-heart-alt"></i></a>
          </div>
          </li>
          <li className="list-inline-item">
          </li>
          </ul>
          </div>
          </div>
          </div>

          <div className="mt-4">
          <div className="flex gap-2">
          <div className="w-3/12 border rounded-start p-3">
          <p className="text-muted mb-0 fs-13">Experience</p>
          <p className="  ">Minimum 1 Year</p>
          </div>
          <div className="w-3/12 border p-3">
          <p className="text-muted fs-13 ">Employee type</p>
          <p className="text-green-500 font-semibold ">{job?.jobType}</p>
          </div>
          <div className="w-3/12 border p-3">
          <p className="text-muted fs-13 ">Position</p>
          <p className=" ">Senior</p>
          </div>
          <div className="w-3/12 border rounded-end p-3">
          <p className="text-muted fs-13 ">Offer Salary</p>
          <p className="text-blue-500 font-semibold ">${job?.salary
          }/ Month</p>
          </div>
          </div>
          </div>

          <div className="mt-4">
          <h5 className="mb-3 font-bold text-xl">Job Description</h5>
          <div className="job-detail-desc">
          <p className=" mb-0 lg:text-xl">{job?.Description}</p>
          </div>
          </div>
          <div className="my-3 ">
          <img src={job?.officeImg}  className="lg:w-full lg:h-[460px]" />
          </div>

          <div className="mt-4">
          <h5 className="mb-3 font-bold text-xl">Responsibilities</h5>
          <div className="mt-2 lg:text-xl">
          <p className="">As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.</p>
          <ul className="">
          <li> Have sound knowledge of commercial activities.</li>
          <li> Build next-generation web applications with a focus on the client side</li>
          <li> Work on multiple projects at once, and consistently meet draft deadlines</li>
          <li> have already graduated or are currently in any year of study</li>
          <li> Revise the work of previous designers to create a unified aesthetic for our brand materials</li>
          </ul>
          </div>
          </div>

          <div className="mt-4">
          <h5 className="mb-3 font-bold text-xl">Qualification</h5>
          <div className="job-detail-desc mt-2 lg:text-xl">
          <ul className="job-detail-list list-inside list-disc text-muted">
          <li> {job?.EducationQualifications}</li>
          <li> 3 or more years of professional design experience</li>
          <li> have already graduated or are currently in any year of study</li>
          <li> Advanced degree or equivalent experience </li>
          </ul>
          </div>
          </div>
          </div>
          </div>
          <div className="lg:col-span-3 lg:mt-0 mt-4 lg:items-start flex items-center justify-center lg:justify-normal">
          <div>
          <div className="flex flex-col justify-center max-w-xs p-4 shadow-md rounded-xl sm:px-12 bg-violet-100 ">
          <img src={job?.brandImg} alt="" className="w-32 h-32 mx-auto rounded-full  aspect-square" />
          <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">{job?.employer}</h2>
          </div>
          <div className="flex justify-center pt-2 space-x-4 align-center">
          <a rel="noopener noreferrer" href="#" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
        <FaGithub />
      </a>
      <a rel="noopener noreferrer" href="#" aria-label="Dribble" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
        <FaDribbble />
      </a>
      <a rel="noopener noreferrer" href="#" aria-label="Twitter" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
        <FaTwitter />
      </a>
      <a rel="noopener noreferrer" href="#" aria-label="Email" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
        <FaEnvelope />
      </a>
          </div>
          </div>
          <div>
          <h1>Posted : {job?.postingDate} Days A</h1>
          <h1>Deadline : {job?.deadline}</h1>
          <hr />
          </div>
          <div className="mt-4">
          <h5 className="text-lg font-semibold mb-3">Contacts</h5>
          <div className="profile-contact">
          <ul className="list-none p-0">
          <li className="mb-2">
          <div className="flex">

          <div>
          <p className="text-gray-500 break-words mb-0">Email : {job?.email}</p>
          <p className="text-gray-500 mt-1 break-words mb-0">Website : {job?.website}</p>
          </div>
          </div>
          </li>
          <li className="mb-2">
          <div className="flex">
          <label className="mr-2">Phone : </label>
          <div>
          <p className="text-gray-500 mb-0">+2 345 678 0000</p>
          </div>
          </div>
          </li>
          <li className="mb-2">
          <div className="">
          <div>
          <p className="text-gray-500 mb-0">Headquarter : {job?.headquarters}</p>
          </div>
          <div className="mt-2">
          <button onClick={handleApply} className="btn bg-blue-400 text-white">Apply Now</button>
          </div>
          </div>
          </li>
          </ul>
          </div>
          </div>                  
          </div>
          </div>
          </div>
          </div>

  );
};

export default JobDetails;
