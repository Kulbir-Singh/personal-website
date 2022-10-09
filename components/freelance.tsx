import React from "react";

export default function Freelance() {
  return (
    <div
      className="h-full w-full z-10 lg:opacity-0 duration-1000 bg-white/[.05]"
      id="section4"
    >
      <div className="h-[700px] overflow-hidden relative z-0 flex flex-col w-full">
        <div className="h-[60%] px-12 lg:px-24 w-full">
          <div className="h-full w-full mt-36 m-auto relative overflow-hidden flex justify-center items-center flex-col">
            <div className="text-white  text-5xl font-semibold mb-10 z-30 text-center leading-[70px] md:leading-normal px-6">
              I am available for freelance work
            </div>
            <a
              href="https://www.fiverr.com/kulbirsingh764/use-my-full-stack-web-developer-knowledge"
              target="_blank"
              className="px-9 py-2 w-fit bg-blue-600 z-30 rounded-full my-5 text-white/80 font-semibold"
            >
              Get in Touch
            </a>
            <img
              src="/freelanceImage.jpg"
              className="h-full object-cover w-full absolute z-20 top-0 brightness-[.25] grayscale"
            />
          </div>
        </div>
        <div className="h-full w-full absolute top-0 bg-black">
          <img
            src="/freelanceImage.jpg"
            className="h-full opacity-[.025] grayscale object-cover w-full duration-500"
          />
        </div>
      </div>
    </div>
  );
}
