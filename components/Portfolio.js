import React, { useState } from "react";
import PortfolioContainer from "./PortfolioContainer";
import PortfolioData from "./data/PortfolioData";

const Portfolio = () => {
  const [Modal, setModal] = useState(false);
  const [Key, setKey] = useState(1);

  const onClick = (e,id) => {
    setKey(id)
    setModal(true);
  };

  return (
    <div
      id="portfolio"
      className="flex justify-center flex-col items-center p-6 pt-20"
    >
      <h2 className="text-4xl text-mainButton font-bold">Portfolio</h2>
      <p className="text-2xl text-mainText">Portfolio of Services</p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 p-6 z-10">
        {PortfolioData.map((data, i) => (
          <PortfolioContainer
            title={data.title}
            desc={data.desc}
            image={data.image}
            onClick={onClick}
            id={data.id}
          />
        ))}
      </div>
      {Modal ? (
        <div className="backdrop-blur-sm flex flex-col items-center justify-center h-screen w-screen z-10 fixed top-0 left-0">
          <div className="flex flex-col bg-lightBackground rounded-2xl relative mt-10 w-4/5 h-4/5 sm:p-10 p-4 overflow-hidden">
            <img
              src="cross.svg"
              className="absolute right-5 top-5 m-2 p-2 cursor-pointer w-10 h-10 z-10 bg-lightBackground"
              onClick={() => setModal(false)}
            />
            <div className="flex justify-center h-3/5 w-full">
              <img src={PortfolioData[Key].image} className="object-cover" />
            </div>
            <div className="text-center py-4 h-2/5 w-full">
              <h2 className="text-3xl">{PortfolioData[Key].title}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                soluta velit hic tempora, labore impedit adipisci dolor dicta?
                Dolor in reprehenderit illum ab aliquam possimus. Velit, rerum
                nobis. A, quis?
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      ;
    </div>
  );
};

export default Portfolio;
