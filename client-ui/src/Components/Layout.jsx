import React from 'react'
import { Navbar } from './Navbar/Navbar'
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <div className='p-4 flex flex-col min-h-screen'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  );
}
