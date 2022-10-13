import React from "react";


const HomeMain = () => {
  return (
    <div id="main" className="flex flex-col justify-center items-center h-screen gap-4 ">
      <video loop autoPlay muted className=" absolute -z-10 h-screen w-screen object-cover">
        <source src="Video.mp4" type="video/mp4" />
      </video>
      <h2 className="text-5xl font-bold text-center text-mainText">We are Spotkloud!</h2>
      <h1 className="text-2xl text-center text-lightGray">A Cloud Consulting Company</h1>
      <button className="text-white px-8 shadow-xl text-center rounded-lg p-2 bg-mainButton">
        Get Started
      </button>
    </div>
  );
};

export default HomeMain;
