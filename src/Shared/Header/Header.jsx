import { Outlet } from "react-router-dom";


const Header = () => {
          const links = <>
          <li className="flex">
          <a   className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400">Link</a>
          </li>
          <li className="flex">
          <a   className="flex items-center px-4 -mb-1 border-b-2 border-transparent ">Link</a>
          </li>
          <li className="flex">
          <a   className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400">Link</a>
          </li>
          <li className="flex">
          <a   className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400">Link</a>
          </li>
          </>
          return (
          <div>
          <div className="">
          <header className=" max-w-7xl mx-auto p-4">
          <div className="container flex justify-between h-16 mx-auto">
          <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
          <h1 className="flex gap-1 text-xl font-medium">
          <img src="https://i.ibb.co/KFN92pr/logo-dark.png" alt="logo" />
          Career Canvas
          </h1>
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
          {links}
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded bg-violet-400 dark:text-gray-900">Sign up</button>
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
          </div>
          );
};

export default Header;