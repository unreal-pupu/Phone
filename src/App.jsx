import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import Privacy from './Pages/Privacy'
import './App.css'
import Fac from './Pages/Fac'

const router = createBrowserRouter([
  {
  path: "/",
  element: <Layout/>,
  children:[
    {
      index: true,
      element: <Products/>
    },
  
    {
      path: "about",
      element: <About/>

    },
    
    {
      path: "products",
      element: <Home/>

    },
    {
      path: "privacy",
      element: <Privacy/>

    },
    {
      path: "fac",
      element: <Fac/>

    },
   
  ]
  
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App