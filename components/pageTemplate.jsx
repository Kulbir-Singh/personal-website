import React, { useEffect, useState } from "react";
import { useContainerSize, useWindowSize } from "../utils/getWindowDimensions";
import Navbar from "./navbar";

export default function PageTemplate({ children }) {
  const [firstSection, setFirstSection] = useState("section1");
  const size = useWindowSize();

  useEffect(() => {
    if (size?.width > 1023) {
      setFirstSection("section1");
    }
  }, [size]);

  const handleNavigate = (incomingSection) => {
    if (incomingSection !== firstSection) {
      document?.getElementById(firstSection).classList.remove("lg:opacity-100");
      document?.getElementById(firstSection).classList.add("lg:opacity-0");
      document
        ?.getElementById(firstSection)
        .classList.remove("zoomInContainer");
      document?.getElementById(firstSection).classList.add("zoomOutContainer");
      document?.getElementById(firstSection).classList.remove("z-90");
      setTimeout(() => {
        document
          ?.getElementById(incomingSection)
          .classList.remove("lg:opacity-0");
        document
          ?.getElementById(incomingSection)
          .classList.add("lg:opacity-100");
        document
          ?.getElementById(incomingSection)
          .classList.remove("zoomOutContainer");
        document
          ?.getElementById(incomingSection)
          .classList.add("zoomInContainer");
        document?.getElementById(incomingSection).classList.add("z-90");
      }, 500);
    }
    setFirstSection(incomingSection);
  };

  return (
    <div className="w-full flex relative">
      <div className="lg:w-4/12 w-0 duration-1000 overflow-hidden h-screen sticky left-0 z-20 bg-black">
        <div className="dots absolute h-[120%] -top-20 -left-20 w-[120%]" />
        <div className="h-full flex flex-col justify-between text-white text-6xl py-36 ml-0 lg:pl-12 xl:pl-24 duration-1000">
          <div className="duration-1000 hover:text-blue-600 cursor-pointer translate-x-[300px] lg:translate-x-0 w-0 hover:w-full [&>div]:outline-transparent [&>div]:hover:outline-blue-600 [&>div]:w-0 [&>div]:hover:w-full">
            <a
              onClick={() => {
                handleNavigate("section1");
              }}
            >
              Home
            </a>
            <div className="outline outline-2 outline-blue-600 mt-5 duration-1000" />
          </div>
          <div className="duration-1000 hover:text-blue-600 cursor-pointer translate-x-[300px] lg:translate-x-0 w-0 hover:w-full [&>div]:outline-transparent [&>div]:hover:outline-blue-600 [&>div]:w-0 [&>div]:hover:w-full ">
            <a
              onClick={() => {
                handleNavigate("section2");
              }}
            >
              Projects
            </a>
            <div className="outline outline-2 outline-blue-600 mt-5 duration-1000" />
          </div>
          <div className="duration-1000 inline hover:text-blue-600 cursor-pointer translate-x-[300px] lg:translate-x-0 w-fit [&>div]:outline-transparent hover:w-full [&>div]:hover:outline-blue-600 [&>div]:w-0 [&>div]:hover:w-full">
            <a
              onClick={() => {
                handleNavigate("section3");
              }}
              className=""
            >
              About me
            </a>
            <div className="outline outline-2 outline-blue-600 mt-5 duration-1000" />
          </div>
          <div className="duration-1000 hover:text-blue-600 cursor-pointer translate-x-[300px] lg:translate-x-0 w-0 hover:w-full [&>div]:outline-transparent [&>div]:hover:outline-blue-600 [&>div]:w-0 [&>div]:hover:w-full">
            <p
              onClick={() => {
                handleNavigate("section5");
              }}
            >
              Contact
            </p>
            <div className="outline outline-2 outline-black mt-5  duration-1000" />
          </div>
        </div>
      </div>
      <div
        className="w-full lg:w-8/12 h-screen duration-1000 relative right-0 overflow-x-hidden lg:overflow-y-hidden bg-black"
        id="contentContainer"
      >
        {children}
      </div>
    </div>
  );
}
