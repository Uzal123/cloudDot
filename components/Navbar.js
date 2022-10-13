import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between sm:px-6 p-2 absolute text-center">
      <div className="text-3xl sm:px-6 font-bold text-mainText">Spotkloud</div>
      <div className="sm:flex gap-6 items-center px-6 text-textLight text-base font-bold hidden">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Portfolio</a>
        <a href="#">Advantage</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
