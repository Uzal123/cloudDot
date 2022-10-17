import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex justify-center flex-col items-center p-6 gap-2 bg-lightBackground pt-20"
    >
      <h2 className="text-4xl font-bold text-mainButton">Contact</h2>
      <p className="text-2xl text-mainText text-center">
        We would love to hear from you !
      </p>
      <div className="grid sm:grid-cols-2 gap-2">
        <div className="flex items-center justify-center w-full h-full object-cover">
          <img src="contact-us.svg" className=""/>
        </div>
        <div className="flex flex-col gap-2 sm:p-6 w-full sm:w-auto">
          <div className="sm:flex sm:flex-row flex flex-col gap-2">
            <input
              type="text"
              placeholder="Name"
              className="p-2  w-full rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 0 w-full rounded-md"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="p-2   rounded-md"
          />
          <textarea
            className=" h-48 p-2   rounded-md"
            placeholder="Your Message"
          />
          <div className="flex justify-center items-center">
            <button className="px-6 p-2 rounded-lg shadow-lg bg-mainButton text-white">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
