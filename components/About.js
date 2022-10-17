import React from "react";

const About = () => {
  return (
    <div id="about" className="sm:flex items-center sm:px-10 px-4 pt-20">
      <div className="text-lg sm:w-2/3 bg-lightBackground sm:p-10 p-6">
        <p className="text-mainButton text-2xl">Who we are</p>
        <p className="text-lightGray text-base">
          <span className="text-mainText font-semibold">Spotkloud</span> is
          formed by a group of technologists and industry veterans, whose years
          of experience overseeing cloud operations at Fortune 500 companies
          puts them in a unique position to guide companies tackle the
          challenges and complexities of understanding, adopting, managing and
          operating Cloud for their business.
        </p>
      </div>
      <div className="sm:w-1/3 p-4">
        <img src="about.svg" />
      </div>
    </div>
  );
};

export default About;
