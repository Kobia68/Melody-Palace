import React from 'react'
import CardList from './CardList'
import { Outlet } from 'react-router-dom'

export const Indexpage = () => {
  return (
    <div className='mt-20 pt-2'>
      <CardList />
      <Outlet />
    </div>
  )
}
