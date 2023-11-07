import FilterCard from "./FilterCard";
import JobsCard from "./JobsCard";


const AllJobs = () => {
          return (
          <div className="max-w-6xl mx-auto" style={{ overflowX: 'hidden' }} >
           <div className="flex flex-col-reverse">
          <div className="">
          <JobsCard></JobsCard>
          </div>
          <div className="">
          <FilterCard></FilterCard>
          </div>
          </div>                   
          </div>
          );
};

export default AllJobs;