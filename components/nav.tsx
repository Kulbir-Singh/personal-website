import React, { useState } from "react";
import Picture from "./picture";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";

const options = ["home", "blogs", "about", "projects"];

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="z-50 w-full px-6">
      <div className="p-6 mt-6 bg-custom-green-100/40 rounded-3xl">
        <LazyMotion features={domAnimation}>
          <m.div
            style={{
              width: openMenu ? "100%" : "0px",
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
            className="fixed h-screen inset-0 grid w-screen bg-custom-green-400 overflow-hidden z-80 place-items-center py-[50%] sm:py-[20%]"
          >
            <button
              className="m-auto z-100 ml-4 absolute max-w-[1300px] w-full flex flex-col items-end top-[70px] mr-20 space-y-2 [&>div]:hover:scale-[2.5] [&>div]:hover:rotate-[0deg] even:[&>div]:-rotate-[45deg] [&>div]:duration-[700ms] cursor-pointer"
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
              aria-label="navbar-menu"
            >
              <div className="w-6 border border-custom-green-900 max-w-[48px] rotate-45 translate-y-[5px]" />
              <div className="w-6 ml-6 border border-custom-green-900 max-w-[48px] -rotate-[135deg] -translate-y-[5px]" />
            </button>
            {options.map((option) => {
              return (
                <Link href={"/#" + option} key={option}>
                  <button
                    className="relative cursor-pointer [&>div]:hover:w-full overflow-hidden"
                    onClick={() => {
                      setOpenMenu(!openMenu);
                    }}
                  >
                    <p className="font-serif text-3xl capitalize text-custom-green-900/80 hover:text-custom-green-900">
                      {option}
                    </p>
                    <div className="w-0 duration-1000 -translate-x-1 border border-custom-green-900" />
                  </button>
                </Link>
              );
            })}
          </m.div>
        </LazyMotion>
        <div className="max-w-[1300px] m-auto">
          <div className="relative flex w-full">
            <div className="flex justify-between w-full border-y border-custom-green-900">
              <Link href="/">
                <div>
                  <Picture
                    src="../name.png"
                    className="w-12 py-2"
                    alt="kulbir singh logo"
                  />
                </div>
              </Link>
              <div className="flex items-center">
                <div className="flex overflow-hidden relative cursor-pointer [&>div]:hover:translate-y-0 [&>div]:hover:translate-x-0 [&>span]:hover:w-full [&>div]:duration-500 [&>span]:duration-700">
                  <span className="absolute w-0 border -translate-x-0.5 border-custom-green-900 top-[26px]" />
                  <Link href="https://www.linkedin.com/in/-kulbir-singh/">
                    <a target="_blank" className="font-serif text-xl">
                      LinkedIn
                    </a>
                  </Link>
                  <Picture
                    src="../arrowDown.svg"
                    className="-rotate-[135deg] translate-x-5 -translate-y-7 h-fit w-fit"
                    alt="arrow icon"
                  />
                </div>
              </div>
            </div>
            <button
              className="m-auto ml-4 space-y-2 odd:[&>div]:hover:w-full odd:[&>div]:hover:ml-0 odd:[&>div]:duration-1000 cursor-pointer"
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
              aria-label="navbar-menu"
            >
              <div className="w-6 border border-custom-green-900" />
              <div className="w-12 border border-custom-green-900" />
              <div className="w-6 ml-6 border border-custom-green-900" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
