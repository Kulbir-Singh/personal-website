import Head from "next/head";
import Picture from "../components/picture";
import Projects from "../components/projects";
import ImageAnimation from "../components/imageAnimation";
import Blogs from "../components/blogs";
import Nav from "../components/nav";
const tools = ["Tailwind", "Nextjs", "Figma", "React"];
const resources = [
  "SEO",
  "Google business management",
  "Shots",
  "Spline",
  "Framer",
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kulbir Singh</title>
        <meta name="description" content="Kulbir Singh - portfolio" />
      </Head>

      <main className="overflow-x-hidden text-custom-green-900 bg-custom-green-100">
        <section className="relative snap-section">
          <div className="w-full sm:flex">
            <ImageAnimation />
          </div>
          <div className="max-w-[1300px] m-auto relative h-screen flex flex-col items-center w-full z-10">
            <Nav />
            <div className="absolute w-[100px] top-[22%] h-[100px] rounded-full left-6 border border-custom-green-900 z-10" />
            <div className="absolute w-[200px] bottom-0 sm:bottom-[12%] h-[200px] rounded-full left-[25%] border border-custom-green-900 z-10 bg-custom-green-300/50" />
            <h1 className="lg:text-[7em] text-[3em] sm:text-[5em] font-thin m-auto -translate-y-40 -translate-x-10 lg:-translate-x-20 relative z-20">
              <span className="leading-[.9] uppercase block">website</span>
              <span className="leading-[.9] uppercase translate-x-[40%] block">
                Designer
              </span>
              <span className="leading-[.9] uppercase block">&DEVELOPER</span>
            </h1>
            <div className="absolute left-6 bottom-20 sm:bottom-12 w-fit">
              {"scroll".split("").map((letter, index) => {
                return (
                  <p
                    key={letter + index}
                    className="text-lg text-center sm:text-xl"
                  >
                    {letter}
                  </p>
                );
              })}
              <Picture
                src="./arrowDown.svg"
                className="w-fit pl-0.5 pt-4 animate-bounce"
                alt="down arrow"
              />
            </div>
          </div>
        </section>
        <Projects />
        <section className="max-w-[1300px] m-auto px-6 lg:pt-32 pt-20 snap-section md:flex justify-center">
          <div className="md:w-1/2">
            <div data-inviewport="slide-left">
              <div className="w-10 border border-custom-green-400" />
              <p className="pb-6 text-5xl font-thin tracking-wider lg:pb-0">
                About me
              </p>
            </div>
            <div
              className="overflow-hidden md:mr-6 rounded-3xl max-w-[500px] m-auto md:mx-0 lg:max-w-[600px] my-6"
              data-inviewport="slide-bottom"
            >
              <Picture
                src="./profile.PNG"
                className="h-full overflow-hidden scale-[1.02] "
                alt="profile picture"
              />
            </div>
          </div>

          <div
            className="flex flex-col justify-center text-lg md:w-1/2 md:pr-6"
            data-inviewport="slide-right"
          >
            <p>
              Hello my name is Kulbir Singh, and I am a full stack web developer
              from Montreal. I hold a diploma in web development from Concordia
              University and gained extensive experience in IOS apps, web apps,
              and UI/UX design at Carbonia. I am dedicated to providing
              exceptional web experiences while ensuring a standard of
              excellence in my work. With my expertise in building complex web
              applications from front-end to back-end, I provide innovative
              solutions for clients across industries.
            </p>
            <div className="text-lg">
              <p className="pt-6 text-xl">Tools I use:</p>
              <div className="flex flex-wrap -translate-x-1.5 py-1.5">
                {tools.map((tool) => {
                  return (
                    <div key={tool} className="p-3 px-1.5">
                      <p className="inline p-3 py-2 text-base shadow-md bg-custom-green-300">
                        {tool}
                      </p>
                    </div>
                  );
                })}
              </div>

              <p className="pt-3 text-xl">Useful resources:</p>
              <div className="flex flex-wrap -translate-x-1.5 py-1.5">
                {resources.map((tool) => {
                  return (
                    <div key={tool} className="p-3 px-1.5">
                      <p className="inline p-3 py-2 text-base shadow-md bg-custom-green-300">
                        {tool}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <Blogs />
        <section className="max-w-[1300px] m-auto px-6 lg:py-32 pt-20 snap-section lg:flex justify-center items-center">
          <p className="md:text-[90px] text-[50px] sm:text-[60px] uppercase text-center lg:text-right relative z-10 font-thin">
            LOOKING FOR opportunities
          </p>
          <div className="w-[400px] scale-75 sm:scale-100 h-[400px] md:w-[500px] md:min-w-[500px] overflow-hidden md:h-[500px] rounded-full border-2 -translate-x-4 lg:-translate-x-20 m-auto p-6 border-custom-green-400">
            <div className="relative flex items-center justify-center cursor-pointer w-full h-full rounded-full bg-custom-green-400 odd:[&>div]:hover:rotate-180 duration-[3000ms] odd:[&>div]:opacity-0 odd:[&>div]:hover:opacity-100">
              <div className="w-full h-full duration-[2500ms]">
                <Picture
                  src="./contactme.svg"
                  className="absolute top-[2px] w-full h-full opacity-50 left-2 md:left-[15px]"
                  alt="circular contact me icon"
                />
              </div>
              <Picture
                src="./mail.svg"
                alt="mail icon"
                className="absolute w-full p-24 md:p-40"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
