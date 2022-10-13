import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center flex-col items-center p-6 gap-2">
      <h2 className="text-4xl font-bold">Contact</h2>
      <p>We would love to hear from you !</p>
      <div className="flex flex-col gap-2 bg-gray-200 p-6 rounded-xl">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border-2 border-gray-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border-2 border-gray-600"
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          className="p-2 border-2 border-gray-600"
        />
        <textarea
          className="w-full h-48 p-2 border-gray-600 border-2"
          placeholder="Your Message"
        />
        <div className="flex justify-center items-center">
          <button className="border-2 border-gray-600 px-6 p-2 rounded-lg">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
