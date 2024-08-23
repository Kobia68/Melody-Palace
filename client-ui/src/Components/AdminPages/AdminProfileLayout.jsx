import React from 'react'
import { Outlet } from 'react-router-dom'
import { AdminProfileLinks } from './AdminProfileLinks'

export const AdminProfileLayout = () => {
  return (
    <div>
      <AdminProfileLinks />
      <Outlet />
    </div>
  )
}
