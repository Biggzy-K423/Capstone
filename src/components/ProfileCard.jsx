import React from "react";

export const ProfileCard = ({ name, title, university, avatarColor }) => {
  return (
    <div className="flex items-center py-3 px-4 bg-white rounded-xl shadow-xl border w-full">
      <div
        className="w-24 h-24 rounded-full bg-blue-500 mr-4"
        style={{ backgroundColor: avatarColor }}
      ></div>
      <div className="font-semibold">
        <h2 className="text-lg">{name}</h2>
        <p className="opacity-50">{title}</p>
        <p className="opacity-50">{university}</p>
      </div>
    </div>
  );
};
