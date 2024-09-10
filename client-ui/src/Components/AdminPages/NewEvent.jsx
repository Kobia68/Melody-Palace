import axios from "axios";
import React, { useState } from "react";

export const NewEvent = () => {
  const [eventData, setEventData] = useState({
    cat: "",
    eventName: "",
    eventDescription: "",
    hostName: "",
    eventDate: "",
    eventTime: "",
    regularTicket: "",
    vipTicket: "",
    vvipTicket: "",
  });

  const [img, setImg] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("img", img);
      const res = await axios.post("http://localhost:5000/upload", formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imgurl =await upload();

      await axios.post("http://localhost:5000/admin/profile/newpost", {
        cat: "",
        eventName: "",
        eventDescription: "",
        hostName: "",
        eventDate: "",
        eventTime: "",
        img: imgurl,
        regularTicket: "",
        vipTicket: "",
        vvipTicket: "",
      });
      console.log("Event published")
    } catch (error) {
      console.log(error.response.data);
      console.log("Publish failed");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.45)] mt-5">
      <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="eventType"
            className="block text-xs font-medium text-gray-700"
          >
            Event Type
          </label>
          <select
            name="cat"
            value={eventData.cat}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          >
            <option value="">Select an event type</option>
            <option value="conference">Concert</option>
            <option value="webinar">Comedy</option>
            <option value="webinar">Talent Shows</option>
            <option value="workshop">Art</option>
            <option value="webinar">Product Launch</option>
            <option value="webinar">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="eventName"
            className="block text-xs font-medium text-gray-700"
          >
            Event Name
          </label>
          <input
            type="text"
            name="eventName"
            value={eventData.eventName}
            onChange={handleChange}
            className="mt-1 pl-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="eventDescription"
            className="block text-xs font-medium text-gray-700"
          >
            Event Description
          </label>
          <textarea
            name="eventDescription"
            value={eventData.eventDescription}
            onChange={handleChange}
            rows="4"
            className="mt-1 pl-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="hostName"
            className="block text-xs font-medium text-gray-700"
          >
            Host Name
          </label>
          <input
            type="text"
            name="hostName"
            value={eventData.hostName}
            onChange={handleChange}
            className="mt-1 pl-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>

         <div>
          <label
            htmlFor="eventDate"
            className="block text-xs font-medium text-gray-700"
          >
            Event Date
          </label>
          <input
            type="date"
            name="eventDate"
            min={today}
            value={eventData.eventDate}
            onChange={handleChange}
            className="mt-1 pl-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="eventTime"
            className="block text-xs font-medium text-gray-700"
          >
            Event Time
          </label>
          <input
            type="time"
            name="eventTime"
            value={eventData.eventTime}
            onChange={handleChange}
            className="mt-1 pl-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="posterImg"
            className="block text-xs font-medium text-gray-700"
          >
            Poster image
          </label>
          <input
            type="file"
            name="img"
            value={eventData.img}
            // onChange={handleChange}
            onChange={(e) => setImg(e.target.files[0])}
            className="mt-1 pl-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>        

        <div>
          <label
            htmlFor="ticketPrices"
            className="block text-xs font-medium text-gray-700"
          >
            Ticket Prices
          </label>
          <p className="text-sm text-primary font-semibold">
            If there is a ticket not to be recorded, leave it empty
          </p>
          <div className="flex gap-2 align-middle">
            <label
              htmlFor="refulartickets"
              className="text-xs font-medium text-gray-700 mt-2 w-20"
            >
              Regular
            </label>
            <input
              type="number"
              id="ticketPrices"
              name="regularTicket"
              value={eventData.regularTicket}
              onChange={handleChange}
              min="800" // Set the minimum value to 800
              className="mt-1 pl-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            />
          </div>
          <div className="flex gap-2 align-middle">
            <label
              htmlFor="refulartickets"
              className="text-xs font-medium text-gray-700 mt-2 w-20"
            >
              VIP
            </label>
            <input
              type="number"
              id="ticketPrices"
              name="vipTicket"
              value={eventData.vipTicket}
              onChange={handleChange}
              min="800" // Set the minimum value to 800
              className="mt-1 pl-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            />
          </div>
          <div className="flex gap-2 align-middle">
            <label
              htmlFor="refulartickets"
              className="text-xs font-medium text-gray-700 mt-2 w-20"
            >
              VVIP
            </label>
            <input
              type="number"
              id="ticketPrices"
              name="vvipTicket"
              value={eventData.vvipTicket}
              onChange={handleChange}
              min="800" // Set the minimum value to 800
              className="mt-1 pl-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded-md shadow-sm hover:bg-opacity-80 focus:outline-none"
        >
          Publish
        </button>
      </form>
    </div>
  );
};
