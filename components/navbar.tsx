import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const closeNavBar = () => {
    setOpenNav(false);
  };
  return (
    <div>
      <div className="w-screen h-14 sticky top-0 z-40 overflow-x-hidden">
        <div className="h-full w-full flex px-12 lg:px-24 bg-gray-300 duration-500">
          <div className="w-2/4 flex flex-col m-auto">
            <button className="text-3xl w-fit text-black font-semibold">
              K S
            </button>
          </div>
          <div className="w-2/4 text-xl font-medium hidden lg:flex justify-end">
            <div className="max-w-[800px] flex">
              <a
                href="#section2"
                className="w-1/4 m-auto hover:text-blue-600 cursor-pointer min-w-[120px] text-center"
              >
                Home
              </a>
              <a
                href="#section"
                className="w-1/4 m-auto hover:text-blue-600 cursor-pointer min-w-[120px] text-center"
              >
                Projects
              </a>
              <div className="w-1/4 m-auto hover:text-blue-600 cursor-pointer min-w-[120px] text-center">
                About me
              </div>
              <div className="w-1/4 m-auto hover:text-blue-600 cursor-pointer min-w-[120px] text-center">
                Contact
              </div>
            </div>
          </div>
          <div
            className="w-2/4 pl-60 text-xl font-medium lg:hidden flex flex-col space-y-1.5 m-auto items-end cursor-pointer"
            onClick={() => {
              setOpenNav(!openNav);
            }}
          >
            <div className="w-9 border-2 h-fit border-black/80" />
            <div className="w-9 border-2 h-fit border-black/80" />
            <div className="w-9 border-2 h-fit border-black/80" />
          </div>
        </div>
      </div>
      <motion.div
        className="w-screen h-screen bg-gray-300 absolute z-30"
        initial={{ opacity: 0, scale: 0, top: -1500 }}
        animate={{
          opacity: openNav ? 1 : 0,
          left: openNav ? 0 : 1500,
          top: openNav ? 56 : -1500,
          scale: openNav ? 1 : 0,
          borderRadius: openNav ? 0 : 1000,
        }}
        transition={{ duration: 0.75 }}
      >
        <button
          onClick={() => {
            closeNavBar();
          }}
          className="w-1/4 m-auto hover:text-blue-600 cursor-pointer min-w-[120px] text-center h-36 text-3xl font-semibold flex items-center"
        >
          <a href="#section1" className="text-center w-full">
            Home
          </a>
        </button>
        <button
          onClick={() => {
            closeNavBar();
          }}
          className="w-1/4 m-auto hover:text-blue-600 cursor-pointer min-w-[120px] text-center h-36 text-3xl font-semibold flex items-center"
        >
          <a href="#section2" className="text-center w-full">
            Projects
          </a>
        </button>
        <button
          onClick={() => {
            closeNavBar();
          }}
          className="w-1/4 m-auto hover:text-blue-600 cursor-pointer min-w-[120px] text-center h-36 text-3xl font-semibold flex items-center"
        >
          <a href="#section3" className="text-center w-full">
            About me
          </a>
        </button>
        <button
          onClick={() => {
            closeNavBar();
          }}
          className="w-1/4 m-auto hover:text-blue-600 cursor-pointer min-w-[120px] text-center h-36 text-3xl font-semibold flex items-center"
        >
          <a href="#section4" className="text-center w-full">
            Contact
          </a>
        </button>
      </motion.div>
    </div>
  );
}
