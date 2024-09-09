import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext';

export const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="w-2/3 mt-5 mx-auto flex flex-row">
      <div className="w-full mt-10">
        <div className="flex mt-10 w-2/3 mx-auto gap-4">
          <label htmlFor="" className="font-semibold w-32">
            Name:
          </label>
          <p className="border-b border-gray-500 w-3/4 pl-5 text-md">
            {currentUser?.fullname}
          </p>
        </div>
        <div className="flex mt-10 w-2/3 mx-auto gap-4">
          <label htmlFor="" className="font-semibold w-32">
            Email:
          </label>
          <p className="border-b border-gray-500 w-3/4 pl-5 text-md">
            {currentUser?.email}
          </p>
        </div>
        <div className="flex mt-10 w-2/3 mx-auto gap-4">
          <label htmlFor="" className="font-semibold w-32">
            username
          </label>
          <p className="border-b border-gray-500 w-3/4 pl-5 text-md">
            {currentUser?.username}
          </p>
        </div>
        <div className="flex mt-10 w-2/3 mx-auto gap-4">
          <label htmlFor="" className="font-semibold w-32">
            PhoneNo:
          </label>
          <p className="border-b border-gray-500 w-3/4 pl-5 text-md">
            {currentUser?.phoneNo}
          </p>
        </div>
      </div>
    </div>
  );
}
