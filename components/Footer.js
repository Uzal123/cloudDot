import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className="p-4">
        <p className="text-center">
          Copyright © <span className="text-mainButton">Spotkloud</span>. All
          Rights Reserved
        </p>
        <p className="text-center">
          Designed with Love by{" "}
          <span className="text-mainButton">Mevi Technologies</span>
        </p>
      </footer>
    </Fragment>
  );
};

export default Footer;
