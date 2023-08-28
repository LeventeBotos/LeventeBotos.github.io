import React from "react";

const RollingRoyals = () => {
  return (
    <div className=" w-full text-xl gap-5 rounded-xl flex flex-col bg-[#1f1f1f] dark:bg-white bg-opacity-5 dark:bg-opacity-5 self-center">
      <a
        href="https://rolling-royals.web.app"
        className=" text-3xl pt-3 font-bold  hover:underline transition-all duration-200 ease-in-out "
      >
        Rolling-Royals
      </a>
      <div className="flex md:flex-row h-full flex-col">
        <img
          src="/rollingroyals.png"
          alt="rolling royals"
          className="h-96 object-contain rounded-xl "
        />
        <div className="w-full text-left px-10 gap-3 text flex flex-col">
          <a
            href="https://rolling-royals.web.app"
            className=" underline text-center text-2xl w-2/3 self-center text-[#f5f5f5] hover:font-bold transition-all duration-200"
          >
            https://rolling-royals.web.app
          </a>
          <p className="">
            Rolling Royals is a bicycle shop located in Szegedin, Hungary.
          </p>

          <ul className="gap-3">
            <p>Technologies used:</p>
            <li className="pl-5">Typescript</li>
            <li className="pl-5">NextJs</li>
            <li className="pl-5">Axios</li>
            <li className="pl-5">ExpressJs</li>
            <li className="pl-5">SendGrid</li>
            <li className="pl-5">Stripe</li>
            <li className="pl-5">Billingo</li>
            <li className="pl-5">Fuvar.hu</li>
            <li className="pl-5">Firebase</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RollingRoyals;
