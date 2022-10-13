import React from "react";
import AdvantageContainer from "./AdvantageContainer";
import AdvantagesData from "./data/AdvantagesData";

const Advantage = () => {
  return (
    <div className="flex justify-center flex-col items-center p-6 bg-lightBackground">
      <h2 className="text-4xl font-bold text-mainButton text-center">The CloudDot Advantage</h2>
      <p className="text-lg text-mainText">Why us!</p>
      <div className="gap-4 mt-4 grid sm:grid-cols-2 md:grid-cols-3">
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
