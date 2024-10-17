import React from 'react';
import Img5 from "../assets/Room_4.png";
import Img6 from "../assets/Gallery_2.png";
import Img7 from "../assets/Room_1.png";
import Img8 from "../assets/Room_3.png";

const rooms = [
  {
    id: 1,
    title: 'Double Bed / with kitchen',
    imageUrl: Img6,
  },
  {
    id: 2,
    title: 'Tripe Bed / with kitchen',
    imageUrl: Img7,
  },
  {
    id: 3,
    title: 'Four Bed / with kitchen',
    imageUrl: Img5,
  },
  {
    id: 4,
    title: 'Suite room',
    imageUrl: Img8,
  },
];

const RoomCard = ({ room }) => (
  <div className="max-w-xs rounded-xl overflow-hidden shadow-lg m-2 ">
    <img className="w-[300px] object-cover h-[250px]" src={room.imageUrl} alt={room.title} />
    <div className="px-5 py-3 text-center">
      <h3 className="font-bold text-lg mb-2">{room.title}</h3>
    </div>
  </div>
);

const Rooms = () => (
  <div className="container mx-auto px-4">
    <h2 className="text-2xl md:text-4xl font-bold text-center my-8 text-gray-500">Rooms</h2>
    <div className="flex flex-wrap justify-center mb-2">
      {rooms.map(room => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  </div>
);

export default Rooms;
