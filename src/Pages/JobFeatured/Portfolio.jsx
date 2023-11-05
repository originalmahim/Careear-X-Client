import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaDollarSign, FaUser } from 'react-icons/fa';
const jobData = [
  {
    category: "Branding",
    brandImg: "https://themesflat.co/html/jobtex/images/logo-company/cty2.png",
    responsibilities: "Sample responsibilities for Branding job",
    EducationQualifications: "Bachelor's degree in Marketing or related field",
    website: "https://brandingco.example",
    email: "contact@brandingco.example",
    headquarters: "Brandville, USA",
    officeImg: "https://i.ibb.co/64WfFPt/image-01.jpg",
    Description: "Join our team at AliStudio, Inc as a Digital Marketing Manager! We are looking for a dynamic professional with 2-3 years of experience who can showcase a stellar portfolio. You will be responsible for developing and implementing digital marketing strategies to drive business growth and brand recognition. If you have a passion for marketing and a track record of success, we want to hear from you.",
    employer: "AliStudio, Inc",
    jobTitle: "Digital Marketing Manager",
    jobType: "On-Site",
    postingDate: "1",
    deadline: "Application Deadline: Nov 15, 2023",
    salary: "50000",
    applicantsNumber: "5",
  },
  {
    category: "Branding",
    brandImg: "https://themesflat.co/html/jobtex/images/logo-company/cty2.png",
    responsibilities: "Sample responsibilities for Branding job",
    EducationQualifications: "Bachelor's degree in Marketing or related field",
    website: "https://brandingco.example",
    email: "contact@brandingco.example",
    headquarters: "Brandville, USA",
    officeImg: "https://i.ibb.co/64WfFPt/image-01.jpg",
    Description: "Join our team at AliStudio, Inc as a Digital Marketing Manager! We are looking for a dynamic professional with 2-3 years of experience who can showcase a stellar portfolio. You will be responsible for developing and implementing digital marketing strategies to drive business growth and brand recognition. If you have a passion for marketing and a track record of success, we want to hear from you.",
    employer: "AliStudio, Inc",
    jobTitle: "Digital Marketing Manager",
    jobType: "On-Site",
    postingDate: "1",
    deadline: "Application Deadline: Nov 15, 2023",
    salary: "50000",
    applicantsNumber: "5",
  },
  {
    category: "Marketing",
    brandImg: "https://themesflat.co/html/jobtex/images/logo-company/cty2.png",
    responsibilities: "Sample responsibilities for Marketing job",
    EducationQualifications: "Bachelor's degree in Marketing or related field",
    website: "https://marketingco.example",
    email: "contact@marketingco.example",
    headquarters: "Marketingtown, USA",
    officeImg: "https://i.ibb.co/64WfFPt/image-01.jpg",
    Description: "Are you a marketing enthusiast? Join our team at Marketing Co. as a Marketing Specialist. We are looking for creative individuals who are passionate about marketing. In this role, you will be responsible for planning and executing marketing campaigns to promote our products. If you have a creative flair and a knack for marketing, this role is for you!",
    employer: "Marketing Co.",
    jobTitle: "Marketing Specialist",
    jobType: "Remote Job",
    postingDate: "2",
    deadline: "Application Deadline: Nov 20, 2023",
    salary: "55000",
    applicantsNumber: "8",
  },
  {
    category: "Marketing",
    brandImg: "https://themesflat.co/html/jobtex/images/logo-company/cty2.png",
    responsibilities: "Sample responsibilities for Marketing job",
    EducationQualifications: "Bachelor's degree in Marketing or related field",
    website: "https://marketingco.example",
    email: "contact@marketingco.example",
    headquarters: "Marketingtown, USA",
    officeImg: "https://i.ibb.co/64WfFPt/image-01.jpg",
    Description: "Are you a marketing enthusiast? Join our team at Marketing Co. as a Marketing Specialist. We are looking for creative individuals who are passionate about marketing. In this role, you will be responsible for planning and executing marketing campaigns to promote our products. If you have a creative flair and a knack for marketing, this role is for you!",
    employer: "Marketing Co.",
    jobTitle: "Marketing Manager",
    jobType: "Hybrid",
    postingDate: "3",
    deadline: "Application Deadline: Nov 25, 2023",
    salary: "60000",
    applicantsNumber: "10",
  },
  {
    category: "Development",
    brandImg: "https://themesflat.co/html/jobtex/images/logo-company/cty2.png",
    responsibilities: "Sample responsibilities for Development job",
    EducationQualifications: "Bachelor's degree in Computer Science or related field",
    website: "https://devtech.example",
    email: "contact@devtech.example",
    headquarters: "Devsville, USA",
    officeImg: "https://i.ibb.co/64WfFPt/image-01.jpg",
    Description: "Join our team at DevTech, Inc as a Software Developer! We are seeking talented individuals with a passion for coding and problem-solving. In this role, you will be responsible for developing software solutions that meet our clients' needs. If you have a strong technical background and a desire to make an impact, we want to hear from you.",
    employer: "DevTech, Inc",
    jobTitle: "Software Developer",
    jobType: "Part Time",
    postingDate: "4",
    deadline: "Application Deadline: Nov 30, 2023",
    salary: "45000",
    applicantsNumber: "6",
  },
  {
    category: "Development",
    brandImg: "https://themesflat.co/html/jobtex/images/logo-company/cty2.png",
    responsibilities: "Sample responsibilities for Development job",
    EducationQualifications: "Bachelor's degree in Computer Science or related field",
    website: "https://devtech.example",
    email: "contact@devtech.example",
    headquarters: "Devsville, USA",
    officeImg: "https://i.ibb.co/64WfFPt/image-01.jpg",
    Description: "Join our team at DevTech, Inc as a Front-End Developer! If you have a passion for creating visually appealing and user-friendly web applications, this role is for you. You will work on the design and implementation of user interfaces, ensuring a seamless and engaging user experience.",
    employer: "DevTech, Inc",
    jobTitle: "Front-End Developer",
    jobType: "Remote Job",
    postingDate: "5",
    deadline: "Application Deadline: Dec 5, 2023",
    salary: "48000",
    applicantsNumber: "7",
  },
];

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handlejobs = (category) => {
    setShowCard(category);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 lg:px-0 ">
      <div className="text-center my-6">
      <h2 className="text-black mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
      Featured Jobs
      </h2>
      <p className="text-body-color text-base dark:text-dark-6">
      There are many variations of passages of Lorem Ipsum available
      but the majority have suffered alteration in some form.
      </p>
      </div>
      <ul className="flex flex-wrap justify-center mb-12 space-x-1">
        <li className="mb-1">
          <button
            onClick={() => handlejobs("all")}
            className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
              showCard === "all"
                ? "activeClasses bg-primary text-white"
                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
            }`}
          >
            All Jobs
          </button>
        </li>
        <li className="mb-1">
          <button
            onClick={() => handlejobs("Branding")}
            className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
              showCard === "Branding"
                ? "activeClasses bg-primary text-white"
                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
            }`}
          >
            Branding
          </button>
        </li>
        <li className="mb-1">
          <button
            onClick={() => handlejobs("Marketing")}
            className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
              showCard === "Marketing"
                ? "activeClasses bg-primary text-white"
                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
            }`}
          >
            Marketing
          </button>
        </li>
        <li className="mb-1">
          <button
            onClick={() => handlejobs("Development")}
            className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
              showCard === "Development"
                ? "activeClasses bg-primary text-white"
                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
            }`}
          >
            Development
          </button>
        </li>
        
      </ul>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-5">
        {jobData.map((job, index) => (
          <PortfolioCard
            key={index}
            showCard={showCard}
            category={job.category}
            brandImg={job.brandImg}
            title={job.jobTitle}
            jobType={job.jobType}
            employer={job.employer}
            postingDate={job.postingDate}
            deadline={job.deadline}
            salary={job.salary}
            applicantsNumber={job.applicantsNumber}
          />
        ))}
      </div>
    </div>
  );
};

const PortfolioCard = ({
  showCard,
  category,
  brandImg,
  title,
  jobType,
  employer,
  postingDate,
  deadline,
  salary,
  applicantsNumber,

}) => {
  return (
    <div
      className={`${
        showCard === "all" || showCard === category
          ? "block"
          : "hidden"
      }`}
    >
      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transform transition-transform hover:-translate-y-2 animate__animated animate__fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
        <div className="flex items-center">
          <div className="mr-4">
            <img src={brandImg} className="w-16 h-16 rounded-full border-none" />
          </div>
          <div>
            <h6 className="text-xl font-bold">
              {title}
            </h6>
            <div className="text-gray-600 text-sm">
              <h1 className="text-violet-400">{employer}</h1>
            </div>
          </div>
        </div>
        <div className="mt-4 text-xl">
  <div className=" text-gray-600">
    <FaClock className="inline mr-2" />Posted: {postingDate} Days ago
  </div>
  <div className=" text-gray-600">
    <FaCalendarAlt className="inline mr-2" /> {deadline}
  </div>
  <div className=" text-gray-600">
    <FaDollarSign className="inline mr-2" /> Salary Range: {salary}$
  </div>
  <div className=" text-gray-600">
    <FaUser className="inline mr-2" /> {applicantsNumber} Applicants
  </div>
</div>
        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex-grow">
              <button className="btn btn-small bg-green-600 text-white mr-2">{jobType}</button>
              <Link to= '/login'>
              <button href="job-grid-2.html" className="btn btn-small  bg-violet-600 text-white mr-2">View Details</button>
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;



