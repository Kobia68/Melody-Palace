import React from 'react'
import { UserPage } from './UserPage';
import { Outlet } from 'react-router-dom';

export const ProfileLayout = () => {
  return (
    <div className='p-4 flex flex-col mt-20'>
        <UserPage />
        <Outlet />
    </div>
  );
}
