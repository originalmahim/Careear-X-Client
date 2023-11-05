import { NavLink, Outlet } from "react-router-dom";
import './Header.css'
import Footer from "../Footer/Footer";

const Header = () => {
          const links = <>
          
          <li className="flex">
          <NavLink to= '/'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">Home</NavLink>
          </li>
          <li className="flex">
          <NavLink to= '/contact'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">Jobs</NavLink>
          </li>
          <li className="flex">
          <NavLink to= '/about'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">Link</NavLink>
          </li>
          <li className="flex">
          <NavLink  to='/balu' className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">Link</NavLink>
          </li>
          
          
          </>
          return (
          <div>
          <div className="">
          <header className=" max-w-7xl mx-auto p-4">
          <div className="container flex justify-between h-16 mx-auto">
          <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
          <h1 className="flex items-center gap-1 text-2xl font-medium uppercase">
          {/* <img src="https://i.ibb.co/KFN92pr/logo-dark.png" alt="logo" /> */}
          Career <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full text-violet-500 text-6xl">
          <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
          </svg>
          </h1>
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
          {links}
          </ul>
          <div className="items-center gap-2 flex-shrink-0 hidden lg:flex">
          <button className=" flex items-center uppercase gap-2">
          <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-violet-400 text-xl">
          <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-violet-400"></span>
          </span>Apply Now</button>
          <button className="btn bg-violet-400 text-white">Sign In</button>
          </div>
          <button className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          </button>
          </div>
          </header>                             
          </div>
          <div>
          <Outlet></Outlet>
          </div>
          <div>
          <Footer></Footer>
          </div>
          </div>
          );
};

export default Header;