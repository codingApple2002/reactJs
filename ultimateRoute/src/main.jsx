import Layout from './component/layout'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Myprojects from './component/Myprojects'
import Bgchanger from './component/myProjects/Bgchanger'
import PasswordGenerator from './component/myProjects/PasswordGenerator'
import Currencyproject from './component/myProjects/Currencyproject'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "myprojects",
        element: <Myprojects/>,
      },
    ]
  },

  {
    path: "myprojects/bg-changer",
    element: <Bgchanger/>
  },
  {
    path: "myprojects/password-Generater",
    element: <PasswordGenerator/>
  },
  {
    path: "myprojects/Currencyproject",
    element: <Currencyproject/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
