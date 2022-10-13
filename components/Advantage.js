import React from "react";
import AdvantageContainer from "./AdvantageContainer";
import AdvantagesData from "./data/AdvantagesData";

const Advantage = () => {
  return (
    <div className="flex justify-center flex-col items-center p-6">
      <h2 className="text-4xl font-bold">The CloudDot Advantage</h2>
      <p>Why us!</p>
      <div className="flex gap-4">
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
