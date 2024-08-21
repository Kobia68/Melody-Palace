import React from 'react'
import { Link } from 'react-router-dom'

export const Profile = () => {
  return (
    <div className='w-2/3 mt-5 mx-auto flex flex-row'>
      <div className='w-full mt-10'>
        <div className='flex mt-10 w-2/3 mx-auto gap-4'>
          <label htmlFor="" className='font-semibold w-32'>Name:</label>
          <p className='border-b border-gray-500 w-3/4 pl-5 text-lg'>John Doe</p>
        </div>
        <div className='flex mt-10 w-2/3 mx-auto gap-4'>
          <label htmlFor="" className='font-semibold w-32'>Email:</label>
          <p className='border-b border-gray-500 w-3/4 pl-5 text-lg'>johndoe@email.com</p>
        </div>
        <div className='flex mt-10 w-2/3 mx-auto gap-4'>
          <label htmlFor="" className='font-semibold w-32'>username</label>
          <p className='border-b border-gray-500 w-3/4 pl-5 text-lg'>johndoe</p>
        </div>
        <div className='flex mt-10 w-2/3 mx-auto gap-4'>
          <label htmlFor="" className='font-semibold w-32'>Name:</label>
          <p className='border-b border-gray-500 w-3/4 pl-5 text-lg'>071864827874</p>
        </div>
        <div className='flex mt-10 w-2/3 mx-auto gap-4'>
          <label htmlFor="" className='font-semibold w-32'>Password:</label>
          <p className='border-b border-gray-500 w-3/4 pl-5 text-lg flex justify-between'>*********
          <Link className='bg-primary text-white rounded-full px-2 mb-1'>Change Password</Link></p>
        </div>
      </div>
    </div>
  )
}
