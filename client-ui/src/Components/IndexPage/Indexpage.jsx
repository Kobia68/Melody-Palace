import React from 'react'
import EventsList from "./EventsList";
import { Outlet } from 'react-router-dom'

export const Indexpage = () => {
  return (
    <div className="mt-20 pt-2">
      <EventsList />
      <Outlet />
    </div>
  );
}
