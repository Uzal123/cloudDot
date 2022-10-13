import React from "react";
import PortfolioContainer from "./PortfolioContainer";
import PortfolioData from "./data/PortfolioData";

const Portfolio = () => {
  return (
    <div id="portfolio" className="flex justify-center flex-col items-center p-6 ">
      <h2 className="text-4xl text-mainButton font-bold">Portfolio</h2>
      <p className="text-2xl text-mainText">Portfolio of Services</p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 p-6">
        {PortfolioData.map((data, i) => (
          <PortfolioContainer title={data.title} desc={data.desc} image={data.image} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
