import { useState } from 'react'
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from './pages/loginPage';
import Register from './pages/RegisterNow';
import Home from './pages/HomePage';
import ForgotPassword from './pages/forgetpassword';

const router = createBrowserRouter([
  {
    
    path: "/login",
    element: <Login/>
  }
  ,
  {
    
    path: "/register",
    element: <Register/>
  },
  {
    
    path: "/home",
    element: <Home/>
  },
  {
    
    path: "/forgot",
    element: <ForgotPassword/>
  }
  
  
  
])


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
