import React from "react";
import ServiceContainer from "./ServiceContainer";
import ServiceData from "./data/ServicesData";

const Service = () => {
  return (
    <div className="">
      <div className="bg-lightBackground flex justify-center flex-col items-center p-6">
        <h2 className="text-4xl text-mainButton font-bold">Services</h2>
        <p className="text-lg text-mainText">What we do</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:p-6 mt-4">
          {ServiceData.map((data, i) => (
            <ServiceContainer title={data.title} desc={data.desc} icon={data.icon} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
