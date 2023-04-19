import { useRouter } from "next/router";
import React from "react";
import Nav from "../../components/nav";
import Picture from "../../components/picture";
import Projects from "../../components/projects";
import Link from "next/link";

interface Project {
  title: string;
  tools: { title: string; description: string }[];
  description: string;
  imgSrc: string;
  webPSrc: string;
  alt: string;
  toolsDescription: string;
  conclusion: string;
}
const projects: Project[] = [
  {
    imgSrc: "../letsplit.png",
    webPSrc: "../letsplit.webp",
    title: "Let's Split",
    toolsDescription:
      "Throughout the development of the Let's Split app, I utilized various tools to create a functional and user-friendly mobile application. These tools included:",
    conclusion:
      "With these tools, I was able to create an app with various features, such as splitting bills and transferring money between users. By utilizing these tools, I streamlined the app's development process and helped to enhance user experience and satisfaction with the app.",
    tools: [
      {
        description:
          "As part of the project to build Let's Split, which is based on Expo, a React-Native framework, I was given the responsibility to learn and apply React-Native skills to develop a complete product. During the course of the project, I acquired knowledge on how to leverage Expo's pre-built features such as accessing the user's contact list, utilizing Face ID, and managing data using local storage.",
        title: "React-Native",
      },
      {
        description:
          "I added Plaid into the app by starting the initial integration process and ensuring that it was functioning as expected. This involved writing code to handle the Plaid API, including authentication, tokenization, and data retrieval.",
        title: "Plaid",
      },
      {
        description:
          "I successfully integrated Stripe into the Let's Split app and added a feature that allowed users to transfer money between other Let's Split users. Additionally, I worked on a custom transfer flow within the app to enable users to transfer money between each other seamlessly.",
        title: "Stripe",
      },
      {
        description:
          "I utilized styled-components to create a consistent and cohesive design system across the app. By creating reusable components with styled-components, I was able to efficiently style the app's UI and ensure a consistent look and feel. I used props and styled-system to make the components flexible and customizable, enabling me to easily modify the design as needed.",
        title: "Styled-components",
      },
      {
        description:
          "I successfully transformed the Figma design into a fully functioning app by using it as a blueprint to build the app's user interface in React-Native. During this process, I made adjustments to the design to ensure it translated well into a mobile context, such as optimizing images, adjusting layout for smaller screens, and improving readability.",
        title: "Figma",
      },
    ],
    alt: "let's split image",
    description:
      "Let's Split is a powerful iOS app designed to help users manage their expenses easily and efficiently. With the app, users can create groups, add members, and split bills for various activities, such as dining out, traveling, or shopping, with the app calculating each person's share and sending payment requests. The app is designed with a user-friendly interface that allows for seamless navigation and ease of use. In terms of UI/UX design, I have played a role in creating an intuitive and user-friendly interface that allows for easy navigation and a smooth user experience. I have also collaborated closely with other members of the development team to ensure that the app meet the needs of our users.",
  },
  {
    imgSrc: "../vidamoraHero.png",
    webPSrc: "../vidamoraHero.webp",
    title: "Vidamora",
    toolsDescription:
      "During the course of developing the Vidamora website, I employed a range of tools to create a highly functional and user-friendly online platform. These tools included:",
    conclusion:
      "By leveraging these tools, I developed a range of features for the Vidamora website, including the ability to update user profiles, search for matches, and communicate with other users. Through this streamlined development process, I helped to improve the overall user experience and satisfaction with the platform.",
    tools: [
      {
        description:
          "As part of the project to build Vidamora, I utilized Next.js as the main JavaScript library to create dynamic user interfaces. I also made use of React Context to manage the app's state and keep track of user information.",
        title: "Next.js",
      },
      {
        description:
          "I utilized Tailwind to speed up the development process and create a consistent design system across the app. By using pre-built CSS utility classes, I was able to easily style the app's UI and ensure a cohesive look and feel. I also added custom classes to tailwind to add additional styling where needed.",
        title: "Tailwind",
      },
      {
        description:
          "I successfully transformed the Figma design into a fully functioning app by using it as a blueprint to build components for the project. During this process, I made adjustments to the design to ensure it translated well into a mobile context, such as optimizing images, adjusting layout for smaller screens, and making the design responsive.",
        title: "Figma",
      },
      {
        description:
          "I wrote end-to-end tests using Cypress to ensure that the app's functionality was working as expected. This involved writing tests for different user scenarios, such as creating a profile, searching for matches, and sending messages.",
        title: "End-to-End Testing",
      },
    ],
    alt: "vidamora image",
    description:
      "Vidamora is a dating website designed to help users find meaningful connections and relationships. The website offers a variety of features to help users find potential matches, including search filters, personality tests, and messaging capabilities. I played a role in creating an intuitive and user-friendly interface that allows for seamless navigation and ease of use. Additionally, I collaborated closely with other members of the development team to ensure that the website met the needs of our users.",
  },
  {
    imgSrc: "../chromehill.png",
    webPSrc: "../chromehill.webp",
    title: "Chromehill",
    toolsDescription:
      "Throughout the development of the Chromehill, I utilized various tools to create a functional and user-friendly mobile application. These tools included:",
    conclusion:
      "With these tools, I was able to create an app with various features, such as splitting bills and transferring money between users. By utilizing these tools, I streamlined the app's development process and helped to enhance user experience and satisfaction with the app.",
    tools: [
      {
        description:
          "As part of the project to build ChromeHill, I used Next.js, a React-based framework, to build the website's front-end. By leveraging the capabilities of Next.js, I was able to optimize the website for performance and SEO, and create a responsive and mobile-friendly design.",
        title: "Next.js",
      },
      {
        description:
          "To manage the website's content, I integrated Sanity.io, a headless CMS, into the website's back-end. By using Sanity.io, I was able to create a custom content model for the website's content, making it easy for the client to manage and update their content as needed.",
        title: "Sanity.io",
      },
      {
        description:
          "I deployed the website using Netlify, a cloud-based hosting platform that allowed me to easily deploy and manage the website. By using Netlify, I was able to set up a continuous deployment workflow, enabling the website to automatically update whenever changes were made to the codebase.",
        title: "Netlify",
      },
      {
        description:
          "I utilized Tailwind to create a consistent and cohesive design system across the website. By using Tailwind's utility classes, I was able to style the website's UI with ease and ensure a consistent look and feel throughout.",
        title: "Tailwind",
      },
      {
        description:
          "I used Figma to create the website's design, providing a blueprint for the development process to the client. This allowed me to easily translate the design into code, ensuring that the website's UI matched the client's vision.",
        title: "Figma",
      },
    ],
    alt: "chrome hill image",
    description:
      "I had the pleasure of creating the website for Chromehill Developments, a real estate investment and development company based in Montreal. I worked closely with the team to ensure that the website reflected their brand and values, and made it easy for potential clients and investors to learn more about their awesome projects and services. As a freelance developer, I created chromehill.ca, a responsive website designed to showcase the client's work in a user-friendly and visually appealing way. I took on the responsibility of designing the website's UI/UX, ensuring that it was easy to navigate and provided a seamless user experience.",
  },
];

export default function Project() {
  const route = useRouter();
  const { project } = route.query;

  const currentProject = projects.filter(
    (projec) => projec.title == project
  )[0];
  return (
    <main className="overflow-x-hidden text-custom-green-900 bg-custom-green-100">
      {currentProject ? (
        <div className="">
          <div className="relative z-10 m-auto max-w-[1300px] h-full">
            <Nav />
          </div>
          <Link href="/">
            <div className="cursor-pointer max-w-[1300px] m-auto px-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225L16 22Z"
                />
              </svg>
            </div>
          </Link>
          <div className="m-auto max-w-[900px]">
            <h1 className="text-[3em] sm:text-[4em] font-thin m-auto text-center leading-[1] max-w-[700px] py-6">
              {project}
            </h1>
            <Picture
              src={currentProject.imgSrc}
              alt={currentProject.alt}
              webPSrc={currentProject.webPSrc}
              className="overflow-hidden brightness-[.85] m-auto w-full max-w-[700px]"
            />
            <div className="relative h-full p-6 text-lg w-fit ">
              <div className="w-10 mt-6 border border-custom-green-400" />
              <p className="pb-3 text-xl font-semibold">Project Description:</p>
              <p>{currentProject.description}</p>
              <div className="w-10 mt-6 border border-custom-green-400" />
              <p className="text-xl font-semibold">Tools:</p>
              <p>{currentProject.toolsDescription}</p>
              {currentProject.tools.map((tool) => {
                return (
                  <div key={tool.title} className="px-3">
                    <p className="pt-3 font-semibold">{tool.title}</p>
                    <p className="px-3 pb-3">{tool.description}</p>
                  </div>
                );
              })}
              <p>{currentProject.conclusion}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="relative z-10 m-auto max-w-[1300px] h-full">
            <Nav />
          </div>
          <h1 className="text-[3em] sm:text-[4em] font-thin m-auto text-center leading-[1] max-w-[700px] pt-12 lg:pt-40 px-6">
            Oops... like this project doesn&apos;t exist
          </h1>
          <p className="text-[2em] text-2xl text-center pt-6 lg:pb-16 lg:pt-12 font-thin">
            Here are some other projects
          </p>
          <div className="px-3 pb-20">
            <Projects />
          </div>
        </div>
      )}
    </main>
  );
}
