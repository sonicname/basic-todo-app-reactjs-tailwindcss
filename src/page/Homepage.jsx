import React from "react";
import intro from "../assets/intro.png";

const Homepage = () => {
  return (
    <div className="p-5 w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col gap-y-5">
        <h1 className="text-center font-semibold text-2xl leading-relaxed text-blue-500">
          Dự án cá nhân Todolist
        </h1>
        <p className="text-center font-semibold leading-relaxed text-gray-500">
          Vì sao lại có dự án này? để luyển tập về reactJS, tailwindcss,
          react-router-dom, local storage, ...
        </p>
        <div className="w-full h-full">
          <img src={intro} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
