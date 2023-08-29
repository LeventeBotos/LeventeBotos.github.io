import React from "react";

const Volvid = () => {
  return (
    <div className=" w-full text-xl p-2 gap-5 rounded-xl flex flex-col bg-[#1f1f1f] dark:bg-white bg-opacity-5 dark:bg-opacity-5 self-center">
      <a
        href="https://volvid.vercel.app"
        className=" text-3xl pt-3 font-bold  hover:underline transition-all duration-200 ease-in-out "
      >
        Volvid
      </a>
      <div className="flex md:flex-row-reverse h-full flex-col">
        <img
          src="/volvid.png"
          alt="volvid"
          className="h-96 object-contain rounded-xl "
        />
        <div className="w-full text-left px-10 gap-3 text flex flex-col">
          <a
            href="https://volvid.vercel.app"
            className=" underline text-center text-2xl w-2/3 self-center text-[#f5f5f5] hover:font-bold transition-all duration-200"
          >
            https://volvid.vercel.app
          </a>
          <p className="">
            Volvid is a well known material testing company in Hungary.
          </p>

          <ul className="gap-3">
            <p>Technologies used:</p>
            <li className="pl-5">Typescript</li>
            <li className="pl-5">NextJs - React</li>
            <li className="pl-5">Axios</li>
            <li className="pl-5">ExpressJs</li>
            <li className="pl-5">SendGrid</li>
            <li className="pl-5">Firebase</li>
            <li className="pl-5">Multi language routing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Volvid;
