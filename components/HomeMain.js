import React from "react";

const HomeMain = () => {
  return (
    <div
      id="main"
      className="flex flex-col justify-center items-center h-screen gap-4 "
    >
      {/* <video
        loop
        autoPlay
        muted
        className=" absolute -z-10 h-screen w-screen object-cover"
      >
        <source src="Video.mp4" type="video/mp4" />
      </video> */}
      <div className="absolute h-screen w-full top-0 left-0 bg-white/[0.3] -z-10"></div>
      <h2 className="text-5xl font-bold text-center text-mainText">
        We are Spotkloud!
      </h2>
      <h1 className="text-2xl text-center text-lightGray">
        A Cloud Consulting Company
      </h1>
      <a href="#about">
        <button className="text-white px-8 shadow-xl text-center rounded-lg p-2 bg-mainButton">
          Get Started
        </button>
      </a>
    </div>
  );
};

export default HomeMain;
