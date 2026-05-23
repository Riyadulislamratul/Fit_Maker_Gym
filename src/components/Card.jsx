import React from "react";

const Card = ({ number, title }) => {
  return (
    <div
      className="
        bg-black/40
        backdrop-blur-xl
        border border-red-500/30
        rounded-2xl
        px-6 py-4
        text-white
        shadow-[0_0_25px_rgba(255,0,0,0.15)]
      "
    >
      <h2 className="text-2xl font-bold">{number}</h2>

      <p className="text-gray-400 text-sm mt-1">
        {title}
      </p>
    </div>
  );
};

export default Card;