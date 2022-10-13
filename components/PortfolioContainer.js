import React from 'react'

const PortfolioContainer = ({title,desc,image}) => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl">
      <img
        src={image}
        className="w-64 h-64 bg-gray-200 rounded-2xl relative"
      />
      <div className="absolute flex flex-col justify-center h-64 text-white">
        <h2 className="text-lg text-center font-semibold">
          {title}
        </h2>
        <p className="text-center text-md">{desc}</p>
      </div>
    </div>
  );
}

export default PortfolioContainer