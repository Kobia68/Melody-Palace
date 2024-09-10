import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import LikeButton from "../User/LikeButton";

const EventsList = () => {
  const [events, setEvents] = useState([]);

  // Use location hook to facilitate searching by category
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/events${cat}`);
        setEvents(res.data);
      } catch (error) {
        res.json(errr);
      }
    };
    fetchData();
  }, [cat]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-4">
      {events.length === 0 ? (
        <p className="text-white bg-red-400 py-6 px-4 text-center">No events available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-6">
          {events.map((event) => (
            <div
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
              key={event.event_id}
            >
              <div className="img">
                <img
                  className="w-full h-48 object-cover"
                  src={event.img}
                  alt="poster"
                />
              </div>
              <div className="p-4">
                <p className="text-md font-bold">{event.event_name}</p>
                <p className="font-medium text-primary">
                  <span className="text-black">Host: </span>
                  {event.host}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm">{event.event_date}</p>
                  <p className="text-sm text-gray-500">{event.cat}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="inline-block">
                    {/* ICON ON THE BUY TICKET LINK */}
                    <Link
                      to={`/eventdetails/${event.event_id}`}
                      onClick={scrollToTop}
                      className="flex items-center gap-1 bg-primary text-white text-sm py-1 px-2 rounded-full w-auto"
                    >
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
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsList;
