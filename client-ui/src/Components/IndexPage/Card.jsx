// src/components/Card.js
import React from "react";
import { Link } from "react-router-dom";
import LikeButton from "../User/LikeButton";

const Card = ({ title, category, artist, date, image }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {image && (
        <img className="w-full h-48 object-cover" src={image} alt={title} />
      )}
      <div className="p-4">
        <p className="text-md font-bold">{title}</p>
        <p className="font-medium text-primary">
          <span className="text-black">Host: </span>
          {artist}
        </p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm">{date}</p>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="inline-block">
            {/* ICON ON THE BUY TICKET LINK */}
            <Link to='/eventdetails' className="flex items-center gap-1 bg-primary text-white text-sm py-1 px-2 rounded-full w-auto">
              Buy Ticket
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <LikeButton />
        </div>
      </div>
    </div>
  );
};

export default Card;
