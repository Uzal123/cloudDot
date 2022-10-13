import React from "react";


const HomeMain = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4 ">
      <video loop autoPlay muted className="w-full absolute -z-10">
        <source src="Video.mp4" type="video/mp4" />
      </video>
      <h2 className="text-2xl">We are Clouddot.io!</h2>
      <h1 className="text-5xl font-semibold">A Cloud Consulting Company</h1>
      <button className="border-2 px-4 text-center rounded-lg p-2">
        Learn More
      </button>
    </div>
  );
};

export default HomeMain;
