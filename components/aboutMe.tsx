import React from "react";

export default function AboutMe() {
  return (
    <div
      id="section3"
      className="text-white/80 h-full w-full px-12 lg:px-24 py-36 lg:absolute duration-1000 lg:opacity-0 lg:bg-white/[.05] mb-96 sm:mb-60 md:mb-0"
    >
      <div className="w-full h-full">
        <div className="text-center">
          <p className="text-3xl font-semibold">About Me</p>
          <p className="mt-5 leading-9 text-lg">
            Hello, my name is Kulbir Singh. I am a full stack web developer from
            Montreal, Quebec. I obtained my diploma from Concordia University
            Bootcamp and currently I am working at Carbonia, a software company
            based in Montreal, where it is giving me the opportunity to gain
            more experience and further advance my skills in Web Development.
          </p>
        </div>
        <div className="flex md:mt-36 items-center md:items-start md:flex-row flex-col-reverse duration-500">
          <div className="md:w-1/2 w-full">
            <p className="text-3xl font-semibold my-6">Profile :</p>
            <div className="space-y-4 text-lg">
              <p>Name: Kulbir Singh</p>
              <p>Location: Montreal, Quebec</p>
              <p>Email: kulbir2406@gmail.com</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center flex flex-col items-center mt-24 md:mt-0">
            <p className="text-3xl font-semibold my-4">Interests</p>
            <div className="text-lg flex justify-between max-w-[500px] w-full">
              <div className="h-24 w-1/4 flex flex-col items-center justify-between">
                <img src="/airplane.png" className="w-16 h-16" />
                <p>Travel</p>
              </div>
              <div className="h-24 w-1/4 flex flex-col items-center justify-between pt-1">
                <img src="/movie.png" className="w-12 h-12" />
                <p>Movies</p>
              </div>
              <div className="h-24 w-1/4 flex flex-col items-center justify-between">
                <img src="/music.png" className="w-14 h-14" />
                <p>Music</p>
              </div>
              <div className="h-24 w-1/4 flex flex-col items-center justify-between">
                <img src="./hiking.png" className="w-16 h-16" />
                <p>Hiking</p>
              </div>
            </div>
            <button className="px-9 py-2 w-fit bg-blue-600 rounded-full my-5 text-white/80 font-semibold">
              <a
                href="https://github.com/Kulbir-Singh/portfolio/blob/main/Resume-Kulbir-Singh.docx.pdf"
                className="cursor-pointer"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
