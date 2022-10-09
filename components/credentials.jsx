import React, { useState } from "react";

export default function Credentials() {
  const [tab, setTab] = useState("main");

  return (
    <div
      className="px-12 lg:px-0 flex flex-col w-full h-full items-center text-white/80 bg-white/[.05] lg:absolute lg:opacity-0 duration-1000 justify-center py-40 -translate-y-[235px] lg:translate-y-0"
      id="section2"
    >
      <div className="w-full text-center">
        <p className="text-5xl font-semibold mb-24 uppercase tracking-widest text-white/80">
          Abilities
        </p>
      </div>
      <div className="flex space-y-36 md:space-y-0 flex-col md:flex-row justify-between w-full max-w-[900px] lg:space-x-7">
        <div className="flex flex-col items-center h-96 justify-between lg:max-w-[250px] text-center">
          <img
            src="/webDesign.png"
            alt="web design"
            className="invert opacity-90 w-24 h-24 object-cover"
          />
          <p className="text-lg font-medium pt-4">Web Development</p>
          <p className="text-md w-full px-4 py-2">
            I'm able to build websites using:
          </p>
          <p className="text-md w-full px-4">
            React, Tailwind, Next.js Wordpress
          </p>
          <button
            className="px-9 py-2 w-fit bg-custom-blue rounded-full my-6 text-white/80 font-semibold min-w-[180px]"
            onClick={() => {
              setTab("projects");
            }}
          >
            View Projects
          </button>
        </div>
        <div className="flex flex-col items-center h-96 justify-between lg:max-w-[250px] text-center">
          <img
            src="/mobileDesign.png"
            alt="web design"
            className="invert opacity-90 w-24 h-24 object-cover relative left-2.5"
          />
          <p className="text-lg font-medium pt-4">App Development</p>
          <p className="text-md w-full px-4 py-2">I've built IOS apps using:</p>
          <p className="text-md w-full px-4">
            React-Native,
            <br />
            Stripe,
            <br />
            Tailwind
          </p>
          <button className="px-9 py-2 w-fit bg-custom-blue rounded-full my-6 text-white/80 font-semibold min-w-[180px]">
            See projects
          </button>
        </div>
        <div className="flex flex-col items-center h-96 justify-between lg:max-w-[250px] text-center">
          <img
            src="/uiDesign.png"
            alt="web design"
            className="invert opacity-[85%] w-20 h-20 mb-4 object-cover"
          />
          <p className="text-lg font-medium pt-4">UX/UI Design</p>
          <p className="text-md w-full px-4 max-w-[250px] py-2">
            I'm able to design websites and apps from scratch using:
          </p>
          <p className="text-md w-full px-4">
            Figma
            <br />
            Procreate
          </p>
          <a
            href="https://www.fiverr.com/kulbirsingh764/use-my-full-stack-web-developer-knowledge"
            target="_blank"
            className="px-9 py-2 w-fit bg-custom-blue rounded-full my-6 text-white/80 font-semibold min-w-[180px]"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
