import React from "react";
import { CardMessage } from "../components/CardMessage";

const DUMMY_MESSAGE = [
  {
    id: 1,
    heading: "Hai, akbar aditya firmansyah!",
    description: "Selamat anda sudah mendaftar, nantikan info update terbaru!",
  },
  {
    id: 2,
    heading: "Hai, akbar aditya firmansyah!",
    description: "Selamat anda sudah mendaftar, nantikan info update terbaru!",
  },
  {
    id: 3,
    heading: "Hai, akbar aditya firmansyah!",
    description: "Selamat anda sudah mendaftar, nantikan info update terbaru!",
  },
];

export const NotificationPage = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <div className="px-4 py-12">
        <h1 className="font-semibold text-3xl">Notifikasi</h1>
        <div className="flex flex-col my-8 bg-transparent">
          {DUMMY_MESSAGE.map((data, id) => (
            <CardMessage
              key={id}
              heading={data.heading}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
