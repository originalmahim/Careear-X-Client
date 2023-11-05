import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'; 
const RightSide = () => {
          return (
          <div>
    <div className="p-4">
      <div className="">
        <div className=" active">
          <div>
            <h5 className="text-2xl font-bold">About</h5>
            <p className="text-gray-500 mt-4">
              Developer with over 5 years' experience working in both
              the public and private sectors. Diplomatic, personable,
              and adept at managing sensitive situations. Highly
              organized, self-motivated, and proficient with
              computers. Looking to boost students’ satisfaction
              scores for <b>International University</b>. Bachelor's
              degree in communications.
            </p>
            <p className="text-gray-500">
              It describes the candidate's relevant experience,
              skills, and achievements. The purpose of this career
              summary is to explain your qualifications for the job in
              3-5 sentences and convince the manager to read the whole
              resume document.
            </p>
          </div>
          <div className="mt-4">
            <h6 className="text-2xl font-bold mb-0">Education</h6>
            <div className="mt-4 flex">
              <div className="bg-soft-primary w-12 h-12 flex items-center justify-center rounded-full text-white">
                <FaGraduationCap className='text-black' />
              </div>
              <div className="ms-4">
                <h6 className="text-xl mb-1">
                  BCA - Bachelor of Computer Applications
                </h6>
                <p className="text-gray-500 mb-2">
                  International University - (2004 - 2010)
                </p>
                <p className="text-gray-500">
                  There are many variations of passages of available,
                  but the majority alteration in some form. As a
                  highly skilled and successful product development
                  and design specialist with more than 4 years of experience.
                </p>
              </div>
            </div>
            <div className="mt-3 flex">
              <div className="bg-soft-primary w-12 h-12 flex items-center justify-center rounded-full text-white">
                <FaGraduationCap className='text-black' />
              </div>
              <div className="ms-4">
                <h6 className="text-xl mb-1">
                  MCA - Master of Computer Application
                </h6>
                <p className="text-gray-500 mb-2">
                  International University - (2010 - 2012)
                </p>
                <p className="text-gray-500">
                  There are many variations of passages of available,
                  but the majority alteration in some form. As a
                  highly skilled and successful product development
                  and design specialist with more than 4 years of experience.
                </p>
              </div>
            </div>
            <div className="mt-3 flex">
              <div className="bg-soft-primary w-12 h-12 flex items-center justify-center rounded-full text-white">
                <FaGraduationCap className='text-black' />
              </div>
              <div className="ms-4">
                <h6 className="text-xl mb-1">Design Communication Visual</h6>
                <p className="text-gray-500 mb-2">
                  International University - (2012-2015)
                </p>
                <p className="text-gray-500">
                  There are many variations of passages of available,
                  but the majority alteration in some form. As a
                  highly skilled and successful product development
                  and design specialist with more than 4 years of experience.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h6 className="text-2xl font-bold mb-0">Experiences</h6>
            <div className="mt-4 flex">
              <div className="bg-soft-primary w-12 h-12 flex items-center justify-center rounded-full text-white">
                <FaBriefcase className='text-black' />
              </div>
              <div className="ms-4">
                <h6 className="text-xl mb-1">Web Design & Development Team Leader</h6>
                <p className="text-gray-500">Creative Agency - (2013 - 2016)</p>
                <p className="text-gray-500">
                  There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successful product development and design specialist with more than 4 years of experience.
                </p>
              </div>
            </div>
            <div className="mt-4 flex">
              <div className="bg-soft-primary w-12 h-12 flex items-center justify-center rounded-full text-white">
                <FaBriefcase className='text-black' />
              </div>
              <div className="ms-4">
                <h6 className="text-xl mb-1">Project Manager</h6>
                <p className="text-gray-500">Jobcy Technology Pvt.Ltd - (Present)</p>
                <p className="text-gray-500 mb-0">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successful product development and design specialist with more than 4 years of experience.</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text-2xl font-bold">Skills</h5>
            <span className="bg-soft-blue text-xs py-1 px-3 mt-2 mr-2">Cloud Management</span>
            <span className="bg-soft-blue text-xs py-1 px-3 mt-2 mr-2">Responsive Design</span>
            <span className="bg-soft-blue text-xs py-1 px-3 mt-2 mr-2">Network Architecture</span>
            <span className="bg-soft-blue text-xs py-1 px-3 mt-2 mr-2">PHP</span>
            <span className="bg-soft-blue text-xs py-1 px-3 mt-2 mr-2">Bootstrap</span>
            <span className="bg-soft-blue text-xs py-1 px-3 mt-2">UI & UX Designer</span>
          </div>
          <div className="mt-4">
            <h5 className="text-2xl font-bold">Spoken languages</h5>
            <span className="bg-soft-success text-xs py-1 px-3 mt-2 mr-2">English</span>
            <span className="bg-soft-success text-xs py-1 px-3 mt-2 mr-2">German</span>
            <span className="bg-soft-success text-xs py-1 px-3 mt-2">French</span>
          </div>
        </div>
      </div>
    </div>                   
          </div>
          );
};

export default RightSide;