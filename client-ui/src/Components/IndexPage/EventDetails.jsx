import React from "react";

export const EventDetails = () => {
  
  return (
    <div className="w-2/3 mx-auto mt-24 shadow-[0_4px_10px_rgba(0,0,0,0.45)] p-3 rounded-md">
      <div className="flex justify-between">
        <div className="bg-gray-400 w-1/2 rounded-md h-96 p-2">image</div>
        <div className="w-1/2 pl-10 p-10">
          <p className="text-sm">Concert</p>
          <h2 className="text-xl font-bold">Event Title</h2>
          <p>
            Host:{" "}
            <span className="text-primary font-semibold text-lg">Artist</span>
          </p>
          <p>
            Date: <span className="font-semibold">2-4-2020</span>
          </p>
          <p>
            From: <span className="font-semibold">2:00pm</span>
          </p>
          <p>
            Till: <span className="font-semibold">4:00pm</span>
          </p>
        </div>
      </div>
      {/* DIV WITH THE OPTION TO BUY TICKETS */}
      <div className="bg-gray-300 p-2 mt-1 text-center">
        <h2 className="font-semibold">Get your ticket to "EventName"</h2>
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
              <td className="px-4 py-2">1000</td>
              <td className="px-4 py-2">
                <select
                  name="ticketNumber"
                  className="border border-gray-400 rounded p-1"
                >
                  <option value="0">0</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td className="px-4 py-2">3000</td>
            </tr>
            <tr className="odd:bg-gray-200 even:bg-white">
              <td className="px-4 py-2">Regular</td>
              <td className="px-4 py-2">1000</td>
              <td className="px-4 py-2">
                <select
                  name="ticketNumber"
                  className="border border-gray-400 rounded p-1"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td className="px-4 py-2">3000</td>
            </tr>
            <tr className="odd:bg-gray-200 even:bg-white">
              <td className="px-4 py-2">Regular</td>
              <td className="px-4 py-2">1000</td>
              <td className="px-4 py-2">
                <select
                  name="ticketNumber"
                  className="border border-gray-400 rounded p-1"
                >
                  <option value="0">0</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td className="px-4 py-2">3000</td>
            </tr>
            {/* Total Row */}
            <tr className="bg-gray-800 text-white">
              <td className="px-4 py-2" colSpan="3">
                Total
              </td>
              <td className="px-4 py-2">9000</td>{" "}
              {/* Update this value based on the actual total */}
            </tr>
          </tbody>
        </table>
        <div className="flex justify-around my-5 align-middle">
          <div>
            <p>Balance: Ksh <span className="font-bold">20000</span></p>
            <p>
              Total amount to be deducted from your balance: Ksh{" "}
              <span className="font-bold">9000</span>
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
