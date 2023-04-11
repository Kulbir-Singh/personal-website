import React from "react";

import Picture from "../../components/picture";
import Nav from "../../components/nav";
import Link from "next/link";

interface List {
  title: string;
  description: string;
}

const seoToolList: List[] = [
  {
    title: "Google My Business",
    description:
      "This is a free tool that allows businesses to manage their online presence across Google, including Search and Maps. With Google My Business, businesses can update their profile information, respond to reviews, and post updates.",
  },
  {
    title: "Google Posts",
    description:
      "This feature allows businesses to publish content directly to their Google Business Profile. Businesses can use Google Posts to share news, promotions, events, and other updates.",
  },
  {
    title: "Google Reviews",
    description:
      "Reviews play a crucial role in a business's online reputation. Google Reviews allow customers to leave feedback about their experiences with a business. Businesses can respond to reviews to show customers that they value their feedback.",
  },
  {
    title: "Google Q&A",
    description:
      "This feature allows customers to ask questions directly on a business's Google Business Profile. Businesses can use Google Q&A to provide helpful information to potential customers.",
  },
  {
    title: "Google Messaging",
    description:
      "This feature allows businesses to communicate with customers directly through their Google Business Profile. Businesses can use Google Messaging to answer questions, schedule appointments, and provide customer support.",
  },
  {
    title: "Google Insights",
    description:
      "This feature provides businesses with data about how customers are interacting with their Google Business Profile. Businesses can use Google Insights to understand which search queries are driving traffic to their profile, how customers are finding them, and how they compare to similar businesses.",
  },
];

export default function ProfileManagement() {
  return (
    <main className="overflow-x-hidden text-custom-green-900 bg-custom-green-100">
      <div className="max-w-[1300px] m-auto">
        <Nav />
        <div className="px-6">
          <p className="w-1/2 pt-20 m-auto text-xl font-bold text-center sm:w-full">
            Google Business Profile Management
          </p>
          <h1 className="text-[3em] sm:text-[4em] font-thin m-auto text-center leading-[1] max-w-[700px] pt-6">
            The Importance of Google Business Profile Management
          </h1>
          <p className=" max-w-[700px] text-center m-auto py-6 text-lg">
            In today&apos;s digital age, a strong online presence is essential
            for any business to thrive, and there&apos;s no better place to
            start than with Google Business Profile Management.
          </p>
        </div>
        <div className="flex m-auto mb-12 w-fit">
          <Picture
            src="../smallkulbirProfilePicture.jpg"
            alt="seo image"
            className="w-16 overflow-hidden rounded-full"
          />
          <div className="flex flex-col justify-center">
            <p className="pl-3 font-bold">Kublir Singh</p>
            <p className="pl-3">10 February 2023</p>
          </div>
        </div>
        <Picture
          src="../gpm.jpg"
          alt="seo image"
          className="h-[550px] m-auto mb-12 max-w-[900px] overflow-hidden"
        />
        <div className="px-6 max-w-[900px] m-auto text-lg">
          <p className="py-6 m-auto border-y border-custom-green-400">
            Google Business Profile Management, also known as Google My
            Business, is a free tool that allows businesses to manage their
            online presence across Google, including search and maps. This tool
            can help businesses increase their visibility and attract more
            customers, making it an essential part of any digital marketing
            strategy.
          </p>
          <div className="py-6">
            {seoToolList.map((toolItem, index) => {
              return (
                <div key={toolItem.title} className="py-1.5">
                  <p className="font-semibold">{toolItem.title}</p>

                  <p className="py-1.5 pl-4 text-base">
                    {toolItem.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div>
            <Link
              passHref
              href="https://www.google.ca/intl/en/business/?ppsrc=GMBLR&hl=en&gmbsrc=ca-en-et-gs-z-gmb-l-z-h~my%7Credirect%7Cu&utm_campaign=ca-en-et-gs-z-gmb-l-z-h~my%7Credirect%7Cu&utm_source=gmb&utm_medium=et"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline duration-200 text-custom-green-900 hover:text-custom-green-900/50"
              >
                Google My Business
              </a>
            </Link>{" "}
            <p className="inline">
              also provides valuable insights into how customers are finding and
              interacting with your business. You can see how many people have
              viewed your profile, how many have clicked through to your
              website, and even how many have called your business directly from
              the listing. This data can be used to refine your marketing
              strategy and make informed decisions about your business.
            </p>
          </div>
          <p className="py-6">
            In conclusion, Google Business Profile Management is a powerful tool
            for businesses looking to improve their online presence and attract
            more customers. By optimizing your listing and utilizing its
            features, you can increase your visibility, improve your search
            rankings, and build strong relationships with your audience.
          </p>
        </div>
      </div>
    </main>
  );
}
