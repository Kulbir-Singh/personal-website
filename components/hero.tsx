import React from "react";

export default function Hero() {
  return (
    <div
      className="h-screen z-20 w-full bg-black flex justify-end lg:absolute duration-1000"
      id="section1"
    >
      <div className="h-full overflow-hidden flex relative items-center z-10 justify-end w-full">
        <img
          src="/heroImg.jpg"
          className="object-cover grayscale opacity-[10%] blur-[1.5px] w-full h-screen lg:h-full duration-500 absolute"
        />
        <div className="absolute w-full lg:w-full h-3/4 flex items-center justify-center lg:justify-start xl:flex-row flex-col-reverse px-12">
          <div className="bg-black/50 w-full md:w-6/12 h-80 xl:left-12 relative rounded-xl xl:top-0 top-8 text-white/80 flex flex-col justify-center items-center xl:items-start max-w-[500px] px-12 space-y-4  duration-500">
            <p className="text-4xl">Kulbir Singh</p>
            <p className="text-2xl">Full-Stack Developer</p>
            <div className="flex space-x-5 pt-4">
              <a
                href="https://www.linkedin.com/notifications/?filter=all"
                target="_blank"
                className="rounded-full border-2 border-white/80 w-12 h-12 flex justify-center items-center hover:bg-white/25 duration-500"
              >
                <img src="/linkedin.png" className="h-9 w-9" />
              </a>
              <a
                href="mailto:kulbir2406@gmail.com"
                className="rounded-full border-2 border-white/80 w-12 h-12 flex justify-center items-center hover:bg-white/25 duration-500"
              >
                <img src="/email.png" className="h-7 w-7" />
              </a>
              <a
                href="https://github.com/Kulbir-Singh"
                target="_blank"
                className="rounded-full border-2 border-white/80 w-12 h-12 flex justify-center items-center hover:bg-white/25 duration-500"
              >
                <img src="/githubIcon.png" className="h-9 w-9" />
              </a>
            </div>
          </div>
          <div className="bg-black w-60 md:w-[350px] xl:w-96 h-60 md:h-96 rounded-full border-2 xl:relative right-12 overflow-hidden">
            <img
              src="/profile.PNG"
              className="object-cover relative h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
