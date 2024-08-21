// src/components/CardList.js
import React from "react";
import Ticket from "./Ticket"; // Import the Ticket component

const TicketData = [
  {
    id: 1,
    title: "Card 1",
    category: "Concert",
    artist: "Artist name",
    date: "4th Sep 2024",
    content: "This is the first card.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 1,
    title: "Card 1",
    category: "Concert",
    artist: "Artist name",
    date: "4th Sep 2024",
    content: "This is the first card.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 1,
    title: "Card 1",
    category: "Concert",
    artist: "Artist name",
    date: "4th Sep 2024",
    content: "This is the first card.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 1,
    title: "Card 1",
    category: "Concert",
    artist: "Artist name",
    date: "4th Sep 2024",
    content: "This is the first card.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 1,
    title: "Card 1",
    category: "Concert",
    artist: "Artist name",
    date: "4th Sep 2024",
    content: "This is the first card.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 1,
    title: "Card 1",
    category: "Concert",
    artist: "Artist name",
    date: "4th Sep 2024",
    content: "This is the first card.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 1,
    title: "Card 1",
    category: "Concert",
    artist: "Artist name",
    date: "4th Sep 2024",
    content: "This is the first card.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 1,
    title: "Card 1",
    category: "Concert",
    artist: "Artist name",
    date: "4th Sep 2024",
    content: "This is the first card.",
    image: "https://via.placeholder.com/150",
  },
  // Add additional data objects as needed...
];

export const MyTickets = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-6 p-4">
      {TicketData.map((ticket) => (
        <Ticket
          key={ticket.id}
          title={ticket.title}
          artist={ticket.artist}
          date={ticket.date}
          category={ticket.category}
          image={ticket.image}
        />
      ))}
    </div>
  );
};

