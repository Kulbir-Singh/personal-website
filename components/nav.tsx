import React from "react";
import Picture from "./picture";

export default function Nav() {
  return (
    <header className="w-full p-6 mt-3 bg-custom-green-100/50 rounded-3xl max-w-[1300px] m-auto">
      <div className="flex w-full ">
        <div className="flex justify-between w-full border-y border-custom-green-900">
          <Picture
            src="../name.png"
            className="w-12 py-2"
            alt="kulbir singh logo"
          />
          <div className="flex items-center">
            <div className="flex overflow-hidden relative cursor-pointer [&>div]:hover:translate-y-0 [&>div]:hover:translate-x-0 [&>span]:hover:w-full [&>div]:duration-500 [&>span]:duration-700">
              <span className="absolute w-0 border -translate-x-0.5 border-custom-green-900 top-[26px]" />
              <p className="text-xl font-semibold">LinkedIn</p>
              <Picture
                src="../arrowDown.svg"
                className="-rotate-[135deg] translate-x-5 -translate-y-7 h-fit w-fit"
                alt="arrow icon"
              />
            </div>
          </div>
        </div>
        <div className="m-auto ml-4 space-y-2 odd:[&>div]:hover:w-full odd:[&>div]:hover:ml-0 odd:[&>div]:duration-1000 cursor-pointer">
          <div className="w-6 border border-custom-green-900" />
          <div className="w-12 border border-custom-green-900" />
          <div className="w-6 ml-6 border border-custom-green-900" />
        </div>
      </div>
    </header>
  );
}
