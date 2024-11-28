import React from "react";
import { Card } from "../components/Card";

const DATA_DUMMY = [
  {
    id: 1,
    title: "Pengembangan Capstone",
    description:
      "proyek yang berfokus pada pengembangan model atau sistem yang dapat mengenali dan mengelompokkan gambar ke dalam kategori tertentu",
  },
  {
    id: 2,
    title: "WIDAMAR",
    description:
      "proyek yang berfokus pada pengembangan model atau sistem yang dapat mengenali dan mengelompokkan gambar ke dalam kategori tertentu",
  },
  {
    id: 3,
    title: "Smart Canteen",
    description:
      "proyek yang berfokus pada pengembangan model atau sistem yang dapat mengenali dan mengelompokkan gambar ke dalam kategori tertentu",
  },
];

export const TopicPage = () => {
  return (
    <main className="w-full relative">
      <div className="max-w-[1440px] mx-auto mt-8 px-6 py-4">
        <h1 className="font-bold text-5xl">Topik Capstone</h1>
        <div
          className="my-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 
    place-content-center place-items-center gap-4 mx-auto"
        >
          {DATA_DUMMY.map((data, id) => (
            <Card key={id} title={data.title} description={data.description} />
          ))}
        </div>
      </div>
    </main>
  );
};
