import React from "react";
import intro from "../assets/intro.png";
import { Fade } from "react-reveal";

const Homepage = () => {
  return (
    <Fade left>
      <div className="p-5 w-full">
        <div className="max-w-screen-lg mx-auto flex flex-col gap-y-5">
          <h1 className="text-center font-semibold text-4xl leading-relaxed text-blue-500">
            About this project todolist?
          </h1>
          <p className="text-center font-semibold leading-relaxed text-gray-500">
            To practice about reactJS, tailwindcss, react-router-dom, local
            storage, ...
          </p>
          <div className="w-full h-full">
            <img
              src={intro}
              alt=""
              className="w-full h-full object-cover rounded-lg border border-gray-300 shadow-md"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Homepage;
