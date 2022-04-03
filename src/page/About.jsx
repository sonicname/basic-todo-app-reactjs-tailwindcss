import React from "react";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <Fade bottom>
      <div className="p-5 w-full">
        <div className="max-w-screen-lg mx-auto flex flex-col gap-y-4">
          <h1 className="text-center font-semibold text-4xl leading-relaxed text-blue-500">
            Project Todolist
          </h1>
        </div>
      </div>
    </Fade>
  );
};

export default About;
