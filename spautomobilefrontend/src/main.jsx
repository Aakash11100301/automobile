import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home/Home.jsx'
 
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    {/* <Route path='offers' element={<Offers />} /> */}
    {/* <Route path='packages' element={<Packages />} /> */}
    {/* <Route path='services' element={<Services />}/>
    <Route path='about' element={<About />}/>
    <Route path='login' element={<Login />}/> */}
    {/* <Route path='register' element={<RegisterPage />}/> */}
    {/* <Route path='forgot-password' element={<ForgotPasswordPage />}/> */}
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)