import React from "react";

import Script from "next/script";

export default function Contact() {
  return (
    <div
      className="px-12 relative flex lg:flex-col xl:flex-row w-full h-full items-center z-0 text-white/80 bg-white/[.05] lg:absolute lg:opacity-0 duration-1000"
      id="section5"
    >
      <p className="text-[120px] lg:text-[170px] leading-[150px] z-0 absolute top-6 left-6 h-full opacity-[15%] font-serif">
        Get in <br />
        <span className="relative sm:left-24">Touch</span>
      </p>
      <div className="w-full h-fit py-12 px-6 sm:px-12 bg-black/70 max-w-[900px] rounded-md z-20">
        <p className="text-5xl fon">Get in Touch</p>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="flex flex-col space-y-10"
        >
          <input
            type="hidden"
            name="access_key"
            value="374a7f5c-b4fe-410e-8a40-8c35ebf28ab2"
          />
          <input
            className="border-b-2 bg-transparent max-w-[600px] w-full h-12 text-xl placeholder:text-white/50 placeholder:text-2xl placeholder:font-serif outline-none"
            placeholder="Name"
            type="text"
            name="name"
            required
          />
          <input
            className="border-b-2 bg-transparent max-w-[600px] w-full h-12 text-xl placeholder:text-white/50 placeholder:text-2xl placeholder:font-serif outline-none"
            placeholder="Email"
            type="email"
            name="email"
            required
          />
          <textarea
            className="border-b-2 resize-none bg-transparent max-w-[600px] w-full text-xl placeholder:text-white/50 placeholder:text-2xl placeholder:font-serif outline-none"
            placeholder="Message"
            rows={7}
            name="message"
            required
          ></textarea>
          <input
            type="hidden"
            name="redirect"
            value="https://singhkulbir.com"
          />
          <button
            type="submit"
            className="text-3xl border-[1.5px] rounded-xl w-fit px-12 py-3 duration-700 bg-black hover:bg-white/20"
          >
            Submit
          </button>
          <div class="h-captcha" data-captcha="true"></div>
        </form>
        <Script
          src="https://web3forms.com/client/script.js"
          async
          defer
        ></Script>
      </div>
    </div>
  );
}
