import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [Show, setShow] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const [nav_color, setNav_color] = useState("#343b40");
  const [logo, setLogo] = useState("Logo_dark.png");

  const changeNav = () => {
    if (window.scrollY >= 90) {
      setColor("#343b40");
      setNav_color("white")
      setLogo("Logo_light.png");
    } else {
      setColor("#ffffff");
      setNav_color("#343b40");
      setLogo("Logo_dark.png");
    }
  };

  const select = (el, all = false) => {
    el = el.trim();
    if (process.browser) {
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  let navbarlinks = select(".nav-items a", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    window.addEventListener("load", navbarlinksActive, { passive: true });
    onscroll(document, navbarlinksActive);
  }, []);

  return (
    <div className="fixed left-0 top-0 w-screen z-30 ">
      <div
        className="flex items-center justify-between duration-300 ease-in"
        style={{ backgroundColor: `${color}` }}
      >
        <a href="#main">
          {/* <h1 className="font-thin text-4xl text-mainText p-4 cursor-pointer">
            KNLOS NETWORK<span className="text-red-500">S</span>
          </h1> */}
          <div className="h-16 px-2  sm:px-12 flex items-center p-6">
            <img src={logo} className="h-6 sm:h-10 object-fit" />
          </div>
        </a>
        <ul className="nav-items hidden md:flex items-center font-bold text-lg px-6 gap-4" style={{color: `${nav_color}`}}>
          <a href="#about">
            <li className="p-4 hover:text-mainButton cursor-pointer">About</li>
          </a>
          <a href="#services">
            <li className="p-4 hover:text-mainButton cursor-pointer">
              Services
            </li>
          </a>
          <a href="#portfolio">
            <li className="p-4 hover:text-mainButton cursor-pointer">
              Porfolio
            </li>
          </a>
          <a href="#advantage">
            <li className="p-4 hover:text-mainButton cursor-pointer">
              Advantages
            </li>
          </a>
          <a href="#contact">
            <li className="p-4 hover:text-mainButton cursor-pointer">
              Contact
            </li>
          </a>
        </ul>
        <div className="block md:hidden z-10">
          {Show ? (
            ""
          ) : (
            <img
              src="menu.svg"
              className="h-6 w-6 absolute top-0 right-0 m-6"
              onClick={(e) => setShow(true)}
            />
          )}
        </div>
        <div
          className={
            Show
              ? "md:hidden absolute top-0 left-0 flex justify-center items-center h-screen w-full bg-white ease-in duration-300"
              : "sm:hidden absolute top-0 left-[200%] flex justify-center items-center h-screen w-full bg-white ease-in duration-300"
          }
        >
          <img
            src="cross.svg"
            className="h-6 w-6 absolute top-0 right-0 m-6"
            onClick={(e) => setShow(false)}
          />
          <ul className="nav-items flex flex-col gap-6 text-4xl text-center ">
            <a href="#about">
              <li
                className="hover:text-mainButton p-2"
                onClick={(e) => setShow(false)}
              >
                About
              </li>
            </a>
            <a href="#services">
              <li
                className="hover:text-mainButton p-2"
                onClick={(e) => setShow(false)}
              >
                Services
              </li>
            </a>
            <a href="#portfolio">
              <li
                className="hover:text-mainButton p-2"
                onClick={(e) => setShow(false)}
              >
                Porfolio
              </li>
            </a>
            <a href="#advantage">
              <li
                className="hover:text-mainButton p-2"
                onClick={(e) => setShow(false)}
              >
                Advantages
              </li>
            </a>
            <a href="#contact">
              <li
                className="hover:text-mainButton p-2"
                onClick={(e) => setShow(false)}
              >
                Contact
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
