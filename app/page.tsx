import React from "react";
import RollingRoyals from "./RollingRoyals";
import Volvid from "./Volvid";
import Hero from "./Hero";
import Stack from "./Stack";
import Workflow from "./Workflow";

const page = () => {
  return (
    <div className="  text-lg lg:text-xl text-center">
      <Hero />
      <div className="p-5 flex flex-col gap-10 justify-evenly items-center">
        <p className="text-3xl font-bold gradient">Some of my projects</p>
        <RollingRoyals />
        <Volvid />
      </div>
      <Workflow />
      <Stack />
    </div>
  );
};

export default page;
