import React from "react";
import { Link } from "react-router-dom";

export const AdminProfileLinks = () => {
  return (
    <div className="flex justify-around pt-5 w-1/2 mx-auto">
      <Link
        className="bg-primary text-white rounded-full px-4 py-2"
        to="newevent"
      >
        New Event
      </Link>
      <Link
        className="bg-primary text-white rounded-full px-4 py-2"
        to="finances"
      >
        Finances
      </Link>
      {/* <Link
        className="bg-primary text-white rounded-full px-4 py-2"
        to="favourite"
      >
        Favourites
      </Link> */}
    </div>
  );
};
