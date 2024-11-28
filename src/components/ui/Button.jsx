import React from "react";

export const Button = ({
  text,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-white text-black rounded-3xl py-2 px-4 text-base transition duration-300 ease-in-out 
                  ${
                    disabled
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-200"
                  } ${className}`}
    >
      {text}
    </button>
  );
};
