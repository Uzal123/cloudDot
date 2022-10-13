import React from "react";
import PortfolioContainer from "./PortfolioContainer";
import PortfolioData from "./data/PortfolioData";

const Portfolio = () => {
  return (
    <div className="flex justify-center flex-col items-center p-6 bg-gray-200">
      <h2 className="text-4xl font-bold">Portfolio</h2>
      <p>Portfolio of Services</p>
      <div className="grid grid-cols-3 gap-6 p-6">
        {PortfolioData.map((data, i) => (
          <PortfolioContainer title={data.title} desc={data.desc} image={data.image} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
