import React from "react";

const ServiceContainer = ({title,desc,icon}) => {
  return (
    <div className="flex flex-col items-center shadow-lg sm:p-10 p-5 gap-2 rounded-md bg-white hover:bg-mainButton hover:text-white">
      <img src={icon} className="w-24 h-24 bg-gray-200 p-4 rounded-2xl " />
      <h2 className="text-2xl text-center font-semibold">{title}</h2>
      <p className="text-center text-sm">{desc}</p>
    </div>
  );
};

export default ServiceContainer;
