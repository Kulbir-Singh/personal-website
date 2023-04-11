import React from "react";
import Picture from "../../components/picture";
import Nav from "../../components/nav";
import Link from "next/link";

interface List {
  title: string;
  description: string;
  listTitle: string;
  list: string[];
  url: string;
}

const seoToolList: List[] = [
  {
    title: "Google Search Console",
    description:
      "Google Search Console is a free web service provided by Google that helps you monitor and maintain your website's presence in Google search results. With Search Console, you can track your website's performance, see which search queries are driving traffic to your site, and even troubleshoot issues with your site's indexing and crawling.",
    listTitle: "Using Google Search Console, you can:",
    list: [
      "Monitor your site's performance in Google search results",
      "Check for crawl errors and other issues that may affect your site's indexing",
      "Identify the keywords and phrases that are driving traffic to your site",
      "Monitor your backlink profile and identify any potentially harmful links",
    ],
    url: "https://search.google.com/search-console/about",
  },
  {
    title: "Google Analytics",
    description:
      "Google Analytics is a free web analytics service offered by Google that tracks and reports website traffic. By using Google Analytics, you can track user behavior on your website, including how users find your site, what pages they visit, and how long they stay on your site.",
    listTitle: "Using Google Analytics, you can:",
    list: [
      "Track user behavior on your site",
      "Identify the sources of traffic to your site",
      "Measure the effectiveness of your SEO and marketing campaigns",
      "Identify your site's top-performing pages",
    ],
    url: "https://analytics.google.com/",
  },
  {
    title: "Google Keyword Planner",
    description:
      "Google Keyword Planner is a free tool provided by Google that helps you find the right keywords for your SEO and PPC campaigns. With Keyword Planner, you can identify the keywords and phrases that your potential customers are using to search for products and services like yours.",
    listTitle: "Using Google Keyword Planner, you can:",
    list: [
      "Find new keywords for your SEO and PPC campaigns",
      "Identify the search volume and competition for each keyword",
      "Analyze the performance of your keywords over time",
      "Get ideas for new content based on the keywords your customers are searching for",
    ],
    url: "https://developers.google.com/speed/pagespeed/insights/",
  },
  {
    title: "Google PageSpeed Insights",
    description:
      "Google PageSpeed Insights is a free tool provided by Google that analyzes the performance of your website on both desktop and mobile devices. With PageSpeed Insights, you can identify the issues that are slowing down your website and get suggestions for how to improve your site's speed and performance.",
    listTitle: "Using Google PageSpeed Insights, you can:",
    list: [
      "Identify issues that are slowing down your website",
      "Get suggestions for how to improve your site's speed and performance",
      "Analyze the performance of your website on both desktop and mobile devices",
    ],
    url: "https://ads.google.com/home/tools/keyword-planner/",
  },
];

export default function Seo() {
  return (
    <main className="overflow-x-hidden text-custom-green-900 bg-custom-green-100">
      <div className="max-w-[1300px] m-auto">
        <Nav />
        <p className="pt-20 text-xl font-bold text-center">Seo</p>
        <h1 className="text-[3em] sm:text-[4em] font-thin m-auto text-center leading-[1] max-w-[700px] pt-6">
          Boost Your SEO with Official Google Tools
        </h1>
        <p className=" max-w-[700px] text-center m-auto py-6 text-lg">
          Are you tired of struggling to get your website to rank higher in
          search engine results? Look no further than Google's official SEO
          tools!{" "}
        </p>
        <div className="flex m-auto mb-12 w-fit">
          <Picture
            src="../smallkulbirProfilePicture.jpg"
            alt="seo image"
            className="w-16 overflow-hidden rounded-full"
          />
          <div className="flex flex-col justify-center">
            <p className="pl-3 font-bold">Kublir Singh</p>
            <p className="pl-3">20 Jan 2023</p>
          </div>
        </div>
        <Picture
          src="../seo.jpg"
          alt="seo image"
          className="h-[550px] w-3/4 m-auto mb-12"
        />
        <div className="px-6 max-w-[900px] m-auto text-lg">
          <p className="py-6 m-auto border-y border-custom-green-400">
            Search Engine Optimization (SEO) is a critical component of any
            online marketing strategy. With the majority of online traffic
            coming from search engines, it's important to ensure your website is
            optimized for maximum visibility. Thankfully, Google offers a suite
            of powerful tools to help you improve your SEO efforts. In this
            post, we'll explore some of these tools and how you can use them to
            boost your website's SEO.
          </p>
          <div className="py-6">
            {seoToolList.map((toolItem, index) => {
              return (
                <div key={toolItem.listTitle} className="py-3">
                  <Link href={toolItem.url} passHref>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      className="font-semibold cursor-pointer"
                    >
                      {index + 1 + ". "}
                      <span className="underline duration-200 text-custom-green-900/70 hover:text-custom-green-400">
                        {toolItem.title}
                      </span>
                    </a>
                  </Link>
                  <p className="py-3 pl-4 text-base">{toolItem.description}</p>
                  <p className="pl-4">{toolItem.listTitle}</p>
                  <ul className="list-item pt-1.5 pl-1">
                    {toolItem.list.map((item) => {
                      return (
                        <li key={item} className="text-base">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <p>
            By using these official Google tools, you can improve your website's
            SEO and ensure that your site is optimized for maximum visibility in
            search engine results. Additionally, you can use other third-party
            tools like the Neil Patel SEO Analyzer to further analyze your
            website's SEO and get suggestions for improvement.
          </p>
          <p className="py-6">
            In conclusion, SEO is critical for online success, and Google offers
            a suite of powerful tools to help you improve your SEO efforts. By
            using tools like Google Search Console, Google Analytics, Google
            Keyword Planner, and Google PageSpeed Insights, you can identify the
            issues that are affecting your site's SEO and take steps to improve
            your site's visibility in search engine results. For even more
            in-depth analysis, you can also use third-party tools like the Neil
            Patel SEO Analyzer. Start using these tools today to improve your
            SEO and drive more traffic to your website.
          </p>
        </div>
      </div>
    </main>
  );
}
