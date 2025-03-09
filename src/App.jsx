import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import Privacy from './Pages/Privacy'
import './App.css'
import FAQ from './Pages/FAQ'

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
      path: "contact",
      element: <Contact/>

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
      path: "faq",
      element: <FAQ/>

    },
   
  ]
  
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App