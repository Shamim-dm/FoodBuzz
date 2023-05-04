import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Login from './components/Login/Login.jsx';

import Register from './components/Register/Register.jsx';
import Details from './components/Details/Details.jsx';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Main></Main> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/chefs/')
        
       
      },
      {
        path: 'home',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/chefs/')
       
      },
    
      {
        path: 'blog',
        element: <Blogs></Blogs>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path:"/:id",
        element: <Details></Details>,
        loader: ({params}) => fetch('http://localhost:5000/chefs/')
        // loader:({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
      }

      // {
      //   path: '/:id',
      //   element: <Jobdatails></Jobdatails>,
      //   loader: ({ params }) => fetch('/fakeData.json')

      //   // loader: ({params}) => fetch(`fakeData.json/${params.homeId}`)

      // },
      // {
      //   path: 'statistics',
      //   element: <Statistics></Statistics>

      // },
      // {
      //   path: 'appliedJob',
      //   element: <AppliedJob></AppliedJob>,
      //   loader: () => fetch('fakeData.json')

      // },
      // {
      //   path: '/:id',
      //   element: <AppliedJob></AppliedJob>,
      //   loader: () => fetch('fakeData.json')

      // },
    
    
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
