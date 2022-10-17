import React from "react";

const AdvantageContainer = ({ title, image, desc }) => {
  return (
    <div className="grid w-96 justify-center p-4 hover:bg-white hover:shadow-md cursor-pointer rounded-md ">
      <div className="text-center flex flex-col items-center gap-2">
        <img className="h-16 w-16" src={image} />
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className=" text-center">{desc}</p>
    </div>
  );
};

export default AdvantageContainer;
