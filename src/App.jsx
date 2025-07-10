import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import About from './component/About'
import Dashboard from './component/Dashboard'
import Navbar from './component/Navbar'

//react router

//install npm i react-router-dom

//create router
//inside the array, give all the pages(routes) you have for you page
const router = createBrowserRouter(
  [
    {
      path:'/',       //when the path is this, render the elements
      element: <div>
            <Navbar />
            <Home />
        </div>
    },
    {
      path:'/about',
      element: <div>
        <Navbar />
        <About />
      </div>
    },
    {
      path:'/dashboard',
      element: <div>
        <Navbar />
        <Dashboard />
      </div>
    }
  ]
)

function App() {
  return (
    <div>
      {/* tell the site to use this router behaviour */}
      <RouterProvider router = {router} />
    </div>
  )
}

export default App


