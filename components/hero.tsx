import React from "react";

export default function Hero() {
  return (
    <div
      className="z-20 flex justify-end w-full h-screen duration-1000 bg-black lg:absolute"
      id="section1"
    >
      <div className="relative z-10 flex items-center justify-end w-full h-full overflow-hidden">
        <picture>
          <img
            src="/heroImg.jpg"
            className="object-cover grayscale opacity-[10%] blur-[1.5px] w-full h-screen lg:h-full duration-500 absolute"
            alt=""
          />
        </picture>
        <div className="absolute flex flex-col-reverse items-center justify-center w-full px-12 lg:w-full h-3/4 lg:justify-start xl:flex-row">
          <div className="bg-black/50 w-full md:w-6/12 h-80 xl:left-12 relative rounded-xl xl:top-0 top-8 text-white/80 flex flex-col justify-center items-center xl:items-start max-w-[500px] px-12 space-y-4  duration-500">
            <p className="text-5xl">Kulbir Singh</p>
            <p className="text-2xl">Full-Stack Developer</p>
            <div className="flex pt-4 space-x-5">
              <a
                href="https://www.linkedin.com/notifications/?filter=all"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 duration-500 border-2 rounded-full border-white/80 hover:bg-white/25"
              >
                <picture>
                  <img src="/linkedin.png" className="h-9 w-9" alt="" />
                </picture>
              </a>
              <a
                href="mailto:kulbir2406@gmail.com"
                className="flex items-center justify-center w-12 h-12 duration-500 border-2 rounded-full border-white/80 hover:bg-white/25"
              >
                <picture>
                  <img src="/email.png" className="h-7 w-7" alt="" />
                </picture>
              </a>
              <a
                href="https://github.com/Kulbir-Singh"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 duration-500 border-2 rounded-full border-white/80 hover:bg-white/25"
              >
                <picture>
                  <img src="/githubIcon.png" className="h-9 w-9" alt="" />
                </picture>
              </a>
            </div>
          </div>
          <div className="bg-black w-60 md:w-[385px] xl:w-96 h-60 md:h-96 rounded-full border-2 xl:relative right-12 overflow-hidden">
            <picture>
              <img
                src="/profile.PNG"
                className="relative object-cover w-full h-full"
                alt=""
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
