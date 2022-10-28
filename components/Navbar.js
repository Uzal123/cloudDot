import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [Show, setShow] = useState(false);
  const [color, setColor] = useState("transparent");

  const changeNav = () => {
    if (window.scrollY >= 90) {
      setColor("#ffffff");
    } else {
      setColor("transparent");
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
          <h1 className="font-extrabold text-4xl text-mainText p-4 cursor-pointer">
            SpotKloud
          </h1>
        </a>
        <ul className="nav-items hidden md:flex items-center text-textLight font-bold text-lg px-6 gap-4">
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
