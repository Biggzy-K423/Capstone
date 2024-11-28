import React from "react";
import background from "../assets/background.png";

export const LandingPage = () => {
  return (
    <main className="w-full relative">
      <div
        className="lg:h-[75.5vh] h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-14 py-24 text-white space-y-10">
          <h1 className="font-bold text-7xl md:w-2/3 w-full">
            Kuliah untuk Negeri Berkarya untuk Prestasi
          </h1>
          <p className="text-4xl md:w-1/2 w-full">
            Capstone Project adalah proyek akhir yang diberikan di akhir masa
            studi untuk mengaplikasikan ilmu dan keterampilan yang sudah
            dipelajari
          </p>
          <button className="md:w-1/5 w-full py-2 px-4 bg-[#206EBB] rounded-full font-bold text-xl">
            Cari Topik
          </button>
        </div>
      </div>
    </main>
  );
};
