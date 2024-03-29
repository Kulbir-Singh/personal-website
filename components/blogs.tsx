import Link from "next/link";
import React, { useRef } from "react";
import Picture from "./picture";
import classNames from "../utils/twClassNames";
import { useInView, m, LazyMotion, domAnimation } from "framer-motion";

const BlogPosts = [
  {
    title: "Find ways to boost Your SEO with Official Google Tools",
    subtitle:
      "Are you tired of struggling to get your website to rank higher in search engine results? Look no further than Google's official SEO tools!",
    date: "20 Jan 2023",
    marker: "SEO",
    url: "/blogs/Seo",
    imgUrl: "../smallseo.jpg",
  },
  {
    title: "The Importance of Google Business Profile Management",
    subtitle:
      "In today's digital age, a strong online presence is essential for any business to thrive, and there's no better place to start than with Google Business Profile Management.",
    date: "10 Feb 2023",
    marker: "Google Business Profile",
    url: "/blogs/ProfileManagement",
    imgUrl: "../smallgpm.jpg",
  },
];
export default function Blogs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className="max-w-[1300px] m-auto px-6 lg:pt-32 pt-20"
      ref={ref}
      id="blogs"
    >
      <div>
        <div className="w-10 border border-custom-green-400" />
        <p className="pb-6 text-5xl font-thin tracking-wider lg:pb-0">Blogs</p>
        <p className="py-6 text-lg">
          As a web developer, I understand the importance of staying up-to-date
          with the latest trends and technologies.
        </p>
      </div>

      <LazyMotion features={domAnimation}>
        <m.div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {BlogPosts.map((blog, index) => {
            return (
              <Link key={blog.title} href={blog.url}>
                <m.div
                  style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,

                    transition: "all 0.85s ease-out " + `${0.25 * index + 1}s`,
                  }}
                >
                  <div className="posts duration-500 flex odd:[&>div>p]:hover:underline max-h-[450px] overflow-hidden m-auto md:max-w-full cursor-pointer w-full flex-col relative bg-custom-green-300 hover:bg-custom-green-400 ease-out">
                    <div className="relative overflow-hidden left-[.5px] sm:h-[200px]">
                      <Picture
                        src={blog.imgUrl}
                        alt="seo image"
                        className="w-full h-[250px]"
                      />
                      <div
                        className={classNames(
                          "text-custom-green-100",
                          "absolute z-10 flex justify-between w-full px-3 py-3 bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 bottom-[0px] "
                        )}
                      >
                        <p>{blog.date}</p>
                        <p>{blog.marker}</p>
                      </div>
                    </div>
                    <div className="sm:h-[250px] p-3 flex  flex-col sm:justify-between">
                      <p className="font-bold">{blog.title}</p>
                      <p className="my-3 overflow-hidden">{blog.subtitle}</p>
                      <div className="flex w-fit">
                        <p className="font-bold">Read Post</p>
                        <Picture
                          src="./arrowright.png"
                          alt="right arrow"
                          className="h-4 translate-x-2 translate-y-1 sm:h-3"
                        />
                      </div>
                    </div>
                  </div>
                </m.div>
              </Link>
            );
          })}
        </m.div>
      </LazyMotion>
    </section>
  );
}
