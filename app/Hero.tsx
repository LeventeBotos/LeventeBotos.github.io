import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex-col flex">
      <div className="basis-3/12"></div>
      <div className=" basis-5/12 p-5 md:p-10 font-bold flex items-center justify-center">
        <div>
          <div className="gradient text-8xl md:text-9xl text-left md:text-center">
            Hello,
          </div>
          <div className=" gradient text-3xl md:text-6xl text-left md:text-center">
            I am Levente Botos
          </div>
        </div>
      </div>
      <div className="basis-3/12"></div>
      <div className="basis-1/12 gradient">Scroll down for more!</div>
    </div>
  );
};

export default Hero;
