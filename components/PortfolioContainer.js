import React from "react";

const PortfolioContainer = ({ title, desc, image, onClick,id }) => {
  return (
    <div
      className="flex flex-col items-center gap-2 rounded-2xl text-transparent hover:text-white hover:scale-105 transition overflow-hidden cursor-pointer"
      onClick={(e) => onClick(e,id)}
    >
      <img
        src={image}
        className="w-64 h-64 rounded-md object-cover"
      />
      <div
        div
        className="absolute flex flex-col justify-center h-64 w-64 hover:backdrop-blur-sm transition-all"
      >
        <h2
          className="text-5xl text-center font-semibold"
          onClick={(e) => onClick(e, id)}
        >
          {title}
        </h2>
        <p className="text-center text-md">{desc}</p>
      </div>
    </div>
  );
};

export default PortfolioContainer;
