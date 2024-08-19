import React from 'react'
import CardList from './CardList'
import { Outlet } from 'react-router-dom'

export const Indexpage = () => {
  return (
    <div>
      <CardList />
      <Outlet />
    </div>
  )
}
