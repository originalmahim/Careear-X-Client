import { Link, NavLink, Outlet } from "react-router-dom";
import './Header.css'
import Footer from "../Footer/Footer";
import { useContext, useState } from "react";
import { AuthContex } from './../../Provider/AuthProvider';
import Swal from 'sweetalert2';
const Header = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

          const {user, LogOut} = useContext(AuthContex)

          const handleLogOut = () => {
                    LogOut()
                    .then(() => {
                      Swal.fire(
                        'Loged Out',
                        'You have loged Out successfully',
                        'success'
                      )
                    })
                  }

          const links = <>
          
          <li className="flex">
          <NavLink to= '/'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">Home</NavLink>
          </li>
          <li className="flex">
          <NavLink to= '/alljobs'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">All Jobs</NavLink>
          </li>
          { user ? <li className="flex">
          <NavLink to= '/appliedJob'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">Applied Jobs</NavLink>
          </li> :
          <li className="flex">
          <NavLink to= '/about'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">About Us</NavLink>
          </li>
          }
          { user && <li className="flex">
          <NavLink  to='/postedJobs' className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">Posted Jobs</NavLink>
          </li> }
          <li className="flex">
          <NavLink to= '/blogs'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">Blogs</NavLink>
          </li>
          
          </>
          return (
          <div>
          <div className="max-w-7xl mx-auto">
          <header className="  p-4">
          <div className="container flex justify-between h-16 mx-auto">
          <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
          <h1 className="flex items-center gap-1 text-2xl font-medium uppercase">
          Career <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full text-violet-500 text-6xl">
          <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
          </svg>
          </h1>
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
          {links}
          </ul>
          <div className="items-center gap-2 flex-shrink-0 hidden lg:flex">
          
          { user? <Link to= '/postJob' className=" flex items-center uppercase gap-2">
          <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-violet-400 text-xl">
          <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-violet-400"></span>
          </span>Post a Job</Link>  : <Link to= '/alljobs' className=" flex items-center uppercase gap-2">
          <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-violet-400 text-xl">
          <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-violet-400"></span>
          </span>Apply Now</Link> 
          }

{user && (
        <div
          className={`dropdown dropdown-end hover:dropdown hover:dropdown-end ${isDropdownOpen ? 'open' : ''}`}
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownToggle}
        >
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user.photoURL} alt="User Avatar" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content hover:dropdown-content bg-base-100 rounded-box w-52">
            <div className="px-2 border-b pb-2">
              <img
                className="h-24 w-24 rounded-full mx-auto"
                src={user.photoURL}
                alt="User Avatar"
              />
              <p className="pt-2 text-lg font-semibold">Hi, {user.displayName}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
            <div className="mt-1">
              <Link to="/dashboard" className="btn btn-sm bg-violet-300">
                Dashboard
              </Link>
              <button
                onClick={handleLogOut}
                className="btn btn-sm bg-violet-300"
              >
                LogOut
              </button>
            </div>
          </ul>
        </div>
      )}
          { user ? '' :
          <Link to= '/login' className="btn bg-violet-400 text-white">
          Sign In
          </Link>
          }
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