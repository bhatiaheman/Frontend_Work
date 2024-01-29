import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import User from './components/User/User'

//const router = createBrowserRouter([
//  {
  //  path: '/',
 //   element: <Layout />,
  //  children: [
      
 //   ]
 // }
//])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='user/:id' element={<User />}/>

    </Route>
  )
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
