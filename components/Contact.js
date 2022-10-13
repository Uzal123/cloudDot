import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="flex justify-center flex-col items-center p-6 gap-2 bg-lightBackground">
      <h2 className="text-4xl font-bold text-mainButton">Contact</h2>
      <p className="text-2xl text-mainText text-center">We would love to hear from you !</p>
      <div className="flex flex-col gap-2 sm:p-6 w-full sm:w-auto">
        <div className="sm:flex sm:flex-row flex flex-col gap-2">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border-2 border-gray-600 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border-2 border-gray-600 w-full"
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          className="p-2 border-2 border-gray-600"
        />
        <textarea
          className=" h-48 p-2 border-gray-600 border-2"
          placeholder="Your Message"
        />
        <div className="flex justify-center items-center">
          <button className="px-6 p-2 rounded-lg shadow-lg bg-mainButton text-white">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
