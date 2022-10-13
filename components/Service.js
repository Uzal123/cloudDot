import React from "react";
import ServiceContainer from "./ServiceContainer";
import ServiceData from "./data/ServicesData";

const Service = () => {
  return (
    <div className="">
      <div className="flex justify-center flex-col items-center p-6">
        <h2 className="text-4xl font-bold">Services</h2>
        <p>What we do</p>
        <div className="grid grid-cols-3 gap-6 p-6">
          {ServiceData.map((data, i) => (
            <ServiceContainer title={data.title} desc={data.desc} icon={data.icon} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
