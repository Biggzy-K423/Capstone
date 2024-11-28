import React from "react";

export const ButtonFill = ({
  text,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      className={`py-2 px-8 bg-[#206EBB] rounded-full ${
        disabled ? "opacity-50 cursor-not-allowed" : "text-white"
      } ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
