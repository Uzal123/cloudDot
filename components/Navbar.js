import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between px-6 p-4 absolute bg-gray-200">
      <div className="text-2xl font-bold px-6 text-blue-600">CloudDot</div>
      <div className="flex gap-6 items-center px-6">
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
