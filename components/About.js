import React from "react";

const About = () => {
  return (
    <div id="#about" className="sm:flex items-center sm:px-10 px-4 p-2">
      <div className="text-lg sm:w-2/3 bg-lightBackground sm:p-10 p-6">
        <p className="text-mainButton text-2xl">Who we are</p>
        <p className="text-lightGray text-base">
          <span className="text-mainText font-semibold">Clouddot.io</span> is
          formed by a group of technologists and industry veterans, whose years
          of experience overseeing cloud operations at Fortune 500 companies
          puts them in a unique position to guide companies tackle the
          challenges and complexities of understanding, adopting, managing and
          operating Cloud for their business.
        </p>
      </div>
      <div className="sm:w-1/3">
        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      </div>
    </div>
  );
};

export default About;
