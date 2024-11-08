import Home from './compnents/Home.jsx'
import Layout from './Layout.jsx'
import About from './compnents/About.jsx'
import User from './compnents/User.jsx'
import Github from './compnents/github.jsx'

import { StrictMode } from 'react'
import './index.css'

import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'




const router = createBrowserRouter(
  [
    {
      path: '/',
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
          path: "user/:userid",
          element: <User/>
        },
        {
          path: "github",
          element: <Github/>
        }
      ]
    }
  ]
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
