import { useContext } from "react";
import { AuthContex } from './../../Provider/AuthProvider';
import axios from "axios";
import Swal from 'sweetalert2';

const PostJob = () => {
          const {user} = useContext(AuthContex)
          const handlePost = e => {
          e.preventDefault();
          const form = e.target;
          const category = form.category.value;
          const brandImg = form.brandImg.value;
          const responsibilities = form.responsibilities.value;
          const EducationQualifications = form.EducationQualifications.value;
          const email = form.email.value;
          const headquarters = form.headquarters.value;
          const officeImg = form.officeImg.value;
          const Description = form.Description.value;
          const employer = form.employer.value;
          const jobTitle = form.jobTitle.value;
          const jobType = form.jobType.value;
          const postingDate = form.postingDate.value;
          const deadline = form.deadline.value;
          const salary = form.salary.value;
          const applicantsNumber = "0";
          const postedBy = user.displayName;
          const postedPersonEmail = user.email;
          const totalVacancy = form.totalVacancy.value;
          const jobInfo = {
                    category,
                    brandImg,
                    responsibilities,
                    EducationQualifications,
                    email,
                    headquarters,
                    officeImg,
                    Description,
                    employer,
                    jobTitle,
                    jobType,
                    postingDate,
                    deadline,
                    salary,
                    applicantsNumber,
                    postedBy,
                    postedPersonEmail,
                    totalVacancy,
                  };
                  axios.post('http://localhost:5000/alljobs',jobInfo)
                  .then( () => {
                    Swal.fire(
                    'Job Posted',
                    'You have Posted New Job successfully',
                    'success'
                    )
                    form.reset();
                  })
          }
          return (
          <div className="bg-violet-200">
<div className="container mx-auto mt-10 p-4 ">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Post A Job</h2>
        <form onSubmit={handlePost}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category */}
            <div>
              <label htmlFor="category" className="text-gray-600 font-medium">Job Category:</label>
              <input type="text" id="category" name="category" className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            {/* Brand Image */}
            <div>
              <label htmlFor="brandImg" className="text-gray-600 font-medium">Company Image URL:</label>
              <input type="text" id="brandImg" name="brandImg" className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            {/* Responsibilities */}
            <div>
              <label htmlFor="responsibilities" className="text-gray-600 font-medium">Job Responsibilities:</label>
              <textarea id="responsibilities" name="responsibilities" className="border border-gray-300 rounded-md p-2 w-full h-24"></textarea>
            </div>
            {/* Education Qualifications */}
            <div>
              <label htmlFor="educationQualifications" className="text-gray-600 font-medium">Education Qualifications:</label>
              <textarea id="EducationQualifications" name="educationQualifications" className="border border-gray-300 rounded-md p-2 w-full h-24"></textarea>
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="text-gray-600 font-medium">Company Email:</label>
              <input type="email" id="email" name="email" className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            {/* Headquarters */}
            <div>
              <label htmlFor="headquarters" className="text-gray-600 font-medium">Headquarters:</label>
              <input type="text"  name="headquarters" className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            {/* Office Image */}
            <div>
              <label htmlFor="officeImg" className="text-gray-600 font-medium">Office Image Url:</label>
              <input type="text" id="officeImg" name="officeImg" className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            {/* Description */}
            <div>
              <label htmlFor="description" className="text-gray-600 font-medium">Description:</label>
              <textarea  name="Description" className="border border-gray-300 rounded-md p-2 w-full h-24"></textarea>
            </div>
            {/* Employer */}
            <div>
              <label htmlFor="employer" className="text-gray-600 font-medium">Company Name:</label>
              <input type="text"  name="employer" className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            {/* Job Title */}
            <div>
              <label htmlFor="jobTitle" className="text-gray-600 font-medium">Job Title:</label>
              <input type="text"  name="jobTitle" className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            {/* Job Type */}
            <div>
              <label htmlFor="jobType" className="text-gray-600 font-medium">Job Type:</label>
              <input type="text" id="jobType" name="jobType" className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            {/* Posting Date */}
            <div>
              <label htmlFor="postingDate" className="text-gray-600 font-medium">Posting Date:</label>
              <input type="date"  name="postingDate" className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            {/* Deadline */}
            <div>
              <label htmlFor="deadline" className="text-gray-600 font-medium">Deadline:</label>
              <input type="date"  name="deadline" className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            {/* Salary and Total Vacancy */}
            <div>
              <label htmlFor="salary" className="text-gray-600 font-medium">Salary:</label>
              <input type="text"  name="salary" className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="totalVacancy" className="text-gray-600 font-medium">Total Vacancy:</label>
              <input type="number" name="totalVacancy" className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
          </div>

          <div className="mt-6">
            <button type="submit" className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md">Post Job</button>
          </div>
        </form>
      </div>
    </div>                              
          </div>
          );
};

export default PostJob;