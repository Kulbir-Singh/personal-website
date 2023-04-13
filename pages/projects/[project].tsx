import { useRouter } from "next/router";
import React from "react";
import Nav from "../../components/nav";
import Picture from "../../components/picture";

interface Project {
  title: string;
  stats: { title: string; imgSrc: string; alt: string }[];
  description: string;
  imgSrc: string;
  webPSrc: string;
}
const projects: Project[] = [
  {
    imgSrc: "./letsplit.png",
    webPSrc: "./letsplit.webp",
    title: "Let's Split",
    stats: [
      {
        title: "Collaborative Work",
        imgSrc: "./collab.svg",
        alt: "collab icon",
      },
      {
        title: "UI/UX Design",
        imgSrc: "./edit.svg",
        alt: "edit icon",
      },
      {
        title: "Figma to Code",
        imgSrc: "./figma.svg",
        alt: "figma icon",
      },
      {
        title: "Plaid integration",
        imgSrc: "./card.svg",
        alt: "card icon",
      },
    ],
    description:
      "Let's Split is an iOS app that enables users to split expenses with friends or family. Users can create a group, add members, and split bills for various activities, with the app calculating each person's share and sending payment requests.",
  },
  {
    imgSrc: "./vidamoraHero.png",
    title: "Vidamora",
    webPSrc: "./vidamoraHero.webp",
    stats: [
      {
        title: "Collaborative Work",
        imgSrc: "./collab.svg",
        alt: "collab icon",
      },
      {
        title: "UI/UX Design",
        imgSrc: "./edit.svg",
        alt: "edit icon",
      },
      {
        title: "Figma to Code",
        imgSrc: "./figma.svg",
        alt: "figma icon",
      },
      {
        title: "End to End Testing",
        imgSrc: "./card.svg",
        alt: "card icon",
      },
    ],
    description:
      "Vidamora.com is an online dating platform that provides a safe and inclusive space for people to connect and find meaningful relationships. With a focus on user-friendliness and advanced security features, users can easily create profiles, search for matches, and interact with other members.",
  },
  {
    imgSrc: "./chromehill.png",
    title: "Chromehill",
    webPSrc: "./chromehill.webp",
    stats: [
      {
        title: "UI/UX Design",
        imgSrc: "./edit.svg",
        alt: "edit icon",
      },
      {
        title: "Figma to Code",
        imgSrc: "./figma.svg",
        alt: "figma icon",
      },
      {
        title: "Seo Optimization",
        imgSrc: "./seo.svg",
        alt: "seo icon",
      },
    ],
    description:
      "I had the pleasure of creating the website for Chromehill Developments, a real estate investment and development company based in Montreal. I worked closely with the team to ensure that the website reflected their brand and values, and made it easy for potential clients and investors to learn more about their awesome projects and services.",
  },
];

export default function Project() {
  return (
    <main className="overflow-x-hidden text-custom-green-900 bg-custom-green-100">
      <div className="border-2">
        <div className="relative z-10 m-auto max-w-[1300px]">
          <Nav />
        </div>
        <div className="relative z-0 lg:flex lg:h-screen -top-[137px] lg:overflow-hidden bg-custom-green-900/80">
          <Picture
            src="../letsplit.png"
            alt=""
            className="lg:w-[35%] h-[500px] lg:h-full overflow-hidden brightness-[.85]"
          />
          <div className="lg:w-[65%] pt-[165px] relative h-full bg-custom-green-400 text-lg p-6">
            Let's Split is a powerful iOS app designed to help users manage
            their expenses easily and efficiently. With the app, users can
            create groups, add members, and split bills for various activities,
            such as dining out, traveling, or shopping, with the app calculating
            each person's share and sending payment requests. The app is
            designed with a user-friendly interface that allows for seamless
            navigation and ease of use.
          </div>
        </div>
      </div>
    </main>
  );
}
