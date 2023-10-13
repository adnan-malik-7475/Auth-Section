import { useState } from 'react'
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from './pages/loginPage';

const router = createBrowserRouter([
  {
    
    path: "/login",
    element: <Login/>
  }
  

  
  
])


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
