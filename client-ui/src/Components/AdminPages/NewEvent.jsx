import React, { useState } from "react";

export const NewEvent = () => {
  const [formData, setFormData] = useState({
    eventType: "",
    eventName: "",
    eventDescription: "",
    hostName: "",
    eventDate: "",
    eventTime: "",
    ticketPrices: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

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
            id="eventType"
            name="eventType"
            value={formData.eventType}
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
            id="eventName"
            name="eventName"
            value={formData.eventName}
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
            id="eventDescription"
            name="eventDescription"
            value={formData.eventDescription}
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
            id="hostName"
            name="hostName"
            value={formData.hostName}
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
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
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
            id="eventTime"
            name="eventTime"
            value={formData.eventTime}
            onChange={handleChange}
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
          <p className="text-sm text-primary font-semibold">If there is a ticket not to be recorded, leave it empty</p>
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
              name="ticketPrices"
              value={formData.ticketPrices}
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
              name="ticketPrices"
              value={formData.ticketPrices}
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
              name="ticketPrices"
              value={formData.ticketPrices}
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
          Add Event
        </button>
      </form>
    </div>
  );
};
