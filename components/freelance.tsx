import React from "react";

export default function Freelance() {
  return (
    <div
      className="h-full w-full z-10 lg:opacity-0 duration-1000 bg-white/[.05]"
      id="section4"
    >
      <div className="h-[700px] overflow-hidden relative z-0 flex flex-col w-full">
        <div className="h-[60%] px-12 lg:px-24 w-full">
          <div className="relative flex flex-col items-center justify-center w-full h-full m-auto overflow-hidden mt-36">
            <div className="text-white  text-5xl font-semibold mb-10 z-30 text-center leading-[70px] md:leading-normal px-6">
              I am available for freelance work
            </div>
            <a
              rel="noreferrer"
              href="https://www.fiverr.com/kulbirsingh764/use-my-full-stack-web-developer-knowledge"
              target="_blank"
              className="z-30 py-2 my-5 font-semibold bg-blue-600 rounded-full px-9 w-fit text-white/80"
            >
              Get in Touch
            </a>
            <picture>
              <img
                src="/freelanceImage.jpg"
                className="h-full object-cover w-full absolute z-20 top-0 brightness-[.25] grayscale"
                alt=""
              />
            </picture>
          </div>
        </div>
        <div className="absolute top-0 w-full h-full bg-black">
          <picture>
            {" "}
            <img
              src="/freelanceImage.jpg"
              className="h-full opacity-[.025] grayscale object-cover w-full duration-500"
              alt=""
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
