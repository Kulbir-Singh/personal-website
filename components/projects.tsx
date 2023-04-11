import React, { useEffect } from "react";
import Picture from "./picture";
import classNames from "../utils/twClassNames";
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
        title: "Figma to code",
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
        title: "Figma to code",
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
      "Vidamora.com is an online dating platform that provides a safe and inclusive space for people to connect and find meaningful relationships. With a focus on user-friendliness and advanced security features, users can easily create profiles, search for matches, and interact with other members.",
  },
  {
    imgSrc: "./chromehill.png",
    title: "Chromehill",
    webPSrc: "./chromehill.webp",
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
        title: "Figma to code",
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
      "I had the pleasure of creating the website for Chromehill Developments, a real estate investment and development company based in Montreal. I worked closely with the team to ensure that the website reflected their brand and values, and made it easy for potential clients and investors to learn more about their awesome projects and services.",
  },
];
export default function Projects() {
  const inViewport = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-inViewport");
        observer.unobserve(entry.target); // Disconnect the observer
      }
    });
  };

  useEffect(() => {
    const obsOptions = { threshold: 0.5 };
    const Obs = new IntersectionObserver(inViewport, obsOptions);

    const ELs_inViewport = document.querySelectorAll("[data-inviewport]");
    ELs_inViewport.forEach((EL) => {
      Obs.observe(EL);
    });

    return () => {
      ELs_inViewport.forEach((EL) => {
        Obs.unobserve(EL); // Disconnect all observed elements on unmount
      });
    };
  }, []);
  return (
    <section className="max-w-[1300px] m-auto px-6">
      <div className="pt-20 text-5xl font-thin tracking-wider lg:pt-60">
        <div className="w-10 border border-custom-green-400" />
        <p>Projects I've</p>
        <p>worked on</p>
      </div>
      {projects.map((project) => {
        return (
          <div key={project.title} className="pt-20 sm:pt-40 snap-section">
            <div className="md:flex">
              <div
                className="relative z-10 overflow-hidden md:w-1/2 rounded-3xl"
                data-inviewport="slide-bottom"
              >
                <Picture
                  src={project.imgSrc}
                  webPSrc={project.webPSrc}
                  alt=""
                  animate
                  className="object-cover h-full scale-[1.2]"
                />
              </div>
              <div
                className="relative pt-6 md:w-1/2 md:px-6 md:pt-0"
                data-inviewport="slide-right"
              >
                <div className="w-10 mb-3 border border-custom-green-400" />
                <ProjectDescription
                  title={project.title}
                  stats={project.stats}
                  description={project.description}
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

interface DescriptionProps {
  stats: { title: string; imgSrc: string; alt: string }[];
  title: string;
  description: string;
}

const ProjectDescription = ({
  title,
  stats,
  description,
}: DescriptionProps) => {
  return (
    <div>
      <p className="mb-1.5 text-3xl text-custom-green-900 tracking-wider">
        {title}
      </p>
      <div className="flex flex-wrap -translate-x-1.5">
        {stats.map((stat) => {
          return (
            <div key={stat.title} className="p-[6px] w-fit">
              <div className="flex items-center p-2.5 shadow-md bg-custom-green-300 w-fit">
                <Picture
                  src={stat.imgSrc}
                  alt={stat.alt}
                  className={classNames(
                    stat.imgSrc.includes("figma") ? "p-1" : "",
                    "w-5 mr-2"
                  )}
                />
                <p>{stat.title}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="pt-6 pb-1.5 text-lg">{description}</p>
      <div className="flex relative mt-3 items-center justify-center overflow-hidden p-3 text-2xl duration-200 cursor-pointer w-fit bg-custom-green-300 odd:[&>div]:hover:translate-x-[150%] even:[&>div]:hover:translate-x-[150%]">
        <p className="relative z-20 text-[20px] bg-custom-green-300">
          View Project
        </p>
        <Picture
          src="./arrow.svg"
          alt="arrow icon"
          className="absolute pt-1 ml-3 duration-1000 h-fit"
        />
        <Picture
          src="./arrow.svg"
          alt="arrow icon"
          className="pt-1 ml-3 duration-1000 h-fit"
        />
      </div>
    </div>
  );
};
