import { useContext } from "react";
import { AuthContex } from './../../Provider/AuthProvider';
import axios from "axios";
import Swal from 'sweetalert2';
import moment from 'moment';
import { useLoaderData } from "react-router-dom";
const UpdateJobPost = () => {
          const update = useLoaderData()
          console.log(update);
          const {user} = useContext(AuthContex)
          const handleUpdatePost = (e) => {
                    e.preventDefault();
                
                    const form = e.target;
                    const category = form.category.value;
                    const brandImg = form.brandImg.value;
                    const responsibilities = form.responsibilities.value;
                    const EducationQualifications = form.educationQualifications.value;
                    const email = form.email.value;
                    const headquarters = form.headquarters.value;
                    const officeImg = form.officeImg.value;
                    const Description = form.Description.value;
                    const employer = form.employer.value;
                    const jobTitle = form.jobTitle.value;
                    const jobType = form.jobType.value;
                    const deadline = moment(form.deadline.value).format("MMM Do YYYY");
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
                              deadline,
                              salary,
                              applicantsNumber,
                              postedBy,
                              postedPersonEmail,
                              totalVacancy,
                    };
                
                    axios.put(`https://career-canvas-backend.vercel.app/alljobs/${user.email}/${update._id}`, jobInfo)
                      .then(() => {
                        Swal.fire(
                          'Job Post Updated',
                          'You have Updated Posted Job successfully',
                          'success'
                        );
                      })
                      .catch((error) => {
                        console.error('Error updating job post:', error);
                      });
                  };
          return (
          <div className=" bg-orange-200">
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ede9fe" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,208C384,192,480,192,576,202.7C672,213,768,235,864,224C960,213,1056,171,1152,176C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
          </div>
          <div className="container mx-auto mt-10 p-4 bg-orange-200 shadow-md rounded-lg ">
          <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">update Job Post for {update.jobTitle}</h2>
          <form onSubmit={handleUpdatePost}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category */}
          <div>
          <label htmlFor="category" className="text-gray-600 font-medium">Job Category:</label>
          <input type="text" defaultValue={update.category} name="category" className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          {/* Brand Image */}
          <div>
          <label htmlFor="brandImg" className="text-gray-600 font-medium">Company Image URL:</label>
          <input type="text" defaultValue={update.brandImg} name="brandImg" className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          {/* Responsibilities */}
          <div>
          <label htmlFor="responsibilities" className="text-gray-600 font-medium">Job Responsibilities:</label>
          <textarea defaultValue={update.responsibilities} name="responsibilities" className="border border-gray-300 rounded-md p-2 w-full h-24"></textarea>
          </div>
          {/* Education Qualifications */}
          <div>
          <label htmlFor="educationQualifications" className="text-gray-600 font-medium">Education Qualifications:</label>
          <textarea defaultValue={update.EducationQualifications} name="educationQualifications" className="border border-gray-300 rounded-md p-2 w-full h-24"></textarea>
          </div>
          {/* Email */}
          <div>
          <label htmlFor="email" className="text-gray-600 font-medium">Company Email:</label>
          <input type="email" defaultValue={update.email} name="email" className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          {/* Headquarters */}
          <div>
          <label htmlFor="headquarters" className="text-gray-600 font-medium">Headquarters:</label>
          <input type="text" defaultValue={update.headquarters}  name="headquarters" className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          {/* Office Image */}
          <div>
          <label htmlFor="officeImg" className="text-gray-600 font-medium">Office Image Url:</label>
          <input type="text" defaultValue={update.officeImg} name="officeImg" className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          {/* Description */}
          <div>
          <label htmlFor="description" className="text-gray-600 font-medium">Description:</label>
          <textarea defaultValue={update.Description}  name="Description" className="border border-gray-300 rounded-md p-2 w-full h-24"></textarea>
          </div>
          {/* Employer */}
          <div>
          <label htmlFor="employer" className="text-gray-600 font-medium">Company Name:</label>
          <input type="text" defaultValue={update.employer}  name="employer" className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          {/* Job Title */}
          <div>
          <label htmlFor="jobTitle" className="text-gray-600 font-medium">Job Title:</label>
          <input type="text" defaultValue={update.jobTitle}  name="jobTitle" className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          {/* Job Type */}
          <div>
          <label htmlFor="jobType" className="text-gray-600 font-medium">Job Type:</label>
          <input type="text" defaultValue={update.jobType} name="jobType" className="border border-gray-300 rounded-md p-2 w-full" />
          </div>          
          {/* Deadline */}
          <div>
          <label htmlFor="deadline" className="text-gray-600 font-medium">Deadline:</label>
          <input type="date"   name="deadline" className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          {/* Salary and Total Vacancy */}
          <div>
          <label htmlFor="salary" className="text-gray-600 font-medium">Salary:</label>
          <input type="text" defaultValue={update.salary}  name="salary" className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div>
          <label htmlFor="totalVacancy" className="text-gray-600 font-medium">Total Vacancy:</label>
          <input type="number" defaultValue={update.totalVacancy} name="totalVacancy" className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          </div>

          <div className="mt-6">
          <button type="submit" className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md">Update Post</button>
          </div>
          </form>
          </div>
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ede9fe" fillOpacity="1" d="M0,96L48,101.3C96,107,192,117,288,112C384,107,480,85,576,101.3C672,117,768,171,864,197.3C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          </div>                              
          </div>
          );
};

export default UpdateJobPost;