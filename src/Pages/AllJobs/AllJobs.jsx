import FilterCard from "./FilterCard";
import JobsCard from "./JobsCard";


const AllJobs = () => {
          return (
          <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-10 gap-10">
          <div className="col-span-7 ">
          <JobsCard></JobsCard>
          </div>
          <div className="col-span-3 border">
          <FilterCard></FilterCard>
          </div>
          </div>                   
          </div>
          );
};

export default AllJobs;