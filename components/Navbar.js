import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between sm:px-6 p-2 absolute text-center">
      <a href="#main" className="text-3xl sm:px-6 font-bold text-mainText cursor-pointer">
        Spotkloud
      </a>
      <div className="nav-item sm:flex gap-6 items-center px-6 text-textLight text-base font-bold hidden ">
        <a href="#about" className="hover:text-mainButton">
          About
        </a>
        <a href="#services" className="hover:text-mainButton">
          Services
        </a>
        <a href="#portfolio" className="hover:text-mainButton">
          Portfolio
        </a>
        <a href="#advantage" className="hover:text-mainButton">
          Advantage
        </a>
        <a href="#contact" className="hover:text-mainButton">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
