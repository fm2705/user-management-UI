import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'

import loginImg from '../assets/login.jpg'
import { signIn } from 'next-auth/react'
import {ComputerScienceImage} from '../assets/ComputerScienceImage.jpg'

export default function Login2() {
  return (
    <div className='relative w-full h-screen custom-img bg-purple-100'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={ComputerScienceImage} alt="/" />
    

    <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-4'>ETP</h2>
            <div className='flex justify-between py-8'>
            <button
          //on click ridirect to next js authentication
          //whatever authentication provider we have configured (Facebook), all the links will be there and we can login with those
            onClick={signIn}
            className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FaFacebook className='mr-2' />
            Facebook
          </button>
          <button
            onClick={signIn}
            className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' />
            Google
          </button>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Username</label>
                <input className='border relative bg-gray-100 p-2' type="text" />
            </div>
            <div className='flex flex-col '>
                <label>Password</label>
                <input className='border relative bg-gray-100 p-2' type="password" />
            </div>
            <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign In</button>
            <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"  />Remember Me</p>
            <p className='text-center mt-8'>Not a member? Sign up now</p>
        </form>
    </div>
    </div>
  )
}