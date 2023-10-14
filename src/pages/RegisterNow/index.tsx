import React from 'react'
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex  flex-row border-16 font-serif ">
    <div className="flex flex-row justify-center items-center py-8  md:h-screen lg:py-0 w-1/2 ">
      <div className="w-full rounded-lg  sm:max-w-md xl:p-0 ">
        <img
          className="w-56 h-44 m-auto"
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
          alt="logo"
        />

        <h1 className="text-4xl font-semi-bold  ml-8">
          We are the Lotus Team
        </h1>
        <div className=" mt-8">
          <p className="text-xl  text-gray-900  dark:text-black mb-4 ">
            Create a new account !
          </p>
          <form className="space-y-4 md:space-y-6" action="#">
<div className='flex flex-row justify-between'>
    <div>
    <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-100 border text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-52 p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="First Name"
              />
    </div>

    <div>
    <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-100 border text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-52 p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Last Name"
              />
    </div>
</div>

<div>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-100 border text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="E-mail"
              />
            </div>


            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-100 border text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Username"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="bg-gray-100 border text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Confirm Password"
                className="bg-gray-100 border text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
              />
            </div>

            <Link to="/login"> 
            <button
              type="submit"
              className=" w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-center "
            >
              <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 ...h-10 rounded-md  py-2  ">
              <p> Sign Up</p>
              </div>
            </button>
            </Link>
           

           
            <p className="text-xl font-light text-black">
             Already have an Account?{" "}
            <Link to="/login">  <button className="border-2 border-pink-700 w-32 h-8 rounded-md text-pink-700 font-semi-bold">
               Log In   
              </button></Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 ... w-1/2">
      <h1 className="text-6xl ml-16 text-white mt-60">
        We are more than just a company
      </h1>

      <p className=" text-2xl w-[550px] ml-20 text-white mt-16">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
  )
}

export default Register