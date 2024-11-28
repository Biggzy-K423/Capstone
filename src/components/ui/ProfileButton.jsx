import React from "react";
import { Link } from "react-router";

export const ProfileButton = () => {
  return (
    <Link to="profile" className="bg-white rounded-full p-2 flex items-center gap-2">
      <div className="bg-[#206EBB] rounded-full w-14 h-14"></div>
      <div className="flex flex-col gap-2 p-2">
        <div className="h-[2px] w-8 bg-gray-700 rounded-full"></div>
        <div className="h-[2px] w-8 bg-gray-700 rounded-full"></div>
        <div className="h-[2px] w-8 bg-gray-700 rounded-full"></div>
      </div>
    </Link>
  );
};
