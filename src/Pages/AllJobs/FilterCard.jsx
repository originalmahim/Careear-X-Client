import { FaSearch } from 'react-icons/fa';

const FilterCard = () => {
          return (
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
              <button className="w-full md:w-auto bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 focus:outline-none">
                Find Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>                  
          </div>
          );
};

export default FilterCard;