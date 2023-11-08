import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import AuthProvider from './Provider/AuthProvider';
import AllJobs from './Pages/AllJobs/AllJobs';
import DashBoard from './Pages/DashBoard/DashBoard';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/AboutUs/About';
import Protected from './Pages/Protected/Protected';
import PostJob from './Pages/PostJob/PostJob';
import PostedJobs from './Pages/PostJob/PostedJobs';
import JobDetails from './Pages/JobDetails/JobDetails';
import AppliedJob from './Pages/AppliedJob/AppliedJob';
import UpdateJobPost from './Pages/UpdateJobPost/UpdateJobPost';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>

      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/alljobs',
        element: <AllJobs></AllJobs>
      },
      {
        path: '/dashboard',
        element: <Protected><DashBoard></DashBoard></Protected>
      },
      {
        path: '/postJob',
        element: <Protected><PostJob></PostJob></Protected>
      },
      {
        path: '/postedJobs',
        element: <Protected><PostedJobs></PostedJobs></Protected>
      },
      {
        path: '/details/:id',
        element: <Protected><JobDetails></JobDetails></Protected>,
        loader: ({params}) => fetch(`https://career-canvas-backend.vercel.app/jobs/${params.id}`)

      },
      {
        path: '/appliedjobs',
        element: <Protected><AppliedJob></AppliedJob></Protected>
      },
      {
        path: '/updatePost/:id',
        element: <Protected><UpdateJobPost></UpdateJobPost></Protected>,
        loader: ({params}) => fetch(`https://career-canvas-backend.vercel.app/jobs/${params.id}`)
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
