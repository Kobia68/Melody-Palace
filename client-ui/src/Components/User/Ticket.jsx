// src/components/Ticket.js
import React from "react";

const Ticket = ({ title, category, artist, date, image }) => {
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
      </div>
    </div>
  );
};
export default Ticket;