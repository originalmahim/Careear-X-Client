import { Helmet } from "react-helmet";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";


const DashBoard = () => {
          return (
          <div className="max-w-7xl mx-auto my-8 px-3 lg:px-0">
          <Helmet>
          <title>Career X | Dashboard</title>
          </Helmet>
           <div className="grid grid-flow-row lg:grid-cols-10 gap-10">
          <div  className="lg:col-span-3 lg:items-start lg:justify-normal flex items-center justify-center">
          <LeftSide></LeftSide>
          </div>
          <div className=" lg:col-span-7 bg-orange-100 border rounded-md shadow-md p-2">
          <RightSide></RightSide>
          </div>
          </div>                   
          </div>
          );
};

export default DashBoard;