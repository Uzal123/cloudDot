import React from "react";
import AdvantageContainer from "./AdvantageContainer";
import AdvantagesData from "./data/AdvantagesData";

const Advantage = () => {
  return (
    <div
      id="advantage"
      className="sm:flex sm:flex-col justify-center items-center p-6 bg-lightBackground pt-20"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-mainButton text-center">
          The Spotkloud Advantage
        </h2>
        <p className="text-lg text-mainText">Why us!</p>
        <div className="">
          <img src="advantage.svg" className="w-full" />
        </div>
      </div>

      <div className=" gap-4 mt-4 flex flex-wrap justify-center">
        {AdvantagesData.map((data, i) => (
          <AdvantageContainer
            title={data.title}
            desc={data.desc}
            image={data.image}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Advantage;
