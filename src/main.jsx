import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './components/AuthProvider/AuthProvider';
import AddAJob from './components/AddAJob/AddAJob';
import AllJobsPage from './components/AllJobsPage/AllJobsPage';
import JobDetails from './components/JobDetails/JobDetails';
import MyJobsPage from './components/MyJobsPage/MyJobsPage';
import UpdateJob from './components/UpdateJob/UpdateJob';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Blogs from './components/Blogs/Blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/add-a-job',
        element: <PrivateRoute><AddAJob></AddAJob></PrivateRoute>
      },
      {
        path: '/all-job-page',
        element: <AllJobsPage></AllJobsPage>,
        loader: () => fetch('https://careerfy-server-nine.vercel.app/jobs')
      },
      {
        path: '/job-details/:id',
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://careerfy-server-nine.vercel.app/job-details/${params.id}`)
      },
      {
        path: '/my-job-page',
        element: <PrivateRoute><MyJobsPage></MyJobsPage></PrivateRoute>
      },
      {
        path: '/update-job/:id',
        element: <UpdateJob></UpdateJob>,
        loader: ({params}) => fetch(`https://careerfy-server-nine.vercel.app/update-job/${params.id}`)
      },
      {
        path: '/applied-jobs',
        element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>,
        loader: () => fetch('https://careerfy-server-nine.vercel.app/jobs', {credentials: 'include'})
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='font-roboto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>,
)
