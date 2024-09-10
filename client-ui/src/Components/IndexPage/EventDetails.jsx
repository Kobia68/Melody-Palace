import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const EventDetails = () => {
  const [event, setEvent] = useState({});
  const [regularQty, setRegularQty] = useState(0);
  const [vipQty, setVipQty] = useState(0);
  const [vvipQty, setVvipQty] = useState(0);

  // Split the url to get the id of the post
  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/event/${postId}`);
        setEvent(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);

  // Calculate subtotal for each ticket type
  const regularSubtotal = regularQty * event.regular_price;
  const vipSubtotal = vipQty * event.vip_price;
  const vvipSubtotal = vvipQty * event.vvip_price;
  const total = regularSubtotal + vipSubtotal + vvipSubtotal;

  return (
    <div className="w-2/3 mx-auto mt-24 shadow-[0_4px_10px_rgba(0,0,0,0.45)] p-3 rounded-md">
      <div className="flex justify-between">
        <div className="bg-gray-400 w-1/2 rounded-md h-96 p-2">
          <img
            src={event.img}
            alt="poster"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 pl-10 p-10">
          <p className="text-sm">{event.cat}</p>
          <h2 className="text-xl font-bold">{event.event_name}</h2>
          <p>{event.description}</p>
          <p>
            Host:
            <span className="text-primary font-semibold text-lg">
              {event.host}
            </span>
          </p>
          <p>
            Date: <span className="font-semibold">{event.event_date}</span>
          </p>
          <p>
            From: <span className="font-semibold">{event.event_time}</span>
          </p>
        </div>
      </div>
      <div className="bg-gray-300 p-2 mt-1 text-center">
        <h2 className="font-semibold">
          Get your ticket to "{event.event_name}"
        </h2>
        <p className="text-sm text-gray-500 font-semibold">
          Choose the type of ticket you want and the amount you want to purchase
        </p>
      </div>
      <div className="rounded-b-md overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="text-left px-4 py-2">Ticket</th>
              <th className="text-left px-4 py-2">Cost(Ksh)</th>
              <th className="text-left px-4 py-2">No of Tickets</th>
              <th className="text-left px-4 py-2">Sub Total(Ksh)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-gray-200 even:bg-white">
              <td className="px-4 py-2">Regular</td>
              <td className="px-4 py-2">{event.regular_price}</td>
              <td className="px-4 py-2">
                <select
                  name="ticketNumber"
                  className="border border-gray-400 rounded p-1"
                  value={regularQty}
                  onChange={(e) => setRegularQty(Number(e.target.value))}
                >
                  {[...Array(11).keys()].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-4 py-2">{regularSubtotal}</td>
            </tr>
            <tr className="odd:bg-gray-200 even:bg-white">
              <td className="px-4 py-2">VIP</td>
              <td className="px-4 py-2">{event.vip_price}</td>
              <td className="px-4 py-2">
                <select
                  name="ticketNumber"
                  className="border border-gray-400 rounded p-1"
                  value={vipQty}
                  onChange={(e) => setVipQty(Number(e.target.value))}
                >
                  {[...Array(11).keys()].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-4 py-2">{vipSubtotal}</td>
            </tr>
            <tr className="odd:bg-gray-200 even:bg-white">
              <td className="px-4 py-2">VVIP</td>
              <td className="px-4 py-2">{event.vvip_price}</td>
              <td className="px-4 py-2">
                <select
                  name="ticketNumber"
                  className="border border-gray-400 rounded p-1"
                  value={vvipQty}
                  onChange={(e) => setVvipQty(Number(e.target.value))}
                >
                  {[...Array(11).keys()].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-4 py-2">{vvipSubtotal}</td>
            </tr>
            {/* Total Row */}
            <tr className="bg-gray-800 text-white">
              <td className="px-4 py-2" colSpan="3">
                Total
              </td>
              <td className="px-4 py-2">{total}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-around my-5 align-middle">
          <div>
            <p>
              Balance: Ksh <span className="font-bold">20000</span>
            </p>
            <p>
              Total amount to be deducted from your balance: Ksh{" "}
              <span className="font-bold">{total}</span>
            </p>
          </div>
          <button className="bg-primary py-2 px-3 w-24 rounded-full text-white">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};
