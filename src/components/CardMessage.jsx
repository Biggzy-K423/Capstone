import React from "react";

export const CardMessage = ({ heading, description }) => {
  return (
    <div className="w-full rounded-lg shadow-lg border">
      <div className="p-9">
        <div className="flex flex-row items-center gap-9">
          <img src="/message.svg" alt="Message Logo" />
          <div className="flex flex-col">
            <h2 className="uppercase font-semibold text-lg">{heading}</h2>
            <p className="font-semibold text-lg opacity-50">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
