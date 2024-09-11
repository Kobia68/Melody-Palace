import React from 'react'
import { Link } from 'react-router-dom'

export const UserPage = () => {
  return (
    <div className='flex justify-around md:w-1/2 md:pt-5 mx-auto w-full'>
      <Link className='bg-primary text-white rounded-full p-2  md:px-4 md:py-2' to='/profile'>My Profile</Link>
      <Link className='bg-primary text-white rounded-full p-2  md:px-4 md:py-2' to='mytickets'>My Tickets</Link>
      <Link className='bg-primary text-white rounded-full p-2  md:px-4 md:py-2' to='favourite'>Favourites</Link>
    </div>
  )
}

