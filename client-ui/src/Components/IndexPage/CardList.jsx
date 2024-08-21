import React from "react";
import Card from "./Card";

const cardData = [
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
];

const CardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-6 p-4">
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          content={card.content}
          artist={card.artist}
          date={card.date}
          category={card.category}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default CardList;
