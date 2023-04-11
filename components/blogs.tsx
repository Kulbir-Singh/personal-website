import Link from "next/link";
import React from "react";
import Picture from "./picture";

export default function Blogs() {
  return (
    <section className="max-w-[1300px] m-auto px-6 lg:pt-32 pt-20 snap-section">
      <div className="w-10 border border-custom-green-400" />
      <p className="pb-6 text-5xl font-thin tracking-wider lg:pb-0">Blogs</p>
      <p className="py-6 text-lg">
        As a web developer, I understand the importance of staying up-to-date
        with the latest trends and technologies.
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Link href="/blogs/Seo">
          <div className="flex odd:[&>div>p]:hover:underline overflow-hidden max-w-[350px] m-auto md:max-w-full cursor-pointer w-full flex-col relative bg-custom-green-300 hover:bg-custom-green-400 duration-500 ease-outs">
            <div className="relative overflow-hidden left-[.5px]">
              <Picture
                src="../seo.jpg"
                alt="seo image"
                className="w-full h-[250px]"
              />
              <div className="absolute z-10 flex justify-between w-full px-3 py-3 text-custom-green-100 bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 bottom-[0px] ">
                <p>20 Jan 2023</p>
                <p>SEO</p>
              </div>
            </div>
            <div className="p-3">
              <p className="pt-3 font-bold">
                Find ways to boost Your SEO with Official Google Tools
              </p>

              <p className="pb-3">
                Are you tired of struggling to get your website to rank higher
                in search engine results? Look no further than Google's official
                SEO tools!
              </p>
              <div className="flex w-fit">
                <p className="font-bold">Read Post</p>
                <Picture
                  src="./arrowright.svg"
                  alt="right arrow"
                  className="h-3 translate-x-2 translate-y-1"
                />
              </div>
            </div>
          </div>
        </Link>
        <Link href="/blogs/Seo">
          <div className="flex odd:[&>div>p]:hover:underline max-w-[350px] m-auto md:max-w-full overflow-hidden cursor-pointer w-full flex-col relative bg-custom-green-300 hover:bg-custom-green-400 duration-500 ease-outs">
            <div className="relative overflow-hidden left-[.5px]">
              <Picture
                src="../seo.jpg"
                alt="seo image"
                className="w-full h-[250px]"
              />
              <div className="absolute z-10 flex justify-between w-full px-3 py-3 text-custom-green-100 bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 bottom-[0px] ">
                <p>20 Jan 2023</p>
                <p>SEO</p>
              </div>
            </div>
            <div className="p-3">
              <p className="pt-3 font-bold">
                Find ways to boost Your SEO with Official Google Tools
              </p>

              <p className="pb-3">
                Are you tired of struggling to get your website to rank higher
                in search engine results? Look no further than Google's official
                SEO tools!
              </p>
              <div className="flex w-fit">
                <p className="font-bold">Read Post</p>
                <Picture
                  src="./arrowright.svg"
                  alt="right arrow"
                  className="h-3 translate-x-2 translate-y-1"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
