import React from "react";

const AdvantageContainer = ({title,image,desc}) => {
  return (
    <div className="grid grid-rows-3 items-center justify-center p-4 shadow-xl rounded-md w-96 bg-white">
      <p className="row-span-2 text-center">{desc}</p>
      <div className="text-center flex flex-col items-center gap-2">
        <img className="h-20 w-20 rounded-full" src={image} />
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default AdvantageContainer;
