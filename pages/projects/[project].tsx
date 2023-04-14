import { useRouter } from "next/router";
import React from "react";
import Nav from "../../components/nav";
import Picture from "../../components/picture";

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
    imgSrc: "../letsplit.png",
    webPSrc: "../letsplit.webp",
    title: "Vidamora",
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
    imgSrc: "../letsplit.png",
    webPSrc: "../letsplit.webp",
    title: "Chromehill",
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
];

export default function Project() {
  const route = useRouter();
  const { project } = route.query;

  const currentProject = projects.filter(
    (projec) => projec.title == project
  )[0];
  return (
    <main className="overflow-x-hidden text-custom-green-900 bg-custom-green-100">
      {currentProject && (
        <div className="">
          <div className="relative z-10 m-auto max-w-[1300px] h-full">
            <Nav />
          </div>
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
      )}
    </main>
  );
}
